
// ============================================================
// DATA
// ============================================================
const VEHICLES = [
  {
    id: 1, brand: 'BMW', model: '330i M Sport', year: 2024,
    category: 'sedan', condition: 'nuevo',
    price: 895000, enganchePct: 20,
    km: 0, fuel: 'Gasolina', trans: 'Automática', color: 'Negro Zafiro',
    desc: 'El BMW 330i M Sport redefine el placer de conducir. Motor TwinPower Turbo de 2.0L con 255 hp, interiores en cuero Merino y tecnología de asistencia iDrive 8. Una experiencia inigualable en cada trayecto.',
    specs: [{ icon: '⚡', val: '255 hp', label: 'Potencia' }, { icon: '⏱', val: '5.8 s', label: '0-100 km/h' }, { icon: '⛽', val: '10.2 L', label: 'Consumo/100km' }],
    features: ['Pantalla táctil 12.3"', 'Head-up Display', 'Asientos calefactados', 'Cámara 360°', 'Apple CarPlay', 'Park Assist', 'Sunroof eléctrico', 'Faros LED adaptativos'],
    svgColor: '#1a1a2e', svgAccent: '#4a4a8a'
  },
  {
    id: 1, brand: 'Toyota', model: 'RAV4 Hybrid', year: 2024,
    category: 'suv', condition: 'nuevo',
    price: 680000, enganchePct: 20,
    km: 0, fuel: 'Híbrido', trans: 'e-CVT', color: 'Blanco Perla',
    desc: 'La SUV familiar definitiva. Con sistema híbrido de última generación que combina economía y potencia. Tracción total inteligente AWD-i para cualquier terreno.',
    specs: [{ icon: '⚡', val: '222 hp', label: 'Potencia' }, { icon: '🌿', val: '5.8 L', label: 'Consumo/100km' }, { icon: '🛡', val: '5 ★', label: 'Seguridad' }],
    features: ['Android Auto / Apple CarPlay', 'Toyota Safety Sense', 'Cámara de reversa', 'Control crucero adaptativo', 'Asientos de cuero', '7 bolsas de aire', 'Modo Off-Road', 'Portón eléctrico'],
    svgColor: '#1a2a1a', svgAccent: '#3a6a3a'
  },
  {
    id: 1, brand: 'Chevrolet', model: 'Silverado LT Z71', year: 2023,
    category: 'pickup', condition: 'nuevo',
    price: 790000, enganchePct: 20,
    km: 0, fuel: 'Gasolina', trans: 'Automática 8 vel.', color: 'Rojo Victory',
    desc: 'La camioneta más vendida en México. Motor V8 6.2L EcoTec3 con cilindros desactivables, tracción 4x4 y paquete Z71 para aventuras sin límites.',
    specs: [{ icon: '⚡', val: '420 hp', label: 'Potencia' }, { icon: '⚙️', val: 'V8 6.2L', label: 'Motor' }, { icon: '🏋', val: '1,000 kg', label: 'Carga útil' }],
    features: ['Pantalla 13.4" Diagonal', 'Barra de remolque', 'Cámara MultiView', 'Wi-Fi hotspot', 'Frenos de remolque', 'Estribos eléctricos', 'Asientos ventilados', 'Control de descenso'],
    svgColor: '#2a1a1a', svgAccent: '#8a2a2a'
  },
  {
    id: 1, brand: 'Mazda', model: 'CX-5 Signature', year: 2024,
    category: 'suv', condition: 'nuevo',
    price: 585000, enganchePct: 20,
    km: 0, fuel: 'Gasolina', trans: 'Automática 6 vel.', color: 'Azul Polaris',
    desc: 'Diseño japonés Kodo de última generación. El CX-5 Signature ofrece interiores en cuero Nappa, tecnología i-ACTIVSENSE y el mejor equilibrio entre manejo y confort en su segmento.',
    specs: [{ icon: '⚡', val: '187 hp', label: 'Potencia' }, { icon: '⏱', val: '8.4 s', label: '0-100 km/h' }, { icon: '⛽', val: '9.0 L', label: 'Consumo/100km' }],
    features: ['Sistema BOSE 10 bocinas', 'Cuero Nappa', 'i-ACTIVSENSE', 'Head-Up Display', 'Calefacción de volante', 'Sensores de ángulo muerto', 'Apertura sin llave', 'Carga inalámbrica'],
    svgColor: '#1a1a2a', svgAccent: '#2a4a8a'
  },
  {
    id: 1, brand: 'Nissan', model: 'Sentra SR Turbo', year: 2022,
    category: 'sedan', condition: 'usado',
    price: 295000, enganchePct: 15,
    km: 28400, fuel: 'Gasolina', trans: 'Automática CVT', color: 'Blanco Perla',
    desc: 'Seminuevo en excelentes condiciones. El Sentra SR Turbo ofrece motor 1.6T de 188 hp, diseño deportivo y tecnología conectada a un precio accesible.',
    specs: [{ icon: '⚡', val: '188 hp', label: 'Potencia' }, { icon: '🛣', val: '28,400', label: 'Kilómetros' }, { icon: '📅', val: '2022', label: 'Año' }],
    features: ['Pantalla 9" táctil', 'Android Auto', 'Cámara de reversa', 'Control crucero', 'Llantas sport 18"', 'Spoiler deportivo', 'Luces LED', 'Sensores traseros'],
    svgColor: '#2a2a1a', svgAccent: '#6a6a2a'
  },
  {
    id: 1, brand: 'Ford', model: 'Mustang GT', year: 2023,
    category: 'deportivo', condition: 'nuevo',
    price: 990000, enganchePct: 25,
    km: 0, fuel: 'Gasolina', trans: 'Manual 6 vel.', color: 'Azul Grabber',
    desc: 'El ícono americano. Motor V8 5.0L Coyote atmosférico con 450 hp, escape activo y modo de conducción personalizable. Pura adrenalina en cada aceleración.',
    specs: [{ icon: '⚡', val: '450 hp', label: 'Potencia' }, { icon: '⏱', val: '4.3 s', label: '0-100 km/h' }, { icon: '⚙️', val: 'V8 5.0L', label: 'Motor' }],
    features: ['Escape activo SYNC', 'Modos de conducción', 'Diferencial Torsen', 'Frenos Brembo', 'Asientos Recaro', 'Sistema B&O 12 bocinas', 'Panel digital 12"', 'Launch Control'],
    svgColor: '#1a1a2a', svgAccent: '#2a3a7a'
  },
  {
    id: 7, brand: 'Volkswagen', model: 'Tiguan R-Line', year: 2023,
    category: 'suv', condition: 'usado',
    price: 480000, enganchePct: 15,
    km: 15200, fuel: 'Gasolina', trans: 'Automática 8 vel.', color: 'Gris Selenio',
    desc: 'Seminuevo con garantía de agencia. El Tiguan R-Line en perfecto estado, con motor 2.0T TSI y todos los equipos R-Line que lo distinguen.',
    specs: [{ icon: '⚡', val: '184 hp', label: 'Potencia' }, { icon: '🛣', val: '15,200', label: 'Kilómetros' }, { icon: '📅', val: '2023', label: 'Año' }],
    features: ['Digital Cockpit Pro', 'Asientos ergoComfort', 'Sistema Dynaudio', 'Climatizador trizona', 'Park Assist Plus', 'Emergency Assist', 'Llantas R 19"', 'Techo panorámico'],
    svgColor: '#2a2a2a', svgAccent: '#5a5a5a'
  },
  {
    id: 8, brand: 'Kia', model: 'EV6 GT-Line', year: 2024,
    category: 'suv', condition: 'nuevo',
    price: 870000, enganchePct: 20,
    km: 0, fuel: 'Eléctrico', trans: 'Automática', color: 'Verde Yacht',
    desc: 'El futuro de la movilidad. El EV6 GT-Line con 77.4 kWh de batería, autonomía de 528 km y carga ultra-rápida de 800V. Premios mundiales de diseño del año.',
    specs: [{ icon: '⚡', val: '229 hp', label: 'Potencia' }, { icon: '🔋', val: '528 km', label: 'Autonomía' }, { icon: '⚡', val: '18 min', label: '10→80% carga' }],
    features: ['Carga V2L bidireccional', 'Augmented Reality HUD', 'Asientos calefactados', 'Techo vidrio solar', 'Matrix LED', 'Sound Mood Lighting', 'Remote Smart Parking', 'Garantía 7 años'],
    svgColor: '#1a2a1a', svgAccent: '#1a5a2a'
  }
];

