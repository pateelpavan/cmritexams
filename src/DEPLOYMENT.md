# Netlify Deployment Guide for CMRIT EXAM

## Quick Deploy (5 Minutes)

### Method 1: Deploy via Netlify Drop (Easiest)

1. **Build locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Go to Netlify:**
   - Visit https://app.netlify.com/drop
   - Drag and drop the `dist` folder
   - Your site is live! 🎉

### Method 2: Deploy via GitHub (Recommended for updates)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository
   - Configure settings (should auto-detect):
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

## Post-Deployment Setup

### 1. Update PDF Links

Edit `/components/QuestionPaperSection.tsx`:

```typescript
const mockQuestionPapers: QuestionPaper[] = [
  { 
    id: '1', 
    subject: 'Engineering Mathematics I', 
    year: '1', 
    semester: '1', 
    examType: 'mid1', 
    pdfUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view' // Add real link
  },
  // Add more papers...
];
```

**Where to host PDFs:**
- **Google Drive:** Upload PDF → Get shareable link → Make sure "Anyone with link can view"
- **Dropbox:** Upload → Share → Copy link
- **GitHub:** Add PDFs to repository → Copy raw file URL
- **Cloudinary/AWS S3:** Upload and get public URL

### 2. Update Contact Information

Edit `/components/ContactSection.tsx`:

```typescript
const handleCallWhatsApp = () => {
  // Replace with your WhatsApp number (format: 919876543210)
  window.open('https://wa.me/919876543210', '_blank');
};

const handleJoinChannel = () => {
  // Replace with your Telegram channel
  window.open('https://t.me/cmritexam', '_blank');
};
```

Update the displayed text:
```typescript
<div className="text-green-700 text-lg mb-6">
  +91-9876543210  {/* Update this number */}
</div>

<div className="text-orange-700 text-lg mb-6">
  @cmritexam  {/* Update this channel name */}
</div>
```

### 3. Create App Icons (Optional but Recommended)

Create two PNG icons:
- **icon-192.png** (192x192 pixels)
- **icon-512.png** (512x512 pixels)

**Design tips:**
- Use gradient from green (#22c55e) to orange (#f97316)
- Add text "CE" or "CMRIT" in white
- Use tools like:
  - https://www.canva.com/ (free, easy templates)
  - https://www.figma.com/ (professional)
  - https://favicon.io/favicon-generator/ (quick generator)

Save them in the `/public` folder and delete the `.txt` placeholder files.

### 4. Custom Domain (Optional)

**On Netlify:**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., cmritexam.com)
4. Follow DNS configuration instructions
5. Netlify auto-enables HTTPS (free SSL)

## Testing Before Deployment

```bash
# Install dependencies
npm install

# Test development version
npm run dev
# Open http://localhost:5173

# Test production build
npm run build
npm run preview
# Open http://localhost:4173
```

## Common Issues & Fixes

### Issue: Build fails on Netlify

**Fix:** Check build logs. Common causes:
- Missing dependencies in package.json
- TypeScript errors
- Environment variable issues

**Solution:**
```bash
# Test build locally first
npm run build
# Fix any errors shown
```

### Issue: PDFs don't open

**Causes:**
- PDF URL is not public
- CORS restrictions
- Invalid URL

**Fix:**
- Ensure PDF links are publicly accessible
- Test PDF URL in browser incognito mode
- For Google Drive, use proper sharing settings

### Issue: WhatsApp/Telegram links don't work

**Fix:** Check URL format:
- WhatsApp: `https://wa.me/919876543210` (no spaces, include country code)
- Telegram: `https://t.me/channelname` (no @ symbol in URL)

### Issue: PWA not installing

**Fixes:**
- Ensure site uses HTTPS (Netlify does this automatically)
- Check manifest.json is accessible: `yoursite.com/manifest.json`
- Create proper icon files (icon-192.png and icon-512.png)
- Clear browser cache and try again

## Environment Variables (if needed later)

If you need API keys or secrets:

1. In Netlify dashboard → Site settings → Environment variables
2. Add variables (e.g., `API_KEY=your_key`)
3. Access in code: `import.meta.env.API_KEY`

## Updating Your Site

### After making changes:

**If deployed via Drop:**
1. Run `npm run build`
2. Drag new `dist` folder to Netlify

**If deployed via GitHub:**
1. Make changes
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update question papers"
   git push
   ```
3. Netlify auto-deploys! ✨

## Performance Tips

1. **Optimize Images:** Compress icon files before uploading
2. **CDN:** Netlify automatically uses CDN
3. **Caching:** Already configured in `netlify.toml`
4. **HTTPS:** Enabled automatically by Netlify

## Support & Monitoring

- **Analytics:** Enable in Netlify dashboard → Analytics
- **Forms:** If you add contact forms, use Netlify Forms
- **Functions:** Can add serverless functions if needed

## Checklist Before Going Live

- [ ] All PDF links updated with real files
- [ ] Contact information updated (WhatsApp, Telegram)
- [ ] App icons created (icon-192.png, icon-512.png)
- [ ] Test on mobile device
- [ ] Test PWA installation
- [ ] Test all filter combinations
- [ ] Test all links (View, Download, Contact)
- [ ] Check on different browsers
- [ ] Enable HTTPS (automatic on Netlify)
- [ ] Share link with friends for testing

## Your Site is Ready! 🚀

After deployment, your CMRIT EXAM platform will be:
- ✅ Live and accessible worldwide
- ✅ Installable as mobile app
- ✅ Fast and responsive
- ✅ Automatically deployed on updates (if using GitHub)
- ✅ Free SSL certificate (HTTPS)
- ✅ CDN-powered for speed

**Default Netlify URL format:** `https://your-site-name.netlify.app`

---

Need help? Check Netlify docs: https://docs.netlify.com/
