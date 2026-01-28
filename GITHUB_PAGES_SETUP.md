# Deploy to GitHub Pages (vahid454.github.io)

## Overview
Your DevProfile will be live at: **https://vahid454.github.io**

---

## What is GitHub Pages?
- Free static hosting directly from GitHub
- Built-in SSL/HTTPS
- Auto-deploys from your repo
- Perfect for portfolios

---

## Step 1: Build Your Frontend

The frontend needs to be built and served as static files.

```bash
cd /Users/vahidmansuri/Developer/Sources/Repos/DevProfile/devprofile-frontend

# Install dependencies
npm install

# Build for production
npm run build

# This creates dist/devprofile-frontend folder
```

---

## Step 2: Update Angular Base Href

Since the site will be at `vahid454.github.io`, update the base path in Angular config:

**File:** `devprofile-frontend/angular.json`

Change:
```json
"outputPath": "dist/devprofile-frontend"
```

And update build to include base href for GitHub Pages.

---

## Step 3: Set Up GitHub Pages

1. Go to your repo: https://github.com/vahid454/DevProfile

2. Click **Settings** → **Pages**

3. **Build and deployment:**
   - Source: Deploy from a branch
   - Branch: `main` (or `gh-pages`)
   - Folder: `devprofile-frontend/dist/devprofile-frontend`

4. Click **Save**

---

## Step 4: Push Built Files

```bash
cd /Users/vahidmansuri/Developer/Sources/Repos/DevProfile

# Add dist folder
git add devprofile-frontend/dist/

# Commit
git commit -m "Build frontend for GitHub Pages"

# Push
git push origin main
```

---

## Step 5: GitHub Actions Auto-Deploy (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
    
    - name: Install dependencies
      run: cd devprofile-frontend && npm install
    
    - name: Build
      run: cd devprofile-frontend && npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./devprofile-frontend/dist/devprofile-frontend
```

---

## Final Steps

1. Build locally: `npm run build`
2. Push to GitHub: `git push origin main`
3. Wait 1-2 minutes for GitHub Actions
4. Visit: **https://vahid454.github.io**

✅ **Done! Your portfolio is live!**

---

## About the Backend API

The backend (ASP.NET Core) currently runs locally. For GitHub Pages to work with API calls:

**Option A: Keep local backend**
- API works only when you run locally
- Use `/api` endpoints for development

**Option B: Deploy backend separately** (optional later)
- Could deploy to Render/Railway for free
- Update API URLs in Angular service

For now, the frontend will display fine on GitHub Pages!

---

## Troubleshooting

**Page shows 404?**
- Wait 1-2 minutes for deployment
- Check GitHub Actions: Settings → Actions

**Styles not loading?**
- Check Angular base href in `angular.json`
- May need: `ng build --base-href "/DevProfile/"`

**API calls not working?**
- Expected - backend isn't deployed yet
- Mock data or deploy backend separately

---

## Quick Commands

```bash
# Build
cd devprofile-frontend && npm run build

# Deploy
git add -A && git commit -m "Deploy" && git push origin main

# Live at
https://vahid454.github.io
```

Done! 🚀
