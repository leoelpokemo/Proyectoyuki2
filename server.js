require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  console.log('Body recibido:', req.body); 
  try {
    const { priceId, customerEmail, customerName, vehicle, successUrl, cancelUrl } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      customer_email: customerEmail,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        vehicle: vehicle || 'N/A',
        customer: customerName || 'N/A',
        platform: 'AutoElite PWA'
      }
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚗 AutoElite backend corriendo en http://localhost:${PORT}`);
  console.log(`🔑 Stripe key: ${process.env.STRIPE_SECRET_KEY ? '✓ Configurada' : '⚠️  Falta STRIPE_SECRET_KEY'}`);
});