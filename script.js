// ... Firebase config/initialization and map setup remain the same ...

const markerImageInput = document.getElementById('markerImageInput');

function enterMode(selectedType) {
  mode = selectedType;
  dangerBtn.disabled = crashBtn.disabled = true;
  cancelBtn.style.display = '';
  if (dragMarker) {
    map.removeLayer(dragMarker);
    dragMarker = null;
  }

  map.once('click', (e) => {
    let icon = mode === 'danger' ? dangerIcon : crashIcon;
    dragMarker = L.marker(e.latlng, {icon, draggable: true, autoPan: true}).addTo(map);
    dragMarker.bindPopup("Drag to the correct spot and enter details.").openPopup();

    let prompted = false;

    async function promptAndSaveMarker() {
      if (prompted) return;
      prompted = true;
      dragMarker.closePopup();

      let description = prompt('Short description (optional):');
      if (description === null) { exitMode(); return; }
      let user = prompt('Your name or nickname (optional):');
      if (user === null) { exitMode(); return; }

      // Ask if the user wants to add an image
      if (confirm("Do you want to add a photo? (optional)")) {
        markerImageInput.value = ""; // Clear previous selection
        markerImageInput.onchange = async function () {
          let imageUrl = "";
          if (markerImageInput.files && markerImageInput.files[0]) {
            const file = markerImageInput.files[0];
            const storageRef = storage.ref();
            const imageRef = storageRef.child('markerImages/' + Date.now() + '_' + file.name);
            try {
              await imageRef.put(file);
              imageUrl = await imageRef.getDownloadURL();
            } catch (e) {
              alert("Image upload failed. Saving marker without image.");
            }
          }
          saveMarkerToFirebase(description, user, imageUrl);
        };
        markerImageInput.click();

        // If user cancels file picker, still save marker (without image)
        markerImageInput.onblur = function () {
          setTimeout(() => {
            if (!markerImageInput.value) {
              saveMarkerToFirebase(description, user, "");
            }
          }, 500);
        };
      } else {
        // User doesn't want to add image
        saveMarkerToFirebase(description, user, "");
      }
    }

    dragMarker.on('dragend', promptAndSaveMarker);
    setTimeout(promptAndSaveMarker, 500);
  });
}

// ... rest of your code (exitMode, saveMarkerToFirebase, addMarkerToFirebase, etc.) remain unchanged ...