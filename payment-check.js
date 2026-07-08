export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { transaction_nsu, order_nsu, slug } = req.query;
    if (!transaction_nsu || !order_nsu) return res.status(400).json({ error: 'Missing parameters' });
    const response = await fetch('https://api.infinitepay.io/invoices/public/checkout/payment_check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transaction_nsu, order_nsu, slug: slug || '' })
    });
    if (!response.ok) return res.status(response.status).json({ paid: false });
    const data = await response.json();
    return res.status(200).json({ paid: data.paid || false });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
