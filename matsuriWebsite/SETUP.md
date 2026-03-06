# Setup Instructions

## Fixing Installation Errors

If you're getting errors about missing modules, you need to install the dependencies:

### Step 1: Install Frontend Dependencies

```bash
cd /Users/skyfujinuma/Desktop/matsuri/matsuriWebsite
npm install
```

This will install:
- react-router-dom
- @stripe/stripe-js
- @stripe/react-stripe-js

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

This will install:
- express
- cors
- dotenv
- stripe

### Step 3: If npm install fails with permission errors

If you see permission errors, try:

```bash
# Option 1: Use npx
npx npm install

# Option 2: Clear npm cache
npm cache clean --force

# Option 3: Install with sudo (if needed)
sudo npm install
```

### Step 4: Set up Environment Variables

Create a `.env` file in the root directory:
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

Create a `.env` file in the `server` directory:
```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
PORT=3001
```

### Step 5: Run the Application

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Common Errors and Solutions

### Error: "Cannot find module 'react-router-dom'"
**Solution:** Run `npm install` in the root directory

### Error: TypeScript config errors
**Solution:** Already fixed! The tsconfig.node.json has been updated.

### Error: Stripe not configured
**Solution:** Add your Stripe keys to the `.env` files (see Step 4)

### Error: Port already in use
**Solution:** Change the PORT in server/.env or kill the process using that port
