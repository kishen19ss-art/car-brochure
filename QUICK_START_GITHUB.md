# 🚀 Quick Start: Deploy to GitHub in 5 Minutes

Follow these simple steps to get your Car Brochure live on the internet!

---

## ⚡ Step 1: Update Configuration (30 seconds)

Open the file `vite.config.ts` and find line 8:

```typescript
base: process.env.GITHUB_ACTIONS ? '/car-brochure/' : '/',
```

**Change `car-brochure` to your repository name.**

For example, if you name your repository `my-awesome-car`:
```typescript
base: process.env.GITHUB_ACTIONS ? '/my-awesome-car/' : '/',
```

💡 **Tip**: Choose a simple repository name like `car-brochure`, `car-viewer`, or `car-showcase`

---

## 🌐 Step 2: Create GitHub Repository (1 minute)

1. Go to https://github.com
2. Click the **"+"** button (top right corner)
3. Click **"New repository"**
4. Fill in:
   - **Repository name**: `car-brochure` (or whatever you chose in Step 1)
   - **Visibility**: Public ✅
   - **DO NOT check** "Add a README file"
5. Click **"Create repository"**

---

## 💻 Step 3: Push Your Code (2 minutes)

### Option A: Using GitHub Desktop (Easiest)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click **"Add"** → **"Add Existing Repository"**
4. Browse to your project folder
5. Click **"Publish repository"**
6. Uncheck "Keep this code private"
7. Click **"Publish repository"**

✅ **Done! Skip to Step 4.**

---

### Option B: Using Command Line

Open Terminal/Command Prompt in your project folder:

**For Windows (Command Prompt or PowerShell):**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

**For Mac/Linux (Terminal):**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

**Replace:**
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with your repository name

**Example:**
```bash
git remote add origin https://github.com/johnsmith/car-brochure.git
```

---

## ⚙️ Step 4: Enable GitHub Pages (1 minute)

1. Go to your repository on GitHub: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`
2. Click the **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** ✅
5. That's it! No need to click Save - it's automatic

---

## 🎉 Step 5: Wait for Deployment (1-2 minutes)

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running (yellow circle 🟡)
3. Wait for it to turn green (✅)
4. Once complete, click on **"Settings"** → **"Pages"** again
5. You'll see: **"Your site is live at https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"**

---

## 🌟 Your Site is Live!

Your URL will be:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Example:**
- Username: `johnsmith`
- Repository: `car-brochure`
- Live URL: `https://johnsmith.github.io/car-brochure/`

---

## 🔄 Making Updates Later

When you want to change something:

### Using GitHub Desktop:
1. Make your changes
2. Open GitHub Desktop
3. Write a commit message
4. Click **"Commit to main"**
5. Click **"Push origin"**
6. Wait 1-2 minutes - your site will auto-update!

### Using Command Line:
```bash
# After making changes
git add .
git commit -m "Updated design"
git push
```

GitHub will automatically rebuild and deploy! ✨

---

## ❓ Troubleshooting

### My site shows 404 or blank page

**Fix 1:** Check `vite.config.ts` - make sure the base path matches your repo name exactly:
```typescript
base: process.env.GITHUB_ACTIONS ? '/YOUR-EXACT-REPO-NAME/' : '/',
```

**Fix 2:** Check GitHub Pages settings - make sure Source is "GitHub Actions"

**Fix 3:** Check Actions tab - make sure the workflow completed successfully (green ✅)

---

### The GitHub Actions workflow failed

1. Go to **Actions** tab
2. Click on the failed workflow
3. Look for error messages
4. Common issues:
   - Missing dependencies → Run `npm install` locally first
   - Wrong Node version → The workflow uses Node 20, which should work

---

### Images aren't loading

Images are loaded from Unsplash CDN. Check your internet connection or open browser console (F12) to see specific errors.

---

### I don't see the Pages option in Settings

Make sure:
1. Your repository is **Public** (not Private)
2. You're in the correct repository
3. You have admin access to the repository

---

## 📋 Checklist

Use this checklist to make sure you didn't miss anything:

- [ ] Updated `vite.config.ts` with correct repository name
- [ ] Created GitHub repository (Public)
- [ ] Pushed code to GitHub (via Desktop or command line)
- [ ] Enabled GitHub Pages (Source: GitHub Actions)
- [ ] Workflow completed successfully (green checkmark in Actions)
- [ ] Site is accessible at GitHub Pages URL
- [ ] All features work (360° viewer, animations, etc.)

---

## 🎯 What Happens Automatically

Every time you push code to GitHub:
1. GitHub Actions workflow starts
2. Installs dependencies (`npm ci`)
3. Builds your project (`npm run build`)
4. Deploys to GitHub Pages
5. Your site updates in 1-2 minutes!

---

## 🌐 Share Your Site

Once live, share your URL:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

It will work on:
✅ Desktop computers
✅ Tablets
✅ Mobile phones
✅ Any modern web browser

**No localhost required!** 🎉

---

## 💡 Pro Tips

1. **Custom Domain**: You can use your own domain (like www.mycar.com) - see GitHub Pages documentation

2. **HTTPS**: Your site automatically has HTTPS (secure) ✅

3. **Free Hosting**: GitHub Pages is completely free for public repositories

4. **Analytics**: You can add Google Analytics by modifying the code

5. **Fast Loading**: GitHub's CDN makes your site load fast worldwide

---

## 📚 Need More Help?

- **Detailed Guide**: See [GITHUB_DEPLOYMENT.md](./GITHUB_DEPLOYMENT.md)
- **Technical Details**: See [README.md](./README.md)
- **Project Info**: See [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

---

**That's it! Your car brochure is now live on the internet! 🚗✨**
