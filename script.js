// --- MULTILINGUAL SUPPORT ---
const translations = {
  en: {
    title: "Coca-Cola Polar Bear<br>Ice Map",
    langSwitch: "Español",
    weatherLoading: "Loading weather...",
    instructions: 'Tap <b>Ice Cube</b> or <b>Iceberg</b>.<br>A marker will follow your live location and heading.<br>When you\'re ready to save the marker, tap "<b>Done</b>" and fill out the info.<br><span style="font-size:0.9em;">Leave a comment or “cheer” on each marker!</span>',
    iceCube: "Ice Cube 🧊",
    iceberg: "Iceberg 🧊",
    done: "Done",
    recenterTitle: "Recenter map to your position",
    clearMarkers: "Clear All Markers",
    markerLive: "Your live location. Tap 'Done' to stop and save.",
    markerCancelPrompt: "Short description (optional):",
    markerUserPrompt: "Your name or nickname (optional):",
    markerPopup: {
      by: "By",
      heading: "Heading",
      appleMaps: "View in Apple Maps",
      googleMaps: "View in Google Maps",
      copyCoords: "Copy coordinates",
      cheers: "cheers",
      cheerBtn: "Cheer this spot!",
      addComment: "Add Comment",
      commentPH: "Add a comment",
      namePH: "Your name",
      noComments: "No comments yet.",
    },
    adminClearPrompt: "Enter admin password to clear all markers:",
    adminClearConfirm: "Remove all markers?",
    adminClearWrong: "Incorrect password.",
    copyCoordsSuccess: "Coordinates copied!",
    copyCoordsFail: "Could not copy coordinates",
    geolocFail: "Couldn't get your position. Please allow location access.",
    geolocNotAvail: "Geolocation not available on this device/browser.",
    weatherUnavailable: "Weather unavailable",
    rightsBtn: "📇 Know Your Rights",
    rightsCard: `
      <h2>📇 KNOW YOUR CONSTITUTIONAL RIGHTS</h2>
      <div class="rights-section"><b>✅ YOU HAVE THE RIGHT TO REMAIN SILENT (5th Amendment)</b><br>
      Say: <i>“I wish to remain silent.”</i><br>
      Do not answer questions about your birthplace, your legal status, or your country of origin.</div>
      <div class="rights-section"><b>✅ YOU HAVE THE RIGHT TO REFUSE A SEARCH (4th Amendment)</b><br>
      Do not consent to a search of your person, your home, or your belongings.<br>
      Say: <i>“I do not consent to a search.”</i></div>
      <div class="rights-section"><b>✅ YOU HAVE THE RIGHT TO SEE A WARRANT</b><br>
      If ICE or police say they have a warrant, ask them to show it.<br>
      Check for a judge’s signature and your correct name or address.</div>
      <div class="rights-section"><b>✅ YOU HAVE THE RIGHT TO A LAWYER (6th Amendment)</b><br>
      Say: <i>“I want a lawyer.”</i><br>
      Do not sign anything without a lawyer’s counsel.</div>
      <div class="rights-section">
        <b>📁 FREE OR LOW-COST LEGAL HELP IN CALIFORNIA</b><ul>
          <li><b>Immigration Law Collaborative (Southern California)</b><br>(213) 634-4249 — Free and low-cost representation.</li>
          <li><b>Public Counsel</b><br>(213) 385-2977 — Serves Los Angeles and Orange County.</li>
          <li><b>American Immigration Lawyers Association (AILA) Referral Service</b><br>(202) 507-7600 — Find a nearby pro bono lawyer.</li>
          <li><b>California Rural Legal Assistance (CRLA)</b><br>(800) 242-2752 — Serves agricultural workers and low-income families.</li>
        </ul>
      </div>
      <div class="rights-section">
        <b>✨ Tip:</b> Always carry this card with you, remain calm, and be respectful.<br>Your rights apply even if you’re undocumented.
      </div>
    `,
    rightsCardBtn: "📇 Know Your Rights",
  },
  es: {
    title: "Coca-Cola Polar Bear<br>Mapa Polar",
    langSwitch: "English",
    weatherLoading: "Cargando clima...",
    instructions: 'Toca <b>Cubo de Hielo</b> o <b>Iceberg</b>.<br>Un marcador seguirá tu ubicación y dirección.<br>Cuando quieras guardar el marcador, toca "<b>Listo</b>" y llena la información.<br><span style="font-size:0.9em;">¡Deja un comentario o “brinda” en cada marcador!</span>',
    iceCube: "Cubo de Hielo 🧊",
    iceberg: "Iceberg 🧊",
    done: "Listo",
    recenterTitle: "Centrar mapa en tu posición",
    clearMarkers: "Borrar todos los marcadores",
    markerLive: "Tu ubicación en vivo. Toca 'Listo' para detener y guardar.",
    markerCancelPrompt: "Breve descripción (opcional):",
    markerUserPrompt: "Tu nombre o apodo (opcional):",
    markerPopup: {
      by: "Por",
      heading: "Dirección",
      appleMaps: "Ver en Apple Maps",
      googleMaps: "Ver en Google Maps",
      copyCoords: "Copiar coordenadas",
      cheers: "brindis",
      cheerBtn: "¡Brinda en este sitio!",
      addComment: "Comentar",
      commentPH: "Agrega un comentario",
      namePH: "Tu nombre",
      noComments: "Aún no hay comentarios.",
    },
    adminClearPrompt: "Ingresa la contraseña de administrador para borrar todos los marcadores:",
    adminClearConfirm: "¿Eliminar todos los marcadores?",
    adminClearWrong: "Contraseña incorrecta.",
    copyCoordsSuccess: "¡Coordenadas copiadas!",
    copyCoordsFail: "No se pudieron copiar las coordenadas",
    geolocFail: "No se pudo obtener tu ubicación. Por favor permite el acceso.",
    geolocNotAvail: "Geolocalización no disponible en este dispositivo/navegador.",
    weatherUnavailable: "Clima no disponible",
    rightsBtn: "📇 Conoce tus derechos",
    rightsCard: `
      <h2>📇 CONOCE TUS DERECHOS CONSTITUCIONALES</h2>
      <div class="rights-section"><b>✅ TIENES DERECHO A GUARDAR SILENCIO (5ª Enmienda)</b><br>
      Di: <i>“Deseo guardar silencio.”</i><br>
      No respondas preguntas sobre tu lugar de nacimiento, tu estatus legal o tu país de origen.</div>
      <div class="rights-section"><b>✅ TIENES DERECHO A RECHAZAR UNA BÚSQUEDA (4ª Enmienda)</b><br>
      No des tu consentimiento para que te revisen a ti, tu casa o tus pertenencias.<br>
      Di: <i>“No doy mi consentimiento para una búsqueda.”</i></div>
      <div class="rights-section"><b>✅ TIENES DERECHO A VER UNA ORDEN JUDICIAL</b><br>
      Si ICE o la policía dicen que tienen una orden, pídeles que te la muestren.<br>
      Revisa que tenga la firma de un juez y que tu nombre o dirección estén correctos.</div>
      <div class="rights-section"><b>✅ TIENES DERECHO A UN ABOGADO (6ª Enmienda)</b><br>
      Di: <i>“Quiero un abogado.”</i><br>
      No firmes nada sin el consejo de un abogado.</div>
      <div class="rights-section">
        <b>📁 AYUDA LEGAL GRATUITA O DE BAJO COSTO EN CALIFORNIA</b><ul>
          <li><b>Immigration Law Collaborative (Sur de California)</b><br>(213) 634-4249 — Representación gratuita y de bajo costo.</li>
          <li><b>Public Counsel</b><br>(213) 385-2977 — Sirve a Los Ángeles y el Condado de Orange.</li>
          <li><b>American Immigration Lawyers Association (AILA) Servicio de Referencia</b><br>(202) 507-7600 — Encuentra un abogado pro bono cercano.</li>
          <li><b>California Rural Legal Assistance (CRLA)</b><br>(800) 242-2752 — Sirve a trabajadores agrícolas y familias de bajos ingresos.</li>
        </ul>
      </div>
      <div class="rights-section">
        <b>✨ Consejo:</b> Lleva siempre esta tarjeta contigo, mantén la calma y sé respetuoso.<br>Tus derechos aplican incluso si no tienes documentos.
      </div>
    `,
    rightsCardBtn: "📇 Conoce tus derechos",
  }
};
let currentLang = "en";

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
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&hourly=precipitation,cloudcover&temperature_unit=fahrenheit`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data || !data.current_weather) {
      weatherBar.textContent = translations[currentLang].weatherUnavailable;
      return;
    }
    const c = data.current_weather;
    let emoji = "☀️";
    if (c.cloudcover > 80) emoji = "☁️";
    if (c.precipitation > 0) emoji = "❄️";
    if (c.temperature < 38) emoji = "🧊";
    weatherBar.textContent = `${emoji} ${c.temperature}°F, Wind ${Math.round(c.windspeed)} mph`;
  } catch (e) {
    weatherBar.textContent = translations[currentLang].weatherUnavailable;
  }
}

// --- MAP INITIALIZATION ---
const santaMariaCoords = [34.9530, -120.4357];
const map = L.map('map').setView(santaMariaCoords, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Rotatable marker icon using emoji
function getRotatedIcon(type, rotationDeg = 0, isPulse = false) {
  const emoji = (type === 'icecube')
    ? '🧊'
    : '🧊';
  // If pulsing, wrap the marker with the pulsing HTML
  const pulseHTML = isPulse
    ? `<div class="pulse-red"><div class="pulse"></div><div class="dot"></div></div>`
    : '';
  return L.divIcon({
    className: "",
    html: `${pulseHTML}<div style="transform:rotate(${rotationDeg}deg);font-size:2.2em;line-height:1;width:38px;height:38px;display:flex;align-items:center;justify-content:center;position:relative;z-index:1;">${emoji}</div>`,
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
const langBtn = document.getElementById('langSwitchBtn');
const mainTitle = document.getElementById('main-title');
const instructions = document.getElementById('instructions');
const clearMarkersBtn = document.getElementById('clearMarkers');

// --- RIGHTS CARD ---
const rightsCardOverlay = document.getElementById('rightsCardOverlay');
const rightsCardContent = document.getElementById('rightsCardContent');
const rightsCardBtn = document.getElementById('showRightsCardBtn');
const rightsCardClose = document.getElementById('closeRightsCardBtn');
function updateRightsCard() {
  rightsCardContent.innerHTML = translations[currentLang].rightsCard;
  rightsCardBtn.textContent = translations[currentLang].rightsCardBtn + ' / ' + translations[currentLang === "en" ? "es" : "en"].rightsCardBtn;
}
rightsCardBtn.onclick = function() {
  updateRightsCard();
  rightsCardOverlay.classList.add('active');
};
rightsCardClose.onclick = function() {
  rightsCardOverlay.classList.remove('active');
};
rightsCardOverlay.onclick = function(e) {
  if (e.target === rightsCardOverlay) {
    rightsCardOverlay.classList.remove('active');
  }
};

// --- LANGUAGE SWITCH ---
function setLanguage(lang) {
  currentLang = lang;
  // Header and UI
  mainTitle.innerHTML = translations[lang].title;
  langBtn.textContent = translations[lang].langSwitch;
  weatherBar.textContent = translations[lang].weatherLoading;
  instructions.innerHTML = translations[lang].instructions;
  dangerBtn.textContent = translations[lang].iceCube;
  crashBtn.textContent = translations[lang].iceberg;
  cancelBtn.textContent = translations[lang].done;
  recenterBtn.title = translations[lang].recenterTitle;
  clearMarkersBtn.textContent = translations[lang].clearMarkers;
  updateRightsCard();
  // Reload weather in new language (for "weather unavailable" fallback)
  fetchWeather(map.getCenter().lat, map.getCenter().lng);
  // Redraw all popups if open
  Object.values(markerLayers).forEach(marker => {
    if (marker.isPopupOpen()) marker.openPopup();
  });
}
langBtn.onclick = () => setLanguage(currentLang === "en" ? "es" : "en");

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

  if ("geolocation" in navigator) {
    let latestLatLng = null;
    let latestHeading = deviceHeading;
    let firstLocationUpdate = true;
    function updateMarkerPosition(pos) {
      latestLatLng = [pos.coords.latitude, pos.coords.longitude];
      if (firstLocationUpdate) {
        map.setView(latestLatLng, 17, { animate: true });
        firstLocationUpdate = false;
        fetchWeather(latestLatLng[0], latestLatLng[1]);
      }
      if (!dragMarker) {
        dragMarker = L.marker(latestLatLng, {
          icon: getRotatedIcon(mode, latestHeading),
          draggable: false,
          autoPan: true
        }).addTo(map);
        dragMarker.bindPopup(translations[currentLang].markerLive).openPopup();
      } else {
        dragMarker.setLatLng(latestLatLng);
      }
      dragMarker.setIcon(getRotatedIcon(mode, latestHeading));
    }
    watchPositionId = navigator.geolocation.watchPosition(
      updateMarkerPosition,
      (err) => {
        showToast(translations[currentLang].geolocFail);
        exitMode();
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 }
    );
    function updateMarkerHeading() {
      latestHeading = deviceHeading;
      if (dragMarker) {
        dragMarker.setIcon(getRotatedIcon(mode, latestHeading));
      }
      requestAnimationFrame(updateMarkerHeading);
    }
    updateMarkerHeading();
    recenterBtn.onclick = function() {
      if (dragMarker && dragMarker.getLatLng) {
        map.setView(dragMarker.getLatLng(), map.getZoom(), { animate: true });
      }
    };
    cancelBtn.onclick = async function() {
      if (watchPositionId !== null) {
        navigator.geolocation.clearWatch(watchPositionId);
        watchPositionId = null;
      }
      if (dragMarker && latestLatLng) {
        let description = prompt(translations[currentLang].markerCancelPrompt);
        if (description === null) { exitMode(); return; }
        let user = prompt(translations[currentLang].markerUserPrompt);
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
        await db.ref('markers').push(marker);
      }
      exitMode();
    };
  } else {
    showToast(translations[currentLang].geolocNotAvail);
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
function removeAllMarkersFromFirebase() {
  db.ref('markers').remove();
}

// --- MARKER POPUP DISPLAY ---
function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString(currentLang === "es" ? "es-MX" : undefined);
}

function addMarkerToMap(markerData, markerKey, isPulse = false) {
  let {lat, lng, type, description, user, heading, timestamp} = markerData;
  let rotation = typeof heading === 'number' ? heading : 0;
  let icon = getRotatedIcon(type, rotation, isPulse);
  let tr = translations[currentLang];
  let label = type === 'icecube' ? tr.iceCube : tr.iceberg;
  let html = `<div id="popup-marker-${markerKey}">`;
  html += `<b>${label}</b><br>`;
  if (description) html += `<i>${description}</i><br>`;
  if (user) html += `${tr.markerPopup.by}: <b>${user}</b><br>`;
  if (timestamp) html += `<span style="font-size:0.85em;color:gray;">${fmtDate(timestamp)}</span>`;
  if (typeof heading === 'number') html += `<br><span style="font-size:0.8em;color:gray;">${tr.markerPopup.heading}: ${Math.round(rotation)}°</span>`;
  // Map links
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document);
  let mapLink = isIOS
    ? `<a href="https://maps.apple.com/?q=${lat},${lng}" target="_blank" style="color:#1976d2">${tr.markerPopup.appleMaps}</a>`
    : `<a href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}" target="_blank" style="color:#1976d2">${tr.markerPopup.googleMaps}</a>`;
  const coordsString = `${lat},${lng}`;
  html += `<br>${mapLink}`;
  html += `<br><button onclick="copyCoordsToClipboard('${coordsString}')" style="margin-top:4px;background:#e41c23;color:#fff;border:none;border-radius:7px;padding:5px 14px;cursor:pointer;font-size:1em;">${tr.markerPopup.copyCoords}</button>`;
  // Cheers and comments
  html += `
    <div style="margin:0.5em 0;">
      <button id="cheer-btn-${markerKey}" class="cheer-btn" title="${tr.markerPopup.cheerBtn}">🥤</button>
      <span id="cheer-count-${markerKey}" style="font-weight:bold;font-size:1.1em;">0</span>
      <span style="font-size:1em;">${tr.markerPopup.cheers}</span>
    </div>
    <div class="popup-comments-list" id="comments-list-${markerKey}">${tr.markerPopup.noComments}</div>
    <form class="popup-comment-form" id="comment-form-${markerKey}" onsubmit="return false;">
      <input type="text" placeholder="${tr.markerPopup.namePH}" id="comment-user-${markerKey}" maxlength="16" />
      <textarea rows="2" placeholder="${tr.markerPopup.commentPH}" id="comment-text-${markerKey}" maxlength="120"></textarea>
      <button type="submit">${tr.markerPopup.addComment}</button>
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
  const tr = translations[currentLang].markerPopup;
  db.ref('marker_comments/' + markerKey).once('value', snapshot => {
    const comments = snapshot.val();
    if (!comments) {
      listElem.innerHTML = `<span style="color:#888;">${tr.noComments}</span>`;
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

// --- LISTEN TO MARKERS IN FIREBASE ---
// Pulsing: highlight 5 most recent markers
function listenToMarkers() {
  db.ref('markers').on('value', (snapshot) => {
    Object.values(markerLayers).forEach(marker => map.removeLayer(marker));
    markerLayers = {};
    const markers = snapshot.val() || {};
    // Sort marker entries by timestamp desc, get 5 most recent keys
    const sortedMarkerEntries = Object.entries(markers)
      .filter(([k, m]) => m.timestamp)
      .sort((a, b) => new Date(b[1].timestamp) - new Date(a[1].timestamp));
    const pulseKeys = sortedMarkerEntries.slice(0, 5).map(([k, m]) => k);

    Object.entries(markers).forEach(([key, marker]) => {
      const isPulse = pulseKeys.includes(key);
      markerLayers[key] = addMarkerToMap(marker, key, isPulse);
    });
  });
}

// --- Copy-to-Clipboard & Toast ---
window.copyCoordsToClipboard = function(coords) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(coords).then(() => {
      showToast(translations[currentLang].copyCoordsSuccess);
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
    showToast(translations[currentLang].copyCoordsSuccess);
  } catch (err) {
    showToast(translations[currentLang].copyCoordsFail);
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
clearMarkersBtn.onclick = () => {
  const tr = translations[currentLang];
  const password = prompt(tr.adminClearPrompt);
  if (password === 'YOUR_PASSWORD_HERE') { // CHANGE THIS PASSWORD!
    if (confirm(tr.adminClearConfirm)) {
      removeAllMarkersFromFirebase();
    }
  } else if (password !== null) {
    showToast(tr.adminClearWrong);
  }
};

// Listen to markers in Firebase and update map live
listenToMarkers();

// Mobile: Ensure map dragging doesn't compete with scrolling
map.dragging.enable();
map.touchZoom.enable();
map.doubleClickZoom.enable();
map.scrollWheelZoom.disable();
map.on('dblclick', (e) => { e.originalEvent.preventDefault(); });

// Initial language, rights card, and weather
setLanguage(currentLang);
fetchWeather(santaMariaCoords[0], santaMariaCoords[1]);
updateRightsCard();