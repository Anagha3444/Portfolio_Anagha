# 🚀 Anagha Kaloge - Portfolio Website

An interactive, 3D-animated portfolio built with HTML, CSS, and JavaScript.

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript interactions
└── README.md          # This file
```

## 🎯 Features

### ✨ Hero Section
- 3D text that follows mouse movement
- Animated particle background (Canvas)
- Smooth gradient animation
- Call-to-action buttons

### 🛤️ Journey Timeline
- Alternating timeline layout
- Glassmorphism cards
- Scroll-triggered animations
- Responsive design

### 🎨 Skills Section
- 3D floating skill orbs
- Hover effects with flip animation
- Proficiency level tooltips
- Organized by category

### 💼 Projects Section
- Flippable cards (front and back)
- Code snippets on the back
- 3D tilt effect on hover
- Project links and tech stack

### 📧 Contact Section
- Working contact form
- Social media links
- Animated info cards
- Form validation

## 🚀 Quick Start

### Option 1: Simple Setup (Beginner)

1. **Create a new folder** called `portfolio`

2. **Create three files**:
   - `index.html`
   - `styles.css`
   - `script.js`

3. **Copy the code** from each artifact into the respective files

4. **Open `index.html`** in your browser - That's it!

### Option 2: Using Live Server (Recommended)

1. Install **VS Code** if you haven't: https://code.visualstudio.com/

2. Install **Live Server** extension:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search "Live Server"
   - Install it

3. Open your `portfolio` folder in VS Code

4. Right-click on `index.html` → **"Open with Live Server"**

5. Your portfolio will open at `http://127.0.0.1:5500/`

## ✏️ Customization Guide

### 1. Personal Information

In `index.html`, update:

```html
<!-- Line ~40: Your name -->
<h1 class="hero-name">Your Name Here</h1>

<!-- Line ~42: Your tagline -->
<p class="hero-tagline">Your Title Here</p>

<!-- Line ~44: Your description -->
<p class="hero-description">
    Your bio here...
</p>
```

### 2. Social Links

In `index.html` (around line 430):

```html
<a href="https://github.com/YOUR-USERNAME" class="social-link">
<a href="https://linkedin.com/in/YOUR-LINKEDIN" class="social-link">
<a href="https://twitter.com/YOUR-TWITTER" class="social-link">
<a href="mailto:YOUR-EMAIL@example.com" class="social-link">
```

### 3. Project Links

In `index.html` (around line 250):

```html
<a href="YOUR-LIVE-DEMO-URL" class="project-link">Live Demo</a>
<a href="YOUR-GITHUB-REPO-URL" class="project-link">GitHub</a>
```

### 4. Colors

In `styles.css` (line 10):

```css
:root {
    --primary: #667eea;     /* Change to your primary color */
    --secondary: #764ba2;   /* Change to your secondary color */
    --accent: #f093fb;      /* Change to your accent color */
}
```

### 5. Skills & Proficiency Levels

In `index.html` (around line 140):

```html
<div class="skill-orb" data-level="90">  <!-- Change number 0-100 -->
```

## 🎨 Optional Enhancements

### Add Your Photo

1. Add your photo to the folder (e.g., `profile.jpg`)

2. In `index.html`, add this in the hero section:

```html
<img src="profile.jpg" alt="Your Name" class="hero-image">
```

3. In `styles.css`, add:

```css
.hero-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid var(--primary);
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease 0.8s both;
}
```

### Enable Theme Toggle

In `script.js` (line 360), uncomment:

```javascript
// createThemeToggle();  // Remove the //
createThemeToggle();
```

### Enable Custom Cursor

In `script.js` (line 244), change:

```javascript
display: none;  // Change to:
display: block;
```

## 📱 Mobile Optimization

The portfolio is already responsive! Test it by:

1. Opening in browser
2. Press `F12` to open DevTools
3. Click the mobile icon (top-left)
4. Test different screen sizes

## 🚀 Deployment Options

### Option 1: GitHub Pages (FREE)

1. Create a GitHub account: https://github.com
2. Create a new repository called `portfolio`
3. Upload your files
4. Go to Settings → Pages
5. Select `main` branch
6. Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio`

### Option 2: Netlify (FREE)

1. Create account: https://netlify.com
2. Drag and drop your `portfolio` folder
3. Done! You'll get a URL like: `https://your-name.netlify.app`

### Option 3: Vercel (FREE)

1. Create account: https://vercel.com
2. Click "New Project"
3. Upload your folder
4. Deploy!

## 🔧 Troubleshooting

### Animations not working?
- Make sure all three files are in the same folder
- Check browser console for errors (F12)
- Try a different browser (Chrome recommended)

### Particles not showing?
- Canvas requires JavaScript enabled
- Check if `script.js` is loading properly
- View console for errors

### Form not submitting?
- Currently shows an alert (demo mode)
- To actually send emails, use a service like:
  - EmailJS: https://www.emailjs.com/
  - Formspree: https://formspree.io/
  - Or build your own backend

## 📚 Learning Resources

Want to understand the code better?

- **HTML**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS**: https://css-tricks.com/
- **JavaScript**: https://javascript.info/
- **Canvas**: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

## 🎯 Next Steps

1. ✅ Set up the basic portfolio
2. ✅ Customize with your info
3. ⬜ Add your actual project screenshots
4. ⬜ Connect contact form to email service
5. ⬜ Deploy to GitHub Pages/Netlify
6. ⬜ Share with the world!

## 💡 Tips

- **Keep it updated**: Add new projects as you build them
- **Optimize images**: Use compressed images for faster loading
- **Test on mobile**: Most visitors will be on mobile
- **Get feedback**: Show it to friends and teachers
- **Analytics**: Add Google Analytics to see visitors

## 🐛 Found a Bug?

If something isn't working:

1. Check the browser console (F12)
2. Make sure files are in the same folder
3. Check file names match exactly (case-sensitive!)
4. Try clearing browser cache (Ctrl+Shift+Delete)

## 📞 Need Help?

This portfolio uses:
- No frameworks
- No npm/node required
- Pure HTML, CSS, JavaScript
- Works on any browser

Just open `index.html` and you're good to go!

## 📄 License

This code is free to use for your personal portfolio. Feel free to:
- Customize it
- Add features
- Share with friends
- Use it in job applications

Just don't claim you built the template from scratch! 😉

---

Built with ❤️ by Anagha Kaloge | 2025