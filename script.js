/* ============================================================
   DATA: DEFAULT PRODUCTS
   ============================================================ */
// Game image URLs using reliable public sources
// Gradient fallback backgrounds per game (used when image fails)
const GAME_COLORS = {
  'ml':      'linear-gradient(135deg,#1a1a6e,#3b82f6)',
  'ff':      'linear-gradient(135deg,#7f1d1d,#ef4444)',
  'pubg':    'linear-gradient(135deg,#1c1917,#c2a000)',
  'gi':      'linear-gradient(135deg,#1e1b4b,#6366f1)',
  'val':     'linear-gradient(135deg,#3b0000,#ff4655)',
  'hok':     'linear-gradient(135deg,#1a0a00,#d97706)',
  'coc':     'linear-gradient(135deg,#1e3a00,#84cc16)',
  'codm':    'linear-gradient(135deg,#0a0a0a,#475569)',
  'rob':     'linear-gradient(135deg,#1a0050,#e11d48)',
  'au':      'linear-gradient(135deg,#0f172a,#c026d3)',
  'sg':      'linear-gradient(135deg,#0c1a4f,#3b82f6)',
  'sptf':    'linear-gradient(135deg,#0d3320,#1db954)',
  'gog':     'linear-gradient(135deg,#0a3d00,#34d399)',
  'steam':   'linear-gradient(135deg,#0d1117,#60a5fa)',
  'netflix': 'linear-gradient(135deg,#1a0000,#e50914)',
  'spotify': 'linear-gradient(135deg,#0d2818,#1db954)',
  'youtube': 'linear-gradient(135deg,#1a0000,#ff0000)',
};

const GAME_IMAGES = {
  'ml':      './images/ml.jpg',
  'ff':      './images/ff.jpg',
  'pubg':    './images/pubg.jpg',
  'gi':      './images/gi.jpg',
  'val':     './images/val.jpg',
  'hok':     './images/hok.jpg',
  'coc':     './images/coc.jpg',
  'codm':    './images/codm.jpg',
  'rob':     './images/rob.jpg',
  'au':      './images/au.jpg',
  'sg':      './images/sg.jpg',
  'sptf':    './images/sptf.jpg',
  'hsr':     './images/hsr.jpg',
  'gog':     null,
  'steam':   './images/steam.jpg',
  'netflix': './images/netflix.jpg',
  'spotify': null,
  'youtube': './images/youtube.jpg',
};

const DEFAULT_PRODUCTS = [
  {
    id: 'ml', name: 'Mobile Legends', cat: 'game', icon: '⚔️',
    desc: 'Mobile Legends: Bang Bang adalah game MOBA mobile paling populer di Asia Tenggara. Nikmati pertarungan 5v5 yang seru bersama teman-temanmu dan raih posisi Mythical Glory!',
    priceFrom: 7000, needZone: true,
    nominals: [
      {id:'ml1', amount:'14 💎', price:2000},
      {id:'ml2', amount:'56 💎', price:7200, badge:'hemat'},
      {id:'ml3', amount:'112 💎', price:14000},
      {id:'ml4', amount:'257 💎', price:31000, badge:'terlaris'},
      {id:'ml5', amount:'514 💎', price:61000},
      {id:'ml6', amount:'706 💎', price:83000},
      {id:'ml7', amount:'1412 💎', price:165000},
      {id:'ml8', amount:'2195 💎', price:258000, badge:'hemat'},
      {id:'ml9', amount:'Twilight Pass', price:14500},
    ]
  },
  {
    id: 'ff', name: 'Free Fire', cat: 'game', icon: '🔥',
    desc: 'Garena Free Fire adalah game battle royale mobile yang mendebarkan. Terjun bersama 49 pemain lain, kumpulkan senjata, dan jadilah yang terakhir bertahan!',
    priceFrom: 5500, needZone: false,
    nominals: [
      {id:'ff1', amount:'70 💎', price:12000},
      {id:'ff2', amount:'140 💎', price:22000, badge:'hemat'},
      {id:'ff3', amount:'355 💎', price:57000, badge:'terlaris'},
      {id:'ff4', amount:'720 💎', price:113000},
      {id:'ff5', amount:'1450 💎', price:226000},
      {id:'ff6', amount:'Weekly Pass', price:22000},
    ]
  },
  {
    id: 'pubg', name: 'PUBG Mobile', cat: 'game', icon: '🪖',
    desc: 'PUBG Mobile adalah game battle royale taktis yang menantang. Gunakan strategi terbaik, kuasai medan perang, dan raih chicken dinner yang legendaris!',
    priceFrom: 15000, needZone: false,
    nominals: [
      {id:'pg1', amount:'60 UC', price:15000},
      {id:'pg2', amount:'180 UC', price:44000, badge:'hemat'},
      {id:'pg3', amount:'325 UC', price:78000, badge:'terlaris'},
      {id:'pg4', amount:'660 UC', price:155000},
      {id:'pg5', amount:'1800 UC', price:420000},
      {id:'pg6', amount:'Royal Pass', price:149000},
    ]
  },
  {
    id: 'gi', name: 'Genshin Impact', cat: 'game', icon: '✨',
    desc: 'Genshin Impact adalah action RPG open-world yang memukau dengan grafis anime yang indah. Jelajahi dunia Teyvat, kumpulkan karakter, dan ungkap misteri yang tersembunyi!',
    priceFrom: 16000, needZone: true,
    nominals: [
      {id:'gi1', amount:'60 Primogem', price:16000},
      {id:'gi2', amount:'300 + 30 Primogem', price:78000, badge:'hemat'},
      {id:'gi3', amount:'980 + 110 Primogem', price:258000, badge:'terlaris'},
      {id:'gi4', amount:'1980 + 260 Primogem', price:520000},
      {id:'gi5', amount:'3280 + 600 Primogem', price:850000},
      {id:'gi6', amount:'Blessing Welkin Moon', price:76000},
    ]
  },
  {
    id: 'val', name: 'Valorant', cat: 'game', icon: '🎯',
    desc: 'Valorant adalah game taktis 5v5 dari Riot Games yang menggabungkan aksi ala CS dengan kemampuan unik para Agent. Tunjukkan kemampuan aiming terbaikmu!',
    priceFrom: 15000, needZone: false,
    nominals: [
      {id:'vl1', amount:'475 VP', price:50000},
      {id:'vl2', amount:'1000 VP', price:100000, badge:'hemat'},
      {id:'vl3', amount:'2050 VP', price:200000, badge:'terlaris'},
      {id:'vl4', amount:'3650 VP', price:350000},
      {id:'vl5', amount:'5350 VP', price:500000},
    ]
  },
  {
    id: 'hok', name: 'Honor of Kings', cat: 'game', icon: '👑',
    desc: 'Honor of Kings adalah game MOBA berbasis lore mitologi Asia dari Tencent. Mainkan hero ikonik dari legenda China dan buktikan dirimu di arena 5v5!',
    priceFrom: 7500, needZone: true,
    nominals: [
      {id:'hk1', amount:'50 Token', price:7500},
      {id:'hk2', amount:'168 Token', price:24000, badge:'hemat'},
      {id:'hk3', amount:'328 Token', price:46000, badge:'terlaris'},
      {id:'hk4', amount:'748 Token', price:105000},
      {id:'hk5', amount:'1648 Token', price:230000},
    ]
  },
  {
    id: 'coc', name: 'Clash of Clans', cat: 'game', icon: '⚡',
    desc: 'Clash of Clans adalah game strategi membangun desa dan menyerang yang legendaris dari Supercell. Bangun klan terkuat dan kuasai dunia Clash!',
    priceFrom: 15000, needZone: false,
    nominals: [
      {id:'cc1', amount:'80 💎 Gems', price:15000},
      {id:'cc2', amount:'500 💎 Gems', price:82000, badge:'hemat'},
      {id:'cc3', amount:'1200 💎 Gems', price:186000, badge:'terlaris'},
      {id:'cc4', amount:'2500 💎 Gems', price:372000},
      {id:'cc5', amount:'6500 💎 Gems', price:932000},
    ]
  },
  {
    id: 'codm', name: 'Call of Duty Mobile', cat: 'game', icon: '💥',
    desc: 'Call of Duty Mobile menghadirkan pengalaman FPS kelas dunia di genggamanmu. Nikmati berbagai mode mulai dari Battle Royale hingga Multiplayer seru!',
    priceFrom: 15000, needZone: false,
    nominals: [
      {id:'cm1', amount:'80 CP', price:15000},
      {id:'cm2', amount:'400 CP', price:75000, badge:'hemat'},
      {id:'cm3', amount:'800 CP', price:148000, badge:'terlaris'},
      {id:'cm4', amount:'2000 CP', price:360000},
      {id:'cm5', amount:'Battle Pass', price:130000},
    ]
  },
  {
    id: 'rob', name: 'Roblox', cat: 'game', icon: '🧱',
    desc: 'Roblox adalah platform game online terbesar di dunia dengan jutaan game buatan pengguna. Gunakan Robux untuk tampil keren dan akses fitur eksklusif!',
    priceFrom: 15000, needZone: false,
    nominals: [
      {id:'rb1', amount:'80 Robux', price:15000},
      {id:'rb2', amount:'240 Robux', price:44000, badge:'hemat'},
      {id:'rb3', amount:'800 Robux', price:145000, badge:'terlaris'},
      {id:'rb4', amount:'2000 Robux', price:360000},
      {id:'rb5', amount:'Roblox Premium 450', price:59000},
    ]
  },
  {
    id: 'au', name: 'Among Us', cat: 'game', icon: '🚀',
    desc: 'Among Us adalah game sosial deduksi yang mendebarkan. Temukan Impostor di antara kru atau sembunyi dan sabotase misi tanpa ketahuan!',
    priceFrom: 10000, needZone: false,
    nominals: [
      {id:'am1', amount:'500 Stars', price:10000},
      {id:'am2', amount:'1000 Stars', price:19000, badge:'hemat'},
      {id:'am3', amount:'5000 Stars', price:87000, badge:'terlaris'},
      {id:'am4', amount:'Cosmicube Bundle', price:45000},
    ]
  },
  {
    id: 'sg', name: 'Stumble Guys', cat: 'game', icon: '🎪',
    desc: 'Stumble Guys adalah game battle royale kasual yang lucu dan menggemaskan. Berlomba bersama 32 pemain, atasi rintangan, dan jadilah yang pertama finish!',
    priceFrom: 7000, needZone: false,
    nominals: [
      {id:'st1', amount:'80 Gems', price:7000},
      {id:'st2', amount:'200 Gems', price:16000, badge:'hemat'},
      {id:'st3', amount:'500 Gems', price:38000, badge:'terlaris'},
      {id:'st4', amount:'1200 Gems', price:88000},
      {id:'st5', amount:'Season Pass', price:55000},
    ]
  },
  {
    id: 'sptf', name: 'Spotify Premium', cat: 'streaming', icon: '🎵',
    desc: 'Nikmati musik tanpa batas dengan Spotify Premium. Putar lagu favoritmu kapan saja tanpa iklan, unduh untuk didengar offline, dan nikmati kualitas audio terbaik!',
    priceFrom: 19000, needZone: false,
    nominals: [
      {id:'sp1', amount:'1 Bulan Individual', price:54990, badge:'terlaris'},
      {id:'sp2', amount:'3 Bulan Individual', price:154990, badge:'hemat'},
      {id:'sp3', amount:'1 Bulan Duo', price:72990},
      {id:'sp4', amount:'1 Bulan Family', price:86990},
      {id:'sp5', amount:'Mini 1 Hari', price:2000},
      {id:'sp6', amount:'Mini 1 Minggu', price:7000},
    ]
  },
];

