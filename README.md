# <div align="center"> 🚚 CargoConnect — India's Premier Logistics & Cargo Transfer Booking Platform 🚚

CargoConnect is a modern, responsive web application built with React and TypeScript that revolutionizes cargo transportation across India. Our platform offers seamless booking experiences with real-time pricing, multiple vehicle options, and comprehensive logistics solutions.

## ✨ Features

### 🚀 Core Functionality
- **Multi-step Booking Flow** - Intuitive booking process with location selection, vehicle choice, and payment
- **Real-time Pricing** - Dynamic fare calculation based on distance and vehicle type
- **Vehicle Selection** - Multiple vehicle categories (Mini Truck, Cargo Truck, Tempo) with detailed specifications
- **Location Services** - State and district-based location selection across India
- **Payment Integration** - Multiple payment methods (UPI, Net Banking, Cash on Delivery)
- **Automated Email System** - Newsletter subscriptions and contact form emails sent to admin
- **24/7 Email Notifications** - Works automatically even when server is not running (with Vercel deployment)

### 🎨 User Experience
# CargoConnect

🚚 CargoConnect — India's logistics booking demo (React + TypeScript)

This repository contains a production-ready frontend (Vite + React + Tailwind) and a small Express-based backend used for sending transactional emails (newsletter + contact form). The project is documented and ready for local development or deployment to Vercel.

**Highlights**
- Multi-step booking flow, vehicle selection, and fare calculation
- Responsive UI with dark/light themes and polished micro-interactions
- Backend email endpoints (Express + Nodemailer) for automated notifications

## Quick Links
- Development guide: `INSTRUCTIONS.md`
- Fast Vercel deploy: `VERCEL_QUICK_DEPLOY.md`

## Tech Stack
- Frontend: React 19, TypeScript, Vite
- Styling: Tailwind CSS
- Backend: Express.js (email endpoints)
- Email: Nodemailer (Gmail SMTP)
- Deployment: Vercel (recommended)

---

## Quick Start (local)

Prerequisites: Node.js v16+, npm (or yarn). A Gmail account with App Password is required for email testing.

1. Clone and install:

```bash
git clone <repository-url>
cd cargo-connect
npm install
```

2. Create your `.env` from the example (Unix/macOS) or use the Windows command:

```bash
# Unix / macOS
cp .env.example .env

# Windows (PowerShell)
Copy-Item .env.example .env
```

3. Edit `.env` and add your Gmail credentials (use an App Password — do NOT commit `.env`):

```
EMAIL_USER=you@example.com
EMAIL_PASSWORD=your_app_password_here
PORT=3001
```

4. Run backend and frontend (two terminals):

```bash
# Terminal 1 - backend
npm run server

# Terminal 2 - frontend
npm run dev
```

Open http://localhost:5173

---

## Project layout

```
cargo-connect/
├─ src/                 # React app (components, pages, context, data)
├─ server.js            # Small Express server for emails
├─ .env.example         # Environment variable template
├─ package.json
└─ README.md
```

## Deployment

Recommended: deploy the frontend (and optionally the backend) to Vercel. See `VERCEL_QUICK_DEPLOY.md` for a 5-minute guide.

Notes:
- In production, set `VITE_API_URL` in your Vercel environment variables to point to your backend URL (or deploy the backend as Vercel Serverless Functions).

---

## Documentation

- `INSTRUCTIONS.md` — full setup and development guide
- `VERCEL_QUICK_DEPLOY.md` — fast deploy instructions

---

## Contributing

1. Fork → branch → work → PR
2. Use clear commit messages (e.g., `feat:`, `fix:`, `docs:`)

---

## Maintainer

**Babin Bid** — babinbid05@gmail.com

---

Made with ❤️

