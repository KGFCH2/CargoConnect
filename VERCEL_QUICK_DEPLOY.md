# 🚀 Deploy to Vercel - Simple Steps

## What You Get
- ✅ Emails work **24/7** (no need to run anything locally)
- ✅ Free deployment with Vercel
- ✅ Auto-scales for traffic
- ✅ Takes 5 minutes to set up

## 5-Minute Setup

### Step 1: Push to GitHub (1 min)
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Create Vercel Account (1 min)
1. Go to https://vercel.com
2. Click "Sign up" → Choose "GitHub"
3. Authorize Vercel to access your GitHub

### Step 3: Deploy Project (1 min)
1. On Vercel dashboard, click "New Project"
2. Select your GitHub repo
3. Click "Import"
4. Click "Deploy"

### Step 4: Add Environment Variables (1 min)
After deployment:
1. Go to "Settings" → "Environment Variables"
2. Add two variables:
   - **Name**: `EMAIL_USER` 
     **Value**: `your_email@gmail.com`
   - **Name**: `EMAIL_PASSWORD`
     **Value**: `your-16-char-gmail-app-password`
3. Click "Save"
4. Redeploy: Click "Deployments" → Click latest → "Redeploy"

### Step 5: Get Your URL (1 min)
- Your live site: `https://your-project-name.vercel.app`
- Copy this URL!

## Update API Endpoint (Optional but Recommended)

If you want both local and production to work:

**Add to `.env.production` file:**
```
VITE_API_URL=https://your-project-name.vercel.app
```

## Test Live Emails ✅

1. Go to your live site
2. Subscribe to newsletter
3. Check babinbid05@gmail.com
4. Email arrives instantly!

**That's it! Emails work 24/7 without running anything locally!** 🎉

---

## Need Help?

- **Emails not sending?** Check EMAIL_PASSWORD is correct (must be Gmail App Password)
- **Can't find APP Password?** See `EMAIL_SETUP.md` for Gmail setup
- **Want more details?** See `VERCEL_DEPLOYMENT.md` for advanced setup