/* ============================================================
   PAYMENT INFO
   ============================================================ */
const PAYMENT_INFO = {
  GoPay:     { type:'ewallet', instr: 'Transfer ke nomor GoPay', number: '083102152660', note: 'Atas Nama : MOHAMAD ARSYAD ASSABIL, PULSA & INTERNET' },
  ShopeePay: { type:'ewallet', instr: 'Transfer ke nomor ShopeePay', number: '083802687742', note: 'a/n amanbanget1' },
  DANA:      { type:'ewallet', instr: 'Transfer ke nomor DANA', number: '083802687742', note: 'a/n ilukggh' },
  OVO:       { type:'ewallet', instr: 'Transfer ke nomor OVO', number: '083802687742', note: 'a/n LuksDiaMon Official' },
  BRI:       { type:'bank', instr: 'Transfer ke rekening BRI', number: '(In Progres)', note: 'a/n LuksDiaMon Official' },
  BNI:       { type:'bank', instr: 'Transfer ke rekening BNI', number: '(In Progres)', note: 'a/n LuksDiaMon Official' },
  Mandiri:   { type:'bank', instr: 'Transfer ke rekening Mandiri', number: '(In Progres)', note: 'a/n LuksDiaMon Official' },
  QRIS:      { type:'qris', instr: 'Scan QR Code di bawah ini', number: null, note: 'Atas Nama : MOHAMAD ARSYAD ASSABIL, PULSA & INTERNET' },
};

/* ============================================================
   STATE
   ============================================================ */
let currentProduct = null;
let selectedNominal = null;
let selectedPayment = null;
let currentOrder = {};
let countdownTimer = null;
let isAdminLoggedIn = false;

/* ============================================================
   LOCALSTORAGE HELPERS
   ============================================================ */
