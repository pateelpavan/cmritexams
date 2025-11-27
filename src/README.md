# CMRIT EXAM - Question Papers Platform

A modern, responsive Progressive Web App (PWA) for accessing CMRIT previous question papers.

## Features

- 🎨 Modern UI with Green & Orange theme
- 📱 Mobile-first design with app-like experience
- 🔍 Advanced filtering (Year, Semester, Exam Type)
- 📥 View and Download question papers
- 💨 Smooth animations and transitions
- 🚀 Progressive Web App (installable on mobile)
- ⚡ Fast and responsive

## How to Add Question Papers

To add real PDF links to question papers, edit the `mockQuestionPapers` array in `/components/QuestionPaperSection.tsx`:

```typescript
const mockQuestionPapers: QuestionPaper[] = [
  { 
    id: '1', 
    subject: 'Engineering Mathematics I', 
    year: '1', 
    semester: '1', 
    examType: 'mid1', 
    pdfUrl: 'https://your-pdf-link.com/paper.pdf' // Replace '#' with your PDF URL
  },
  // Add more papers...
];
```

### Where to host PDFs:
- Google Drive (make sure link is publicly accessible)
- Dropbox
- Your own server
- GitHub (for small PDFs)
- Cloud storage (AWS S3, Cloudinary, etc.)

## Deployment to Netlify

### Step 1: Prepare Your Project

1. Make sure you have a `package.json` file with build scripts
2. Ensure all dependencies are listed in `package.json`

### Step 2: Deploy to Netlify

#### Option A: Drag and Drop (Easiest)

1. Build your project locally:
   ```bash
   npm install
   npm run build
   ```

2. Go to [Netlify](https://www.netlify.com/)
3. Drag and drop your `dist` folder to Netlify

#### Option B: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Step 3: Update Contact Information

Update the contact details in `/components/ContactSection.tsx`:

```typescript
const handleCallWhatsApp = () => {
  window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
};

const handleJoinChannel = () => {
  window.open('https://t.me/YOUR_CHANNEL', '_blank');
};
```

Replace:
- `YOUR_PHONE_NUMBER` with actual WhatsApp number (format: 919876543210)
- `YOUR_CHANNEL` with actual Telegram channel username

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## PWA Features

The app includes:
- Offline support with Service Worker
- Installable on mobile devices
- App-like experience on mobile
- Custom splash screen
- Optimized for mobile performance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
The app uses Green (#22c55e) and Orange (#f97316) as primary colors. To change:
1. Update Tailwind classes in components
2. Update theme color in `/public/manifest.json`
3. Update meta theme-color in `/index.html`

### Logo/Icon
Replace the placeholder icons:
- `/public/favicon.svg` - Browser tab icon
- Create `/public/icon-192.png` - PWA icon (192x192)
- Create `/public/icon-512.png` - PWA icon (512x512)

## Troubleshooting

### PDFs not opening
- Ensure PDF URLs are publicly accessible
- Check CORS settings if PDFs are on external servers
- Test PDF links in a new browser tab

### PWA not installing
- Ensure site is served over HTTPS (Netlify does this automatically)
- Check if manifest.json is accessible
- Verify Service Worker is registered

## License

This project is created for educational purposes for CMRIT students.

## Support

For issues or questions, contact through the app's Contact section.
