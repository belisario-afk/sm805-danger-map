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

// --- WEATHER BAR ---
const weatherBar = document.getElementById('weatherBar');
async function fetchWeather(lat, lng) {
  // Open-Meteo API (no key required)
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&hourly=precipitation,cloudcover&temperature_unit=fahrenheit`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data || !data.current_weather) {
      weatherBar.textContent = "Weather unavailable";
      return;
    }
    const c = data.current_weather;
    let emoji = "☀️";
    if (c.cloudcover > 80) emoji = "☁️";
    if (c.precipitation > 0) emoji = "❄️";
    if (c.temperature < 38) emoji = "🧊";
    weatherBar.textContent = `${emoji} ${c.temperature}°F, Wind ${Math.round(c.windspeed)} mph`;
  } catch (e) {
    weatherBar.textContent = "Weather unavailable";
  }
}

// --- MAP INITIALIZATION ---
const santaMariaCoords = [34.9530, -120.4357];
const map = L.map('map').setView(santaMariaCoords, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Rotatable marker icon using emoji
function getRotatedIcon(type, rotationDeg = 0) {
  const emoji = (type === 'icecube')
    ? '🧊'
    : '🧊'; // Replace for SVG if you want a custom iceberg
  return L.divIcon({
    className: "",
    html: `<div style="transform:rotate(${rotationDeg}deg);font-size:2.2em;line-height:1;width:38px;height:38px;display:flex;align-items:center;justify-content:center;">${emoji}</div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38]
  });
}

let mode = null; // null | 'icecube' | 'iceberg'
let dragMarker = null;
let markerLayers = {}; // Firebase marker key -> Leaflet Marker

const dangerBtn = document.getElementById('dangerModeBtn');
const crashBtn = document.getElementById('crashModeBtn');
const cancelBtn = document.getElementById('cancelModeBtn');
const recenterBtn = document.getElementById('recenterBtn');

// --- Device Orientation Setup ---
let deviceHeading = 0;
let watchPositionId = null;
let headingListenerActive = false;

function setupDeviceOrientationListener() {
  if (headingListenerActive) return;
  headingListenerActive = true;

  function handleDeviceOrientation(event) {
    if (typeof event.alpha === 'number') {
      deviceHeading = 360 - event.alpha;
    }
  }

  if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function') {
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
  recenterBtn.style.display = '';

  if (dragMarker) {
    map.removeLayer(dragMarker);
    dragMarker = null;
  }

  setupDeviceOrientationListener();

  // Get real-time user location and heading
  if ("geolocation" in navigator) {
    let latestLatLng = null;
    let latestHeading = deviceHeading;
    let firstLocationUpdate = true;

    function updateMarkerPosition(pos) {
      latestLatLng = [pos.coords.latitude, pos.coords.longitude];
      if (firstLocationUpdate) {
        map.setView(latestLatLng, 17, { animate: true });
        firstLocationUpdate = false;
        // Show weather
        fetchWeather(latestLatLng[0], latestLatLng[1]);
      }
      if (!dragMarker) {
        dragMarker = L.marker(latestLatLng, {
          icon: getRotatedIcon(mode, latestHeading),
          draggable: false,
          autoPan: true
        }).addTo(map);
        dragMarker.bindPopup("Your live location. Tap 'Done' to stop and save.").openPopup();
      } else {
        dragMarker.setLatLng(latestLatLng);
      }
      dragMarker.setIcon(getRotatedIcon(mode, latestHeading));
    }

    // Watch position and update marker in real-time
    watchPositionId = navigator.geolocation.watchPosition(
      updateMarkerPosition,
      (err) => {
        showToast("Couldn't get your position. Please allow location access.");
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

    // Recenter button: center map on marker's current position
    recenterBtn.onclick = function() {
      if (dragMarker && dragMarker.getLatLng) {
        map.setView(dragMarker.getLatLng(), map.getZoom(), { animate: true });
      }
    };

    // When user is done, prompt for info, save marker
    cancelBtn.onclick = async function() {
      // Stop watching location
      if (watchPositionId !== null) {
        navigator.geolocation.clearWatch(watchPositionId);
        watchPositionId = null;
      }
      if (dragMarker && latestLatLng) {
        let description = prompt('Short description (optional):');
        if (description === null) { exitMode(); return; }
        let user = prompt('Your name or nickname (optional):');
        if (user === null) { exitMode(); return; }
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
        // Add to Firebase
        await db.ref('markers').push(marker);
      }
      exitMode();
    };

  } else {
    showToast("Geolocation not available on this device/browser.");
    exitMode();
  }
}

function exitMode() {
  mode = null;
  dangerBtn.disabled = crashBtn.disabled = false;
  cancelBtn.style.display = 'none';
  recenterBtn.style.display = 'none';
  if (dragMarker) {
    map.removeLayer(dragMarker);
    dragMarker = null;
  }
  if (watchPositionId !== null) {
    navigator.geolocation.clearWatch(watchPositionId);
    watchPositionId = null;
  }
  cancelBtn.onclick = exitMode;
  recenterBtn.onclick = null;
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
      markerLayers[key] = addMarkerToMap(marker, key);
    });
  });
}

// --- MAP MARKER DISPLAY ---
// Comments: { marker_comments/{markerKey}/{pushId} : {user, text, timestamp} }
// Cheers: { marker_cheers/{markerKey}: {count: 3} }
function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString();
}

