# CyberWallah — Landing Page

India's Cybersecurity Community landing page built with React + Tailwind CSS.

---

## 📦 Tech Stack & Packages

### Core
| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3 | UI library |
| `react-dom` | ^18.3 | React DOM renderer |
| `vite` | ^5.4 | Dev server & build tool (blazing fast) |
| `@vitejs/plugin-react` | ^4.3 | Vite plugin for React JSX |

### Styling
| Package | Version | Purpose |
|---|---|---|
| `tailwindcss` | ^3.4 | Utility-first CSS framework |
| `autoprefixer` | ^10.4 | Auto vendor prefixes for CSS |
| `postcss` | ^8.4 | CSS processing pipeline |

### UI & Animation
| Package | Version | Purpose |
|---|---|---|
| `framer-motion` | ^11.3 | Production-grade animations (navbar entrance, hero fade-ups, underline reveal) |
| `lucide-react` | ^0.439 | Beautiful, consistent icon set (Shield, Menu, ArrowRight, etc.) |
| `clsx` | ^2.1 | Conditional className merging utility |

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
cyberwallah/
├── index.html                  # HTML entry point + Google Fonts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme (colors, fonts, animations)
├── postcss.config.js           # PostCSS plugins
├── package.json                # Dependencies
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Root component (Navbar + Hero + Footer)
    ├── index.css               # Global styles + Tailwind directives
    └── components/
        ├── Navbar.jsx          # Fixed glass navbar with mobile menu
        ├── Hero.jsx            # Full-screen hero with stats + topics strip
        └── Footer.jsx          # Dark footer with links + social icons
```

---

## 🎨 Design Tokens (tailwind.config.js)

| Token | Value | Usage |
|---|---|---|
| `bg` | `#f4f3ef` | Page background (warm off-white) |
| `surface` | `#ffffff` | Cards, stats bar |
| `ink` | `#0e0e0e` | Primary text, dark elements |
| `ink-soft` | `#5a5a5a` | Secondary text, nav links |
| `accent` | `#0057ff` | Brand blue — CTAs, highlights |
| `accent-light` | `#e8eeff` | Badge background |
| `accent2` | `#ff3b1f` | Secondary blob color |
| `font-display` | Syne | Headlines (800 weight) |
| `font-body` | DM Sans | Body text (300–500) |

---

## ➕ Optional Packages to Add Later

| Package | Use Case |
|---|---|
| `react-router-dom` | Multi-page routing (Blog, News, About pages) |
| `@tanstack/react-query` | Fetch & cache blog posts from API |
| `react-helmet-async` | SEO meta tags per page |
| `axios` | HTTP client for API calls |
| `react-hot-toast` | Toast notifications |
| `@radix-ui/react-*` | Accessible headless UI primitives |
