# Deployment Guide - Music Club Website

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

---

## Option 1: Netlify (Recommended - Easiest)

### Deploy

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select `minglong51/MusicClubWebsite`
4. Settings are auto-detected:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

### Connect Custom Domain

1. In Netlify: Site settings → Domain management → Add custom domain
2. Enter your domain (e.g., `yourdomain.com`)
3. In Google/Squarespace DNS, add:
   - **CNAME**: `www` → `your-site-name.netlify.app`
   - **A record**: `@` → `75.2.60.5`
4. Netlify provides free HTTPS automatically

### Update Site

Just `git push` to main — Netlify auto-deploys.

---

## Option 2: Vercel

### Deploy

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" → Select `MusicClubWebsite`
3. Click "Deploy" (Vite is auto-detected)

### Connect Custom Domain

1. In Vercel: Project Settings → Domains → Add
2. In Google/Squarespace DNS, add:
   - **CNAME**: `www` → `cname.vercel-dns.com`
   - **A record**: `@` → `76.76.21.21`

### Update Site

Just `git push` — auto-deploys.

---

## Option 3: GitHub Pages

### Setup

1. Install gh-pages:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Add `homepage` to `package.json`:
   ```json
   "homepage": "https://yourdomain.com"
   ```

4. Update `vite.config.ts`:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/',
   })
   ```

### Deploy

```bash
npm run deploy
```

### Connect Custom Domain

1. In GitHub repo: Settings → Pages → Custom domain → Enter your domain
2. In Google/Squarespace DNS, add:
   - **CNAME**: `www` → `minglong51.github.io`
   - **A records** for `@`:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
3. Check "Enforce HTTPS" in GitHub Pages settings

### Update Site

```bash
npm run deploy
```

---

## DNS Propagation

After adding DNS records, wait 5-30 minutes for propagation. Check status at [dnschecker.org](https://dnschecker.org).

---

## Build Locally

```bash
npm run build    # Creates dist/ folder
npm run preview  # Preview production build locally
```