function addMarkerToMap(markerData, markerKey) {
  let {lat, lng, type, description, user, heading, timestamp} = markerData;
  let rotation = typeof heading === 'number' ? heading : 0;
  let icon = getRotatedIcon(type, rotation);
  let label = type === 'icecube' ? '🧊 Ice Cube' : '🧊 Iceberg';

  let html = `<div id="popup-marker-${markerKey}">`;
  html += `<b>${label}</b><br>`;
  if (description) html += `<i>${description}</i><br>`;
  if (user) html += `By: <b>${user}</b><br>`;
  if (timestamp) html += `<span style="font-size:0.85em;color:gray;">${fmtDate(timestamp)}</span>`;
  if (typeof heading === 'number') html += `<br><span style="font-size:0.8em;color:gray;">Heading: ${Math.round(rotation)}°</span>`;

  // Map links
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document);
  let mapLink = isIOS
    ? `<a href="https://maps.apple.com/?q=${lat},${lng}" target="_blank" style="color:#1976d2">View in Apple Maps</a>`
    : `<a href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}" target="_blank" style="color:#1976d2">View in Google Maps</a>`;
  const coordsString = `${lat},${lng}`;
  html += `<br>${mapLink}`;
  html += `<br><button onclick="copyCoordsToClipboard('${coordsString}')" style="margin-top:4px;background:#e41c23;color:#fff;border:none;border-radius:7px;padding:5px 14px;cursor:pointer;font-size:1em;">Copy coordinates</button>`;

  // Cheers and comments
  html += `
    <div style="margin:0.5em 0;">
      <button id="cheer-btn-${markerKey}" class="cheer-btn" title="Cheer this spot!">🥤</button>
      <span id="cheer-count-${markerKey}" style="font-weight:bold;font-size:1.1em;">0</span>
      <span style="font-size:1em;">cheers</span>
    </div>
    <div class="popup-comments-list" id="comments-list-${markerKey}">Loading comments...</div>
    <form class="popup-comment-form" id="comment-form-${markerKey}" onsubmit="return false;">
      <input type="text" placeholder="Your name" id="comment-user-${markerKey}" maxlength="16" />
      <textarea rows="2" placeholder="Add a comment" id="comment-text-${markerKey}" maxlength="120"></textarea>
      <button type="submit">Add Comment</button>
    </form>
  </div>`;

  const m = L.marker([lat, lng], {icon}).addTo(map).bindPopup(html, {maxWidth: 270});

  m.on('popupopen', () => {
    loadComments(markerKey);
    loadCheers(markerKey);

    // Comments
    const form = document.getElementById('comment-form-' + markerKey);
    if (form) {
      form.onsubmit = async function() {
        const user = (document.getElementById('comment-user-' + markerKey).value || "anon").substring(0,16);
        const text = (document.getElementById('comment-text-' + markerKey).value || "").trim().substring(0,120);
        if (!text) return;
        const newComment = { user, text, timestamp: new Date().toISOString() };
        await db.ref('marker_comments/' + markerKey).push(newComment);
        document.getElementById('comment-text-' + markerKey).value = "";
        loadComments(markerKey);
      };
    }

    // Cheers
    const cheerBtn = document.getElementById('cheer-btn-' + markerKey);
    if (cheerBtn) {
      cheerBtn.onclick = async function() {
        const cheerRef = db.ref('marker_cheers/' + markerKey);
        cheerRef.transaction(current => {
          if (!current || typeof current.count !== "number") return {count: 1};
          return {count: current.count + 1};
        });
      };
    }
  });

  return m;
}

async function loadComments(markerKey) {
  const listElem = document.getElementById('comments-list-' + markerKey);
  if (!listElem) return;
  db.ref('marker_comments/' + markerKey).once('value', snapshot => {
    const comments = snapshot.val();
    if (!comments) {
      listElem.innerHTML = '<span style="color:#888;">No comments yet.</span>';
      return;
    }
    // Sort by time asc
    const sorted = Object.values(comments).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    listElem.innerHTML = sorted.map(c =>
      `<div class="marker-comment"><strong>${c.user}:</strong> ${c.text} <span style="color:gray;font-size:0.89em;">${fmtDate(c.timestamp)}</span></div>`
    ).join('');
  });
}

function loadCheers(markerKey) {
  const countElem = document.getElementById('cheer-count-' + markerKey);
  if (!countElem) return;
  db.ref('marker_cheers/' + markerKey).on('value', snapshot => {
    const data = snapshot.val();
    countElem.textContent = (data && typeof data.count === "number") ? data.count : "0";
  });
}

// --- Copy-to-Clipboard & Toast ---
window.copyCoordsToClipboard = function(coords) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(coords).then(() => {
      showToast('Coordinates copied!');
    }).catch(() => {
      fallbackCopyTextToClipboard(coords);
    });
  } else {
    fallbackCopyTextToClipboard(coords);
  }
};

function fallbackCopyTextToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('Coordinates copied!');
  } catch (err) {
    showToast('Could not copy coordinates');
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = "show";
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 1800);
}

// --- UI EVENTS ---
dangerBtn.onclick = () => enterMode('icecube');
crashBtn.onclick = () => enterMode('iceberg');
cancelBtn.onclick = exitMode;
recenterBtn.onclick = null; // will be set in enterMode()

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
    showToast('Incorrect password.');
  }
};

// Mobile: Ensure map dragging doesn't compete with scrolling
map.dragging.enable();
map.touchZoom.enable();
map.doubleClickZoom.enable();
map.scrollWheelZoom.disable();

// Prevent double marker on accidental double-tap
map.on('dblclick', (e) => { e.originalEvent.preventDefault(); });

// Initial weather for Santa Maria
fetchWeather(santaMariaCoords[0], santaMariaCoords[1]);