# 🚀 GitHub Deployment Guide

This guide will help you deploy your Car Brochure application to GitHub Pages so it works without localhost.

## 📋 Prerequisites

- Git installed on your computer
- A GitHub account
- Node.js installed (for local testing)

---

## 🎯 Quick Deployment Steps

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** button (top right) → **"New repository"**
3. Repository settings:
   - **Name**: `car-brochure` (or any name you prefer)
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README (we already have files)
4. Click **"Create repository"**

### Step 2: Update Repository Name in Code

⚠️ **IMPORTANT**: Open `vite.config.ts` and change the base path to match your repository name:

```typescript
// Line 8: Change 'car-brochure' to YOUR repository name
base: process.env.GITHUB_ACTIONS ? '/your-repo-name/' : '/',
```

For example, if your repository is named `my-car-app`:
```typescript
base: process.env.GITHUB_ACTIONS ? '/my-car-app/' : '/',
```

### Step 3: Initialize Git and Push to GitHub

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Car Brochure Application"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johnsmith/car-brochure.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Source: **GitHub Actions**
5. Click **"Save"**

### Step 5: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow running (yellow dot)
3. Wait for it to complete (green checkmark ✅)
4. Once done, your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```

---

## 🌐 Accessing Your Deployed Site

Your live site URL will be:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Example:**
- Username: `johnsmith`
- Repository: `car-brochure`
- URL: `https://johnsmith.github.io/car-brochure/`

---

## 🔄 Making Updates

When you want to update your site:

```bash
# Make your changes to the code

# Add changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push

# GitHub Actions will automatically rebuild and deploy!
```

---

## 🛠️ Alternative: Manual Deployment

If you prefer not to use GitHub Actions:

### Option A: Deploy to Netlify

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://www.netlify.com/)
3. Sign up/Sign in
4. Drag and drop the `dist` folder
5. Your site is live!

### Option B: Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts

### Option C: GitHub Pages (Manual)

1. Build your project:
   ```bash
   npm run build
   ```

2. Install gh-pages:
   ```bash
   npm install -g gh-pages
   ```

3. Deploy:
   ```bash
   gh-pages -d dist
   ```

---

## 📱 Local Testing Before Deployment

Test your production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

Open http://localhost:4173 to see how it will look when deployed.

---

## ⚙️ Configuration Details

### vite.config.ts

The `base` setting is crucial for GitHub Pages:

```typescript
// For GitHub Pages
base: process.env.GITHUB_ACTIONS ? '/car-brochure/' : '/',
```

- **During development**: Uses `/` (root path)
- **During GitHub Actions build**: Uses `/your-repo-name/`
- This ensures assets load correctly on GitHub Pages

### .github/workflows/deploy.yml

This file automates deployment:
- Triggers on push to `main` or `master` branch
- Installs dependencies
- Builds the project
- Deploys to GitHub Pages

---

## ❓ Troubleshooting

### Problem: 404 Page Not Found

**Solution**: Check that the `base` path in `vite.config.ts` matches your repository name exactly.

```typescript
// If your repo is 'my-app', it should be:
base: process.env.GITHUB_ACTIONS ? '/my-app/' : '/',
```

### Problem: Blank page after deployment

**Solution 1**: Check browser console (F12) for errors
**Solution 2**: Verify the `base` path is correct
**Solution 3**: Make sure GitHub Pages is enabled in repository settings

### Problem: GitHub Actions workflow fails

**Solution**: 
1. Check the Actions tab for error details
2. Ensure `package.json` has all dependencies
3. Try running `npm ci` and `npm run build` locally first

### Problem: Images not loading

**Solution**: Images are loaded from Unsplash CDN, check internet connection

### Problem: CSS not loading

**Solution**: Clear browser cache or check the `base` path configuration

---

## 📊 Repository Structure for GitHub

```
car-brochure/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Auto-deployment config
├── .gitignore                  ← Files to ignore
├── src/
│   └── app/
│       ├── App.tsx            ← Main app
│       └── components/        ← Components
├── package.json               ← Dependencies
├── vite.config.ts            ← Build configuration
└── README.md                 ← Documentation
```

---

## 🎉 Success Checklist

- [ ] Created GitHub repository
- [ ] Updated `base` path in `vite.config.ts`
- [ ] Initialized git and pushed code
- [ ] Enabled GitHub Pages (Source: GitHub Actions)
- [ ] Workflow completed successfully
- [ ] Site is accessible at GitHub Pages URL
- [ ] All features work correctly

---

## 📞 Need Help?

1. **Check GitHub Actions logs**: Go to Actions tab, click on the workflow run
2. **Test locally first**: Run `npm run build` and `npm run preview`
3. **Verify configuration**: Double-check `vite.config.ts` base path
4. **Check GitHub Pages settings**: Ensure source is set to "GitHub Actions"

---

## 🔗 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## 📄 License

© 2026 Genesis Motors. All rights reserved.

---

**Your application is now ready to be deployed to GitHub Pages!**

Simply follow the steps above and your car brochure will be live on the internet without needing localhost.
