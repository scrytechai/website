# ScrytechAI — Branding Guidelines

> Version 1.0 | July 2026 | Pune, Maharashtra, India

---

## 1. Brand Identity

**Company Name:** ScrytechAI  
**Tagline:** _Intelligent. Scalable. Future-Ready._  
**Founded:** 2026  
**Headquarters:** Pune, Maharashtra, India  
**Website:** scrytechai.com  
**Email:** hello@scrytechai.com  

---

## 2. Logo

### Logo Mark
The ScrytechAI logo combines two powerful symbols:
- **Left half (Blue):** A neural/brain hemisphere representing human intelligence and AI reasoning
- **Right half (Orange):** A circuit board pattern representing machine intelligence and technology
- **Center:** A bright white convergence point — where human and machine intelligence unite

### Logo Wordmark
- **"ScryTech"** — Rendered in the Primary Blue gradient
- **"AI"** — Rendered in the Orange gradient
- Typography: Bold, modern, clean

### Logo Usage Rules
- Minimum size: 24px height (digital), 8mm height (print)
- Always maintain clear space equal to the height of the "A" around the logo
- Do not rotate, distort, or recolor the logo
- On dark backgrounds: Use full-color version
- On light backgrounds: Use dark-navy version

---

## 3. Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Brand Navy** | `#0E2841` | Primary dark background, headers |
| **Deep Navy** | `#071628` | Darkest background, section bases |
| **Royal Blue** | `#2253D2` | Primary actions, CTAs, links |
| **Sky Blue** | `#4B7BF5` | Blue gradients, highlights |
| **Brand Orange** | `#F09C24` | Accent, AI emphasis, secondary CTAs |
| **Warm Gold** | `#FFBE5C` | Orange gradients, warm highlights |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Gold** | `#D1B320` | Premium accents, award elements |
| **Light Gray** | `#E8E8E8` | Light mode backgrounds |
| **Mid Gray** | `#A0A8B8` | Subtitles, secondary text |
| **White** | `#FFFFFF` | Primary text on dark backgrounds |

### Gradients

| Name | CSS | Usage |
|------|-----|-------|
| **Blue Gradient** | `linear-gradient(135deg, #4B7BF5 0%, #2253D2 100%)` | Primary CTAs, headings |
| **Orange Gradient** | `linear-gradient(135deg, #FFBE5C 0%, #F09C24 100%)` | Accent elements, AI highlights |
| **Brand Gradient** | `linear-gradient(135deg, #4B7BF5 0%, #7B5CF0 50%, #F09C24 100%)` | Hero headings, signature elements |
| **Dark Background** | `linear-gradient(150deg, #071628 0%, #0A1F35 40%, #0E2841 70%, #071628 100%)` | Section backgrounds |

---

## 4. Typography

### Font Family
**Primary:** Inter (Google Fonts) — used for all web text  
**Fallbacks:** SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif

### Type Scale

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | 60-72px | 800 | 1.1 | Hero headlines |
| H1 | 48-56px | 700 | 1.2 | Page titles |
| H2 | 36-48px | 700 | 1.2 | Section headers |
| H3 | 24-30px | 600 | 1.3 | Card titles, sub-headers |
| H4 | 18-20px | 600 | 1.4 | Feature titles |
| Body Large | 18px | 400 | 1.7 | Lead paragraphs |
| Body | 16px | 400 | 1.6 | Standard body text |
| Body Small | 14px | 400 | 1.5 | Secondary content |
| Caption | 12px | 500 | 1.4 | Tags, labels, metadata |
| Micro | 10-11px | 600 | 1.3 | Eyebrow tags (uppercase) |

### Typography Guidelines
- Headings: Always use tracking-tight (`letter-spacing: -0.02em`) at large sizes
- Eyebrow tags: UPPERCASE, letter-spacing: 0.12em
- Body text on dark backgrounds: Use `rgba(255,255,255,0.6)` for secondary text
- Maximum line length: 70 characters for body text

---

## 5. Visual Language & Design Style

### Design Philosophy: Apple-Inspired Precision
ScrytechAI's design language draws from Apple's Human Interface Guidelines — clean minimalism with purposeful complexity, premium feel with accessible clarity.

### Glassmorphism
- Background: `rgba(255,255,255,0.05)` to `rgba(255,255,255,0.08)`
- Backdrop blur: `blur(20px)` minimum, `blur(40px)` for prominent surfaces
- Border: `1px solid rgba(255,255,255,0.1)` (neutral), `1px solid rgba(34,83,210,0.25)` (blue-tinted)
- Box shadow: `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)`

### Border Radius
- Cards: `24px` (rounded-3xl)
- Buttons: `16px` (rounded-2xl)  
- Badges/Tags: `999px` (rounded-full)
- Small elements: `12px` (rounded-xl)

### Elevation & Shadows
- Level 1 (Card): `0 4px 24px rgba(0,0,0,0.3)`
- Level 2 (Hover): `0 12px 48px rgba(34,83,210,0.3)`
- Level 3 (Modal): `0 24px 80px rgba(0,0,0,0.6)`
- Neon Blue Glow: `0 0 20px rgba(34,83,210,0.5), 0 0 60px rgba(34,83,210,0.2)`
- Neon Orange Glow: `0 0 20px rgba(240,156,36,0.5), 0 0 60px rgba(240,156,36,0.2)`