const LS = {
  get: (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
  getProducts: () => LS.get('luksdiamon_products') || DEFAULT_PRODUCTS,
  getUsers: () => LS.get('luksdiamon_users') || [],
  getTransactions: () => LS.get('luksdiamon_transactions') || [],
  getSession: () => LS.get('luksdiamon_session'),
};

/* ============================================================
   INIT
   ============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    initApp();
  }, 2200);
});

function initApp() {
  renderProducts('all');
  checkSession();
  setupFadeIn();
  addRippleToButtons();
  startSlider();
  // Hash routing
  const hash = location.hash.replace('#','');
  if (hash === 'admin') navigate('admin');
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (page === 'admin') {
    if (isAdminLoggedIn) showAdminDash();
    else showAdminLogin();
  }
  if (page === 'status') {
    document.getElementById('status-result').innerHTML = '';
    document.getElementById('status-search-input').value = '';
    loadMyOrders();
    setTimeout(renderTransactionHistory, 100);
  }
  if (page === 'home') {
    // Show skeleton briefly then render real products
    showSkeletonGrid(6);
    setTimeout(() => renderProducts('all'), 150);
  }
  if (page === 'admin') location.hash = 'admin';
  else history.pushState(null, '', location.pathname);
}

/* ============================================================
   PRODUCT RENDERING
   ============================================================ */
function renderProducts(cat) {
  const grid = document.getElementById('product-grid');
  const products = LS.getProducts();
  const filtered = cat === 'all' ? products : products.filter(p => p.cat === cat);

  document.getElementById('product-count').textContent = filtered.length + ' produk tersedia';

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted);">
      <div style="font-size:3rem;margin-bottom:1rem;">🔍</div>
      <div>Belum ada produk di kategori ini</div>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => {
    const imgUrl = GAME_IMAGES[p.id];
    const gradient = GAME_COLORS[p.id] || 'linear-gradient(135deg,#1e1b4b,#7c3aed)';
    const imgHtml = imgUrl
      ? `<div class="product-img" style="position:relative;background:#0a0a14;height:140px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
           <img src="${imgUrl}" alt="${p.name}"
             style="height:140px;width:140px;object-fit:contain;"
             onerror="this.style.display='none'">
           <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 40%,rgba(0,0,0,0.45) 100%);pointer-events:none;"></div>
         </div>`
      : `<div class="product-img" style="position:relative;background:${gradient};height:140px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
           <div style="position:absolute;right:-20px;top:-20px;width:110px;height:110px;border-radius:50%;background:rgba(255,255,255,0.1);"></div>
           <div style="position:absolute;left:-15px;bottom:-15px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.07);"></div>
           <div style="text-align:center;position:relative;z-index:1;">
             <div style="font-size:3rem;line-height:1;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4));">${p.icon}</div>
             <div style="font-size:0.65rem;font-weight:800;color:rgba(255,255,255,0.9);letter-spacing:1.5px;text-transform:uppercase;margin-top:0.4rem;">${p.name}</div>
           </div>
           <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 50%,rgba(0,0,0,0.5) 100%);"></div>
         </div>`;
    return `
    <div class="product-card fade-in" style="animation-delay:${i * 0.06}s" onclick="openProduct('${p.id}')">
      ${imgHtml}
      <span class="product-badge badge-${p.cat}">${catLabel(p.cat)}</span>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">Mulai dari <strong>${formatRp(p.priceFrom)}</strong></div>
        <button class="product-btn" onclick="event.stopPropagation();openProduct('${p.id}')">
          <i class="fas fa-bolt" style="margin-right:0.3rem;"></i> Top Up
        </button>
      </div>
    </div>
  `;}).join('');

  setupFadeIn();
}

function catLabel(cat) {
  const m = { game:'Game', voucher:'Voucher', pulsa:'Pulsa', streaming:'Streaming' };
  return m[cat] || cat;
}

function filterProducts(cat) {
  document.querySelectorAll('.cat-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
  renderProducts(cat);
}

/* ============================================================
   PRODUCT DETAIL
   ============================================================ */
function openProduct(id) {
  const products = LS.getProducts();
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  selectedNominal = null;

  // Populate detail page
  const imgUrl = GAME_IMAGES[p.id];
  const gradient = GAME_COLORS[p.id] || 'linear-gradient(135deg,#1e1b4b,#7c3aed)';
  const bannerEl = document.getElementById('detail-banner');
  bannerEl.style.background = gradient;
  if (imgUrl) {
    bannerEl.innerHTML = `<img src="${imgUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;object-position:center;padding:0.5rem;box-sizing:border-box;" onerror="this.style.display='none'">`;
  } else {
    bannerEl.innerHTML = `
      <div style="position:absolute;inset:0;opacity:0.15;">
        <div style="position:absolute;right:-30px;top:-30px;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,0.3);"></div>
      </div>
      <div style="position:relative;z-index:1;text-align:center;">
        <div style="font-size:4rem;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.4));">${p.icon}</div>
        <div style="font-size:1rem;font-weight:800;color:rgba(255,255,255,0.95);letter-spacing:2px;text-transform:uppercase;margin-top:0.5rem;">${p.name}</div>
      </div>
    `;
  }
  document.getElementById('detail-title').textContent = p.name;
  document.getElementById('detail-desc').textContent = p.desc;
  document.getElementById('detail-cat').innerHTML = `<i class="fas fa-tag"></i> ${catLabel(p.cat)}`;

  // Zone ID visibility
  document.getElementById('zoneid-wrap').style.display = p.needZone ? '' : 'none';
  document.getElementById('input-userid').value = '';
  document.getElementById('input-zoneid').value = '';

  // Render nominals
  renderNominals(p);

  // Update input hints & validation
  updateInputHints();

  // Reset proceed
  updateProceedBtn();

  navigate('detail');
}

function renderNominals(p) {
  const grid = document.getElementById('nominal-grid');
  const nominals = p.nominals || [];
  grid.innerHTML = nominals.map(n => `
    <div class="nominal-card" id="nom-${n.id}" onclick="selectNominal('${n.id}')">
      ${n.badge ? `<div class="nominal-badge badge-${n.badge}">${n.badge === 'terlaris' ? 'TERLARIS' : 'HEMAT'}</div>` : ''}
      <div class="nominal-icon">💎</div>
      <div class="nominal-amount">${n.amount}</div>
      <div class="nominal-price">${formatRp(n.price)}</div>
    </div>
  `).join('');
}

function selectNominal(nid) {
  const p = currentProduct;
  const nom = p.nominals.find(n => n.id === nid);
  if (!nom) return;
  selectedNominal = nom;

  document.querySelectorAll('.nominal-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('nom-' + nid).classList.add('selected');

  updateProceedBtn();
}

function updateProceedBtn() {
  const btn = document.getElementById('btn-proceed');
  const txt = document.getElementById('proceed-text');
  if (selectedNominal) {
    btn.disabled = false;
    txt.textContent = `Lanjut Bayar — ${formatRp(selectedNominal.price)}`;
  } else {
    btn.disabled = true;
    txt.textContent = 'Pilih nominal terlebih dahulu';
  }
}

/* ============================================================
   PAYMENT
   ============================================================ */
function goToPayment() {
  if (!selectedNominal) return;
  if (!validateGameID()) return;

  const uid = document.getElementById('input-userid').value.trim();
  const zoneid = document.getElementById('input-zoneid').value.trim();

  currentOrder = {
    game: currentProduct.name,
    nominal: selectedNominal.amount,
    price: selectedNominal.price,
    userid: uid + (zoneid ? ' | ' + zoneid : ''),
    method: null,
  };

  document.getElementById('pay-game').textContent = currentOrder.game;
  document.getElementById('pay-nominal').textContent = currentOrder.nominal;
  document.getElementById('pay-id').textContent = currentOrder.userid;
  document.getElementById('pay-total').textContent = formatRp(currentOrder.price);

  selectedPayment = null;
  document.querySelectorAll('.method-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('btn-lanjutkan').disabled = true;

  navigate('payment');
}

function selectPayment(el, method) {
  document.querySelectorAll('.method-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedPayment = method;
  currentOrder.method = method;
  document.getElementById('btn-lanjutkan').disabled = false;
}

/* ============================================================
   CONFIRMATION
   ============================================================ */
function goToConfirm() {
  if (!selectedPayment) return;

  // Generate order number
  const rand = () => Math.random().toString(36).substr(2,4).toUpperCase();
  const orderNum = 'LDM-' + rand() + '-' + rand();
  currentOrder.orderNum = orderNum;
  currentOrder.time = new Date().toLocaleString('id-ID');

  // Fill confirm page
  document.getElementById('order-number').textContent = orderNum;
  document.getElementById('conf-game').textContent = currentOrder.game;
  document.getElementById('conf-nominal').textContent = currentOrder.nominal;
  document.getElementById('conf-id').textContent = currentOrder.userid;
  document.getElementById('conf-method').textContent = currentOrder.method;
  document.getElementById('conf-total').textContent = formatRp(currentOrder.price);

  // Payment instruction
  renderPaymentInstruction(currentOrder.method);

  // Reset status
  document.getElementById('status-waiting').style.display = 'flex';
  document.getElementById('status-detected').style.display = 'none';

  // Save transaction to localStorage
  saveTransaction(currentOrder);

  navigate('confirm');
  startCountdown();
}


function renderPaymentInstruction(method) {
  const info = PAYMENT_INFO[method];
  if (!info) return;
  const title = document.getElementById('instr-title');
  const body = document.getElementById('instr-body');
  title.textContent = info.instr;

  if (info.type === 'qris') {
    body.innerHTML = `
      <div style="display:flex;justify-content:center;padding:1rem;background:#fff;border-radius:var(--radius-md);margin-bottom:0.75rem;">
        <img src="./images/qris.jpg" alt="QRIS" style="width:220px;max-width:100%;height:auto;">
      </div>
      <div style="text-align:center;font-size:0.8rem;color:var(--text-muted);">${info.note}</div>
    `;
  } else {
    body.innerHTML = `
      <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.4rem;">${info.instr}</div>
      <div class="account-number">${info.number}</div>
      <div style="font-size:0.8rem;color:var(--text-muted);">${info.note}</div>
      <button class="copy-btn" onclick="copyText('${info.number}')">
        <i class="fas fa-copy"></i> Salin Nomor
      </button>
      <div style="margin-top:1rem;padding:0.75rem;border-radius:var(--radius-sm);background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.2);font-size:0.8rem;color:var(--warning);">
        ⚠️ Pastikan transfer sesuai nominal: <strong>${formatRp(currentOrder.price)}</strong>
      </div>
    `;
  }
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Nomor berhasil disalin!', 'success');
  });
}

/* ============================================================
   COUNTDOWN TIMER
   ============================================================ */
function startCountdown() {
  if (countdownTimer) clearInterval(countdownTimer);
  let t = 30;
  const numEl = document.getElementById('countdown-num');
  const circleEl = document.getElementById('circle-prog');
  const circumference = 2 * Math.PI * 35; // ~220

  circleEl.style.strokeDasharray = circumference;
  circleEl.style.strokeDashoffset = 0;

  countdownTimer = setInterval(() => {
    t--;
    numEl.textContent = t;
    const offset = circumference * (1 - t / 30);
    circleEl.style.strokeDashoffset = offset;

    if (t <= 0) {
      clearInterval(countdownTimer);
      // Show detected
      document.getElementById('status-waiting').style.display = 'none';
      const det = document.getElementById('status-detected');
      det.style.display = 'flex';
      showToast('Pembayaran terdeteksi! ✅', 'success');
    }
  }, 1000);
}

function completeTransaction() {
  launchConfetti();
  document.getElementById('success-overlay').classList.add('show');
}

function finishSuccess() {
  document.getElementById('success-overlay').classList.remove('show');
  currentOrder = {};
  currentProduct = null;
  selectedNominal = null;
  selectedPayment = null;
  navigate('home');
  showToast('Terima kasih telah top up di LuksDiaMon! 🎉', 'success');
}

/* ============================================================
   CONFETTI
   ============================================================ */
function launchConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#7c3aed','#3b82f6','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.top = '-20px';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 2 + 's';
    piece.style.animationDuration = (2 + Math.random() * 2) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.width = (8 + Math.random() * 8) + 'px';
    piece.style.height = (8 + Math.random() * 8) + 'px';
    container.appendChild(piece);
  }
}

