# Deployment Guide for Aditya's Kinetic Portfolio

## Prerequisites
- Git installed on your machine
- GitHub account with access to the repository
- Vercel account (can sign up with GitHub)

## Step 1: Upload Code to GitHub

### Option A: Using Git Commands (Recommended)

1. **Navigate to the project folder:**
   ```bash
   cd adityas-kinetic-folio
   ```

2. **Initialize git (if not already initialized):**
   ```bash
   git init
   ```

3. **Remove existing remote (if any):**
   ```bash
   git remote remove origin
   ```

4. **Add your GitHub repository as remote:**
   ```bash
   git remote add origin https://github.com/aadi-254/portfolio.git
   ```

5. **Add all files:**
   ```bash
   git add .
   ```

6. **Commit the changes:**
   ```bash
   git commit -m "Initial commit: Kinetic Portfolio with 3D effects"
   ```

7. **Force push to replace all existing content:**
   ```bash
   git push -f origin main
   ```
   
   Note: If your default branch is `master`, use:
   ```bash
   git push -f origin master
   ```

### Option B: Using GitHub Desktop or Web Interface

1. Delete all files from the repository on GitHub (via web interface)
2. Upload all files from the `adityas-kinetic-folio` folder
3. Commit the changes

## Step 2: Deploy to Vercel

### Method 1: Automatic Deployment (Recommended)

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

2. **Import the project:**
   - Click "Add New..." → "Project"
   - Select your GitHub account
   - Find and select the `portfolio` repository
   - Click "Import"

3. **Configure the project:**
   - Framework Preset: Vite
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: `dist` (should be auto-detected)
   - Install Command: `npm install` (should be auto-detected)

4. **Environment Variables (if needed):**
   - No environment variables are required for this project

5. **Click "Deploy"**

### Method 2: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Navigate to project directory:**
   ```bash
   cd adityas-kinetic-folio
   ```

4. **Deploy:**
   ```bash
   vercel --prod
   ```

## Step 3: Configure Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains" section
3. Add your custom domain
4. Follow Vercel's instructions to update DNS records

## Important Files for Deployment

- `vercel.json` - Vercel configuration (already included)
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite configuration
- `dist/` folder - Generated during build (git-ignored)

## Troubleshooting

### If deployment fails:

1. **Check build logs** in Vercel dashboard
2. **Verify Node.js version:**
   - Add a `.node-version` or `.nvmrc` file if needed
   - Default: Node.js 18.x or 20.x

3. **Clear Vercel cache:**
   - Go to project settings
   - Deployment → Clear cache and redeploy

4. **Common issues:**
   - Missing dependencies: Run `npm install` locally to verify
   - Build errors: Run `npm run build` locally to test
   - Route issues: Check `vercel.json` rewrites configuration

## Adding Resume and Certificates

Don't forget to add these files to the `public` folder:
- `Aditya_Makwana_Resume.pdf`
- `certificates.pdf`

These files should be placed in:
```
adityas-kinetic-folio/
  public/
    Aditya_Makwana_Resume.pdf
    certificates.pdf
```

## Automatic Deployments

Once connected to Vercel:
- **Every push to main/master branch** → Automatic production deployment
- **Every push to other branches** → Preview deployment
- **Pull requests** → Preview deployment with unique URL

## Vercel Dashboard Features

- **Analytics**: Monitor visitor traffic
- **Speed Insights**: Performance metrics
- **Logs**: Real-time and historical logs
- **Environment Variables**: Manage secrets
- **Custom Domains**: Add multiple domains

## Support

For issues:
- Vercel Docs: https://vercel.com/docs
- GitHub: Check repository issues
- Vercel Community: https://github.com/vercel/vercel/discussions
