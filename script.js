// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyBZpC4zW0PJymXXpJdnlZhn2BLuYk9iT-U",
  authDomain: "santa-maria-ca.firebaseapp.com",
  databaseURL: "https://santa-maria-ca-default-rtdb.firebaseio.com", // REQUIRED!
  projectId: "santa-maria-ca",
  storageBucket: "santa-maria-ca.appspot.com", // FIXED typo
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

// Marker icons
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
let markerLayers = {}; // Firebase marker key -> Leaflet Marker

const dangerBtn = document.getElementById('dangerModeBtn');
const crashBtn = document.getElementById('crashModeBtn');
const cancelBtn = document.getElementById('cancelModeBtn');

// --- UI BUTTONS FOR ADDING MARKERS ---
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
    dragMarker.bindPopup("Drag to the correct spot, then enter details.").openPopup();

    // Prompt for info AFTER marker drag ends
    dragMarker.on('dragend', promptAndSaveMarker);
    // Immediately open the prompt if user doesn't drag
    setTimeout(() => promptAndSaveMarker(), 100);
  });
}

function exitMode() {
  mode = null;
  dangerBtn.disabled = crashBtn.disabled = false;
  cancelBtn.style.display = 'none';
  if (dragMarker) {
    map.removeLayer(dragMarker);
    dragMarker = null;
  }
}

function promptAndSaveMarker() {
  if (!dragMarker) return;
  // Remove listener so it doesn't fire again
  dragMarker.off('dragend', promptAndSaveMarker);

  // Prompt for info
  let description = prompt('Short description (optional):');
  if (description === null) { exitMode(); return; } // User cancelled
  let user = prompt('Your name or nickname (optional):');
  if (user === null) { exitMode(); return; } // User cancelled
  const latlng = dragMarker.getLatLng();
  let timestamp = new Date().toISOString();
  let marker = {
    lat: latlng.lat,
    lng: latlng.lng,
    type: mode,
    description: description || '',
    user: user || '',
    timestamp
  };
  addMarkerToFirebase(marker);
  exitMode();
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

function addMarkerToMap({lat, lng, type, description, user, timestamp}) {
  let icon = type === 'danger' ? dangerIcon : crashIcon;
  let label = type === 'danger' ? '⚠️ Danger' : '🚗 Crash';
  let html = `<b>${label}</b><br>`;
  if (description) html += `<i>${description}</i><br>`;
  if (user) html += `By: <b>${user}</b><br>`;
  if (timestamp) html += `<span style="font-size:0.85em;color:gray;">${fmtDate(timestamp)}</span>`;
  return L.marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(html);
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