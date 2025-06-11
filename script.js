// Santa Maria, CA center
const santaMariaCoords = [34.9530, -120.4357];
const map = L.map('map').setView(santaMariaCoords, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const dangerIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/26a0.svg',
  iconSize: [38, 38], iconAnchor: [19, 38]
});
const crashIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f698.svg',
  iconSize: [38, 38], iconAnchor: [19, 38]
});

let mode = null; // null | 'danger' | 'crash'
let dragMarker = null;

const dangerBtn = document.getElementById('dangerModeBtn');
const crashBtn = document.getElementById('crashModeBtn');
const cancelBtn = document.getElementById('cancelModeBtn');

function saveMarkers(markers) {
  localStorage.setItem('sm805_markers', JSON.stringify(markers));
}
function loadMarkers() {
  try {
    return JSON.parse(localStorage.getItem('sm805_markers') || '[]');
  } catch { return []; }
}

function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString();
}

function addMarkerToMap({lat, lng, type, description, user, timestamp}) {
  let icon = type === 'danger' ? dangerIcon : crashIcon;
  let label = type === 'danger' ? '⚠️ Danger' : '🚗 Crash';
  let html = `<b>${label}</b><br>`;
  if (description) html += `<i>${description}</i><br>`;
  if (user) html += `By: <b>${user}</b><br>`;
  if (timestamp) html += `<span style="font-size:0.85em;color:gray;">${fmtDate(timestamp)}</span>`;
  L.marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(html);
}

function notifyNewMark(marker) {
  fetch('/.netlify/functions/notify-sms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(marker)
  });
}

// Enable marker adding mode
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
    dragMarker.bindPopup("Drag to the correct spot, then tap 'Save' below.").openPopup();

    showSaveButton();
  });
}

function exitMode() {
  mode = null;
  dangerBtn.disabled = crashBtn.disabled = false;
  cancelBtn.style.display = 'none';
  hideSaveButton();
  if (dragMarker) {
    map.removeLayer(dragMarker);
    dragMarker = null;
  }
}

// Create and manage save button for confirming marker placement
function showSaveButton() {
  hideSaveButton();
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save Marker';
  saveBtn.id = 'saveMarkBtn';
  saveBtn.style.background = mode === 'danger' ? '#ff9800' : '#e53935';
  saveBtn.style.position = 'fixed';
  saveBtn.style.bottom = '20px';
  saveBtn.style.left = '50%';
  saveBtn.style.transform = 'translateX(-50%)';
  saveBtn.style.zIndex = '1001';
  saveBtn.style.fontSize = '1.2em';
  saveBtn.style.padding = '0.9em 2.2em';

  saveBtn.onclick = () => {
    if (!dragMarker) return;
    const latlng = dragMarker.getLatLng();
    let description = prompt('Short description (optional):') || '';
    let user = prompt('Your name or nickname (optional):') || '';
    let timestamp = new Date().toISOString();
    let marker = {
      lat: latlng.lat,
      lng: latlng.lng,
      type: mode,
      description,
      user,
      timestamp
    };
    let markers = loadMarkers();
    markers.push(marker);
    saveMarkers(markers);
    addMarkerToMap(marker);
    notifyNewMark(marker);
    exitMode();
  };
  document.body.appendChild(saveBtn);
}

function hideSaveButton() {
  let saveBtn = document.getElementById('saveMarkBtn');
  if (saveBtn) saveBtn.remove();
}

// Button events
dangerBtn.onclick = () => enterMode('danger');
crashBtn.onclick = () => enterMode('crash');
cancelBtn.onclick = exitMode;

// Load markers on startup
loadMarkers().forEach(addMarkerToMap);

// Clear markers button (password protected)
document.getElementById('clearMarkers').onclick = () => {
  const password = prompt('Enter admin password to clear all markers:');
  if (password === 'YOUR_PASSWORD_HERE') { // CHANGE THIS PASSWORD!
    if (confirm('Remove all markers?')) {
      localStorage.removeItem('sm805_markers');
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) map.removeLayer(layer);
      });
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