import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import stripe from 'stripe';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe
const stripeClient = stripe(process.env.STRIPE_SECRET_KEY || '');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('../dist'));

// Discount codes: code -> percent off (e.g. MATSURI10 = 10% off)
const DISCOUNT_CODES = {
  MATSURI10: 10,
  STUDENT: 15,
};

// Stripe payment endpoints
app.post('/api/payments/create-intent', async (req, res) => {
  try {
    const {
      ticketType,
      quantity,
      amount,
      discountCode,
      customer: customerInfo
    } = req.body;

    if (!stripeClient) {
      return res.status(500).json({ error: 'Stripe not configured' });
    }

    let finalAmount = Math.round(Number(amount) || 0);
    if (discountCode && String(discountCode).trim()) {
      const code = String(discountCode).trim().toUpperCase();
      const percentOff = DISCOUNT_CODES[code];
      if (percentOff != null) {
        finalAmount = Math.round(finalAmount * (1 - percentOff / 100));
        if (finalAmount < 50) finalAmount = 50; // Stripe minimum
      }
    }

    let customerId = null;
    if (customerInfo && (customerInfo.email || customerInfo.firstName || customerInfo.lastName)) {
      const customer = await stripeClient.customers.create({
        email: customerInfo.email || undefined,
        name: [customerInfo.firstName, customerInfo.lastName].filter(Boolean).join(' ') || undefined,
        phone: customerInfo.phone || undefined,
      });
      customerId = customer.id;
    }

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: finalAmount,
      currency: 'usd',
      ...(customerId && { customer: customerId }),
      ...(customerInfo && customerInfo.email && { receipt_email: customerInfo.email }),
      metadata: {
        ticketType,
        quantity: quantity.toString(),
        ...(discountCode && { discountCode: String(discountCode).trim() }),
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      amount: finalAmount,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/payments/:id', async (req, res) => {
  try {
    if (!stripeClient) {
      return res.status(500).json({ error: 'Stripe not configured' });
    }

    const paymentIntent = await stripeClient.paymentIntents.retrieve(req.params.id);
    res.json(paymentIntent);
  } catch (error) {
    console.error('Error retrieving payment:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: '../dist' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
