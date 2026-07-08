export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const HANDLE = process.env.INFINITEPAY_HANDLE || 'gps-mentoria';
    const PRICE = parseInt(process.env.PRICE_CENTS || '2700');
    const DESC = process.env.PRODUCT_DESCRIPTION || 'Workshop Formação de Gestores';
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = process.env.BASE_URL || req.headers['x-forwarded-host'] || req.headers.host;
    const redirect_url = `${protocol}://${host}/confirmado`;
    const payload = { handle: HANDLE, redirect_url, items: [{ quantity: 1, price: PRICE, description: DESC }] };
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 12000);
    const response = await fetch('https://api.checkout.infinitepay.io/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    if (!response.ok) return res.status(response.status).json({ error: 'Checkout creation failed' });
    const data = await response.json();
    const checkoutUrl = data.url || data.link || data.checkout_url;
    if (!checkoutUrl) return res.status(500).json({ error: 'Invalid response' });
    return res.status(200).json({ url: checkoutUrl });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
