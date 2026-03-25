import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Tickets.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_key_here');

interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ticketTypes: TicketType[] = [
  {
    id: 'general',
    name: 'General Admission',
    price: 15,
    description: 'Access to all festival areas, food vendors, and performances'
  },
  {
    id: 'student',
    name: 'Student Ticket',
    price: 10,
    description: 'Discounted ticket for students with valid ID (must show at entrance)'
  },
  {
    id: 'vip',
    name: 'VIP Pass',
    price: 35,
    description: 'Priority access, reserved seating, and exclusive VIP area access'
  }
];

interface CustomerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  discountCode: string;
}

const initialCustomer: CustomerFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  discountCode: '',
};

function CheckoutForm({ ticketType, quantity }: { ticketType: TicketType; quantity: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [customer, setCustomer] = useState<CustomerFormData>(initialCustomer);

  const updateCustomer = (field: keyof CustomerFormData, value: string) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const amountCents = Math.round(ticketType.price * quantity * 100);
    setProcessing(true);
    setError(null);

    try {
      const response = await fetch('/api/payments/create-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ticketType: ticketType.id,
          quantity,
          amount: amountCents,
          discountCode: customer.discountCode.trim() || undefined,
          customer: {
            firstName: customer.firstName.trim(),
            lastName: customer.lastName.trim(),
            email: customer.email.trim(),
            phone: customer.phone.trim() || undefined,
          },
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to create payment');
      const { clientSecret } = data;

      const billingDetails = {
        name: [customer.firstName.trim(), customer.lastName.trim()].filter(Boolean).join(' ') || undefined,
        email: customer.email.trim() || undefined,
        phone: customer.phone.trim() || undefined,
      };

      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: billingDetails,
        },
      });

      if (confirmError) {
        setError(confirmError.message || 'Payment failed');
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  if (success) {
    return (
      <div className="payment-success">
        <h2>Payment Successful</h2>
        <p>Your tickets have been purchased. You will receive a confirmation email shortly. 
          On the day of the event, please present your receipt to the volunteer at the booth.</p>
      </div>
    );
  }

  const displayTotal = ticketType.price * quantity;

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h3 className="checkout-form-title">Contact & payment</h3>

      <div className="checkout-form-row">
        <div className="checkout-field">
          <label htmlFor="firstName">First name *</label>
          <input
            id="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={customer.firstName}
            onChange={(e) => updateCustomer('firstName', e.target.value)}
          />
        </div>
        <div className="checkout-field">
          <label htmlFor="lastName">Last name *</label>
          <input
            id="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={customer.lastName}
            onChange={(e) => updateCustomer('lastName', e.target.value)}
          />
        </div>
      </div>

      <div className="checkout-field">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={customer.email}
          onChange={(e) => updateCustomer('email', e.target.value)}
        />
      </div>

      <div className="checkout-field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={customer.phone}
          onChange={(e) => updateCustomer('phone', e.target.value)}
        />
      </div>

      <div className="checkout-field">
        <label htmlFor="discountCode">Discount code</label>
        <input
          id="discountCode"
          type="text"
          autoComplete="off"
          placeholder="e.g. MATSURI10"
          value={customer.discountCode}
          onChange={(e) => updateCustomer('discountCode', e.target.value)}
        />
        {customer.discountCode.trim() && (
          <span className="checkout-discount-note">Discount will be applied at payment.</span>
        )}
      </div>

      <div className="card-element-wrapper">
        <label className="card-element-label">Card details *</label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': { color: '#aab7c4' },
              },
            },
          }}
        />
      </div>

      {error && <div className="error-message">{error}</div>}
      <button type="submit" disabled={!stripe || processing} className="btn-pay">
        {processing ? 'Processing...' : `Pay $${displayTotal.toFixed(2)}`}
      </button>

      <div className="checkout-stripe-badge">
        <span className="checkout-stripe-text">Secure checkout powered by</span>
        <a
          href="https://stripe.com"
          target="_blank"
          rel="noopener noreferrer"
          className="checkout-stripe-logo"
          aria-label="Stripe"
        >
          <img
            src="/gizmos/StripeBlue.png"
            alt=""
            width="80"
            height="32"
          />
        </a>
      </div>
    </form>
  );
}

function Tickets() {
  const [selectedTicket, setSelectedTicket] = useState<TicketType>(ticketTypes[0]);
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  const total = selectedTicket.price * quantity;

  return (
    <div className="tickets">
      <div className="tickets-container">
        <h1>Get Your Tickets</h1>
        <p className="tickets-intro">Skip the line and get your tickets in advance at a discounted price!</p>

        {!showCheckout ? (
          <>
            <div className="ticket-selection">
              <h2>Select Ticket Type</h2>
              <div className="ticket-types">
                {ticketTypes.map((ticket) => (
                  <div
                    key={ticket.id}
                    className={`ticket-card ${selectedTicket.id === ticket.id ? 'selected' : ''}`}
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    <h3>{ticket.name}</h3>
                    <div className="ticket-price">${ticket.price}</div>
                    <p>{ticket.description}</p>
                  </div>
                ))}
              </div>

              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                />
              </div>

              <div className="total-section">
                <div className="total-line">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="total-line total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button onClick={() => setShowCheckout(true)} className="btn-checkout">
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="checkout-section checkout-section-stripe">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-item">
                <span>{selectedTicket.name} x{quantity}</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Elements stripe={stripePromise}>
              <CheckoutForm ticketType={selectedTicket} quantity={quantity} />
            </Elements>

            <button onClick={() => setShowCheckout(false)} className="btn-back">
              ← Back to Selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tickets;
