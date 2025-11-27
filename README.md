# 🌟 Karl Camaro - Personal Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Frontend Developer and Community Manager.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-6366f1?style=for-the-badge)](https://portfolio-karlcamarodev.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Karlcamarodev/portfolio)

---

## 🚀 Features

- ✨ **Modern Design** - Glassmorphism UI with gradient accents
- 🎨 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Mobile-first approach
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- ⚡ **Fast Performance** - Built with Next.js 16 and optimized assets
- 🎭 **Interactive Sections** - Smooth scroll and hover effects
- 🖼️ **Project Showcase** - Featured projects with live demos
- 📬 **Contact Section** - Easy ways to get in touch

---

## 🛠️ Tech Stack

### **Frontend Framework**
- [Next.js 16.0.4](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript 5](https://www.typescriptlang.org/) - Type safety

### **Styling**
- [Tailwind CSS 3.4](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion 12](https://www.framer.com/motion/) - Animation library
- Custom glassmorphism effects

### **Icons & Assets**
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [Next.js Image](https://nextjs.org/docs/api-reference/next/image) - Optimized images

### **Deployment**
- [Vercel](https://vercel.com/) - Hosting and CI/CD

---

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles and Tailwind
│   └── favicon.ico         # Favicon
├── lib/
│   └── projects.ts         # Projects data and types
├── public/
│   ├── images/
│   │   └── karl-photo.jpg  # Profile photo
│   ├── projects/           # Project screenshots
│   │   ├── content-guardian.png
│   │   ├── tiktok-dashboard.png
│   │   └── quest-manager.png
│   └── [favicons]          # All favicon variants
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

---

## 🎨 Sections

### **1. Hero Section**
- Animated profile photo with rotating gradient border
- Dynamic typing effect for role titles
- Call-to-action buttons
- Social media links

### **2. About Me**
- Personal journey and background
- Key highlights and achievements
- Community management experience
- Location and availability

### **3. Featured Projects**
- Content Guardian (Next.js AI moderation platform)
- TikTok Analytics Dashboard
- Quest Manager (Gamified task system)
- Live demo and GitHub links for each

### **4. Skills & Technologies**
- Frontend development stack
- Tools and platforms
- Currently learning section

### **5. Contact**
- Email, LinkedIn, GitHub links
- Location information
- "Open to Work" status badge

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Karlcamarodev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Build & Deploy

### **Build for production:**
```bash
npm run build
npm run start
```

### **Deploy to Vercel:**

1. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Via GitHub Integration:**
   - Push to GitHub
   - Import project in [Vercel Dashboard](https://vercel.com/new)
   - Automatic deployments on push

---

## 🎨 Color Palette

The portfolio uses a modern gradient color scheme:

```css
Primary:   #6366f1 (Indigo)
Secondary: #a855f7 (Purple)
Accent:    #ec4899 (Pink)
Background: #0a0a0f (Dark)
Surface:   #1a1a2e (Darker)
```

---

## 📸 Screenshots

### **Hero Section**
![Hero Section](docs/hero-preview.png)

### **Projects Showcase**
![Projects](docs/projects-preview.png)

### **Contact Section**
![Contact](docs/contact-preview.png)

---

## 🔧 Configuration

### **Update Personal Information**

Edit `app/page.tsx` to update:
- Profile photo path
- Social media links
- Email address
- Location

### **Add New Projects**

Edit `lib/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: "your-project",
    title: "Project Title",
    description: "Project description...",
    image: "/projects/your-project.png",
    tags: ["React", "TypeScript"],
    liveUrl: "https://your-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
];
```

### **Customize Colors**

Edit `tailwind.config.ts` to change the color palette.

---

## 📝 To-Do / Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form with backend
- [ ] Add dark/light mode toggle
- [ ] Multi-language support (ES/EN/IT)
- [ ] Add testimonials section
- [ ] Integrate Google Analytics
- [ ] Add loading animations
- [ ] Implement project filtering

---

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Karl Hervin Camaro Porta**

- 🌐 Portfolio: [https://portfolio-karlcamarodev.vercel.app](https://portfolio-karlcamarodev.vercel.app)
- 💼 LinkedIn: [karl-hervin-camaro-porta](https://linkedin.com/in/karl-hervin-camaro-porta-15b443395)
- 🐙 GitHub: [@Karlcamarodev](https://github.com/Karlcamarodev)
- 📧 Email: camaroportakarlhervin@gmail.com

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Hosted on [Vercel](https://vercel.com/)

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/Karlcamarodev/portfolio?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Karlcamarodev/portfolio?style=social)
![GitHub Issues](https://img.shields.io/github/issues/Karlcamarodev/portfolio)
![GitHub License](https://img.shields.io/github/license/Karlcamarodev/portfolio)

---

<div align="center">
  <sub>Built with ❤️ by Karl Camaro | © 2024 All Rights Reserved</sub>
</div>