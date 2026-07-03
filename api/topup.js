// api/topup.js
// Vercel Serverless Function — memproses topup otomatis lewat Apigames.
// Secret Key TIDAK PERNAH dikirim ke browser, cuma dipakai di server ini.

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

  const { refId, productCode, tujuan, serverId } = req.body || {};

  if (!refId || !productCode || !tujuan) {
    return res.status(400).json({ status: 0, error_msg: 'refId, productCode, dan tujuan wajib diisi' });
  }

  // signature = md5(merchant_id:secret_key:ref_id)
  const signature = crypto
    .createHash('md5')
    .update(`${MERCHANT_ID}:${SECRET_KEY}:${refId}`)
    .digest('hex');

  const params = new URLSearchParams({
    ref_id: refId,
    merchant_id: MERCHANT_ID,
    produk: productCode,
    tujuan: tujuan,
    signature: signature,
  });
  if (serverId) params.set('server_id', serverId);

  const url = `https://v1.apigames.id/v2/transaksi?${params.toString()}`;

  try {
    const apiRes = await fetch(url);
    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({ status: 0, error_msg: 'Gagal menghubungi Apigames: ' + e.message });
  }
};
                                 
