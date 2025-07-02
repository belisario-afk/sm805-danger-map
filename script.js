// --- MULTILINGUAL SUPPORT ---
const languageList = [
  { code: "en", native: "English" },
  { code: "es", native: "Español" },
  { code: "zh", native: "中文" },
  { code: "fr", native: "Français" },
  { code: "ta", native: "Tagalog" },
  { code: "vi", native: "Tiếng Việt" },
  { code: "ar", native: "العربية" },
  { code: "ko", native: "한국어" },
  { code: "ru", native: "Русский" },
  { code: "de", native: "Deutsch" }
];
const translations = {
  en: {
    title: "Coca-Cola Polar Bear<br>Ice Map",
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
  },
  zh: {
    title: "可口可乐北极熊<br>冰地图",
    weatherLoading: "天气加载中...",
    instructions: "点击<b>冰块</b>或<b>冰山</b>。<br>标记会跟随您的实时位置和方向。<br>准备保存标记时，点击“<b>完成</b>”并填写信息。<br><span style='font-size:0.9em;'>给每个标记留言或“加油”！</span>",
    iceCube: "冰块 🧊",
    iceberg: "冰山 🧊",
    done: "完成",
    recenterTitle: "重新定位到当前位置",
    clearMarkers: "清除所有标记",
    markerLive: "您的实时位置。点击“完成”以保存。",
    markerCancelPrompt: "简短描述（可选）：",
    markerUserPrompt: "您的名字或昵称（可选）：",
    markerPopup: {
      by: "由",
      heading: "方向",
      appleMaps: "在苹果地图查看",
      googleMaps: "在谷歌地图查看",
      copyCoords: "复制坐标",
      cheers: "加油",
      cheerBtn: "为此点加油！",
      addComment: "留言",
      commentPH: "添加评论",
      namePH: "您的名字",
      noComments: "暂无评论。",
    },
    adminClearPrompt: "输入管理员密码以清除所有标记：",
    adminClearConfirm: "确定要删除所有标记？",
    adminClearWrong: "密码错误。",
    copyCoordsSuccess: "坐标已复制！",
    copyCoordsFail: "无法复制坐标",
    geolocFail: "无法获取您的位置。请允许定位访问。",
    geolocNotAvail: "此设备/浏览器不支持定位。",
    weatherUnavailable: "天气不可用",
    rightsBtn: "📇 了解您的权利",
    rightsCard: `
      <h2>📇 了解您的宪法权利</h2>
      <div class="rights-section"><b>✅ 您有权保持沉默</b><br>
      说: <i>“我想保持沉默。”</i><br>
      不要回答关于出生地、法律身份或原籍国的问题。</div>
      <div class="rights-section"><b>✅ 您有权拒绝搜查</b><br>
      不同意搜查您本人、住所或物品。<br>
      说: <i>“我不同意搜查。”</i></div>
      <div class="rights-section"><b>✅ 您有权查看搜查令</b><br>
      如果执法说有搜查令，要求出示。<br>
      检查法官签名及您的姓名或地址。</div>
      <div class="rights-section"><b>✅ 您有权请律师</b><br>
      说: <i>“我要请律师。”</i><br>
      未咨询律师前勿签任何文件。</div>
      <div class="rights-section">
        <b>📁 加州法律援助</b>
        <ul><li><b>Immigration Law Collaborative</b> (213) 634-4249</li>
        <li><b>Public Counsel</b> (213) 385-2977</li>
        <li><b>AILA 推荐服务</b> (202) 507-7600</li>
        <li><b>CRLA</b> (800) 242-2752</li></ul>
      </div>
      <div class="rights-section">
        <b>✨ 提示：</b>随身携带此卡，冷静，尊重。即使无证也有权利。
      </div>
    `,
    rightsCardBtn: "📇 了解您的权利",
  },
  fr: {
    title: "Ours Polaire Coca-Cola<br>Carte de la Glace",
    weatherLoading: "Chargement météo...",
    instructions: "Appuyez sur <b>Glacon</b> ou <b>Iceberg</b>.<br>Un marqueur suivra votre position et direction.<br>Pour sauvegarder, appuyez \"<b>Terminé</b>\".<br><span style='font-size:0.9em;'>Laissez un commentaire ou “encouragez” chaque marqueur !</span>",
    iceCube: "Glacon 🧊",
    iceberg: "Iceberg 🧊",
    done: "Terminé",
    recenterTitle: "Recentrer la carte",
    clearMarkers: "Effacer tous les marqueurs",
    markerLive: "Votre position en direct. Appuyez sur 'Terminé' pour enregistrer.",
    markerCancelPrompt: "Courte description (optionnel):",
    markerUserPrompt: "Votre nom ou pseudo (optionnel):",
    markerPopup: {
      by: "Par",
      heading: "Direction",
      appleMaps: "Voir dans Apple Maps",
      googleMaps: "Voir dans Google Maps",
      copyCoords: "Copier les coordonnées",
      cheers: "encouragements",
      cheerBtn: "Encourager ce point !",
      addComment: "Ajouter un commentaire",
      commentPH: "Ajouter un commentaire",
      namePH: "Votre nom",
      noComments: "Aucun commentaire.",
    },
    adminClearPrompt: "Saisir le mot de passe admin pour tout effacer :",
    adminClearConfirm: "Supprimer tous les marqueurs ?",
    adminClearWrong: "Mot de passe incorrect.",
    copyCoordsSuccess: "Coordonnées copiées !",
    copyCoordsFail: "Impossible de copier",
    geolocFail: "Position non obtenue. Autorisez l'accès.",
    geolocNotAvail: "Géolocalisation non disponible.",
    weatherUnavailable: "Météo non disponible",
    rightsBtn: "📇 Connaître vos droits",
    rightsCard: `
      <h2>📇 CONNAÎTRE VOS DROITS CONSTITUTIONNELS</h2>
      <div class="rights-section"><b>✅ VOUS AVEZ LE DROIT DE GARDER LE SILENCE</b><br>
      Dites: <i>“Je souhaite garder le silence.”</i></div>
      <div class="rights-section"><b>✅ VOUS POUVEZ REFUSER UNE FOUILLE</b><br>
      Dites: <i>“Je ne consens pas à une fouille.”</i></div>
      <div class="rights-section"><b>✅ VOUS POUVEZ DEMANDER UN MANDAT</b><br>
      Vérifiez la signature du juge et votre nom/adresse.</div>
      <div class="rights-section"><b>✅ VOUS AVEZ DROIT À UN AVOCAT</b><br>
      Dites: <i>“Je veux un avocat.”</i></div>
      <div class="rights-section">
        <b>📁 AIDE JURIDIQUE GRATUITE EN CALIFORNIE</b>
        <ul>
          <li>Immigration Law Collaborative (213) 634-4249</li>
          <li>Public Counsel (213) 385-2977</li>
        </ul>
      </div>
      <div class="rights-section">
        <b>✨ Astuce:</b> Gardez cette carte, restez calme et respectueux.
      </div>
    `,
    rightsCardBtn: "📇 Connaître vos droits",
  },
  ta: {
    title: "Coca-Cola Polar Bear<br>Mapa ng Yelo",
    weatherLoading: "Ikinakarga ang panahon...",
    instructions: "I-tap ang <b>Ice Cube</b> o <b>Iceberg</b>.<br>May marker na susunod sa iyong lokasyon.<br>Kapag handa nang i-save, tap \"<b>Tapos</b>\".<br><span style='font-size:0.9em;'>Mag-iwan ng komento o “cheer” sa bawat marker!</span>",
    iceCube: "Ice Cube 🧊",
    iceberg: "Iceberg 🧊",
    done: "Tapos",
    recenterTitle: "I-center ang mapa",
    clearMarkers: "Burahin lahat ng marker",
    markerLive: "Iyong live na lokasyon. Tapusin para i-save.",
    markerCancelPrompt: "Maikling paglalarawan (opsyonal):",
    markerUserPrompt: "Iyong pangalan o palayaw (opsyonal):",
    markerPopup: {
      by: "Ni",
      heading: "Direksyon",
      appleMaps: "Tingnan sa Apple Maps",
      googleMaps: "Tingnan sa Google Maps",
      copyCoords: "Kopyahin ang coordinates",
      cheers: "cheers",
      cheerBtn: "I-cheer ang spot na ito!",
      addComment: "Magdagdag ng Komento",
      commentPH: "Magdagdag ng komento",
      namePH: "Iyong pangalan",
      noComments: "Walang mga komento.",
    },
    adminClearPrompt: "Ilagay ang admin password para burahin lahat:",
    adminClearConfirm: "Burahin lahat ng marker?",
    adminClearWrong: "Mali ang password.",
    copyCoordsSuccess: "Nakopya ang coordinates!",
    copyCoordsFail: "Hindi makopya",
    geolocFail: "Hindi makuha ang posisyon mo. Payagan ang access.",
    geolocNotAvail: "Walang geolocation sa device/browser.",
    weatherUnavailable: "Walang weather data",
    rightsBtn: "📇 Alamin ang Iyong Karapatan",
    rightsCard: `
      <h2>📇 ALAMIN ANG IYONG KONSTITUSYONAL NA KARAPATAN</h2>
      <div class="rights-section"><b>✅ MAY KARAPATAN KANG MANAHIMIK</b></div>
      <div class="rights-section"><b>✅ PWEDENG TUMANGGI SA PAGHALUGHOG</b></div>
      <div class="rights-section"><b>✅ PWEDENG HUMINGI NG WARRANT</b></div>
      <div class="rights-section"><b>✅ MAY KARAPATAN SA ABOGADO</b></div>
      <div class="rights-section"><b>📁 LIBRENG LEGAL NA TULONG SA CALIFORNIA</b></div>
      <div class="rights-section">
        <b>✨ Tip:</b> Dalhin ito palagi, maging kalmado at magalang.
      </div>
    `,
    rightsCardBtn: "📇 Alamin ang Iyong Karapatan",
  },
  vi: {
    title: "Gấu Bắc Cực Coca-Cola<br>Bản Đồ Băng",
    weatherLoading: "Đang tải thời tiết...",
    instructions: "Chạm <b>Khối Băng</b> hoặc <b>Tảng Băng</b>.<br>Điểm đánh dấu sẽ theo dõi vị trí và hướng của bạn.<br>Khi sẵn sàng lưu, nhấn \"<b>Xong</b>\".<br><span style='font-size:0.9em;'>Để lại bình luận hoặc “cổ vũ” điểm!</span>",
    iceCube: "Khối Băng 🧊",
    iceberg: "Tảng Băng 🧊",
    done: "Xong",
    recenterTitle: "Đưa bản đồ về vị trí",
    clearMarkers: "Xóa tất cả điểm",
    markerLive: "Vị trí trực tiếp. Nhấn 'Xong' để lưu.",
    markerCancelPrompt: "Mô tả ngắn (tùy chọn):",
    markerUserPrompt: "Tên hoặc biệt danh (tùy chọn):",
    markerPopup: {
      by: "Bởi",
      heading: "Hướng",
      appleMaps: "Xem trên Apple Maps",
      googleMaps: "Xem trên Google Maps",
      copyCoords: "Sao chép tọa độ",
      cheers: "cổ vũ",
      cheerBtn: "Cổ vũ điểm này!",
      addComment: "Bình luận",
      commentPH: "Thêm bình luận",
      namePH: "Tên bạn",
      noComments: "Chưa có bình luận.",
    },
    adminClearPrompt: "Nhập mật khẩu quản trị để xóa tất cả:",
    adminClearConfirm: "Xóa tất cả điểm?",
    adminClearWrong: "Sai mật khẩu.",
    copyCoordsSuccess: "Đã sao chép tọa độ!",
    copyCoordsFail: "Không thể sao chép",
    geolocFail: "Không lấy được vị trí. Hãy cho phép truy cập.",
    geolocNotAvail: "Thiết bị không có hỗ trợ định vị.",
    weatherUnavailable: "Không có dữ liệu thời tiết",
    rightsBtn: "📇 Biết Quyền Lợi",
    rightsCard: `
      <h2>📇 BIẾT QUYỀN LỢI CỦA BẠN</h2>
      <div class="rights-section"><b>✅ QUYỀN IM LẶNG</b></div>
      <div class="rights-section"><b>✅ QUYỀN TỪ CHỐI KHÁM XÉT</b></div>
      <div class="rights-section"><b>✅ QUYỀN XEM LỆNH KHÁM</b></div>
      <div class="rights-section"><b>✅ QUYỀN CÓ LUẬT SƯ</b></div>
      <div class="rights-section"><b>📁 HỖ TRỢ PHÁP LÝ MIỄN PHÍ TẠI CALIFORNIA</b></div>
      <div class="rights-section">
        <b>✨ Mẹo:</b> Mang theo thẻ này, bình tĩnh, tôn trọng.
      </div>
    `,
    rightsCardBtn: "📇 Biết Quyền Lợi",
  },
  ar: {
    title: "خريطة الدب القطبي كوكاكولا<br>الجليدية",
    weatherLoading: "جارٍ تحميل الطقس...",
    instructions: "اضغط <b>مكعب ثلج</b> أو <b>جبل جليدي</b>.<br>سيتبع العلامة موقعك واتجاهك.<br>عند الحفظ، اضغط \"<b>تم</b>\".<br><span style='font-size:0.9em;'>اترك تعليقًا أو “شجع” كل علامة!</span>",
    iceCube: "مكعب ثلج 🧊",
    iceberg: "جبل جليدي 🧊",
    done: "تم",
    recenterTitle: "أعد توسيط الخريطة",
    clearMarkers: "مسح كل العلامات",
    markerLive: "موقعك الحي. اضغط 'تم' للحفظ.",
    markerCancelPrompt: "وصف قصير (اختياري):",
    markerUserPrompt: "اسمك أو لقبك (اختياري):",
    markerPopup: {
      by: "بواسطة",
      heading: "الاتجاه",
      appleMaps: "عرض على خرائط أبل",
      googleMaps: "عرض على خرائط جوجل",
      copyCoords: "نسخ الإحداثيات",
      cheers: "تشجيع",
      cheerBtn: "شجع هذا الموقع!",
      addComment: "إضافة تعليق",
      commentPH: "أضف تعليقًا",
      namePH: "اسمك",
      noComments: "لا توجد تعليقات.",
    },
    adminClearPrompt: "أدخل كلمة مرور المدير لمسح العلامات:",
    adminClearConfirm: "إزالة كل العلامات؟",
    adminClearWrong: "كلمة مرور غير صحيحة.",
    copyCoordsSuccess: "تم نسخ الإحداثيات!",
    copyCoordsFail: "تعذر نسخ الإحداثيات",
    geolocFail: "تعذر الحصول على موقعك. اسمح بالوصول.",
    geolocNotAvail: "الموقع غير متوفر.",
    weatherUnavailable: "الطقس غير متوفر",
    rightsBtn: "📇 اعرف حقوقك",
    rightsCard: `
      <h2>📇 اعرف حقوقك الدستورية</h2>
      <div class="rights-section"><b>✅ لديك الحق في التزام الصمت</b></div>
      <div class="rights-section"><b>✅ يمكنك رفض التفتيش</b></div>
      <div class="rights-section"><b>✅ يمكنك طلب مذكرة تفتيش</b></div>
      <div class="rights-section"><b>✅ لديك الحق في محامٍ</b></div>
      <div class="rights-section"><b>📁 مساعدة قانونية مجانية في كاليفورنيا</b></div>
      <div class="rights-section">
        <b>✨ نصيحة:</b> احتفظ بهذه البطاقة، وكن هادئًا ومحترمًا.
      </div>
    `,
    rightsCardBtn: "📇 اعرف حقوقك",
  },
  ko: {
    title: "코카콜라 북극곰<br>얼음지도",
    weatherLoading: "날씨 불러오는 중...",
    instructions: "<b>얼음 조각</b> 또는 <b>빙산</b>을 누르세요.<br>마커가 위치와 방향을 따릅니다.<br>저장하려면 \"<b>완료</b>\"를 누르세요.<br><span style='font-size:0.9em;'>각 마커에 댓글이나 “응원”을 남기세요!</span>",
    iceCube: "얼음 조각 🧊",
    iceberg: "빙산 🧊",
    done: "완료",
    recenterTitle: "지도 위치 재설정",
    clearMarkers: "모든 마커 삭제",
    markerLive: "실시간 위치. '완료'를 눌러 저장.",
    markerCancelPrompt: "간단 설명 (선택):",
    markerUserPrompt: "이름 또는 별명 (선택):",
    markerPopup: {
      by: "작성자",
      heading: "방향",
      appleMaps: "Apple 지도에서 보기",
      googleMaps: "Google 지도에서 보기",
      copyCoords: "좌표 복사",
      cheers: "응원",
      cheerBtn: "여기 응원하기!",
      addComment: "댓글 달기",
      commentPH: "댓글 추가",
      namePH: "이름",
      noComments: "아직 댓글 없음.",
    },
    adminClearPrompt: "관리자 비밀번호 입력:",
    adminClearConfirm: "모든 마커를 삭제하시겠습니까?",
    adminClearWrong: "비밀번호 오류.",
    copyCoordsSuccess: "좌표 복사됨!",
    copyCoordsFail: "복사 실패",
    geolocFail: "위치 정보를 가져올 수 없습니다.",
    geolocNotAvail: "이 장치/브라우저에서 위치 사용 불가.",
    weatherUnavailable: "날씨 정보 없음",
    rightsBtn: "📇 권리 알기",
    rightsCard: `
      <h2>📇 헌법상 권리 알기</h2>
      <div class="rights-section"><b>✅ 침묵할 권리</b></div>
      <div class="rights-section"><b>✅ 수색 거부 권리</b></div>
      <div class="rights-section"><b>✅ 영장 확인 권리</b></div>
      <div class="rights-section"><b>✅ 변호사 요청 권리</b></div>
      <div class="rights-section"><b>📁 캘리포니아 무료 법률 지원</b></div>
      <div class="rights-section">
        <b>✨ 팁:</b> 이 카드를 항상 지니세요. 침착하고 예의 있게 행동하세요.
      </div>
    `,
    rightsCardBtn: "📇 권리 알기",
  },
  ru: {
    title: "Кока-Кола Полярный Медведь<br>Карта Льда",
    weatherLoading: "Загрузка погоды...",
    instructions: "Нажмите <b>Кубик льда</b> или <b>Айсберг</b>.<br>Маркер будет следовать за позицией и направлением.<br>Для сохранения — \"<b>Готово</b>\".<br><span style='font-size:0.9em;'>Оставьте комментарий или “поддержите”!</span>",
    iceCube: "Кубик льда 🧊",
    iceberg: "Айсберг 🧊",
    done: "Готово",
    recenterTitle: "Центрировать карту",
    clearMarkers: "Удалить все маркеры",
    markerLive: "Ваше местоположение. Нажмите 'Готово' для сохранения.",
    markerCancelPrompt: "Краткое описание (необязательно):",
    markerUserPrompt: "Имя или ник (необязательно):",
    markerPopup: {
      by: "От",
      heading: "Направление",
      appleMaps: "Открыть в Apple Maps",
      googleMaps: "Открыть в Google Maps",
      copyCoords: "Копировать координаты",
      cheers: "поддержка",
      cheerBtn: "Поддержать это место!",
      addComment: "Оставить комментарий",
      commentPH: "Добавить комментарий",
      namePH: "Ваше имя",
      noComments: "Комментариев нет.",
    },
    adminClearPrompt: "Введите пароль администратора для удаления:",
    adminClearConfirm: "Удалить все маркеры?",
    adminClearWrong: "Неверный пароль.",
    copyCoordsSuccess: "Координаты скопированы!",
    copyCoordsFail: "Не удалось скопировать",
    geolocFail: "Не удалось получить позицию. Разрешите доступ.",
    geolocNotAvail: "Геолокация недоступна.",
    weatherUnavailable: "Погода недоступна",
    rightsBtn: "📇 Знать свои права",
    rightsCard: `
      <h2>📇 ЗНАЙТЕ СВОИ ПРАВА</h2>
      <div class="rights-section"><b>✅ ПРАВО НА МОЛЧАНИЕ</b></div>
      <div class="rights-section"><b>✅ ОТКАЗ ОТ ОБЫСКА</b></div>
      <div class="rights-section"><b>✅ ПРАВО НА ОЗНАКОМЛЕНИЕ С ОРДЕРОМ</b></div>
      <div class="rights-section"><b>✅ ПРАВО НА АДВОКАТА</b></div>
      <div class="rights-section"><b>📁 Бесплатная юр. помощь в Калифорнии</b></div>
      <div class="rights-section">
        <b>✨ Совет:</b> Носите эту карту, сохраняйте спокойствие и уважение.
      </div>
    `,
    rightsCardBtn: "📇 Знать свои права",
  },
  de: {
    title: "Coca-Cola Eisbär<br>Eiskarte",
    weatherLoading: "Wetter wird geladen...",
    instructions: "Tippe <b>Eiswürfel</b> oder <b>Eisberg</b>.<br>Eine Markierung folgt deinem Standort.<br>Zum Speichern: \"<b>Fertig</b>\".<br><span style='font-size:0.9em;'>Kommentiere oder “jubel” für jeden Marker!</span>",
    iceCube: "Eiswürfel 🧊",
    iceberg: "Eisberg 🧊",
    done: "Fertig",
    recenterTitle: "Karte zentrieren",
    clearMarkers: "Alle Marker löschen",
    markerLive: "Dein Live-Standort. Auf 'Fertig' tippen zum Speichern.",
    markerCancelPrompt: "Kurze Beschreibung (optional):",
    markerUserPrompt: "Name oder Spitzname (optional):",
    markerPopup: {
      by: "Von",
      heading: "Richtung",
      appleMaps: "In Apple Maps ansehen",
      googleMaps: "In Google Maps ansehen",
      copyCoords: "Koordinaten kopieren",
      cheers: "Jubel",
      cheerBtn: "Diesen Ort feiern!",
      addComment: "Kommentar hinzufügen",
      commentPH: "Kommentar hinzufügen",
      namePH: "Dein Name",
      noComments: "Noch keine Kommentare.",
    },
    adminClearPrompt: "Admin-Passwort für Löschen:",
    adminClearConfirm: "Alle Marker entfernen?",
    adminClearWrong: "Falsches Passwort.",
    copyCoordsSuccess: "Koordinaten kopiert!",
    copyCoordsFail: "Kopieren nicht möglich",
    geolocFail: "Position konnte nicht ermittelt werden.",
    geolocNotAvail: "Geolokalisierung nicht verfügbar.",
    weatherUnavailable: "Wetter nicht verfügbar",
    rightsBtn: "📇 Deine Rechte",
    rightsCard: `
      <h2>📇 KENNE DEINE RECHTE</h2>
      <div class="rights-section"><b>✅ RECHT ZU SCHWEIGEN</b></div>
      <div class="rights-section"><b>✅ RECHT, EINE DURCHSUCHUNG ABZULEHNEN</b></div>
      <div class="rights-section"><b>✅ RECHT AUF EINEN DURCHSUCHUNGSBEFEHL</b></div>
      <div class="rights-section"><b>✅ RECHT AUF EINEN ANWALT</b></div>
      <div class="rights-section"><b>📁 Kostenlose Rechtsberatung in Kalifornien</b></div>
      <div class="rights-section">
        <b>✨ Tipp:</b> Diese Karte immer dabeihaben, ruhig und respektvoll bleiben.
      </div>
    `,
    rightsCardBtn: "📇 Deine Rechte",
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
const clearMarkersBtn = document.getElementById('clearMarkers');
const langSelect = document.getElementById('langSelect');
const mainTitle = document.getElementById('main-title');
const instructions = document.getElementById('instructions');

// --- RIGHTS CARD ---
const rightsCardOverlay = document.getElementById('rightsCardOverlay');
const rightsCardContent = document.getElementById('rightsCardContent');
const rightsCardBtn = document.getElementById('showRightsCardBtn');
const rightsCardClose = document.getElementById('closeRightsCardBtn');
let rightsCardVisible = false;
function updateRightsCard() {
  rightsCardContent.innerHTML = translations[currentLang].rightsCard;
  rightsCardBtn.textContent = translations[currentLang].rightsCardBtn + ' / ' + translations[currentLang === "en" ? "es" : "en"].rightsCardBtn;
}
rightsCardBtn.onclick = function() {
  if (rightsCardOverlay.classList.contains('active')) {
    rightsCardOverlay.classList.remove('active');
    rightsCardVisible = false;
  } else {
    updateRightsCard();
    rightsCardOverlay.classList.add('active');
    rightsCardVisible = true;
  }
};
rightsCardClose.onclick = function() {
  rightsCardOverlay.classList.remove('active');
  rightsCardVisible = false;
};
rightsCardOverlay.onclick = function(e) {
  if (e.target === rightsCardOverlay) {
    rightsCardOverlay.classList.remove('active');
    rightsCardVisible = false;
  }
};

// --- LANGUAGE DROPDOWN ---
// Populate on load
function populateLangDropdown() {
  langSelect.innerHTML = "";
  languageList.forEach(lang =>
    langSelect.innerHTML += `<option value="${lang.code}">${lang.native}</option>`
  );
}
populateLangDropdown();
langSelect.value = currentLang;
// Change handler
langSelect.onchange = function() {
  setLanguage(langSelect.value);
};

// --- LANGUAGE SWITCH FUNCTION ---
function setLanguage(lang) {
  currentLang = lang;
  langSelect.value = lang;
  // Header and UI
  mainTitle.innerHTML = translations[lang].title;
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

// Initial language, rights card, lang dropdown, and weather
setLanguage(currentLang);
fetchWeather(santaMariaCoords[0], santaMariaCoords[1]);
updateRightsCard();