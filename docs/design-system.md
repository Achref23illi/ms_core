# MS Core Technologies - Design System & Style Guide

> Complete design documentation for the new MS Core Technologies website
> Theme: **"Cyber Blue"**

---

## 📊 Current Website Analysis

### Verified Elements from techmscore.com

| Element | Current | New Recommendation |
|---------|---------|-------------------|
| Primary Color | `#00276D` (Deep Navy) | `#092963` (Brand Primary) |
| Background Dark | Dark blue overlays | `#0A1128` Anthracite |
| Typography Headings | Titillium Web 600 | Montserrat/Poppins Bold |
| Typography Body | Inter | Inter (keep) |
| Layout | Alternating dark/light sections | Same with enhanced transitions |

### Visual Observations
- **Header**: Two-tier (info bar + navigation), navy blue background
- **Hero**: Full-width with translucent content overlay, gradient blue/purple tint on images
- **CTAs**: Navy blue buttons with white text, high contrast
- **Trust Section**: White background for Microsoft certification badges
- **Footer**: Dark background, white text, social icons, contact info
- **Imagery**: Futuristic tech visuals (VR, cybersecurity, AI) with blue/purple tint

---

## 🎨 Color Palette - "Cyber Blue" Theme

### Primary Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Primary** | `#092963` | rgb(9, 41, 99) | Main brand color, primary buttons, links |
| **Primary Light** | `#4d86c9` | rgb(77, 134, 201) | Hover states, accents |
| **Primary Dark** | `#041230` | rgb(4, 18, 48) | Deep backgrounds |

### Secondary Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Secondary** | `#0272c2` | rgb(2, 114, 194) | Secondary buttons, links, highlights |
| **Secondary Light** | `#4dafe7` | rgb(77, 175, 231) | Hover states |
| **Secondary Dark** | `#014a7e` | rgb(1, 74, 126) | Active states |

### Accent Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Electric Blue** | `#00A8E8` | rgb(0, 168, 232) | Call-to-actions, highlights |
| **Neon Green** | `#39FF14` | rgb(57, 255, 20) | Innovation indicators, success states |
| **Gold** | `#FFD700` | rgb(255, 215, 0) | Premium highlights, awards |
| **Magenta** | `#E63946` | rgb(230, 57, 70) | Urgent actions, errors |

### Background Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Dark Primary** | `#0A1128` | Main dark mode background |
| **Dark Secondary** | `#121212` | Alternative dark sections |
| **Dark Elevated** | `#1a1a2e` | Cards on dark background |
| **Light Primary** | `#FFFFFF` | Trust sections, cards |
| **Light Secondary** | `#F7F8FA` | Alternating sections |

### Gradients
```css
/* Hero Gradient */
--gradient-hero: linear-gradient(135deg, #092963 0%, #0272c2 50%, #4d86c9 100%);

/* Cyber Gradient */
--gradient-cyber: linear-gradient(180deg, rgba(9, 41, 99, 0.9) 0%, rgba(2, 114, 194, 0.7) 100%);

/* Accent Gradient */
--gradient-accent: linear-gradient(90deg, #00A8E8 0%, #39FF14 100%);

/* Dark Overlay */
--gradient-overlay: linear-gradient(180deg, rgba(10, 17, 40, 0.8) 0%, rgba(18, 18, 18, 0.95) 100%);
```

---

## 🔤 Typography System

### Font Families
| Font | Usage | Fallback |
|------|-------|----------|
| **Montserrat** | Headings, Display | sans-serif |
| **Inter** | Body, UI elements | system-ui, sans-serif |
| **JetBrains Mono** | Code, technical | monospace |

### Font Sizes (rem)
| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `display-xl` | 4.5rem (72px) | 1.1 | Hero headlines |
| `display-lg` | 3.75rem (60px) | 1.15 | Section titles |
| `h1` | 3rem (48px) | 1.2 | Page titles |
| `h2` | 2.25rem (36px) | 1.25 | Section headers |
| `h3` | 1.875rem (30px) | 1.3 | Subsection headers |
| `h4` | 1.5rem (24px) | 1.35 | Card titles |
| `h5` | 1.25rem (20px) | 1.4 | List headers |
| `h6` | 1.125rem (18px) | 1.5 | Small headers |
| `body-lg` | 1.125rem (18px) | 1.6 | Lead text |
| `body` | 1rem (16px) | 1.6 | Default body |
| `body-sm` | 0.875rem (14px) | 1.5 | Secondary text |
| `caption` | 0.75rem (12px) | 1.4 | Captions, labels |

### Font Weights
| Token | Weight | Usage |
|-------|--------|-------|
| `light` | 300 | Subtle text |
| `regular` | 400 | Body text |
| `medium` | 500 | UI elements |
| `semibold` | 600 | Subheadings |
| `bold` | 700 | Headings |
| `extrabold` | 800 | Display text |

