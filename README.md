# 🚀 Raya Khasati - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

> A modern, responsive portfolio website showcasing my projects, skills, and experience as a Computer Engineering student.

## 🌐 Live Demo

**[View Live Portfolio →](https://my-portfolio-sage-six-52.vercel.app/)**

 

## ✨ Features

- **⚡ Modern Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎯 Interactive Contact Form**: Working contact form powered by Formspree
- **🔥 10+ Projects Showcase**: Detailed project cards with live demos and GitHub links
- **⚙️ Smooth Animations**: CSS transitions and hover effects
- **🌙 Dark Theme**: Sleek black background with vibrant yellow accents
- **🔗 Social Links**: GitHub and LinkedIn integration

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: SVG Icons

### Backend / Services
- **Form Handling**: [Formspree](https://formspree.io/) - Contact form submissions
- **Deployment**: [Vercel](https://vercel.com/)   

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm  

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rayyr/portfolio_react.git
   cd portfolio_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
portfolio_react/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page with Formspree
│   │   ├── projects/           # Projects showcase
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/             # Reusable components
│   │   ├── Navigation.tsx      # Navbar
│   │   ├── Hero.tsx            # Hero section
│   │   ├── AboutPreview.tsx    # About preview
│   │   ├── ProjectsShowcase.tsx # Projects grid
│   │   └── Footer.tsx          # Footer
│   └── ...
├── public/                     # Static assets
├── next.config.js             # Next.js config
├── tailwind.config.js         # Tailwind config
└── package.json
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Yellow | `#FFFF00` | Buttons, headings, accents |
| Secondary Yellow | `#CCCC00` | Gradients |
| Black | `#000000` | Background |
| Dark Gray | `#1F2937` | Cards |
| Light Gray | `#9CA3AF` | Body text |

## 📱 Pages

### 🏠 Home
- Hero section with introduction
- About preview
- Featured projects

### 👤 About
- Personal bio
- Skills & expertise  
- Experience timeline

### 💼 Projects
- 10+ detailed project cards
- Technologies used
- Key features
- Live demos & GitHub links

### 📧 Contact
- Contact information
- Social links


## 🔧 Customization

### Update Contact Form
Edit `src/app/contact/page.tsx` and replace the Formspree form ID:
```typescript
const [state, handleSubmit] = useForm("your-form-id");
```

### Update Projects
Edit `src/app/projects/page.tsx` to add/modify projects:
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "...",
    technologies: ["React", "Next.js"],
    // ...
  }
];
```

### Update Personal Info
- **Hero**: `src/components/Hero.tsx`
- **About**: `src/app/about/page.tsx`
- **Footer**: `src/components/Footer.tsx`


### 🚀 Deployment
It is deplyed using Vercel tool
 
<p align="center">Made with 💛 by <b>Raya Khasati</b></p>
