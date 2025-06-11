// Center on Santa Maria, CA
const santaMariaCoords = [34.9530, -120.4357];
const map = L.map('map').setView(santaMariaCoords, 12);

// Map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let pendingLatLng = null;

// Modal logic
const modal = document.getElementById('markerModal');
const dangerBtn = document.getElementById('dangerBtn');
const crashBtn = document.getElementById('crashBtn');
const cancelBtn = document.getElementById('cancelBtn');

function showModal(latlng) {
  pendingLatLng = latlng;
  modal.style.display = 'block';
}
function hideModal() {
  pendingLatLng = null;
  modal.style.display = 'none';
}

// Marker icons
const dangerIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/26a0.svg',
  iconSize: [32, 32], iconAnchor: [16, 32]
});
const crashIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f698.svg',
  iconSize: [32, 32], iconAnchor: [16, 32]
});

// Save/load markers from localStorage
function saveMarkers(markers) {
  localStorage.setItem('sm805_markers', JSON.stringify(markers));
}
function loadMarkers() {
  try {
    return JSON.parse(localStorage.getItem('sm805_markers') || '[]');
  } catch { return []; }
}

// Format date/time nicely
function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString();
}

// Add marker to map and list
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

// Notify backend for SMS
function notifyNewMark(marker) {
  fetch('/.netlify/functions/notify-sms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(marker)
  });
}

// On map click, show modal
map.on('click', (e) => {
  showModal(e.latlng);
});

function promptForDetails(type) {
  const description = prompt('Describe this location (danger or crash):');
  if (description === null) return null;
  const user = prompt('Your name or nickname (optional):');
  const timestamp = new Date().toISOString();
  return { description, user, timestamp };
}

dangerBtn.onclick = () => {
  if (!pendingLatLng) return;
  const details = promptForDetails('danger');
  if (!details) return hideModal();
  let {lat, lng} = pendingLatLng;
  let marker = { lat, lng, type: 'danger', ...details };
  let markers = loadMarkers();
  markers.push(marker);
  saveMarkers(markers);
  addMarkerToMap(marker);
  notifyNewMark(marker);
  hideModal();
};
crashBtn.onclick = () => {
  if (!pendingLatLng) return;
  const details = promptForDetails('crash');
  if (!details) return hideModal();
  let {lat, lng} = pendingLatLng;
  let marker = { lat, lng, type: 'crash', ...details };
  let markers = loadMarkers();
  markers.push(marker);
  saveMarkers(markers);
  addMarkerToMap(marker);
  notifyNewMark(marker);
  hideModal();
};
cancelBtn.onclick = hideModal;

// Hide modal when clicking outside
window.onclick = (event) => {
  if (event.target === modal) hideModal();
};

// Load all markers on startup
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