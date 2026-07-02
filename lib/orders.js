// lib/orders.js
// Helper untuk dashboard admin — membaca & mengupdate collection "orders"
// yang SUDAH ADA di Firestore project kamu (bukan bikin collection baru).
//
// Struktur field yang dipakai (sesuai data yang sudah ada):
// game, method, nominal, orderNum, price, status, time, uid, user, userid, createdAt

import { db } from "./firebase";
import {
  collection,
  doc,
  updateDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const ORDERS_COLLECTION = "orders";

/**
 * Dengarkan (realtime) semua order dengan status "pending" — dipakai di dashboard admin.
 */
export function listenPendingOrders(callback) {
  const q = query(
    collection(db, ORDERS_COLLECTION),
    where("status", "==", "pending"),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(data);
    },
    (error) => {
      console.error("Gagal membaca orders:", error);
      // Kemungkinan penyebab: field createdAt belum ada index, atau Firestore Rules
      // belum mengizinkan read. Cek console browser untuk link "create index" dari Firebase.
    }
  );
}

/**
 * Admin konfirmasi order sudah dibayar → status jadi "success".
 */
export async function confirmOrder(orderId) {
  const ref = doc(db, ORDERS_COLLECTION, orderId);
  await updateDoc(ref, {
    status: "success",
    confirmedAt: serverTimestamp(),
  });
}

/**
 * Admin batalkan order (misal expired / salah nominal) → status jadi "cancelled".
 */
export async function cancelOrder(orderId) {
  const ref = doc(db, ORDERS_COLLECTION, orderId);
  await updateDoc(ref, { status: "cancelled" });
    }