/* ============================================================
   TRANSACTIONS (localStorage)
   ============================================================ */
function saveTransaction(order) {
  const session = LS.getSession();
  const txs = LS.getTransactions();
  txs.unshift({
    orderNum: order.orderNum,
    game: order.game,
    nominal: order.nominal,
    userid: order.userid,
    method: order.method,
    price: order.price,
    status: 'success',
    time: order.time,
    user: session ? session.email : 'Guest',
  });
  LS.set('luksdiamon_transactions', txs);
}

/* ============================================================
   AUTH SYSTEM
   ============================================================ */
function openAuthModal() {
  document.getElementById('auth-modal').classList.add('open');
}
function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('open');
}
document.getElementById('auth-modal').addEventListener('click', function(e) {
  if (e.target === this) closeAuthModal();
});

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t, i) => {
    t.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'register'));
  });
  document.getElementById('form-login').classList.toggle('active', tab === 'login');
  document.getElementById('form-register').classList.toggle('active', tab === 'register');
  // Clear errors
  document.getElementById('login-err').classList.remove('show');
  document.getElementById('reg-err').classList.remove('show');
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  const errEl = document.getElementById('login-err');

  if (!email || !isValidEmail(email)) {
    showAuthErr(errEl, 'Masukkan email yang valid!'); return;
  }
  if (pass.length < 6) {
    showAuthErr(errEl, 'Password minimal 6 karakter!'); return;
  }

  const users = LS.getUsers();
  const user = users.find(u => u.email === email && u.password === simpleHash(pass));
  if (!user) {
    showAuthErr(errEl, 'Email atau password salah!'); return;
  }

  LS.set('luksdiamon_session', { email: user.email, name: user.name });
  closeAuthModal();
  updateNavUser({ name: user.name });
  showToast('Selamat datang, ' + user.name + '! 👋', 'success');
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  const errEl = document.getElementById('reg-err');

  if (!name) { showAuthErr(errEl, 'Nama tidak boleh kosong!'); return; }
  if (!email || !isValidEmail(email)) { showAuthErr(errEl, 'Masukkan email yang valid!'); return; }
  if (pass.length < 6) { showAuthErr(errEl, 'Password minimal 6 karakter!'); return; }

  const users = LS.getUsers();
  if (users.find(u => u.email === email)) {
    showAuthErr(errEl, 'Email sudah terdaftar!'); return;
  }

  users.push({ name, email, password: simpleHash(pass), createdAt: new Date().toLocaleString('id-ID') });
  LS.set('luksdiamon_users', users);
  LS.set('luksdiamon_session', { email, name });
  closeAuthModal();
  updateNavUser({ name });
  showToast('Akun berhasil dibuat! Selamat datang, ' + name + '! 🎉', 'success');
}

function logout() {
  localStorage.removeItem('luksdiamon_session');
  document.getElementById('btn-login').classList.remove('hidden');
  document.getElementById('user-menu-wrap').classList.add('hidden');
  document.getElementById('user-dropdown').style.display = 'none';
  showToast('Berhasil keluar. Sampai jumpa!', 'info');
}

function checkSession() {
  const session = LS.getSession();
  if (session) updateNavUser(session);
}

function updateNavUser(user) {
  document.getElementById('btn-login').classList.add('hidden');
  document.getElementById('user-menu-wrap').classList.remove('hidden');
  document.getElementById('nav-username').textContent = user.name.split(' ')[0];
  document.getElementById('nav-avatar').textContent = user.name.charAt(0).toUpperCase();
}

