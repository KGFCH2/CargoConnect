# 📖 CargoConnect - Complete Development Instructions

## Table of Contents
1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Development Commands](#development-commands)
6. [Email Configuration](#email-configuration)
7. [Running Locally](#running-locally)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)
10. [Contributing Guidelines](#contributing-guidelines)

---

## Project Overview

**CargoConnect** is a modern cargo and logistics booking platform built with React, TypeScript, and Tailwind CSS. It includes:
- Real-time booking system
- Multi-step checkout process
- Dark/Light theme support
- Automated email notifications
- Responsive design for all devices

### Key Technologies
- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **Backend**: Express.js, Nodemailer
- **Database**: None (frontend state management only)
- **Email**: Gmail SMTP
- **Deployment**: Vercel

---

## Prerequisites

### System Requirements
- **Node.js**: v16.0.0 or higher
- **npm**: v8.0.0 or higher (or yarn)
- **Git**: For version control

### Accounts Needed
- **Gmail Account**: For email functionality (with 2-Step Verification)
- **GitHub Account**: For code repository (optional but recommended)
- **Vercel Account**: For deployment (optional but recommended)

### Check Installation
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

This installs:
- React and React Router
- TypeScript and development tools
- Tailwind CSS and PostCSS
- Express and Nodemailer (backend)
- Lucide React icons

### Step 3: Configure Environment Variables
```bash
# Copy example env file
cp .env.example .env

# Edit .env with your credentials
# On Windows: notepad .env
# On Mac/Linux: nano .env
```

**Required Variables:**
```
EMAIL_USER=your-mail@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
PORT=3001
VITE_API_URL=http://localhost:3001
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
│   │   ├── Footer.tsx          # Footer with newsletter & social links
│   │   ├── Hero.tsx            # Landing page hero section
│   │   ├── VehicleCard.tsx     # Vehicle selection card component
│   │   ├── LocationSelector.tsx # State/District/Area selector
│   │   ├── PaymentMethods.tsx  # Payment method selection
│   │   └── ...
│   │
│   ├── pages/                  # Full page components
│   │   ├── HomePage.tsx        # Landing page
│   │   ├── AboutPage.tsx       # About company
│   │   ├── ServicesPage.tsx    # Services offered
│   │   ├── BookingPage.tsx     # Main booking flow (4 steps)
│   │   ├── BlogPage.tsx        # Blog articles
│   │   ├── ContactPage.tsx     # Contact form page
│   │   ├── FAQPage.tsx         # FAQ section
│   │   ├── PricingPage.tsx     # Pricing information
│   │   └── ...
│   │
│   ├── context/                # React Context providers
│   │   ├── BookingContext.tsx  # Booking state management
│   │   └── ...
│   │
│   ├── data/                   # Static data files
│   │   ├── vehicles.ts         # Vehicle specifications
│   │   ├── indianStates.ts     # State/district data
│   │   └── ...
│   │
│   ├── types/                  # TypeScript definitions
│   │   └── index.ts            # All type definitions
│   │
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
│
├── api/                        # Backend API routes (Vercel Functions)
│   ├── subscribe.js            # Newsletter subscription endpoint
│   ├── contact.js              # Contact form endpoint
│   └── health.js               # Health check endpoint
│
├── server.js                   # Express server (local development)
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
├── .env                        # Environment variables (local)
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
│
├── INSTRUCTIONS.md             # This file
├── README.md                   # Project overview
├── EMAIL_SETUP.md              # Email configuration guide
├── EMAIL_FEATURES.md           # Email features documentation
├── VERCEL_QUICK_DEPLOY.md      # Quick deployment guide
├── VERCEL_DEPLOYMENT.md        # Detailed deployment guide
└── ...other docs

```

---

## Development Commands

### Frontend Development
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

### Backend Development
```bash
# Start Express server on http://localhost:3001
npm run server

# Run both server and frontend (requires concurrently)
npm run dev-with-server
```

### Useful Combinations

**Local Development (Recommended)**
```bash
# Terminal 1: Start backend
npm run server

# Terminal 2: Start frontend
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## Email Configuration

### 1. Get Gmail App Password

**Required**: Gmail account with 2-Step Verification enabled

Steps:
1. Go to https://myaccount.google.com/security
2. Click "2-Step Verification" (if not enabled, set it up)
3. Click "App passwords"
4. Select "Mail" and "Windows Computer"
5. Google generates 16-character password
6. Copy the password (without spaces)

### 2. Update .env File

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
PORT=3001
VITE_API_URL=http://localhost:3001
```

### 3. Test Email Functionality

1. Run backend: `npm run server`
2. Run frontend: `npm run dev`
3. Go to http://localhost:5173
4. Subscribe to newsletter in footer
5. Check babinbid05@gmail.com inbox
6. Should receive subscription notification ✅

### Troubleshooting Emails

| Issue | Solution |
|-------|----------|
| "Failed to connect" | Make sure backend is running |
| "Authentication failed" | Verify Gmail App Password (not regular password) |
| Email not arriving | Check spam folder; wait 1-2 minutes |
| Port 3001 in use | Change PORT in .env and restart |

---

## Running Locally

### Full Setup Steps

```bash
# 1. Clone repository
git clone https://github.com/KGFCH2/CargoConnect.git
cd CargoConnect

# 2. Install dependencies
npm install

# 3. Configure .env file
cp .env.example .env
# Edit .env with Gmail App Password

# 4. Terminal 1: Start backend
npm run server
# Output: "Server is running on port 3001"

# 5. Terminal 2: Start frontend
npm run dev
# Output: "Local: http://localhost:5173"

# 6. Open browser
# Visit http://localhost:5173
```

### Testing Features Locally

**Newsletter Subscription**
1. Scroll to Footer
2. Enter email in Newsletter section
3. Click "Subscribe"
4. See success message
5. Email received at babinbid05@gmail.com

**Contact Form**
1. Go to Contact page (navigation menu)
2. Fill form details
3. Click "Send Message"
4. See success message
5. Emails sent to both admin and user

**Booking Flow**
1. Go to Home page
2. Enter pickup and dropoff locations
3. System calculates distance and fare
4. Select vehicle
5. Continue through steps
6. Complete booking

### Dark Mode Testing
1. Click moon/sun icon in header
2. Theme should switch instantly
3. All pages should be themed appropriately
4. Refresh page - theme persists

---

## Deployment

### Option 1: Deploy to Vercel (Recommended)

**Quick Deploy (5 minutes)** - See `VERCEL_QUICK_DEPLOY.md`

**Steps:**
1. Push to GitHub: `git push origin main`
2. Go to https://vercel.com
3. Click "New Project" → Import GitHub repo
4. Deploy (1 click)
5. Add environment variables in Vercel dashboard
6. Done! Site is live 🎉

**Benefits:**
- ✅ Emails work 24/7
- ✅ No need to run server locally
- ✅ Auto-scales for traffic
- ✅ Free tier available
- ✅ Takes 5 minutes

### Option 2: Deploy Locally

**For testing purposes only:**
```bash
# Build
npm run build

# Output is in 'dist' folder
# Upload 'dist' folder to your hosting
```

### Option 3: Deploy to Other Platforms

**Heroku** (deprecated)
**AWS** (complex setup)
**DigitalOcean** (Droplets)
**Railway.app** (Node.js hosting)

See `VERCEL_DEPLOYMENT.md` for detailed instructions.

---

## Troubleshooting

### General Issues

**Port 5173 already in use**
```bash
# Kill process on that port
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

**Node modules issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
# Clean build
npm run build -- --force
```

### Email Issues

**"Cannot GET /api/subscribe"**
- Backend server not running
- Fix: Run `npm run server` in another terminal

**Emails not sending**
- Wrong Gmail App Password
- Fix: Verify password (without spaces) in .env

**CORS errors**
- Frontend and backend not on correct ports
- Fix: Verify localhost:5173 for frontend, localhost:3001 for backend

### Theme Issues

**Dark mode not persisting**
- Browser localStorage disabled
- Fix: Enable localStorage in browser settings

**Theme flickering**
- CSS not loaded properly
- Fix: Clear browser cache and hard refresh (Ctrl+Shift+R)

---

## Code Style & Conventions

### TypeScript
- Use `interface` for object types
- Use `type` for unions and complex types
- Define all function parameters
- No `any` type usage (use `unknown` if needed)

### React Components
- Use functional components with hooks
- Named exports for components
- Props interface always defined
- PropTypes/JSDoc for documentation

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Styles: `lowercase.css`
- Data files: `camelCase.ts`

### Folder Organization
- One component per file
- Related utilities together
- Data files in `data/` folder
- Types in `types/` folder

---

## Git Workflow

### Feature Development
```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes
git add .
git commit -m "Add description of changes"

# Push to GitHub
git push origin feature/feature-name

# Create Pull Request on GitHub
```

### Commit Messages
- Use present tense: "Add feature" not "Added feature"
- Be descriptive: "Add dark mode toggle" not "Fix"
- Reference issues: "Fix #123: Add feature"

---

## Performance Optimization

### Already Implemented
- ✅ Code splitting with React Router
- ✅ Image optimization (Lucide icons)
- ✅ CSS purging with Tailwind
- ✅ Lazy loading on pages
- ✅ Memoization on expensive components

### Best Practices
- Avoid creating components inside render
- Use `React.memo` for expensive components
- Lazy load routes with `React.lazy()`
- Optimize images before adding

---

## Security Considerations

### Current Implementation
- ✅ Environment variables for secrets (.env)
- ✅ No sensitive data in frontend code
- ✅ CORS configured for production
- ✅ Input validation on backend
- ✅ Gmail App Password instead of plain password

### Before Production
- [ ] Enable HTTPS on all endpoints
- [ ] Add rate limiting to API
- [ ] Implement authentication if needed
- [ ] Add request validation
- [ ] Setup monitoring and logging

---

## Contributing Guidelines

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/KGFCH2/CargoConnect.git
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes**
   - Follow code style guidelines
   - Test your changes locally
   - Update documentation if needed

4. **Commit changes**
   ```bash
   git add .
   git commit -m "Add: Clear description of changes"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   # Then create PR on GitHub
   ```

### What to Include

- Clear commit messages
- Comments for complex logic
- Updated README if adding features
- Tests for new functionality

---

## Useful Resources

### Documentation
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Tools & Libraries
- [Lucide Icons](https://lucide.dev)
- [React Router](https://reactrouter.com)
- [Nodemailer](https://nodemailer.com)
- [Express.js](https://expressjs.com)

### Deployment
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com)

---

## FAQ

**Q: Can I use the app without backend?**
A: Yes, but email features won't work. Frontend works standalone.

**Q: How do I add new pages?**
A: Create component in `src/pages/`, add route in `App.tsx`.

**Q: Where's the database?**
A: This is a frontend-heavy app. Data is in browser state/localStorage.

**Q: Can I deploy to Netlify?**
A: Yes, but backend won't work. Use Vercel for full functionality.

**Q: How do I add payment integration?**
A: Payment methods UI exists, but integration requires payment gateway setup.

**Q: Is there a mobile app?**
A: No, but the web app is fully responsive and mobile-friendly.

---

## Support & Contact

- **Issues**: Open an issue on GitHub
- **Email**: babinbid05@gmail.com
- **LinkedIn**: [Babin Bid](https://www.linkedin.com/in/babin-bid-853728293/)

---

## Changelog

### Version 1.0 (Current)
- ✅ Complete booking system
- ✅ Dark/Light mode
- ✅ Email notifications
- ✅ Responsive design
- ✅ Vercel deployment ready

---

**Last Updated**: December 15, 2025
**Maintained By**: Babin Bid

---

Made with ❤️ for seamless cargo transportation across India.
