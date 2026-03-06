# Matsuri Festival Website

A modern website for the annual Japanese festival at UCSD, featuring ticket sales, event scheduling, food vendor information, and volunteer registration.

## Features

- 🏠 **Landing Page** - Beautiful hero section with festival highlights
- 📖 **About Page** - Information about the festival and its mission
- 📅 **Schedule Page** - Event schedule with times and locations
- 🍱 **Food Page** - Food vendor listings and specialties
- 🗺️ **Map Page** - Festival location and directions
- 🤝 **Volunteer Page** - Volunteer registration form
- 🎫 **Tickets Page** - Stripe-integrated ticket purchasing

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Routing**: React Router DOM
- **Styling**: CSS Modules
- **Backend**: Express.js
- **Payments**: Stripe

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. **Install frontend dependencies:**
   ```bash
   npm install
   ```

2. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   cd ..
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory:
   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   ```

   Create a `.env` file in the `server` directory:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   PORT=3001
   ```

   Get your Stripe keys from: https://dashboard.stripe.com/apikeys

### Running the Application

1. **Start the backend server:**
   ```bash
   cd server
   npm start
   ```

   The server will run on `http://localhost:3001`

2. **Start the frontend development server (in a new terminal):**
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173` (or the port Vite assigns)

### Building for Production

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **The built files will be in the `dist` directory**

## API Endpoints

### Schedule
- `GET /api/schedule` - Get all events
- `GET /api/schedule/:id` - Get specific event
- `POST /api/schedule` - Create new event
- `PUT /api/schedule/:id` - Update event
- `DELETE /api/schedule/:id` - Delete event

### Food Vendors
- `GET /api/food` - Get all vendors
- `GET /api/food/:id` - Get specific vendor
- `POST /api/food` - Create new vendor
- `PUT /api/food/:id` - Update vendor
- `DELETE /api/food/:id` - Delete vendor

### Volunteers
- `GET /api/volunteers` - Get all volunteers
- `GET /api/volunteers/:id` - Get specific volunteer
- `POST /api/volunteers` - Create new volunteer application
- `PUT /api/volunteers/:id` - Update volunteer
- `DELETE /api/volunteers/:id` - Delete volunteer

### Payments
- `POST /api/payments/create-intent` - Create Stripe payment intent
- `GET /api/payments/:id` - Get payment status

## Project Structure

```
matsuriWebsite/
├── src/
│   ├── components/      # Reusable components (Navbar, Footer)
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component with routing
│   └── main.tsx        # Entry point
├── server/             # Backend API server
│   └── index.js        # Express server
├── public/             # Static assets
└── package.json        # Frontend dependencies
```

## Notes

- The backend currently uses in-memory storage. For production, consider using a database (PostgreSQL, MongoDB, etc.)
- Stripe integration uses test keys by default. Replace with live keys for production
- The server includes CORS middleware for development. Configure appropriately for production

## License

MIT
