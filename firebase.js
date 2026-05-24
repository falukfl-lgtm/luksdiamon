/* ============================================================
   FIREBASE CONFIG — LuksDiaMon
   ============================================================ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, orderBy, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ⬇️ Config dari Firebase Console kamu
const firebaseConfig = {
  apiKey: "AIzaSyCySb1KvN_2VoVQ6J_bxpebjMOrskXc1Ps",
  authDomain: "luksdiamon-939e8.firebaseapp.com",
  projectId: "luksdiamon-939e8",
  storageBucket: "luksdiamon-939e8.firebasestorage.app",
  messagingSenderId: "3795079446",
  appId: "1:3795079446:web:dc7ec8028985ce28f54037"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
const auth = getAuth(app);

/* ============================================================
   AUTH — Register, Login, Logout
   ============================================================ */

/** Daftar akun baru */
export async function registerUser(email, password, username) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  // Simpan username ke Firestore
  await addDoc(collection(db, 'users'), {
    uid: cred.user.uid,
    email,
    username,
    role: 'user',
    createdAt: serverTimestamp()
  });
  return cred.user;
}

/** Login */
export async function loginUser(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

/** Logout */
export async function logoutUser() {
  await signOut(auth);
}

/** Pantau status login (dipanggil sekali saat app load) */
export function onAuthChange(callback) {
  onAuthStateChanged(auth, callback);
}

/** Ambil data user dari Firestore berdasarkan uid */
export async function getUserData(uid) {
  const q = query(collection(db, 'users'), where('uid', '==', uid));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return { id: snap.docs[0].id, ...snap.docs[0].data() };
}

/* ============================================================
   ORDERS — Simpan & Ambil Order
   ============================================================ */

/** Simpan order baru ke Firestore */
export async function saveOrder(orderData) {
  const docRef = await addDoc(collection(db, 'orders'), {
    ...orderData,
    createdAt: serverTimestamp(),
    status: 'pending'
  });
  return docRef.id;
}

/** Cari order berdasarkan nomor order (LDM-XXXX-XXXX) */
export async function getOrderByNumber(orderNum) {
  const q = query(collection(db, 'orders'), where('orderNum', '==', orderNum));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return { id: snap.docs[0].id, ...snap.docs[0].data() };
}

/** Ambil semua order milik user tertentu */
export async function getOrdersByUser(uid) {
  const q = query(
    collection(db, 'orders'),
    where('uid', '==', uid),
    orderBy('createdAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

/* ============================================================
   ADMIN — Ambil semua order (untuk halaman admin)
   ============================================================ */

/** Ambil semua order (admin only) */
export async function getAllOrders() {
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

/** Update status order (admin) */
export async function updateOrderStatus(orderId, status) {
  const { updateDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
  await updateDoc(doc(db, 'orders', orderId), { status });
}

export { db, auth };
