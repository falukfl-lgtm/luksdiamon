// api/topup-status.js
// Cek ulang status transaksi Apigames (dipakai kalau status awalnya Pending/Proses)

const crypto = require('crypto');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 0, error_msg: 'Method not allowed' });
  }

  const MERCHANT_ID = process.env.APIGAMES_MERCHANT_ID;
  const SECRET_KEY  = process.env.APIGAMES_SECRET_KEY;

  if (!MERCHANT_ID || !SECRET_KEY) {
    return res.status(500).json({ status: 0, error_msg: 'Server belum diatur (env var Apigames kosong)' });
  }

  const { refId } = req.body || {};
  if (!refId) {
    return res.status(400).json({ status: 0, error_msg: 'refId wajib diisi' });
  }

  const signature = crypto
    .createHash('md5')
    .update(`${MERCHANT_ID}:${SECRET_KEY}:${refId}`)
    .digest('hex');

  const params = new URLSearchParams({
    merchant_id: MERCHANT_ID,
    ref_id: refId,
    signature: signature,
  });

  const url = `https://v1.apigames.id/v2/transaksi/status?${params.toString()}`;

  try {
    const apiRes = await fetch(url);
    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({ status: 0, error_msg: 'Gagal menghubungi Apigames: ' + e.message });
  }
};
