# PowerShell Script to Deploy Portfolio to GitHub
# Run this script from the adityas-kinetic-folio directory

Write-Host "🚀 Aditya's Portfolio - GitHub Deployment Script" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-Not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found!" -ForegroundColor Red
    Write-Host "Please run this script from the adityas-kinetic-folio directory" -ForegroundColor Yellow
    exit 1
}

Write-Host "📦 Step 1: Checking Git installation..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🔧 Step 2: Initializing Git repository..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Write-Host "✅ Git repository already initialized" -ForegroundColor Green
} else {
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
}

Write-Host ""
Write-Host "🔗 Step 3: Setting up remote repository..." -ForegroundColor Yellow
try {
    git remote remove origin 2>$null
    Write-Host "✅ Removed existing remote (if any)" -ForegroundColor Green
} catch {
    Write-Host "ℹ️  No existing remote to remove" -ForegroundColor Gray
}

git remote add origin https://github.com/aadi-254/portfolio.git
Write-Host "✅ Added remote: https://github.com/aadi-254/portfolio.git" -ForegroundColor Green

Write-Host ""
Write-Host "📝 Step 4: Staging all files..." -ForegroundColor Yellow
git add .
Write-Host "✅ All files staged" -ForegroundColor Green

Write-Host ""
Write-Host "💾 Step 5: Creating commit..." -ForegroundColor Yellow
git commit -m "Deploy: Aditya's Kinetic Portfolio with 3D effects and animations"
Write-Host "✅ Commit created" -ForegroundColor Green

Write-Host ""
Write-Host "⚠️  WARNING: This will REPLACE all existing content in the repository!" -ForegroundColor Red
Write-Host ""
$confirmation = Read-Host "Type 'YES' to continue with force push"

if ($confirmation -eq "YES") {
    Write-Host ""
    Write-Host "🚀 Step 6: Pushing to GitHub..." -ForegroundColor Yellow
    Write-Host "Attempting to push to main branch..." -ForegroundColor Gray
    
    $pushResult = git push -f origin main 2>&1
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ℹ️  Main branch push failed, trying master branch..." -ForegroundColor Yellow
        git push -f origin master
    }
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host ""
        Write-Host "🎉 Deployment Complete!" -ForegroundColor Cyan
        Write-Host "================================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. Visit: https://github.com/aadi-254/portfolio" -ForegroundColor White
        Write-Host "2. Verify all files are uploaded correctly" -ForegroundColor White
        Write-Host "3. Go to https://vercel.com/dashboard" -ForegroundColor White
        Write-Host "4. Import your repository and deploy" -ForegroundColor White
        Write-Host ""
        Write-Host "📖 For detailed Vercel deployment steps, see DEPLOYMENT_GUIDE.md" -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "❌ Push failed. Please check your GitHub credentials." -ForegroundColor Red
        Write-Host "You may need to:" -ForegroundColor Yellow
        Write-Host "1. Generate a Personal Access Token on GitHub" -ForegroundColor White
        Write-Host "2. Use: git credential-manager" -ForegroundColor White
        Write-Host "3. Or push manually using Git Bash" -ForegroundColor White
    }
} else {
    Write-Host ""
    Write-Host "❌ Deployment cancelled by user" -ForegroundColor Red
    Write-Host "No changes were pushed to GitHub" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
