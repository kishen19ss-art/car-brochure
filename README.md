# Genesis GT-R Car Brochure

An interactive car brochure with 360° viewer, smooth animations, and modern UI design.

## 🌐 Live Demo

**Deployed Version:** See [GITHUB_DEPLOYMENT.md](./GITHUB_DEPLOYMENT.md) for instructions to deploy your own version.

## 🚀 Quick Start

This is a React application built with Vite. You **cannot** simply open index.html directly. Follow these steps:

### Prerequisites

- Node.js (version 16 or higher)
- npm or pnpm package manager

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```
   
   The app will open at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   # or
   pnpm run build
   ```
   
   This creates a `dist` folder with static files that can be deployed to any web server.

## 📁 Built Files Location

After running `npm run build`, you'll find the production-ready files in the `/dist` folder:
- `dist/index.html` - Main HTML file
- `dist/assets/` - All CSS, JS, and other assets

You can then:
- Upload the entire `dist` folder to any web hosting service
- Open `dist/index.html` with a local web server (not by double-clicking)

## 🌐 Serving Built Files Locally

To test the built version locally:

```bash
# Install a simple HTTP server
npm install -g http-server

# Navigate to dist folder and serve
cd dist
http-server
```

Or use Python:
```bash
cd dist
python -m http.server 8000
# or Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

## ✨ Features

- **360° Interactive Car Viewer** - Drag to rotate, auto-rotate mode
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Technical Specifications** - Detailed car specs with icons
- **Image Gallery** - Interior and exterior photos
- **Modern UI** - Tailwind CSS styling

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (motion package)
- Lucide React Icons

## 📝 Important Notes

⚠️ **Why doesn't index.html work directly?**

This is a Single Page Application (SPA) built with modern JavaScript:
- The source code needs to be compiled/transpiled
- Dependencies need to be bundled
- CSS needs to be processed
- Modern browsers require a proper web server for module imports

Always use `npm run dev` for development or `npm run build` for production deployment.

## 🚢 Deployment

### GitHub Pages (Automatic - Recommended)

This project is configured for automatic deployment to GitHub Pages. See [GITHUB_DEPLOYMENT.md](./GITHUB_DEPLOYMENT.md) for detailed instructions.

**Quick steps:**
1. Create a GitHub repository
2. Update `base` path in `vite.config.ts` to match your repo name
3. Push code to GitHub
4. Enable GitHub Pages in repository settings (Source: GitHub Actions)
5. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Other Deployment Options

The built files in the `dist` folder can be deployed to:
- **Netlify**: Drag & drop the `dist` folder
- **Vercel**: Run `vercel` command
- **GitHub Pages**: Manual deployment with `gh-pages`
- **Any static hosting**: Upload `dist` folder contents
- **Your own web server**: FTP upload

See [GITHUB_DEPLOYMENT.md](./GITHUB_DEPLOYMENT.md) for detailed instructions on all deployment methods.

## 📄 License

© 2026 Genesis Motors. All rights reserved.