---

## 📐 Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight spacing |
| `sm` | 8px | Compact elements |
| `md` | 16px | Default spacing |
| `lg` | 24px | Section padding |
| `xl` | 32px | Large gaps |
| `2xl` | 48px | Section spacing |
| `3xl` | 64px | Page sections |
| `4xl` | 96px | Hero sections |

---

## 🧩 Component Specifications

### Buttons

#### Primary Button
```css
.btn-primary {
  background: #092963;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background: #4d86c9;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(9, 41, 99, 0.4);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: #0272c2;
  color: #ffffff;
  /* Same sizing as primary */
}
```

#### Outline Button
```css
.btn-outline {
  background: transparent;
  border: 2px solid #092963;
  color: #092963;
}
.btn-outline:hover {
  background: #092963;
  color: #ffffff;
}
```

### Cards

#### Service Card
```css
.card-service {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card-service:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(9, 41, 99, 0.3);
}
```

### Navigation
- **Height**: 80px (desktop), 64px (mobile)
- **Background**: `rgba(9, 41, 99, 0.95)` with backdrop blur
- **Sticky**: Yes, with shadow on scroll

---

## ✨ Micro-Interactions & Animations

### Hover Effects
```css
/* Button hover */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transform: translateY(-2px);

/* Card hover */
transform: translateY(-8px) scale(1.02);

/* Link underline */
background: linear-gradient(to right, #0272c2, #0272c2);
background-size: 0% 2px;
background-position: left bottom;
transition: background-size 0.3s ease;
/* On hover: background-size: 100% 2px; */
```

### Page Transitions
```css
/* Fade in up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger children */
.stagger-children > * {
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: calc(var(--index) * 0.1s);
}
```

### Scroll Animations
- Elements fade in on scroll
- Parallax effects on hero images
- Counter animations for statistics

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `xs` | < 480px | Small phones |
| `sm` | ≥ 640px | Large phones |
| `md` | ≥ 768px | Tablets |
| `lg` | ≥ 1024px | Small laptops |
| `xl` | ≥ 1280px | Desktops |
| `2xl` | ≥ 1536px | Large screens |

### Mobile-First Approach
```css
/* Mobile base styles */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 4rem;
    max-width: 1280px;
    margin: 0 auto;
  }
}
```

---

## 🌓 Dark/Light Mode

### Default: Dark Mode
The site launches in dark mode by default, with option to toggle.

### CSS Variables Approach
```css
:root {
  /* Light mode */
  --bg-primary: #ffffff;
  --bg-secondary: #f7f8fa;
  --text-primary: #092963;
  --text-secondary: #525252;
}

[data-theme="dark"] {
  /* Dark mode */
  --bg-primary: #0a1128;
  --bg-secondary: #121212;
  --text-primary: #ffffff;
  --text-secondary: #a3a3a3;
}
```

---

## 🔒 Accessibility Guidelines

### Contrast Ratios
- Large text: minimum 3:1
- Normal text: minimum 4.5:1
- UI components: minimum 3:1

### Focus States
```css
:focus-visible {
  outline: 2px solid #0272c2;
  outline-offset: 2px;
}
```

### ARIA Requirements
- All images must have alt text
- Interactive elements must have labels
- Navigation must be keyboard accessible

---

## 📄 Page Structure

### Homepage Sections
1. **Hero** - Full screen, gradient overlay, CTA
2. **Services Overview** - Card grid
3. **About/Expansion** - Text + image
4. **Certifications** - Badge grid (white bg)
5. **Testimonials** - Carousel/grid
6. **CTA Section** - Contact banner
7. **Footer** - Full info

### Common Elements
- Sticky header with blur
- Back to top button
- Cookie consent banner
- Dark/Light toggle

---

## 🇨🇮 SEO for Côte d'Ivoire

### Meta Tags
```html
<meta name="geo.region" content="CI" />
<meta name="geo.placename" content="Abidjan" />
<meta name="geo.position" content="5.3600;-4.0083" />
```

### Local Keywords
- Cybersécurité Abidjan
- Sécurité informatique Côte d'Ivoire
- Microsoft Partner Afrique de l'Ouest
- Cloud Azure Abidjan
- Transformation numérique Côte d'Ivoire

---

## ✅ Implementation Checklist

- [ ] Configure colors in `config/colors.ts`
- [ ] Set up typography in `config/fonts.ts`
- [ ] Create base UI components
- [ ] Implement dark/light mode toggle
- [ ] Add micro-interactions (Motion library)
- [ ] Set up responsive breakpoints
- [ ] Configure SEO meta tags
- [ ] Implement cookie consent
- [ ] Add privacy policy page
- [ ] Create testimonials section
