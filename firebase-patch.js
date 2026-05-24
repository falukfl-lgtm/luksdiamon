/* ============================================================
   FIREBASE INTEGRATION PATCH — LuksDiaMon
   Tambahkan file ini SEBELUM script.js di index.html:
   <script type="module" src="firebase-patch.js"></script>
   ============================================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, collection, addDoc, getDocs,
  query, where, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* ── Firebase Config ── */
const firebaseConfig = {
  apiKey: "AIzaSyCySb1KvN_2VoVQ6J_bxpebjMOrskXc1Ps",
  authDomain: "luksdiamon-939e8.firebaseapp.com",
  projectId: "luksdiamon-939e8",
  storageBucket: "luksdiamon-939e8.firebasestorage.app",
  messagingSenderId: "3795079446",
  appId: "1:3795079446:web:dc7ec8028985ce28f54037"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

/* ============================================================
   AUTH STATE — pantau login/logout otomatis
   ============================================================ */
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Ambil data user dari Firestore
    const data = await getUserData(user.uid);
    const name = data?.username || user.email.split('@')[0];
    // Update navbar
    if (typeof updateNavUser === 'function') {
      updateNavUser({ name });
    }
    // Simpan ke session sementara
    window._fbUser = { uid: user.uid, email: user.email, name };
  } else {
    window._fbUser = null;
    // Reset navbar ke tombol login
    const btnLogin = document.getElementById('btn-login');
    const menuWrap = document.getElementById('user-menu-wrap');
    if (btnLogin) btnLogin.classList.remove('hidden');
    if (menuWrap) menuWrap.classList.add('hidden');
  }
});

/* ── Ambil data user dari Firestore ── */
async function getUserData(uid) {
  try {
    const q = query(collection(db, 'users'), where('uid', '==', uid));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    return snap.docs[0].data();
  } catch { return null; }
}

/* ============================================================
   OVERRIDE: doLogin — pakai Firebase Auth
   ============================================================ */
window.doLogin = async function() {
  const email  = document.getElementById('login-email').value.trim();
  const pass   = document.getElementById('login-pass').value;
  const errEl  = document.getElementById('login-err');
  const btn    = document.querySelector('#form-login .auth-btn');

  if (!email || !isValidEmail(email)) { showAuthErr(errEl, 'Masukkan email yang valid!'); return; }
  if (pass.length < 6) { showAuthErr(errEl, 'Password minimal 6 karakter!'); return; }

  const origText = btn ? btn.textContent : '';
  if (btn) { btn.textContent = 'Memuat...'; btn.disabled = true; }

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    closeAuthModal();
    showToast('Selamat datang kembali! 👋', 'success');
  } catch(e) {
    const msg = e.code === 'auth/user-not-found' || e.code === 'auth/wrong-password' || e.code === 'auth/invalid-credential'
      ? 'Email atau password salah!' : 'Gagal login. Coba lagi.';
    showAuthErr(errEl, msg);
  } finally {
    if (btn) { btn.textContent = origText; btn.disabled = false; }
  }
};

/* ============================================================
   OVERRIDE: doRegister — pakai Firebase Auth + Firestore
   ============================================================ */
window.doRegister = async function() {
  const name   = document.getElementById('reg-name').value.trim();
  const email  = document.getElementById('reg-email').value.trim();
  const pass   = document.getElementById('reg-pass').value;
  const errEl  = document.getElementById('reg-err');
  const btn    = document.querySelector('#form-register .auth-btn');

  if (!name)                         { showAuthErr(errEl, 'Nama tidak boleh kosong!'); return; }
  if (!email || !isValidEmail(email)) { showAuthErr(errEl, 'Masukkan email yang valid!'); return; }
  if (pass.length < 6)               { showAuthErr(errEl, 'Password minimal 6 karakter!'); return; }

  const origText = btn ? btn.textContent : '';
  if (btn) { btn.textContent = 'Mendaftar...'; btn.disabled = true; }

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    // Simpan data user ke Firestore
    await addDoc(collection(db, 'users'), {
      uid: cred.user.uid,
      email,
      username: name,
      role: 'user',
      createdAt: serverTimestamp()
    });
    closeAuthModal();
    showToast('Akun berhasil dibuat! Selamat datang, ' + name + '! 🎉', 'success');
  } catch(e) {
    const msg = e.code === 'auth/email-already-in-use'
      ? 'Email sudah terdaftar!' : 'Gagal daftar. Coba lagi.';
    showAuthErr(errEl, msg);
  } finally {
    if (btn) { btn.textContent = origText; btn.disabled = false; }
  }
};

/* ============================================================
   OVERRIDE: logout — pakai Firebase signOut
   ============================================================ */
window.logout = async function() {
  await signOut(auth);
  const dd = document.getElementById('user-dropdown');
  if (dd) dd.style.display = 'none';
  showToast('Berhasil keluar. Sampai jumpa!', 'info');
};

/* ============================================================
   OVERRIDE: saveTransaction — simpan ke Firestore
   ============================================================ */