function toggleUserDropdown() {
  const d = document.getElementById('user-dropdown');
  d.style.display = d.style.display === 'none' ? 'block' : 'none';
}
document.addEventListener('click', (e) => {
  const menu = document.getElementById('user-menu-wrap');
  const dd = document.getElementById('user-dropdown');
  if (dd && !menu.contains(e.target)) dd.style.display = 'none';
});

function showAuthErr(el, msg) {
  el.textContent = msg; el.classList.add('show');
}

function isValidEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function simpleHash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h.toString(36);
}

/* ============================================================
   ADMIN
   ============================================================ */
function adminLogin() {
  const u = document.getElementById('admin-user').value;
  const p = document.getElementById('admin-pass').value;
  const err = document.getElementById('admin-err');
  if (u === 'admin' && p === 'luksdiamon123') {
    isAdminLoggedIn = true;
    err.classList.remove('show');
    showAdminDash();
  } else {
    err.classList.add('show');
  }
}

function adminLogout() {
  isAdminLoggedIn = false;
  showAdminLogin();
}

function showAdminLogin() {
  document.getElementById('admin-login-section').style.display = 'flex';
  document.getElementById('admin-dash-section').classList.remove('active');
}

function showAdminDash() {
  document.getElementById('admin-login-section').style.display = 'none';
  document.getElementById('admin-dash-section').classList.add('active');
  renderAdminStats();
  renderTxTable();
  renderProdTable();
  renderUsersTable();
}

function renderAdminStats() {
  const txs = LS.getTransactions();
  const users = LS.getUsers();
  const today = new Date().toLocaleDateString('id-ID');
  const todayTx = txs.filter(t => t.time.startsWith(today.split('/').reverse().join('/')));
  const totalRev = txs.reduce((s,t) => s + (t.price||0), 0);

  const grid = document.getElementById('admin-stats-grid');
  const stats = [
    { icon:'📦', label:'Total Transaksi', value: txs.length, bg:'rgba(124,58,237,0.15)', color:'var(--purple-light)' },
    { icon:'💰', label:'Total Pendapatan', value: formatRp(totalRev), bg:'rgba(16,185,129,0.15)', color:'var(--success)' },
    { icon:'👥', label:'Pengguna Terdaftar', value: users.length, bg:'rgba(6,182,212,0.15)', color:'var(--cyan)' },
    { icon:'📅', label:'Transaksi Hari Ini', value: todayTx.length, bg:'rgba(245,158,11,0.15)', color:'var(--warning)' },
  ];
  grid.innerHTML = stats.map(s => `
    <div class="stat-card">
      <div class="stat-icon" style="background:${s.bg};color:${s.color};font-size:1.5rem;">
        ${s.icon}
      </div>
      <div>
        <div class="stat-value" style="color:${s.color};">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    </div>
  `).join('');
}

function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + tab).classList.add('active');
}

function renderTxTable() {
  const txs = LS.getTransactions();
  const tbody = document.getElementById('tx-tbody');
  if (txs.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--text-muted);">Belum ada transaksi</td></tr>';
    return;
  }
  tbody.innerHTML = txs.map(t => `
    <tr>
      <td><span style="font-weight:700;color:var(--cyan);">${t.orderNum}</span></td>
      <td>${t.game}</td>
      <td>${t.nominal}</td>
      <td style="font-family:monospace;">${t.userid}</td>
      <td>${t.method}</td>
      <td style="color:var(--success);font-weight:600;">${formatRp(t.price)}</td>
      <td><span class="status-badge status-success">Sukses</span></td>
      <td style="font-size:0.78rem;color:var(--text-muted);">${t.time}</td>
    </tr>
  `).join('');
}