// ============================================================
// STATE
// ============================================================
let currentVehicle = null;
let currentStep = 1;
let stripe = null;
let cardNumber = null;
let cardExpiry = null;
let cardCvc = null;
let stripeInitialized = false;

// ============================================================
// STRIPE CONFIG
// ⚠️ REEMPLAZA con tu clave pública real de Stripe
// Obtén tu clave en: https://dashboard.stripe.com/apikeys
// ============================================================
const STRIPE_PUBLIC_KEY = 'pk_test_51T7yZHFA70zBTCYeMTTBP2LgLZV7TiGf7o51FLb9NaYGCvDi5qSqdcs7lEURhwxKy9M8EIoecrsFhsAnB89UMcQL00ddzZ44yk';
// BACKEND URL (necesitas un servidor para crear PaymentIntents)

const BACKEND_URL = 'http://localhost:3001/create-checkout-session';
const STRIPE_PRICE_ID = 'price_1TMGSIFA70zBTCYeWVb4Dyyi'; //  Price ID real

// ============================================================
// NAVIGATION
// ============================================================
function showSection(name) {
  const sections = ['home', 'catalog', 'about', 'contact'];
  sections.forEach(s => {
    const el = document.getElementById('section-' + s);
    if (el) el.style.display = 'none';
  });
  document.getElementById('section-' + name).style.display = 'block';
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const footer = document.getElementById('mainFooter');
  if (name === 'home') {
    footer.style.display = 'none';
  } else {
    footer.style.display = 'flex';
  }
  window.scrollTo(0, 0);
  if (name === 'catalog') {
    document.querySelectorAll('.nav-link')[0].classList.add('active');
    renderVehicles(VEHICLES);
  }
}

