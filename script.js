// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyBZpC4zW0PJymXXpJdnlZhn2BLuYk9iT-U",
  authDomain: "santa-maria-ca.firebaseapp.com",
  databaseURL: "https://santa-maria-ca-default-rtdb.firebaseio.com",
  projectId: "santa-maria-ca",
  storageBucket: "santa-maria-ca.appspot.com",
  messagingSenderId: "22571427607",
  appId: "1:22571427607:web:a02a7ebf84e8695facf952",
  measurementId: "G-SZLE94KPP8"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --- MAP INITIALIZATION ---
const santaMariaCoords = [34.9530, -120.4357];
const map = L.map('map').setView(santaMariaCoords, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Rotatable marker icon using SVG wrapper
function getRotatedIcon(type, rotationDeg = 0) {
  const iconUrl = type === 'danger'
    ? 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/26a0.svg'
    : 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f698.svg';
  return L.divIcon({
    className: "",
    html: `<div style="transform:rotate(${rotationDeg}deg);width:38px;height:38px;display:flex;align-items:center;justify-content:center;">
             <img src="${iconUrl}" style="width:38px;height:38px;">
           </div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38]
  });
}

let mode = null; // null | 'danger' | 'crash'
let dragMarker = null;
let markerLayers = {}; // Firebase marker key -> Leaflet Marker

const dangerBtn = document.getElementById('dangerModeBtn');
const crashBtn = document.getElementById('crashModeBtn');
const cancelBtn = document.getElementById('cancelModeBtn');

let deviceHeading = 0; // Default to 0 if unavailable
let watchPositionId = null;
let headingListenerActive = false;

// --- Device Orientation Setup ---
function setupDeviceOrientationListener() {
  if (headingListenerActive) return;
  headingListenerActive = true;

  function handleDeviceOrientation(event) {
    if (typeof event.alpha === 'number') {
      // Use alpha as compass heading (0=N, 90=E, 180=S, 270=W)
      deviceHeading = 360 - event.alpha;
    }
  }

  if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function') {
    // iOS 13+ requires permission
    window.DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          window.addEventListener('deviceorientationabsolute', handleDeviceOrientation, true);
          window.addEventListener('deviceorientation', handleDeviceOrientation, true);
        }
      }).catch(console.error);
  } else {
    window.addEventListener('deviceorientationabsolute', handleDeviceOrientation, true);
    window.addEventListener('deviceorientation', handleDeviceOrientation, true);
  }
}

// --- UI BUTTONS FOR ADDING MARKERS ---
function enterMode(selectedType) {
  mode = selectedType;
  dangerBtn.disabled = crashBtn.disabled = true;
  cancelBtn.style.display = '';

  if (dragMarker) {
    map.removeLayer(dragMarker);
    dragMarker = null;
  }

  setupDeviceOrientationListener();

  // Get real-time user location and heading
  if ("geolocation" in navigator) {
    let latestLatLng = null;
    let latestHeading = deviceHeading;

    function updateMarkerPosition(pos) {
      latestLatLng = [pos.coords.latitude, pos.coords.longitude];
      map.setView(latestLatLng, 17, { animate: true });

      if (!dragMarker) {
        dragMarker = L.marker(latestLatLng, {
          icon: getRotatedIcon(mode, latestHeading),
          draggable: false,
          autoPan: true
        }).addTo(map);
        dragMarker.bindPopup("Your live location. Tap 'Cancel' to stop and save.").openPopup();
      } else {
        dragMarker.setLatLng(latestLatLng);
      }
      // Always update icon rotation to latest heading
      dragMarker.setIcon(getRotatedIcon(mode, latestHeading));
    }

    // Watch position and update marker in real-time
    watchPositionId = navigator.geolocation.watchPosition(
      updateMarkerPosition,
      (err) => {
        alert("Couldn't get your position. Please allow location access.");
        exitMode();
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 }
    );

    // Also update marker heading in real-time
    function updateMarkerHeading() {
      latestHeading = deviceHeading;
      if (dragMarker) {
        dragMarker.setIcon(getRotatedIcon(mode, latestHeading));
      }
      requestAnimationFrame(updateMarkerHeading);
    }
    updateMarkerHeading();

    // When user cancels, prompt for info and save
    cancelBtn.onclick = function() {
      // Stop watching location
      if (watchPositionId !== null) {
        navigator.geolocation.clearWatch(watchPositionId);
        watchPositionId = null;
      }
      // Prompt for info and save if marker exists
      if (dragMarker && latestLatLng) {
        let description = prompt('Short description (optional):');
        if (description === null) { exitMode(); return; } // User cancelled
        let user = prompt('Your name or nickname (optional):');
        if (user === null) { exitMode(); return; } // User cancelled

        let timestamp = new Date().toISOString();
        let marker = {
          lat: latestLatLng[0],
          lng: latestLatLng[1],
          type: mode,
          description: description || '',
          user: user || '',
          heading: latestHeading,
          timestamp
        };
        addMarkerToFirebase(marker);
      }
      exitMode();
    };

  } else {
    alert("Geolocation not available on this device/browser.");
    exitMode();
  }
}

function exitMode() {
  mode = null;
  dangerBtn.disabled = crashBtn.disabled = false;
  cancelBtn.style.display = 'none';
  if (dragMarker) {
    map.removeLayer(dragMarker);
    dragMarker = null;
  }
  if (watchPositionId !== null) {
    navigator.geolocation.clearWatch(watchPositionId);
    watchPositionId = null;
  }
  cancelBtn.onclick = exitMode;
}

// --- FIREBASE FUNCTIONS ---
function addMarkerToFirebase(marker) {
  db.ref('markers').push(marker);
}

function removeAllMarkersFromFirebase() {
  db.ref('markers').remove();
}

function listenToMarkers() {
  db.ref('markers').on('value', (snapshot) => {
    Object.values(markerLayers).forEach(marker => map.removeLayer(marker));
    markerLayers = {};
    const markers = snapshot.val() || {};
    Object.entries(markers).forEach(([key, marker]) => {
      markerLayers[key] = addMarkerToMap(marker);
    });
  });
}

// --- MAP MARKER DISPLAY ---
function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString();
}

function addMarkerToMap({lat, lng, type, description, user, heading, timestamp}) {
  let rotation = typeof heading === 'number' ? heading : 0;
  let icon = getRotatedIcon(type, rotation);
  let label = type === 'danger' ? '⚠️ Danger' : '🚗 Crash';
  let html = `<b>${label}</b><br>`;
  if (description) html += `<i>${description}</i><br>`;
  if (user) html += `By: <b>${user}</b><br>`;
  if (timestamp) html += `<span style="font-size:0.85em;color:gray;">${fmtDate(timestamp)}</span>`;
  if (typeof heading === 'number') html += `<br><span style="font-size:0.8em;color:gray;">Heading: ${Math.round(rotation)}°</span>`;
  return L.marker([lat, lng], {icon}).addTo(map).bindPopup(html);
}

// --- UI EVENTS ---
dangerBtn.onclick = () => enterMode('danger');
crashBtn.onclick = () => enterMode('crash');
cancelBtn.onclick = exitMode;

// Listen to markers in Firebase and update map live
listenToMarkers();

// Clear markers button (password protected)
document.getElementById('clearMarkers').onclick = () => {
  const password = prompt('Enter admin password to clear all markers:');
  if (password === 'YOUR_PASSWORD_HERE') { // CHANGE THIS PASSWORD!
    if (confirm('Remove all markers?')) {
      removeAllMarkersFromFirebase();
    }
  } else if (password !== null) {
    alert('Incorrect password.');
  }
};

// Mobile: Ensure map dragging doesn't compete with scrolling
map.dragging.enable();
map.touchZoom.enable();
map.doubleClickZoom.enable();
map.scrollWheelZoom.disable(); // Prevent accidental zoom on mobile

// Prevent double marker on accidental double-tap
map.on('dblclick', (e) => { e.originalEvent.preventDefault(); });