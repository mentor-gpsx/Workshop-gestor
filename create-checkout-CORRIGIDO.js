export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const HANDLE = process.env.INFINITEPAY_HANDLE || 'gps-mentoria';
    const PRICE = parseInt(process.env.PRICE_CENTS || '2700');
    const DESC = process.env.PRODUCT_DESCRIPTION || 'Workshop Formação de Gestores';
    
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = process.env.BASE_URL || req.headers['x-forwarded-host'] || req.headers.host;
    const redirect_url = `${protocol}://${host}/confirmado`;
    
    const payload = {
      handle: HANDLE,
      redirect_url: redirect_url,
      items: [{
        quantity: 1,
        price: PRICE,
        description: DESC
      }]
    };

    const response = await fetch('https://api.checkout.infinitepay.io/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.error('InfinitePay error:', response.status);
      return res.status(500).json({ error: 'Failed to create checkout' });
    }

    const data = await response.json();
    const url = data.url || data.link || data.checkout_url;

    if (!url) {
      console.error('No URL in response:', data);
      return res.status(500).json({ error: 'Invalid response from InfinitePay' });
    }

    return res.status(200).json({ url });
  } catch (error) {
    console.error('Checkout error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