// ============================================================
// RENDER VEHICLES
// ============================================================
function renderVehicles(vehicles) {
  const grid = document.getElementById('vehiclesGrid');
  grid.innerHTML = vehicles.map(v => `
    <div class="vehicle-card" onclick="openVehicle(${v.id})">
      <div class="card-img">
        ${renderCarSVG(v, 'card')}
        <span class="card-badge ${v.condition}">${v.condition === 'nuevo' ? 'Nuevo' : 'Seminuevo'}</span>
      </div>
      <div class="card-body">
        <p class="card-brand">${v.brand}</p>
        <h3 class="card-name">${v.model}</h3>
        <div class="card-specs">
          <span class="card-spec"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>${v.year}</span>
          <span class="card-spec"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0"/></svg>${v.fuel}</span>
          ${v.km > 0 ? `<span class="card-spec">${v.km.toLocaleString()} km</span>` : ''}
        </div>
        <div class="card-footer">
          <div>
            <p class="card-price-label">Precio</p>
            <p class="card-price">$${(v.price/1000).toFixed(0)}K</p>
            <p class="card-enganche">Enganche desde $${Math.round(v.price * v.enganchePct / 100).toLocaleString()}</p>
          </div>
          <div class="card-arrow">→</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCarSVG(v, mode) {
  const w = mode === 'card' ? 400 : 600;
  const h = mode === 'card' ? 250 : 340;
  const colors = {
    sedan: { body: '#2a2a3a', accent: '#5a5a8a', wheels: '#1a1a2a' },
    suv: { body: '#1a2a2a', accent: '#2a6a5a', wheels: '#111' },
    pickup: { body: '#2a1a1a', accent: '#6a2a2a', wheels: '#111' },
    deportivo: { body: '#1a1a2a', accent: '#2a2a7a', wheels: '#111' }
  };
  const c = colors[v.category] || colors.sedan;
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
    <rect width="${w}" height="${h}" fill="${v.svgColor || '#111'}"/>
    <rect x="0" y="0" width="${w}" height="${h}" fill="url(#grad${v.id})" opacity="0.3"/>
    <defs><radialGradient id="grad${v.id}" cx="70%" cy="30%"><stop offset="0%" stop-color="${v.svgAccent || c.accent}" stop-opacity="0.6"/><stop offset="100%" stop-color="transparent" stop-opacity="0"/></radialGradient></defs>
    ${v.category === 'pickup' ? renderPickupShape(w, h) : v.category === 'suv' ? renderSUVShape(w, h) : v.category === 'deportivo' ? renderSportShape(w, h) : renderSedanShape(w, h)}
    <text x="${w/2}" y="${h-18}" fill="#c9a84c" font-size="11" text-anchor="middle" opacity="0.5" font-family="serif" letter-spacing="3">${v.brand.toUpperCase()} · ${v.model.toUpperCase()}</text>
  </svg>`;
}

function renderSedanShape(w, h) {
  const cy = h * 0.55, cx = w/2;
  return `
    <ellipse cx="${cx}" cy="${cy+40}" rx="${w*0.42}" ry="8" fill="#000" opacity="0.4"/>
    <rect x="${cx-w*0.38}" y="${cy}" rx="8" width="${w*0.76}" height="${h*0.22}" fill="#2a2a3a"/>
    <path d="M${cx-w*0.22} ${cy} Q${cx-w*0.18} ${cy-h*0.16} ${cx-w*0.06} ${cy-h*0.18} L${cx+w*0.06} ${cy-h*0.18} Q${cx+w*0.18} ${cy-h*0.16} ${cx+w*0.22} ${cy} Z" fill="#1e2a3a"/>
    <ellipse cx="${cx-w*0.24}" cy="${cy+h*0.2}" rx="${w*0.09}" ry="${w*0.09}" fill="#111" stroke="#444" stroke-width="2"/>
    <ellipse cx="${cx-w*0.24}" cy="${cy+h*0.2}" rx="${w*0.055}" ry="${w*0.055}" fill="#c9a84c" opacity="0.3"/>
    <ellipse cx="${cx+w*0.24}" cy="${cy+h*0.2}" rx="${w*0.09}" ry="${w*0.09}" fill="#111" stroke="#444" stroke-width="2"/>
    <ellipse cx="${cx+w*0.24}" cy="${cy+h*0.2}" rx="${w*0.055}" ry="${w*0.055}" fill="#c9a84c" opacity="0.3"/>
    <rect x="${cx+w*0.3}" y="${cy+4}" width="${w*0.08}" height="8" rx="2" fill="#c9a84c" opacity="0.7"/>
    <rect x="${cx-w*0.38}" y="${cy+4}" width="${w*0.08}" height="8" rx="2" fill="#ffddaa" opacity="0.5"/>`;
}

function renderSUVShape(w, h) {
  const cy = h * 0.5, cx = w/2;
  return `
    <ellipse cx="${cx}" cy="${cy+50}" rx="${w*0.44}" ry="9" fill="#000" opacity="0.4"/>
    <rect x="${cx-w*0.4}" y="${cy}" rx="8" width="${w*0.8}" height="${h*0.28}" fill="#1a2a2a"/>
    <path d="M${cx-w*0.3} ${cy} Q${cx-w*0.28} ${cy-h*0.19} ${cx-w*0.1} ${cy-h*0.2} L${cx+w*0.1} ${cy-h*0.2} Q${cx+w*0.28} ${cy-h*0.19} ${cx+w*0.3} ${cy} Z" fill="#152020"/>
    <ellipse cx="${cx-w*0.26}" cy="${cy+h*0.24}" rx="${w*0.1}" ry="${w*0.1}" fill="#111" stroke="#333" stroke-width="2.5"/>
    <ellipse cx="${cx-w*0.26}" cy="${cy+h*0.24}" rx="${w*0.06}" ry="${w*0.06}" fill="#c9a84c" opacity="0.25"/>
    <ellipse cx="${cx+w*0.26}" cy="${cy+h*0.24}" rx="${w*0.1}" ry="${w*0.1}" fill="#111" stroke="#333" stroke-width="2.5"/>
    <ellipse cx="${cx+w*0.26}" cy="${cy+h*0.24}" rx="${w*0.06}" ry="${w*0.06}" fill="#c9a84c" opacity="0.25"/>
    <rect x="${cx+w*0.33}" y="${cy+5}" width="${w*0.07}" height="10" rx="2" fill="#c9a84c" opacity="0.7"/>
    <rect x="${cx-w*0.4}" y="${cy+5}" width="${w*0.07}" height="10" rx="2" fill="#ffddaa" opacity="0.5"/>`;
}

function renderPickupShape(w, h) {
  const cy = h * 0.48, cx = w/2;
  return `
    <ellipse cx="${cx}" cy="${cy+55}" rx="${w*0.46}" ry="10" fill="#000" opacity="0.4"/>
    <rect x="${cx-w*0.44}" y="${cy}" rx="6" width="${w*0.88}" height="${h*0.32}" fill="#2a1a1a"/>
    <path d="M${cx-w*0.2} ${cy} Q${cx-w*0.18} ${cy-h*0.18} ${cx-w*0.04} ${cy-h*0.19} L${cx+w*0.04} ${cy-h*0.19} Q${cx+w*0.18} ${cy-h*0.18} ${cx+w*0.2} ${cy} Z" fill="#1f1212"/>
    <line x1="${cx+w*0.2}" y1="${cy}" x2="${cx+w*0.2}" y2="${cy+h*0.3}" stroke="#444" stroke-width="2"/>
    <ellipse cx="${cx-w*0.29}" cy="${cy+h*0.28}" rx="${w*0.1}" ry="${w*0.1}" fill="#111" stroke="#333" stroke-width="2.5"/>
    <ellipse cx="${cx+w*0.29}" cy="${cy+h*0.28}" rx="${w*0.1}" ry="${w*0.1}" fill="#111" stroke="#333" stroke-width="2.5"/>
    <rect x="${cx+w*0.37}" y="${cy+5}" width="${w*0.07}" height="10" rx="2" fill="#e24a4a" opacity="0.8"/>
    <rect x="${cx-w*0.44}" y="${cy+5}" width="${w*0.07}" height="10" rx="2" fill="#ffddaa" opacity="0.5"/>`;
}

function renderSportShape(w, h) {
  const cy = h * 0.56, cx = w/2;
  return `
    <ellipse cx="${cx}" cy="${cy+35}" rx="${w*0.43}" ry="7" fill="#000" opacity="0.5"/>
    <rect x="${cx-w*0.42}" y="${cy}" rx="4" width="${w*0.84}" height="${h*0.18}" fill="#1a1a2a"/>
    <path d="M${cx-w*0.2} ${cy} Q${cx-w*0.25} ${cy-h*0.2} ${cx-w*0.05} ${cy-h*0.22} L${cx+w*0.05} ${cy-h*0.22} Q${cx+w*0.25} ${cy-h*0.2} ${cx+w*0.2} ${cy} Z" fill="#10102a"/>
    <ellipse cx="${cx-w*0.25}" cy="${cy+h*0.17}" rx="${w*0.09}" ry="${w*0.09}" fill="#111" stroke="#555" stroke-width="2"/>
    <ellipse cx="${cx-w*0.25}" cy="${cy+h*0.17}" rx="${w*0.05}" ry="${w*0.05}" fill="#c9a84c" opacity="0.4"/>
    <ellipse cx="${cx+w*0.25}" cy="${cy+h*0.17}" rx="${w*0.09}" ry="${w*0.09}" fill="#111" stroke="#555" stroke-width="2"/>
    <ellipse cx="${cx+w*0.25}" cy="${cy+h*0.17}" rx="${w*0.05}" ry="${w*0.05}" fill="#c9a84c" opacity="0.4"/>
    <rect x="${cx+w*0.34}" y="${cy+3}" width="${w*0.08}" height="7" rx="1" fill="#c9a84c" opacity="0.8"/>
    <rect x="${cx-w*0.42}" y="${cy+3}" width="${w*0.08}" height="7" rx="1" fill="#ffddaa" opacity="0.5"/>
    <rect x="${cx-w*0.36}" y="${cy+12}" width="${w*0.05}" height="4" rx="1" fill="#e24a4a" opacity="0.6"/>
    <rect x="${cx+w*0.31}" y="${cy+12}" width="${w*0.05}" height="4" rx="1" fill="#e24a4a" opacity="0.6"/>`;
}

// ============================================================
// FILTER
// ============================================================
function filterVehicles(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = cat === 'todos' ? VEHICLES : VEHICLES.filter(v => v.category === cat || v.condition === cat);
  renderVehicles(filtered);
}

// ============================================================
// VEHICLE DETAIL
// ============================================================
function openVehicle(id) {
  currentVehicle = VEHICLES.find(v => v.id === id);
  if (!currentVehicle) return;
  const v = currentVehicle;

  document.getElementById('modalBrand').textContent = v.brand;
  document.getElementById('modalTitle').textContent = v.model;
  document.getElementById('modalYear').textContent = `${v.year} · ${v.condition === 'nuevo' ? 'Nuevo' : 'Seminuevo'} · ${v.color}`;
  document.getElementById('modalDesc').textContent = v.desc;

  document.getElementById('modalMainImg').innerHTML = renderCarSVG(v, 'detail');
  document.getElementById('modalThumbs').innerHTML = [1,2,3].map((_, i) =>
    `<div class="modal-thumb ${i===0?'active':''}" onclick="selectThumb(this)">${renderCarSVG(v, 'card')}</div>`
  ).join('');

  document.getElementById('modalSpecsGrid').innerHTML = v.specs.map(s =>
    `<div class="modal-spec-item"><div class="modal-spec-icon">${s.icon}</div><div class="modal-spec-val">${s.val}</div><div class="modal-spec-label">${s.label}</div></div>`
  ).join('');

  document.getElementById('modalFeatures').innerHTML = v.features.map(f =>
    `<span class="feature-tag">${f}</span>`
  ).join('');

  resetForm();
  updateEnganche(document.getElementById('engancheSlider').value);

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    if (!stripeInitialized && STRIPE_PUBLIC_KEY !== 'pk_test_REEMPLAZA_CON_TU_CLAVE_PUBLICA_DE_STRIPE') {
      initStripe();
    }
  }, 300);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function selectThumb(el) {
  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ============================================================
// ENGANCHE CALCULATOR
// ============================================================
function updateEnganche(pct) {
  if (!currentVehicle) return;
  const v = currentVehicle;
  const price = v.price;
  const eng = Math.round(price * pct / 100);
  const rest = price - eng;
  const monthly = Math.round(rest / 60); // Example: 60 months

  document.getElementById('enganchePercDisplay').textContent = `${pct}%`;
  document.getElementById('priceBlock').innerHTML = `
    <div class="price-row"><span class="price-row-label">Precio total</span><span class="price-row-val">$${price.toLocaleString()}</span></div>
    <div class="price-row"><span class="price-row-label">Enganche (${pct}%)</span><span class="price-row-val">$${eng.toLocaleString()}</span></div>
    <div class="price-row"><span class="price-row-label">Saldo a financiar</span><span class="price-row-val">$${rest.toLocaleString()}</span></div>
    <div class="price-row"><span class="price-row-label" style="color:var(--gold)">Pago hoy</span><span class="price-row-total">$${eng.toLocaleString()}</span></div>
    <div style="margin-top:0.6rem;font-size:11px;color:var(--text3)">~$${monthly.toLocaleString()}/mes por 60 meses (estimado)</div>
  `;
}

// ============================================================
// FORM STEPS
// ============================================================
function goToStep(n) {
  if (n === 2) {
    const name = document.getElementById('buyerName').value.trim();
    const email = document.getElementById('buyerEmail').value.trim();
    const phone = document.getElementById('buyerPhone').value.trim();
    if (!name || !email || !phone) { showToast('Por favor llena todos los campos requeridos'); return; }
    if (!email.includes('@')) { showToast('Ingresa un email válido'); return; }
  }
  if (n === 3) {
    const street = document.getElementById('buyerStreet').value.trim();
    const city = document.getElementById('buyerCity').value.trim();
    const state = document.getElementById('buyerState').value;
    const cp = document.getElementById('buyerCP').value.trim();
    if (!street || !city || !state || !cp) { showToast('Por favor llena todos los campos requeridos'); return; }
    if (!stripeInitialized) initStripe();
  }
  document.getElementById('step' + currentStep).classList.remove('active');
  currentStep = n;
  document.getElementById('step' + currentStep).classList.add('active');
  for (let i = 1; i <= 3; i++) {
    document.getElementById('step' + i + 'dot').classList.toggle('done', i <= n);
  }
  document.querySelector('.modal-right').scrollTop = 0;
}

function resetForm() {
  currentStep = 1;
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById('step' + i);
    el.classList.toggle('active', i === 1);
    document.getElementById('step' + i + 'dot').classList.toggle('done', i === 1);
  }
  document.getElementById('purchaseForm').style.display = 'block';
  document.getElementById('successScreen').style.display = 'none';
  document.getElementById('stripeError').style.display = 'none';
}

