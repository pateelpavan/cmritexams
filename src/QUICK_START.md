# 🚀 Quick Start Guide - CMRIT EXAM

## Step 1: Add Your PDF Links (IMPORTANT!)

Open `/components/QuestionPaperSection.tsx` and replace the `#` with your actual PDF URLs:

```typescript
const mockQuestionPapers: QuestionPaper[] = [
  { 
    id: '1', 
    subject: 'Engineering Mathematics I', 
    year: '1', 
    semester: '1', 
    examType: 'mid1', 
    pdfUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view' // ← Replace this!
  },
  // Update all 20 entries...
];
```

### Quick PDF Hosting Options:
- **Google Drive:** Upload → Share → Copy link → Paste
- **Dropbox:** Upload → Share → Copy link → Paste
- **GitHub:** Commit PDFs → Copy raw URL → Paste

## Step 2: Update Contact Info

Open `/components/ContactSection.tsx`:

```typescript
// Line ~18: Update WhatsApp number
window.open('https://wa.me/919876543210', '_blank'); // ← Your number

// Line ~23: Update Telegram channel
window.open('https://t.me/cmritexam', '_blank'); // ← Your channel

// Line ~48: Update displayed number
<div className="text-green-700 text-lg mb-6">
  +91-9876543210  {/* ← Update this */}
</div>

// Line ~77: Update displayed channel
<div className="text-orange-700 text-lg mb-6">
  @cmritexam  {/* ← Update this */}
</div>
```

## Step 3: Deploy to Netlify

### Option A: Netlify Drop (Fastest - 2 minutes)
```bash
npm install
npm run build
```
Then drag the `dist` folder to https://app.netlify.com/drop

### Option B: GitHub + Netlify (Best for updates)
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```
Then connect your GitHub repo on Netlify.

## Step 4: Test Everything

✅ All filters work (Year, Semester, Exam Type)
✅ View Paper opens PDF in new tab
✅ Download button works
✅ WhatsApp link opens correctly
✅ Telegram link opens correctly
✅ Mobile responsive (test on phone)
✅ PWA installs on mobile

## Optional Enhancements

### Create App Icons
1. Go to https://www.canva.com/
2. Create 192x192 and 512x512 PNG images
3. Use green (#22c55e) to orange (#f97316) gradient
4. Add "CE" or "CMRIT" text in white
5. Save as `/public/icon-192.png` and `/public/icon-512.png`
6. Delete the `.txt` placeholder files

### Custom Domain
1. Buy domain (GoDaddy, Namecheap, etc.)
2. In Netlify: Settings → Domain → Add custom domain
3. Update DNS records as instructed
4. Free SSL auto-enabled!

## Common Issues & Quick Fixes

**PDFs not opening?**
- Ensure URLs are publicly accessible
- Test URL in incognito browser
- Check Google Drive sharing settings

**WhatsApp not working?**
- Format: `https://wa.me/919876543210` (country code + number, no spaces)

**Build failing?**
- Run `npm install` first
- Check for TypeScript errors: `npm run build`
- See full logs in Netlify dashboard

**PWA not installing?**
- Create icon-192.png and icon-512.png
- Check site is HTTPS (automatic on Netlify)
- Clear browser cache

## File Structure

```
/components/
  ├── QuestionPaperSection.tsx  ← Add PDF URLs here
  ├── ContactSection.tsx         ← Update contact info here
  └── ...other components

/public/
  ├── manifest.json              ← PWA settings
  ├── sw.js                      ← Service worker
  ├── icon-192.png              ← Create this
  └── icon-512.png              ← Create this

netlify.toml                     ← Netlify config (ready!)
```

## Need Help?

- 📖 Full guide: See `DEPLOYMENT.md`
- 📱 Mobile setup: Already configured!
- 🎨 Customization: See `README.md`

---

**You're ready to launch! 🎉**

After deployment, share your link with students and start collecting more question papers!
