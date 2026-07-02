"use client";

import { useState, useEffect } from "react";
import { listenPendingOrders, confirmOrder, cancelOrder } from "@/lib/orders";

// ⚠️ PENTING: halaman ini belum ada proteksi login!
// Sebelum deploy ke production, tambahkan pengecekan auth (Firebase Auth)
// supaya hanya kamu yang bisa akses /admin.

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    const unsub = listenPendingOrders(setOrders);
    return () => unsub();
  }, []);

  // Tandai nominal yang muncul lebih dari sekali di antara order pending —
  // ini yang paling berisiko salah cocok, jadi perlu diwaspadai.
  const nominalCounts = orders.reduce((acc, o) => {
    acc[o.price] = (acc[o.price] || 0) + 1;
    return acc;
  }, {});

  function formatTime(createdAt) {
    if (!createdAt || !createdAt.toDate) return "Baru saja";
    return createdAt.toDate().toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  async function handleConfirm(id) {
    setLoadingId(id);
    await confirmOrder(id);
    setLoadingId(null);
    // TODO: kalau proses topup ke akun game belum otomatis, lakukan manual di sini
    // atau panggil API/webhook khusus untuk kirim diamond ke akun game user.
  }

  async function handleCancel(id) {
    if (!confirm("Batalkan order ini?")) return;
    setLoadingId(id);
    await cancelOrder(id);
    setLoadingId(null);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-1">Dashboard Admin</h1>
      <p className="text-gray-500 mb-6">
        {orders.length} order menunggu pembayaran
      </p>

      {orders.length === 0 && (
        <p className="text-gray-400 text-center py-10">
          Belum ada order pending 🎉
        </p>
      )}

      <div className="space-y-3">
        {orders.map((o) => {
          const isDuplicate = nominalCounts[o.price] > 1;
          return (
            <div
              key={o.id}
              className={`border rounded-lg p-4 flex items-center justify-between ${
                isDuplicate ? "border-orange-400 bg-orange-50" : ""
              }`}
            >
              <div>
                <p className="font-bold">
                  {o.game} • {o.nominal}
                </p>
                <p className="text-sm text-gray-500">
                  {o.user} • ID: {o.userid}
                </p>
                <p className="text-sm text-gray-500">Metode: {o.method}</p>
                <p className="text-xs text-gray-400">
                  Order: {o.orderNum} • Masuk: {formatTime(o.createdAt)}
                </p>
                {isDuplicate && (
                  <p className="text-xs font-bold text-orange-600 mt-1">
                    ⚠️ Ada order lain dengan nominal sama — cek nama & waktu sebelum konfirmasi!
                  </p>
                )}
              </div>

              <div className="text-right">
                <p className="text-xl font-bold text-pink-600 mb-2">
                  Rp {Number(o.price).toLocaleString("id-ID")}
                </p>
                <div className="flex gap-2">
                  <button
                    disabled={loadingId === o.id}
                    onClick={() => handleConfirm(o.id)}
                    className="bg-green-600 text-white text-sm px-3 py-1.5 rounded disabled:opacity-50"
                  >
                    ✅ Konfirmasi
                  </button>
                  <button
                    disabled={loadingId === o.id}
                    onClick={() => handleCancel(o.id)}
                    className="bg-gray-200 text-sm px-3 py-1.5 rounded disabled:opacity-50"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
