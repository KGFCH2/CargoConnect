# <div align="center">🚚 CargoConnect — India's Premier Logistics & Cargo Transfer Booking Platform 🚚</div>

CargoConnect is a modern, responsive web application built with React and TypeScript that revolutionizes cargo transportation across India. Our platform offers seamless booking experiences with real-time pricing, multiple vehicle options, and comprehensive logistics solutions.

## ✨ Features

### 🚀 Core Functionality
- **Multi-step Booking Flow** - Intuitive booking process with location selection, vehicle choice, and payment
- **Real-time Pricing** - Dynamic fare calculation based on distance and vehicle type
- **Vehicle Selection** - Multiple vehicle categories (Mini Truck, Cargo Truck, Tempo) with detailed specifications
- **Location Services** - State and district-based location selection across India
- **Payment Integration** - Multiple payment methods (UPI, Net Banking, Cash on Delivery)
- **PDF Receipt Generation** - Download booking receipts after payment
- **Automated Email System** - Newsletter subscriptions and contact form emails
- **24/7 Email Notifications** - Works automatically via Vercel Serverless Functions (no server needed!)

### 🎨 User Experience
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Polished micro-interactions and transitions
- **Back to Top Button** - Easy navigation on long pages

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS |
| **Routing** | React Router v6 |
| **Icons** | Lucide React |
| **PDF** | jsPDF |
| **Email** | Nodemailer (via Vercel Serverless Functions) |
| **Deployment** | Vercel |

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ and npm
- Gmail account with App Password (for email features)

### Installation

```bash
# Clone repository
git clone https://github.com/KGFCH2/CargoConnect.git
cd CargoConnect

# Install dependencies
npm install
```

### Local Development

**Option A: Frontend Only (No Email Features)**
```bash
npm run dev
# Open http://localhost:5173
```

**Option B: Full Stack (With Email Features)**
```bash
# Create .env file
cp .env.example .env
# Edit .env with your Gmail credentials

# Terminal 1: Start backend
npm run server

# Terminal 2: Start frontend  
npm run dev
```

---

## 📁 Project Structure

```
CargoConnect/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Full page components
│   ├── context/        # React Context providers
│   ├── data/           # Static data (vehicles, states)
│   ├── types/          # TypeScript definitions
│   ├── App.tsx         # Main app with routes
│   └── main.tsx        # Entry point
│
├── api/                # Vercel Serverless Functions
│   ├── subscribe.js    # Newsletter endpoint
│   ├── contact.js      # Contact form endpoint
│   └── package.json    # Dependencies for functions
│
├── server.js           # Express server (local dev only)
├── vercel.json         # Vercel configuration
└── .env.example        # Environment template
```

---

## 🌐 Deployment (Vercel)

### One-Click Deploy

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

3. **Add Environment Variables** (in Vercel Dashboard > Settings > Environment Variables)
   | Variable | Value |
   |----------|-------|
   | `EMAIL_USER` | your-gmail@gmail.com |
   | `EMAIL_PASSWORD` | your-16-char-app-password |

4. **Redeploy** to apply environment variables

### ✅ Benefits of Vercel Deployment
- Emails work 24/7 (no server to maintain)
- Auto-scales for traffic
- Free tier available
- Automatic HTTPS

---

## 📧 Email Configuration

### Getting Gmail App Password

1. Enable 2-Step Verification at [myaccount.google.com/security](https://myaccount.google.com/security)
2. Go to "App passwords"
3. Generate new password for "Mail"
4. Copy the 16-character password (ignore spaces)

### Environment Variables

**For Local Development (.env file):**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PORT=3001
# Leave VITE_API_URL commented out for production builds
# VITE_API_URL=http://localhost:3001
```

**For Vercel (Dashboard > Settings > Environment Variables):**
- `EMAIL_USER` = your-email@gmail.com
- `EMAIL_PASSWORD` = your-app-password
- Do NOT set `VITE_API_URL`

---

## 📚 Documentation

| File | Description |
|------|-------------|
| [INSTRUCTIONS.md](INSTRUCTIONS.md) | Complete development guide |
| [VERCEL_QUICK_DEPLOY.md](VERCEL_QUICK_DEPLOY.md) | 5-minute deploy guide |

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m "Add amazing feature"`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👤 Maintainer

**Babin Bid**
- Email: babinbid05@gmail.com
- LinkedIn: [Babin Bid](https://www.linkedin.com/in/babin-bid-853728293/)
- GitHub: [@KGFCH2](https://github.com/KGFCH2)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ for seamless cargo transportation across India
</div>