// ============================================================
// STRIPE
// ============================================================
function initStripe() {
  if (STRIPE_PUBLIC_KEY === 'pk_test_REEMPLAZA_CON_TU_CLAVE_PUBLICA_DE_STRIPE') {
    document.getElementById('stripeContainer').innerHTML = `
      <div style="text-align:center;padding:2rem;border:1px solid var(--border);border-radius:8px;color:var(--text2);">
        <div style="font-size:2rem;margin-bottom:1rem;">⚠️</div>
        <p style="font-size:14px;margin-bottom:0.5rem;color:var(--text);">Configura tu clave de Stripe</p>
        <p style="font-size:12px;line-height:1.7;">Reemplaza <code style="background:var(--bg3);padding:2px 6px;border-radius:3px;">STRIPE_PUBLIC_KEY</code> en el JavaScript con tu clave pública real de <a href="https://dashboard.stripe.com/apikeys" style="color:var(--gold);">dashboard.stripe.com</a></p>
        <p style="font-size:11px;margin-top:1rem;color:var(--text3);">También necesitas un backend para crear PaymentIntents. Ver comentarios en el código.</p>
      </div>
    `;
    return;
  }
  try {
    stripe = Stripe(STRIPE_PUBLIC_KEY);
    const elements = stripe.elements({
      appearance: {
        theme: 'night',
        variables: { colorPrimary: '#c9a84c', colorBackground: '#1a1a1a', colorText: '#f0ede8', colorDanger: '#e24b4a', fontFamily: 'DM Sans, sans-serif', borderRadius: '4px' }
      }
    });
    cardNumber = elements.create('cardNumber', { style: { base: { color: '#f0ede8', fontSize: '14px' } } });
    cardExpiry = elements.create('cardExpiry', { style: { base: { color: '#f0ede8', fontSize: '14px' } } });
    cardCvc = elements.create('cardCvc', { style: { base: { color: '#f0ede8', fontSize: '14px' } } });
    cardNumber.mount('#cardNumberElement');
    cardExpiry.mount('#cardExpiryElement');
    cardCvc.mount('#cardCvcElement');
    stripeInitialized = true;
  } catch(e) {
    console.error('Stripe init error:', e);
  }
}