window.saveTransaction = async function(order) {
  try {
    const user = window._fbUser;
    await addDoc(collection(db, 'orders'), {
      orderNum:  order.orderNum,
      game:      order.game,
      nominal:   order.nominal,
      userid:    order.userid,
      method:    order.method,
      price:     order.price,
      status:    'pending',
      time:      order.time,
      uid:       user ? user.uid   : 'guest',
      user:      user ? user.email : 'guest',
      createdAt: serverTimestamp()
    });
    console.log('✅ Order tersimpan ke Firebase:', order.orderNum);
  } catch(e) {
    console.error('❌ Gagal simpan order:', e);
    // Fallback ke localStorage kalau Firebase gagal
    const txs = JSON.parse(localStorage.getItem('luksdiamon_transactions') || '[]');
    txs.unshift({ ...order, status: 'pending' });
    localStorage.setItem('luksdiamon_transactions', JSON.stringify(txs));
  }
};

/* ============================================================
   OVERRIDE: searchOrderStatus — cari order di Firestore
   ============================================================ */
window.searchOrderStatus = async function() {
  const input   = (document.getElementById('status-search-input').value || '').trim().toUpperCase();
  const resultEl = document.getElementById('status-result');

  if (!input) {
    resultEl.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
      <i class="fas fa-search" style="font-size:2rem;margin-bottom:0.75rem;display:block;"></i>
      Masukkan nomor order terlebih dahulu.
    </div>`;
    return;
  }

  resultEl.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
    <div style="display:inline-block;width:24px;height:24px;border:3px solid rgba(255,255,255,0.2);
      border-top-color:var(--cyan);border-radius:50%;animation:spin 0.6s linear infinite;"></div>
    <div style="margin-top:0.75rem;">Mencari order...</div>
  </div>`;

  try {
    const q = query(collection(db, 'orders'), where('orderNum', '==', input));
    const snap = await getDocs(q);

    if (snap.empty) {
      resultEl.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted);">
        <i class="fas fa-search" style="font-size:2rem;margin-bottom:0.75rem;display:block;"></i>
        <strong style="color:var(--text-primary);">Order tidak ditemukan</strong><br>
        <span style="font-size:0.8rem;">Pastikan nomor order sudah benar.</span>
      </div>`;
      return;
    }

    const tx = { id: snap.docs[0].id, ...snap.docs[0].data() };
    renderOrderCard(tx, resultEl);
  } catch(e) {
    resultEl.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--danger);">
      Gagal mencari order. Periksa koneksi internet kamu.
    </div>`;
  }
};

/* ============================================================
   OVERRIDE: loadMyOrders — ambil riwayat dari Firestore
   ============================================================ */
window.loadMyOrders = async function() {
  const user  = window._fbUser;
  const wrap  = document.getElementById('status-my-orders');
  const list  = document.getElementById('status-orders-list');
  if (!user || !wrap || !list) return;

  wrap.style.display = 'block';
  list.innerHTML = `<div style="text-align:center;padding:1.5rem;color:var(--text-muted);">
    <div style="display:inline-block;width:20px;height:20px;border:2px solid rgba(255,255,255,0.2);
      border-top-color:var(--cyan);border-radius:50%;animation:spin 0.6s linear infinite;"></div>
  </div>`;

  try {
    const q = query(
      collection(db, 'orders'),
      where('uid', '==', user.uid),
      orderBy('createdAt', 'desc')
    );
    const snap = await getDocs(q);
    const txs  = snap.docs.map(d => ({ id: d.id, ...d.data() }));

    if (txs.length === 0) {
      list.innerHTML = `<div style="text-align:center;padding:1.5rem;color:var(--text-muted);font-size:0.85rem;">Belum ada riwayat order.</div>`;
      return;
    }

    list.innerHTML = txs.slice(0, 5).map(tx => {
      const statusColor = tx.status === 'success' ? 'var(--success)' : tx.status === 'failed' ? 'var(--danger)' : 'var(--warning)';
      const statusText  = tx.status === 'success' ? 'Sukses' : tx.status === 'failed' ? 'Gagal' : 'Pending';
      return `
      <div style="background:var(--bg-secondary);border:1px solid var(--border-glass);
        border-radius:var(--radius-md);padding:1rem 1.25rem;margin-bottom:0.75rem;
        cursor:pointer;transition:var(--transition);"
        onmouseover="this.style.borderColor='rgba(124,58,237,0.4)'"
        onmouseout="this.style.borderColor='var(--border-glass)'"
        onclick="document.getElementById('status-search-input').value='${tx.orderNum}';searchOrderStatus();">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:0.78rem;font-weight:700;color:var(--cyan);">${tx.orderNum}</div>
            <div style="font-size:0.88rem;font-weight:600;margin-top:0.2rem;">${tx.game} — ${tx.nominal}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.15rem;">${tx.time || '—'}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.9rem;font-weight:700;color:var(--cyan);">Rp ${Number(tx.price).toLocaleString('id-ID')}</div>
            <div style="font-size:0.72rem;font-weight:600;color:${statusColor};margin-top:0.25rem;">${statusText}</div>
          </div>
        </div>
      </div>`;
    }).join('');
  } catch(e) {
    list.innerHTML = `<div style="text-align:center;padding:1rem;color:var(--text-muted);font-size:0.82rem;">Gagal memuat riwayat.</div>`;
  }
};

/* ── Helper (duplikat dari script.js untuk modul ini) ── */
function isValidEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

/* ── CSS spin keyframe untuk loading ── */
const style = document.createElement('style');
style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);

console.log('🔥 Firebase patch loaded successfully!');
