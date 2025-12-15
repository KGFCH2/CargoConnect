# 📖 CargoConnect - Complete Development Instructions

## Table of Contents
1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Development Commands](#development-commands)
6. [Email Configuration](#email-configuration)
7. [Running Locally](#running-locally)
8. [Deployment to Vercel](#deployment-to-vercel)
9. [Troubleshooting](#troubleshooting)
10. [Contributing Guidelines](#contributing-guidelines)

---

## Project Overview

**CargoConnect** is a modern cargo and logistics booking platform built with React, TypeScript, and Tailwind CSS. It includes:
- Real-time booking system with multi-step checkout
- Dark/Light theme support
- Automated email notifications (Newsletter & Contact Form)
- PDF receipt generation
- Responsive design for all devices

### Key Technologies
| Category | Technology |
|----------|------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS |
| **Routing** | React Router v6 |
| **PDF** | jsPDF |
| **Email** | Nodemailer |
| **Deployment** | Vercel (Serverless Functions) |

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     VERCEL DEPLOYMENT                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐         ┌─────────────────────────┐   │
│  │   Frontend      │ ──────> │  Serverless Functions   │   │
│  │   (React/Vite)  │         │  /api/subscribe.js      │   │
│  │   dist/         │         │  /api/contact.js        │   │
│  └─────────────────┘         └─────────────────────────┘   │
│                                        │                    │
│                                        ▼                    │
│                              ┌─────────────────────────┐   │
│                              │   Gmail SMTP            │   │
│                              │   (Nodemailer)          │   │
│                              └─────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Key Point**: On Vercel, emails work 24/7 without running any server!

---

## Prerequisites

### System Requirements
- **Node.js**: v16.0.0 or higher
- **npm**: v8.0.0 or higher
- **Git**: For version control

### Accounts Needed
- **Gmail Account**: With 2-Step Verification enabled (for App Password)
- **GitHub Account**: For repository hosting
- **Vercel Account**: For deployment (free tier available)

### Verify Installation
```bash
node --version  # Should be v16+
npm --version   # Should be v8+
git --version   # Should show version
```

---

## Installation

### Step 1: Clone Repository
```bash
git clone https://github.com/KGFCH2/CargoConnect.git
cd CargoConnect
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment (Optional - for local email testing)
```bash
# Copy example env file
cp .env.example .env

# Edit .env with your credentials
```

**Local Development .env:**
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
PORT=3001
# VITE_API_URL=http://localhost:3001  # Uncomment only for local backend testing
```

### Step 4: Verify Installation
```bash
npm run build
```
Should complete without errors.

---

## Project Structure

```
CargoConnect/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Header.tsx          # Navigation bar with theme toggle
│   │   ├── Footer.tsx          # Footer with newsletter subscription
│   │   ├── Hero.tsx            # Landing page hero section
│   │   ├── VehicleCard.tsx     # Vehicle selection card
│   │   ├── LocationSelector.tsx # State/District/Area selector
│   │   ├── PaymentMethods.tsx  # Payment method selection
│   │   ├── AnimatedLink.tsx    # Navigation links with animations
│   │   ├── BackToTop.tsx       # Scroll to top button
│   │   ├── Loader.tsx          # Loading spinner
│   │   └── ScrollToTop.tsx     # Auto-scroll on route change
│   │
│   ├── pages/                  # Full page components
│   │   ├── HomePage.tsx        # Landing page
│   │   ├── BookingPage.tsx     # Main booking flow (4 steps)
│   │   ├── ContactPage.tsx     # Contact form page
│   │   ├── AboutPage.tsx       # About company
│   │   ├── ServicesPage.tsx    # Services offered
│   │   ├── VehiclesPage.tsx    # Vehicle fleet
│   │   ├── PricingPage.tsx     # Pricing information
│   │   ├── FAQPage.tsx         # Frequently asked questions
│   │   ├── BlogPage.tsx        # Blog/Writeup articles
│   │   ├── PrivacyPage.tsx     # Privacy policy
│   │   └── TermsPage.tsx       # Terms of service
│   │
│   ├── context/                # React Context providers
│   │   ├── BookingContext.tsx  # Booking state management
│   │   └── ThemeContext.tsx    # Dark/Light theme management
│   │
│   ├── data/                   # Static data files
│   │   ├── vehicles.ts         # Vehicle specifications
│   │   └── indianStates.ts     # State/district data
│   │
│   ├── types/                  # TypeScript definitions
│   │   └── index.ts            # All type definitions
│   │
│   ├── App.tsx                 # Main app component with routes
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles + Tailwind
│
├── api/                        # Vercel Serverless Functions
│   ├── subscribe.js            # Newsletter subscription endpoint
│   ├── contact.js              # Contact form endpoint
│   └── package.json            # Dependencies for serverless functions
│
├── server.js                   # Express server (LOCAL development only)
├── vercel.json                 # Vercel configuration
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
├── .env.example                # Environment template
└── .gitignore                  # Git ignore rules
```

---

## Development Commands

### Frontend Only
```bash
# Start dev server on http://localhost:5173
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

### With Local Backend (for email testing)
```bash
# Terminal 1: Start Express server on http://localhost:3001
npm run server

# Terminal 2: Start frontend
npm run dev
```

**Note**: For production on Vercel, you don't need to run the backend server. The `/api/` folder contains serverless functions that handle emails automatically.

---

## Email Configuration

### How Emails Work

| Environment | How It Works |
|-------------|--------------|
| **Local Development** | Express server (`server.js`) handles `/api/*` requests |
| **Vercel Production** | Serverless Functions (`api/*.js`) handle requests automatically |

### Getting Gmail App Password

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already)
3. Click **App passwords**
4. Select "Mail" and your device
5. Copy the 16-character password (ignore spaces)

### Environment Setup

**For Local Development (.env file):**
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
PORT=3001
# VITE_API_URL=http://localhost:3001  # Uncomment ONLY for local testing
```

**For Vercel Production (Dashboard > Settings > Environment Variables):**
| Variable | Value |
|----------|-------|
| `EMAIL_USER` | your-gmail@gmail.com |
| `EMAIL_PASSWORD` | abcdefghijklmnop |

⚠️ **Important**: Do NOT set `VITE_API_URL` in Vercel. Leave it unset so the app uses relative paths (`/api/subscribe`) which correctly route to serverless functions.

---

## Running Locally

### Quick Start (Frontend Only)
```bash
npm run dev
# Open http://localhost:5173
# Email features won't work
```

### Full Stack (With Email Testing)
```bash
# 1. Configure .env
cp .env.example .env
# Edit .env with Gmail credentials

# 2. Start backend (Terminal 1)
npm run server
# Output: "Server is running on port 3001"

# 3. Start frontend (Terminal 2)
npm run dev
# Output: "Local: http://localhost:5173"

# 4. Edit .env to enable local API
# Uncomment: VITE_API_URL=http://localhost:3001

# 5. Restart frontend
# Now emails will work locally!
```

### Testing Email Features

1. **Newsletter**: Scroll to footer, enter email, click "Subscribe"
2. **Contact Form**: Go to Contact page, fill form, click "Send Message"
3. Check your inbox for confirmation emails

---

## Deployment to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your repository
4. Click "Deploy"
5. Wait for build to complete

### Step 3: Add Environment Variables
1. Go to your project in Vercel Dashboard
2. Click **Settings** > **Environment Variables**
3. Add:
   - `EMAIL_USER` = your-gmail@gmail.com
   - `EMAIL_PASSWORD` = your-16-char-app-password
4. Make sure `VITE_API_URL` is **NOT** set

### Step 4: Redeploy
1. Go to **Deployments** tab
2. Click the three dots on latest deployment
3. Click **Redeploy**
4. Uncheck "Use existing Build Cache"
5. Click **Redeploy**

### ✅ Done!
Your site is live at `https://your-project.vercel.app`

Emails now work 24/7 without running any server!

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| "Failed to fetch" on Vercel | Check that `VITE_API_URL` is NOT set in Vercel env vars |
| "Server returned 500" | Verify `EMAIL_USER` and `EMAIL_PASSWORD` in Vercel env vars |
| "Server configuration error" | Environment variables missing in Vercel |
| Emails not arriving | Check spam folder; verify Gmail App Password |
| Port 5173 in use | Kill process: `npx kill-port 5173` |

### Vercel Function Logs
1. Go to Vercel Dashboard > Your Project
2. Click **Functions** tab
3. Click on `api/subscribe.js` or `api/contact.js`
4. View **Logs** for error details

### Local Backend Issues

```bash
# If port 3001 is in use
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# If node_modules corrupted
rm -rf node_modules package-lock.json
npm install
```

---

## Contributing Guidelines

### How to Contribute

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m "Add amazing feature"`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Style
- Use TypeScript for all new code
- Follow existing component patterns
- Add types for all props and state
- Use Tailwind CSS for styling

### Commit Messages
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring

---

## Support & Contact

- **Issues**: Open an issue on [GitHub](https://github.com/KGFCH2/CargoConnect/issues)
- **Email**: babinbid05@gmail.com
- **LinkedIn**: [Babin Bid](https://www.linkedin.com/in/babin-bid-853728293/)

---

## Changelog

### Version 1.0.0 (December 2025)
- ✅ Complete booking system with 4-step flow
- ✅ Dark/Light mode toggle
- ✅ Email notifications via Vercel Serverless Functions
- ✅ PDF receipt generation
- ✅ Responsive design
- ✅ Contact form and newsletter subscription
- ✅ Production-ready Vercel deployment

---

**Last Updated**: December 15, 2025  
**Maintained By**: Babin Bid

---

<div align="center">
Made with ❤️ for seamless cargo transportation across India
</div>