async function processPayment() {
  const btn = document.getElementById('payBtn');
  const btnText = document.getElementById('payBtnText');
  const loader = document.getElementById('payLoader');
  const errorEl = document.getElementById('stripeError');

  btn.disabled = true;
  btnText.style.display = 'none';
  loader.classList.add('active');
  errorEl.style.display = 'none';

  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: STRIPE_PRICE_ID,
        customerEmail: document.getElementById('buyerEmail').value,
        customerName: document.getElementById('buyerName').value,
        vehicle: `${currentVehicle.brand} ${currentVehicle.model}`,
        successUrl: window.location.href + '?success=true',
        cancelUrl: window.location.href + '?canceled=true',
      })
    });

    const { url } = await response.json();
    window.location.href = url; // redirige a Stripe Checkout

  } catch(e) {
    errorEl.textContent = 'Error de conexión. Verifica tu backend e inténtalo de nuevo.';
    errorEl.style.display = 'block';
    btn.disabled = false;
    btnText.style.display = 'block';
    loader.classList.remove('active');
  }
}

function showSuccess(paymentId) {
  document.getElementById('purchaseForm').style.display = 'none';
  document.getElementById('successScreen').style.display = 'block';
  document.getElementById('folioNum').textContent = paymentId ? paymentId.slice(-8).toUpperCase() : 'AE' + Date.now().toString().slice(-6);
}

// ============================================================
// CONTACT
// ============================================================
function sendContact() {
  showToast('✓ Mensaje enviado. Te contactaremos pronto.');
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
  renderVehicles(VEHICLES);
  document.getElementById('engancheSlider').addEventListener('input', e => updateEnganche(e.target.value));

  // Close modal on overlay click
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
              