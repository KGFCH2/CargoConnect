# CargoConnect

🚚 **CargoConnect** — India's Premier Logistics & Cargo Transfer Booking Platform

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
- **Dark/Light Mode** - Complete theme switching with system preference detection
- **Responsive Design** - Mobile-first approach with seamless cross-device experience
- **Smooth Animations** - Professional hover effects and transitions throughout
- **Interactive UI** - Engaging popup effects on buttons and interactive elements
- **Real-time Feedback** - Loading states, success/error messages for all interactions

### 📱 Pages & Services
- **Home** - Hero section with instant quote calculator
- **About** - Company mission, vision, and developer information
- **Services** - Comprehensive logistics service offerings
- **Vehicles** - Detailed vehicle specifications and features
- **Pricing** - Transparent pricing plans with feature comparison
- **Booking** - Complete booking workflow with progress tracking
- **Blog** - Industry insights and logistics updates
- **FAQ** - Comprehensive frequently asked questions
- **Contact** - Contact form with automatic email notifications
- **Newsletter** - Subscription form with email confirmations

## 🛠️ Tech Stack

- **Frontend**: React 19.2.3, TypeScript 5.5.3
- **Build Tool**: Vite 5.4.8
- **Styling**: Tailwind CSS 3.4.1 with custom dark mode
- **Routing**: React Router DOM 6.22.3
- **Icons**: Lucide React 0.344.0
- **State Management**: React Context API
- **Backend**: Express.js (for email functionality)
- **Email Service**: Nodemailer with Gmail SMTP
- **Development**: ESLint, PostCSS, Autoprefixer
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account with App Password (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cargo-connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your Gmail credentials
   ```

4. **Run both frontend and backend** (in separate terminals)
   ```bash
   # Terminal 1 - Backend server
   npm run server
   
   # Terminal 2 - Frontend development
   npm run dev
   ```

5. **Access the application**
   - Open http://localhost:5173 in your browser

6. **Build for production**
   ```bash
   npm run build
   ```

7. **Preview production build**
   ```bash
   npm run preview
   ```

**For detailed setup and deployment instructions, see `INSTRUCTIONS.md`**

## 📁 Project Structure

```
cargo-connect/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # Navigation with theme toggle
│   │   ├── Footer.tsx      # Footer with social links
│   │   ├── Hero.tsx        # Landing hero section
│   │   ├── VehicleCard.tsx # Vehicle selection cards
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── BookingPage.tsx
│   │   └── ...
│   ├── context/            # React Context providers
│   │   ├── ThemeContext.tsx
│   │   └── BookingContext.tsx
│   ├── data/               # Static data files
│   │   ├── vehicles.ts
│   │   └── indianStates.ts
│   ├── types/              # TypeScript type definitions
│   └── ...
├── public/                 # Static assets
├── dist/                   # Production build output
└── package.json
```

## 🎨 Key Features Implementation

### Theme System
- Complete dark/light mode with localStorage persistence
- System preference detection
- Smooth transitions between themes

### Booking Flow
- 4-step booking process: Location → Vehicle → Details → Payment
- Real-time fare calculation
- Form validation and error handling

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### Animations & Interactions
- Hover effects on all interactive elements
- Smooth page transitions
- Loading states and micro-interactions

## 🚀 Deployment

### Local Development with Email
1. Get Gmail App Password (see `EMAIL_SETUP.md`)
2. Configure `.env` file
3. Run both servers: `npm run server` & `npm run dev`

### Vercel Deployment (Recommended - 24/7 Emails)
1. Push code to GitHub
2. Deploy to Vercel (see `VERCEL_QUICK_DEPLOY.md`)
3. Set environment variables in Vercel dashboard
4. Emails work 24/7 without running anything locally!

**For step-by-step deployment instructions:**
- Quick Deploy: `VERCEL_QUICK_DEPLOY.md` (5 minutes)
- Detailed Guide: `VERCEL_DEPLOYMENT.md` (with best practices)

### Manual Deployment
```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## � Documentation

- **`INSTRUCTIONS.md`** - Complete project setup and development guide
- **`EMAIL_SETUP.md`** - Gmail configuration and local email testing
- **`EMAIL_FEATURES.md`** - Email automation features documentation
- **`VERCEL_QUICK_DEPLOY.md`** - Fast deployment guide (5 minutes)
- **`VERCEL_DEPLOYMENT.md`** - Detailed deployment with best practices
- **`QUICK_START.md`** - Quick reference guide
- **`EMAIL_IMPLEMENTATION.md`** - Technical implementation details

## �👨‍💻 Developer

**Babin Bid**
- **GitHub**: [https://github.com/KGFCH2](https://github.com/KGFCH2)
- **LinkedIn**: [https://www.linkedin.com/in/babin-bid-853728293/](https://www.linkedin.com/in/babin-bid-853728293/)
- **Email**: babinbid05@gmail.com

---

Made with ❤️ for seamless cargo transportation across India.
