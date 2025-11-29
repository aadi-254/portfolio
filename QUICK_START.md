# 🚀 Quick Deployment Instructions

## Automated Deployment (Easiest)

### Windows PowerShell:
```powershell
cd adityas-kinetic-folio
.\deploy-to-github.ps1
```

## Manual Deployment

### 1. Push to GitHub:
```bash
cd adityas-kinetic-folio
git init
git remote add origin https://github.com/aadi-254/portfolio.git
git add .
git commit -m "Deploy: Aditya's Kinetic Portfolio"
git push -f origin main
```

If main doesn't work, try:
```bash
git push -f origin master
```

### 2. Deploy to Vercel:

**Option A: Via Vercel Dashboard (Recommended)**
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select GitHub → Find "portfolio" repository
4. Click "Import"
5. Settings should auto-detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

**Option B: Via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Required Files in `public/` Folder:
- `Aditya_Makwana_Resume.pdf`
- `certificates.pdf`

## After Deployment:
- Production URL: Will be provided by Vercel
- GitHub Repo: https://github.com/aadi-254/portfolio
- Auto-deploy: Every push to main/master will auto-deploy

## Troubleshooting:
See `DEPLOYMENT_GUIDE.md` for detailed instructions.