---

## 6. Motion & Animation

### Principles
- **Natural & Physics-Based:** Prefer spring animations for interactive elements
- **Purposeful:** Every animation communicates state or hierarchy
- **Performant:** Use CSS transforms and opacity only
- **Accessible:** Respect `prefers-reduced-motion`

### Timing Functions
- **Easing In/Out:** `cubic-bezier(0.16, 1, 0.3, 1)` — smooth deceleration
- **Spring:** `type: "spring", stiffness: 400, damping: 30`
- **Standard:** `ease-in-out` for ambient animations

### Duration Scale
- Micro (hover): 150-200ms
- Standard (transition): 300-400ms
- Emphasis (entry): 600-800ms
- Ambient (loops): 3-8s

### Standard Animations
- **Page entry:** `opacity: 0→1, y: 40→0, duration: 700ms`
- **Card hover:** `y: 0→-6, scale: 1→1.01, duration: 300ms`
- **Button hover:** `scale: 1→1.05, duration: 200ms`
- **Floating elements:** `translateY: 0→-15px→0, duration: 6s, infinite`

---

## 7. Iconography

### Style
- Line icons, 2px stroke weight
- Rounded stroke caps and joins
- Preferred library: React Icons (HeroIcons)

### Icon Sizes
- Navigation: 20-22px
- Body/Feature: 18-24px
- Decorative/Large: 28-40px

### Icon Treatment
- Icons in badges: Contained in rounded-2xl box with brand-color background (15% opacity)
- Icons in buttons: 16-18px, same color as button text

---

## 8. Spacing System

Based on 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight internal spacing |
| sm | 8px | Small gaps |
| md | 16px | Standard gap |
| lg | 24px | Card padding (small) |
| xl | 32px | Section internal gaps |
| 2xl | 48px | Card padding (large) |
| 3xl | 64px | Section spacing (small) |
| 4xl | 96-112px | Section padding |

---

## 9. Background Patterns

### Grid Pattern
- 60px × 60px grid
- Color: `rgba(34,83,210,0.06)` lines
- Usage: Tech/data sections, hero backgrounds

### Dot Pattern
- 32px spacing
- Color: `rgba(255,255,255,0.08)` dots (1px)
- Usage: About, agentic sections

### Circuit Pattern  
- SVG-based repeating circuit symbol
- Color: `rgba(34,83,210,0.04)` fills
- Usage: Contact section, footer backgrounds

### Neural Network Canvas
- Animated SVG/Canvas particles with connecting lines
- Node colors: Blue (`#2253D2`) and Orange (`#F09C24`)
- Connection alpha: Max 0.25 at 0px, 0 at 130px distance
- Usage: Hero background

---

## 10. Voice & Tone

### Brand Voice
- **Intelligent:** Clear, precise, technically accurate
- **Confident:** Assertive without being arrogant
- **Human:** Approachable despite technical depth
- **Forward-Looking:** Future-focused, progressive

### Messaging Pillars
1. **Intelligence First** — AI is the foundation, not a feature
2. **Engineering Excellence** — Precision and craft in everything
3. **Partnership** — We grow with your ambitions
4. **Trust** — Transparent, accountable, secure

### Key Phrases
- "AI-First Engineering Partner"
- "Intelligent. Scalable. Future-Ready."
- "Innovate. Automate. Impact."
- "Shaping Smarter Tomorrow"
- "From MVP to Enterprise Scale"

---

## 11. Section Structure for Website

| Section | ID | Description |
|---------|-----|-------------|
| Hero | `#hero` | Animated headline, neural canvas, stats |
| About | `#about` | Mission, Vision, Core Values |
| Services | `#services` | 4 AI-enhanced service pillars |
| AI Edge | `#ai-edge` | Traditional vs ScrytechAI comparison table |
| Agentic | `#agentic` | Agentic way of working, agent network |
| Why Us | `#why-us` | Strengths + Engagement Models |
| Contact | `#contact` | Contact form + info |

---

## 12. Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend Framework | React 18 + Vite | Modern, fast, future-ready |
| Styling | Tailwind CSS v3 | Utility-first, design system aligned |
| Animations | Framer Motion | Physics-based, production-quality |
| Icons | React Icons | Comprehensive library |
| Routing | React Router DOM v6 | SPA routing, future backend-ready |
| Intersection | react-intersection-observer | Scroll-triggered animations |
| Fonts | Inter (Google Fonts) | Apple-inspired clean typography |

### Future Backend Integration Points
- Contact form: `POST /api/contact` (ready for Resend/SendGrid/Nodemailer)
- CMS: Structured for headless CMS integration (Contentful/Sanity)
- Analytics: GA4/Plausible slot in `index.html`
- Auth: React Router ready for protected routes
- API layer: All components designed with async data patterns

---

*ScrytechAI Brand Guidelines v1.0 — Confidential*