function renderProdTable() {
  const products = LS.getProducts();
  const tbody = document.getElementById('prod-tbody');
  tbody.innerHTML = products.map(p => `
    <tr>
      <td><span style="margin-right:0.5rem;">${p.icon}</span><strong>${p.name}</strong></td>
      <td><span class="product-badge badge-${p.cat}" style="position:relative;top:auto;left:auto;">${catLabel(p.cat)}</span></td>
      <td style="color:var(--cyan);">${formatRp(p.priceFrom)}</td>
      <td>
        <button class="btn-edit" onclick="editProduct('${p.id}')"><i class="fas fa-edit"></i></button>
        <button class="btn-danger" onclick="deleteProduct('${p.id}')"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
}

function renderUsersTable() {
  const users = LS.getUsers();
  const tbody = document.getElementById('users-tbody');
  if (users.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;padding:2rem;color:var(--text-muted);">Belum ada pengguna terdaftar</td></tr>';
    return;
  }
  tbody.innerHTML = users.map(u => `
    <tr>
      <td><strong>${u.name}</strong></td>
      <td style="color:var(--text-secondary);">${u.email}</td>
      <td style="font-size:0.78rem;color:var(--text-muted);">${u.createdAt}</td>
    </tr>
  `).join('');
}

function saveProduct() {
  const id = document.getElementById('f-edit-id').value;
  const name = document.getElementById('f-name').value.trim();
  const cat = document.getElementById('f-cat').value;
  const icon = document.getElementById('f-icon').value.trim() || '🎮';
  const price = parseInt(document.getElementById('f-price').value) || 0;
  const desc = document.getElementById('f-desc').value.trim();
  const needZone = document.getElementById('f-zone').value === 'true';

  if (!name) { showToast('Nama produk wajib diisi!', 'error'); return; }

  const products = LS.getProducts();

  if (id) {
    // Edit
    const idx = products.findIndex(p => p.id === id);
    if (idx > -1) {
      products[idx] = { ...products[idx], name, cat, icon, priceFrom: price, desc, needZone };
    }
    showToast('Produk berhasil diperbarui!', 'success');
  } else {
    // Add
    const newId = 'prod_' + Date.now();
    products.push({ id: newId, name, cat, icon, priceFrom: price, desc, needZone, nominals: [
      { id: newId + '_1', amount: '100 Item', price: price, badge: null },
    ]});
    showToast('Produk berhasil ditambahkan!', 'success');
  }

  LS.set('luksdiamon_products', products);
  cancelEdit();
  renderProdTable();
  renderProducts('all');
}

function editProduct(id) {
  const products = LS.getProducts();
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('f-edit-id').value = p.id;
  document.getElementById('f-name').value = p.name;
  document.getElementById('f-cat').value = p.cat;
  document.getElementById('f-icon').value = p.icon;
  document.getElementById('f-price').value = p.priceFrom;
  document.getElementById('f-desc').value = p.desc || '';
  document.getElementById('f-zone').value = String(p.needZone);
  document.getElementById('prod-form-title').textContent = '✏️ Edit Produk: ' + p.name;
  document.getElementById('btn-cancel-edit').classList.remove('hidden');
  document.querySelector('#panel-products .product-form-wrap').scrollIntoView({ behavior:'smooth' });
}

function deleteProduct(id) {
  if (!confirm('Hapus produk ini?')) return;
  let products = LS.getProducts();
  products = products.filter(p => p.id !== id);
  LS.set('luksdiamon_products', products);
  showToast('Produk dihapus!', 'info');
  renderProdTable();
  renderProducts('all');
}

function cancelEdit() {
  document.getElementById('f-edit-id').value = '';
  document.getElementById('f-name').value = '';
  document.getElementById('f-cat').value = 'game';
  document.getElementById('f-icon').value = '';
  document.getElementById('f-price').value = '';
  document.getElementById('f-desc').value = '';
  document.getElementById('f-zone').value = 'true';
  document.getElementById('prod-form-title').textContent = '➕ Tambah Produk Baru';
  document.getElementById('btn-cancel-edit').classList.add('hidden');
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function toggleMobile() {
  const hb = document.getElementById('hamburger');
  const mm = document.getElementById('mobile-menu');
  hb.classList.toggle('open');
  mm.classList.toggle('open');
}
function closeMobile() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg, type = 'info') {
  const icons = { success:'✅', error:'❌', info:'ℹ️' };
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type]||''}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateX(100px)'; toast.style.transition='0.3s ease'; setTimeout(()=>toast.remove(), 300); }, 3000);
}

/* ============================================================
   FADE-IN ON SCROLL
   ============================================================ */
function setupFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ============================================================
   RIPPLE EFFECT
   ============================================================ */
function addRippleToButtons() {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-primary, .btn-proceed, .auth-btn, .btn-complete, .product-btn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = (e.clientX - rect.left - Math.max(rect.width, rect.height)/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - Math.max(rect.width, rect.height)/2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

/* ============================================================
   FORMAT RUPIAH
   ============================================================ */
function formatRp(n) {
  return 'Rp ' + Number(n).toLocaleString('id-ID');
}

/* ============================================================
   FEATURE CARDS FADE-IN
   ============================================================ */
document.querySelectorAll('.feature-card').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.animationDelay = i * 0.1 + 's';
});

/* ============================================================
   VALIDASI USER ID & ZONE ID
   ============================================================ */
const GAME_VALIDATION = {
  'ml':   { userPattern: /^\d{6,12}$/, zonePattern: /^\d{1,6}$/, userHint: 'User ID ML: 6-12 angka', zoneHint: 'Zone ID ML: 1-6 angka' },
  'ff':   { userPattern: /^\d{6,12}$/, zonePattern: null,         userHint: 'ID Free Fire: 6-12 angka', zoneHint: '' },
  'pubg': { userPattern: /^\d{7,15}$/, zonePattern: null,         userHint: 'ID PUBG Mobile: 7-15 angka', zoneHint: '' },
  'gi':   { userPattern: /^\d{6,12}$/, zonePattern: /^\d{1,4}$/,  userHint: 'UID Genshin: 6-12 angka', zoneHint: 'Server ID: 1-4 angka' },
  'val':  { userPattern: /^[a-zA-Z0-9#]{3,20}$/, zonePattern: null, userHint: 'Riot ID (contoh: NamaKamu#1234)', zoneHint: '' },
  'hok':  { userPattern: /^\d{6,12}$/, zonePattern: /^\d{1,6}$/,  userHint: 'ID HoK: 6-12 angka', zoneHint: 'Zone ID: 1-6 angka' },
  'coc':  { userPattern: /^#[A-Z0-9]{6,12}$|^[A-Z0-9]{6,12}$/i, zonePattern: null, userHint: 'Player Tag CoC (contoh: #ABC123)', zoneHint: '' },
  'codm': { userPattern: /^\d{6,15}$/, zonePattern: null,         userHint: 'ID CoD Mobile: 6-15 angka', zoneHint: '' },
  'rob':  { userPattern: /^\d{5,12}$/, zonePattern: null,         userHint: 'User ID Roblox: 5-12 angka', zoneHint: '' },
  'au':   { userPattern: /^\d{4,12}$/, zonePattern: null,         userHint: 'ID Among Us: 4-12 angka', zoneHint: '' },
  'sg':   { userPattern: /^\d{4,12}$/, zonePattern: null,         userHint: 'ID Stumble Guys: 4-12 angka', zoneHint: '' },
};

function validateGameID() {
  if (!currentProduct) return true;
  const v = GAME_VALIDATION[currentProduct.id];
  if (!v) return true;

  const uid = document.getElementById('input-userid').value.trim();
  const zid = document.getElementById('input-zoneid').value.trim();
  const uidInput = document.getElementById('input-userid');
  const zidInput = document.getElementById('input-zoneid');

  // Reset styles
  uidInput.style.borderColor = '';
  if (zidInput) zidInput.style.borderColor = '';

  // Validate User ID
  if (!uid) {
    showFieldError(uidInput, 'User ID tidak boleh kosong!');
    return false;
  }
  if (!v.userPattern.test(uid)) {
    showFieldError(uidInput, v.userHint);
    return false;
  }

  // Validate Zone ID if needed
  if (currentProduct.needZone && v.zonePattern) {
    if (!zid) {
      showFieldError(zidInput, 'Zone ID tidak boleh kosong!');
      return false;
    }
    if (!v.zonePattern.test(zid)) {
      showFieldError(zidInput, v.zoneHint);
      return false;
    }
  }

  return true;
}

function showFieldError(inputEl, message) {
  inputEl.style.borderColor = 'var(--danger)';
  inputEl.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.2)';
  showToast('⚠️ ' + message, 'error');
  inputEl.focus();
  // Auto reset border after 3s
  setTimeout(() => {
    inputEl.style.borderColor = '';
    inputEl.style.boxShadow = '';
  }, 3000);
}

function showFieldSuccess(inputEl) {
  inputEl.style.borderColor = 'var(--success)';
  inputEl.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.2)';
}

// Update hint text dynamically when product opens
function updateInputHints() {
  if (!currentProduct) return;
  const v = GAME_VALIDATION[currentProduct.id];
  if (!v) return;
  const uidInput = document.getElementById('input-userid');
  const zidInput = document.getElementById('input-zoneid');
  uidInput.placeholder = v.userHint || 'Masukkan User ID';
  if (zidInput && v.zoneHint) zidInput.placeholder = v.zoneHint;
  // Live validation on input
  uidInput.oninput = () => {
    if (v.userPattern.test(uidInput.value.trim())) {
      showFieldSuccess(uidInput);
    } else {
      uidInput.style.borderColor = '';
      uidInput.style.boxShadow = '';
    }
  };
  if (zidInput && v.zonePattern) {
    zidInput.oninput = () => {
      if (v.zonePattern.test(zidInput.value.trim())) {
        showFieldSuccess(zidInput);
      } else {
        zidInput.style.borderColor = '';
        zidInput.style.boxShadow = '';
      }
    };
  }
}

/* ============================================================
   CEK STATUS ORDER
   ============================================================ */
function searchOrderStatus() {
  const input = document.getElementById('status-search-input').value.trim().toUpperCase();
  const resultEl = document.getElementById('status-result');

  if (!input) {
    resultEl.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--danger);">
      <i class="fas fa-exclamation-circle" style="font-size:2rem;margin-bottom:0.75rem;display:block;"></i>
      Masukkan nomor order terlebih dahulu!
    </div>`;
    return;
  }

  if (!input.startsWith('LDM-') || input.length < 10) {
    resultEl.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--warning);">
      <i class="fas fa-question-circle" style="font-size:2rem;margin-bottom:0.75rem;display:block;"></i>
      Format nomor order tidak valid.<br>
      <span style="font-size:0.8rem;color:var(--text-muted);">Contoh yang benar: LDM-ABCD-EFGH</span>
    </div>`;
    return;
  }

  const txs = LS.getTransactions();
  const tx = txs.find(t => t.orderNum === input);

  if (!tx) {
    resultEl.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
      <i class="fas fa-search" style="font-size:2rem;margin-bottom:0.75rem;display:block;"></i>
      <strong style="color:var(--text-primary);">Order tidak ditemukan</strong><br>
      <span style="font-size:0.8rem;">Pastikan nomor order sudah benar. Nomor order ada di halaman konfirmasi saat kamu checkout.</span>
    </div>`;
    return;
  }

  renderOrderCard(tx, resultEl);
}

function renderOrderCard(tx, container) {
  const statusColor = tx.status === 'success' ? 'var(--success)' : tx.status === 'pending' ? 'var(--warning)' : 'var(--danger)';
  const statusIcon = tx.status === 'success' ? 'fa-check-circle' : tx.status === 'pending' ? 'fa-clock' : 'fa-times-circle';
  const statusText = tx.status === 'success' ? 'SUKSES' : tx.status === 'pending' ? 'MENUNGGU' : 'GAGAL';

  container.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--border-glass);border-radius:var(--radius-lg);overflow:hidden;">
      <!-- Status header -->
      <div style="padding:1.25rem 1.5rem;background:rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border-glass);">
        <div>
          <div style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:0.25rem;">Nomor Order</div>
          <div style="font-size:1.1rem;font-weight:800;color:var(--cyan);letter-spacing:2px;">${tx.orderNum}</div>
        </div>
        <div style="display:flex;align-items:center;gap:0.5rem;background:rgba(0,0,0,0.3);padding:0.5rem 1rem;border-radius:var(--radius-xl);border:1px solid ${statusColor}33;">
          <i class="fas ${statusIcon}" style="color:${statusColor};"></i>
          <span style="font-size:0.85rem;font-weight:700;color:${statusColor};">${statusText}</span>
        </div>
      </div>
      <!-- Details -->
      <div style="padding:1.5rem;">
        <div style="display:grid;gap:0.75rem;">
          ${orderRow('Game', tx.game)}
          ${orderRow('Nominal', tx.nominal)}
          ${orderRow('ID Game', `<code style="background:rgba(255,255,255,0.05);padding:0.2rem 0.5rem;border-radius:4px;">${tx.userid}</code>`)}
          ${orderRow('Metode Bayar', tx.method)}
          ${orderRow('Total', `<strong style="color:var(--cyan);font-size:1rem;">${formatRp(tx.price)}</strong>`)}
          ${orderRow('Waktu', tx.time)}
        </div>
        ${tx.status === 'success' ? `
        <div style="margin-top:1.25rem;padding:0.85rem 1rem;border-radius:var(--radius-md);background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.25);display:flex;align-items:center;gap:0.75rem;">
          <i class="fas fa-check-circle" style="color:var(--success);font-size:1.25rem;flex-shrink:0;"></i>
          <div style="font-size:0.82rem;color:var(--success);">
            <strong>Transaksi berhasil!</strong> Diamond/item sudah dikirim ke akun game kamu.
          </div>
        </div>` : ''}
      </div>
    </div>
  `;
}

function orderRow(label, value) {
  return `<div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border-glass);font-size:0.875rem;">
    <span style="color:var(--text-muted);">${label}</span>
    <span style="font-weight:600;text-align:right;">${value}</span>
  </div>`;
}

function loadMyOrders() {
  const session = LS.getSession();
  const wrap = document.getElementById('status-my-orders');
  const list = document.getElementById('status-orders-list');
  if (!session || !wrap || !list) return;

  const txs = LS.getTransactions().filter(t => t.user === session.email);
  if (txs.length === 0) {
    wrap.style.display = 'block';
    list.innerHTML = `<div style="text-align:center;padding:1.5rem;color:var(--text-muted);font-size:0.85rem;">Belum ada riwayat order.</div>`;
    return;
  }

  wrap.style.display = 'block';
  list.innerHTML = txs.slice(0, 5).map(tx => {
    const statusColor = tx.status === 'success' ? 'var(--success)' : 'var(--warning)';
    const statusText = tx.status === 'success' ? 'Sukses' : 'Pending';
    return `
    <div style="background:var(--bg-secondary);border:1px solid var(--border-glass);border-radius:var(--radius-md);padding:1rem 1.25rem;margin-bottom:0.75rem;cursor:pointer;transition:var(--transition);"
      onmouseover="this.style.borderColor='rgba(124,58,237,0.4)'" onmouseout="this.style.borderColor='var(--border-glass)'"
      onclick="document.getElementById('status-search-input').value='${tx.orderNum}';searchOrderStatus();">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div style="font-size:0.78rem;font-weight:700;color:var(--cyan);">${tx.orderNum}</div>
          <div style="font-size:0.88rem;font-weight:600;margin-top:0.2rem;">${tx.game} — ${tx.nominal}</div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.15rem;">${tx.time}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.9rem;font-weight:700;color:var(--cyan);">${formatRp(tx.price)}</div>
          <div style="font-size:0.72rem;font-weight:600;color:${statusColor};margin-top:0.25rem;">${statusText}</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ============================================================
   PROMO BANNER SLIDER
   ============================================================ */
let currentSlide = 0;
let sliderTimer = null;

function goToSlide(idx) {
  const slides = document.querySelectorAll('.promo-slide');
  const dots = document.querySelectorAll('.promo-dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = idx % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }

function startSlider() {
  if (sliderTimer) clearInterval(sliderTimer);
  sliderTimer = setInterval(nextSlide, 4000);
}

/* ============================================================
   FAQ TOGGLE
   ============================================================ */
function toggleFaq(el) {
  const answer = el.nextElementSibling;
  const isOpen = el.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  // Open clicked (if it was closed)
  if (!isOpen) {
    el.classList.add('open');
    answer.classList.add('open');
  }
}

/* ============================================================
   WA ORDER — buat pesan otomatis dari order aktif
   ============================================================ */
function orderViaWA() {
  let msg = 'Halo LDM, saya mau order top up:\n';
  if (currentOrder && currentOrder.game) {
    msg += `Game: ${currentOrder.game}\n`;
    msg += `Nominal: ${currentOrder.nominal}\n`;
    msg += `ID Game: ${currentOrder.userid}\n`;
    msg += `Total: ${formatRp(currentOrder.price)}\n`;
    if (currentOrder.orderNum) msg += `No. Order: ${currentOrder.orderNum}\n`;
  }
  const url = 'https://wa.me/6283802687742?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
}

/* ============================================================
   LIVE TRANSACTION COUNTER
   ============================================================ */
function initLiveCounter() {
  // Base: transaksi dari localStorage + seed berdasarkan tanggal
  const today = new Date().toDateString();
  const seed = LS.get('luksdiamon_daily_seed');
  let base;
  if (!seed || seed.date !== today) {
    base = 120 + Math.floor(Math.random() * 80); // 120-200 transaksi awal hari ini
    LS.set('luksdiamon_daily_seed', { date: today, base });
  } else {
    base = seed.base;
  }

  const realTxs = LS.getTransactions().filter(tx => {
    const txDate = new Date(tx.time).toDateString();
    return txDate === today;
  }).length;

  let count = base + realTxs;
  const el = document.getElementById('stat-today');
  if (!el) return;

  // Animate count up
  let display = Math.max(0, count - 30);
  const interval = setInterval(() => {
    display++;
    if (el) el.textContent = display.toLocaleString('id-ID');
    if (display >= count) clearInterval(interval);
  }, 30);

  // Increment every 45-90 detik secara random (simulasi live)
  function scheduleNext() {
    const delay = 45000 + Math.random() * 45000;
    setTimeout(() => {
      count++;
      if (el) {
        el.textContent = count.toLocaleString('id-ID');
        el.style.transform = 'scale(1.2)';
        el.style.color = '#10b981';
        setTimeout(() => { el.style.transform = ''; el.style.color = 'var(--cyan)'; }, 400);
      }
      scheduleNext();
    }, delay);
  }
  scheduleNext();
}

/* ============================================================
   FOMO POPUP "Baru saja dibeli"
   ============================================================ */
const FOMO_DATA = [
  { name: 'Rangga_GG', item: '86 Diamond ML', icon: '⚔️' },
  { name: 'Nanda_FF', item: '100 Diamond FF', icon: '🔥' },
  { name: 'DzikryPUBG', item: '60 UC PUBG', icon: '🪖' },
  { name: 'Alya_Traveler', item: 'Welkin Moon GI', icon: '✨' },
  { name: 'FajarVal', item: '475 VP Valorant', icon: '🎯' },
  { name: 'Sarah_Music', item: 'Spotify 1 Bulan', icon: '🎵' },
  { name: 'BudiCODM', item: 'CP 80 CoD Mobile', icon: '💥' },
  { name: 'Rina_CoC', item: '500 Gems CoC', icon: '⚡' },
  { name: 'Hendra_Steam', item: 'Steam 50rb', icon: '🎮' },
  { name: 'Lisa_NF', item: 'Netflix 1 Bulan', icon: '🎬' },
  { name: 'TokoGamer22', item: '172 Diamond ML', icon: '⚔️' },
  { name: 'ProGamer_ID', item: '325 UC PUBG', icon: '🪖' },
  { name: 'Mika_Weeb', item: 'Primogem GI', icon: '✨' },
  { name: 'JohnWickFF', item: '520 Diamond FF', icon: '🔥' },
];

function showFomoPopup() {
  const popup = document.getElementById('fomo-popup');
  if (!popup) return;
  const data = FOMO_DATA[Math.floor(Math.random() * FOMO_DATA.length)];
  const times = ['baru saja', '1 menit lalu', '2 menit lalu', 'beberapa detik lalu'];

  document.getElementById('fomo-icon').textContent = data.icon;
  document.getElementById('fomo-name').textContent = data.name;
  document.getElementById('fomo-item').textContent = data.item;
  document.getElementById('fomo-time').textContent = times[Math.floor(Math.random() * times.length)];

  popup.style.transform = 'translateX(0)';
  setTimeout(() => { popup.style.transform = 'translateX(-120%)'; }, 4000);
}

function initFomoPopup() {
  // Show first popup after 3 detik
  setTimeout(() => {
    showFomoPopup();
    // Lanjut setiap 18-35 detik
    function scheduleNext() {
      const delay = 18000 + Math.random() * 17000;
      setTimeout(() => { showFomoPopup(); scheduleNext(); }, delay);
    }
    scheduleNext();
  }, 3000);
}

/* ============================================================
   COPY ORDER ID
   ============================================================ */
function copyOrderId(orderNum) {
  if (!orderNum) return;
  navigator.clipboard.writeText(orderNum).then(() => {
    showToast('No. Order ' + orderNum + ' berhasil disalin! 📋', 'success');
  }).catch(() => {
    // Fallback
    const el = document.createElement('textarea');
    el.value = orderNum;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast('No. Order disalin! 📋', 'success');
  });
}

/* ============================================================
   HISTORY TRANSAKSI — improved UI
   ============================================================ */
function renderTransactionHistory() {
  const txs = LS.getTransactions();
  const session = LS.getSession();
  const container = document.getElementById('history-list');
  if (!container) return;

  if (!session) {
    container.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
      <div style="font-size:2rem;margin-bottom:0.5rem;">🔐</div>
      <div>Login dulu untuk melihat riwayat transaksi</div>
      <button onclick="openAuthModal()" style="margin-top:1rem;padding:0.6rem 1.5rem;background:var(--grad-btn);border:none;border-radius:var(--radius-xl);color:#fff;font-weight:700;cursor:pointer;">Login Sekarang</button>
    </div>`;
    return;
  }

  const myTxs = txs.filter(tx => tx.user === session.email);
  if (myTxs.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
      <div style="font-size:2rem;margin-bottom:0.5rem;">📭</div>
      <div>Belum ada transaksi. Yuk top up pertamamu!</div>
      <button onclick="navigate('home')" style="margin-top:1rem;padding:0.6rem 1.5rem;background:var(--grad-btn);border:none;border-radius:var(--radius-xl);color:#fff;font-weight:700;cursor:pointer;">Mulai Top Up</button>
    </div>`;
    return;
  }

  container.innerHTML = myTxs.map(tx => `
    <div style="background:var(--bg-glass);border:1px solid var(--border-glass);border-radius:var(--radius-lg);padding:1rem;display:flex;align-items:center;gap:0.85rem;margin-bottom:0.75rem;">
      <div style="width:42px;height:42px;border-radius:50%;background:var(--grad-btn);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">
        ${DEFAULT_PRODUCTS.find(p=>p.name===tx.game)?.icon || '💎'}
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:0.88rem;">${tx.game}</div>
        <div style="font-size:0.78rem;color:var(--text-muted);">${tx.nominal}</div>
        <div style="font-size:0.72rem;color:var(--text-muted);margin-top:0.15rem;">${new Date(tx.time).toLocaleString('id-ID')}</div>
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="font-weight:800;font-size:0.9rem;color:var(--cyan);">${formatRp(tx.price)}</div>
        <div style="font-size:0.7rem;margin-top:0.2rem;padding:0.15rem 0.5rem;background:rgba(16,185,129,0.15);color:#10b981;border-radius:var(--radius-xl);display:inline-block;">✓ Sukses</div>
        <button onclick="copyOrderId('${tx.orderNum}')" title="Salin No. Order"
          style="display:block;margin-top:0.3rem;width:100%;background:transparent;border:1px solid var(--border-glass);border-radius:var(--radius-md);padding:0.2rem 0.4rem;font-size:0.68rem;color:var(--text-muted);cursor:pointer;">
          📋 ${tx.orderNum}
        </button>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   INIT ALL NEW FEATURES ON PAGE LOAD
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLiveCounter();
  initFomoPopup();
});

/* ============================================================
   DARK / LIGHT MODE TOGGLE
   ============================================================ */
function initTheme() {
  const saved = localStorage.getItem('luksdiamon_theme') || 'dark';
  applyTheme(saved);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'light' ? '☀️' : '🌙';
  localStorage.setItem('luksdiamon_theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  showToast(next === 'light' ? '☀️ Mode Terang aktif!' : '🌙 Mode Gelap aktif!', 'info');
}

/* ============================================================
   SKELETON LOADING
   ============================================================ */
function showSkeletonGrid(count = 6) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = Array.from({ length: count }).map(() => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-img"></div>
      <div class="skeleton skeleton-line"></div>
      <div class="skeleton skeleton-line short"></div>
      <div class="skeleton skeleton-btn"></div>
    </div>
  `).join('');
}

/* navigate patched via about page handled in original navigate function below */


