# NOVAGENTEC Brand Guide

## Master Positioning

**Company type:** Business infrastructure architecture and consulting  
**Brand statement:** ENGINEERING INTELLIGENT BUSINESS INFRASTRUCTURE  
**Core outcome:** Synergy

> Do not position NOVAGENTEC as a generic marketing agency, web-design company, software vendor, or AI automation freelancer.

---

## Color System

| Token | Hex | Use |
|-------|-----|-----|
| Mineral White | `#F3F2EE` | Page backgrounds, light surfaces |
| Pure White | `#FFFFFF` | Card surfaces, clean panels |
| Carbon Black | `#0B0B0B` | Primary typography, dark backgrounds |
| Charcoal | `#242424` | Dark borders, secondary backgrounds |
| Graphite | `#4B4B49` | Body text, secondary labels |
| Brushed Silver | `#A7A8A5` | **Commercial division accent**, borders, rules |
| Stone Gray | `#D7D5CF` | Subtle borders, light dividers |
| Technical Bronze | `#A27B52` | **Government & Aerospace accent**, primary bronze |
| Sanded Bronze | `#B8956D` | Lighter bronze variant, hover states |

### Division Accent Rule
- **Commercial Small Business** → Brushed Silver (`#A7A8A5`)
- **Government & Aerospace** → Technical Bronze (`#A27B52`)

---

## Typography

| Role | Typeface | Notes |
|------|----------|-------|
| Primary headings | Archivo | Semibold, uppercase, tight tracking |
| Body copy | Source Sans 3 | Light weight, relaxed leading |
| Technical labels / section numbers | IBM Plex Mono | 8–10px, wide tracking, all-caps |

---

## Visual Character

**Use:**
- Quiet technical luxury
- Architectural composition
- Precise, calm, executive tone
- Industrial where appropriate
- Editorial rather than futuristic
- Strong negative space
- Thin rules and disciplined grids
- Realistic machined materials
- Subtle blueprint geometry
- Refined shadows

**Never use:**
- Blue or cyan branding
- Neon light or glow effects
- Glassmorphism
- Chrome gradients
- Generic SaaS dashboards
- Floating application windows
- Stock photography of business teams
- Generic AI illustrations
- Excessive gradients
- Rounded cartoon cards
- Cluttered navigation
- Fake statistics or fabricated data
- Distorted AI-generated text as visual element
- Full webpage screenshot used as a background image

---

## Page Structure

### Homepage
- Minimal header (wordmark + nav + contact)
- Hero: full-width with two division gateway cards
- Synergy CTA strip
- Footer with brand statement

### Commercial Page (`/commercial`)
- Same header/footer
- Hero: left text / right imagery (light mineral-white page)
- Service strip: Launch · Attract · Operate · Scale
- Connected systems hub
- Industries strip
- Dark CTA

### Government & Aerospace Page (`/government-aerospace`)
- Same header/footer (dark-integrated)
- Hero: dark carbon-black with aerospace imagery
- Capability architecture: Prepare · Pursue · Win · Perform
- Technical operations system
- Industries strip
- Dark CTA (two-action)

---

## Button System

```
Primary (light page):    bg-carbon-black text-white  border-carbon-black
Primary (dark page):     bg-technical-bronze text-carbon-black
Secondary:               border border-[accent]/40 text-[accent]  hover → filled
CTA link:                underline border-b tracking-wide uppercase mono
```

---

## Logo Usage

- **Wordmark** (horizontal): header, footer — dark on light, `filter: brightness(0) invert(1)` on dark
- **Monogram** (mark only): card interiors, division identifiers — same inversion rule for dark surfaces
- Do not recreate the logo in SVG paths or HTML text — always use the PNG assets

---

## File Locations

```
src/assets/images/novagentec-wordmark.png    Primary wordmark
src/assets/images/novagentec-monogram.png    Monogram mark
src/pages/HomePage.tsx                        Homepage gateway
src/pages/CommercialPage.tsx                  Commercial division
src/pages/GovAeroPage.tsx                     Government & Aerospace division
src/components/Header.tsx                     Shared header
src/components/Footer.tsx                     Shared footer (brand statement)
src/components/DivisionCards.tsx              Homepage gateway cards
src/components/SynergyCTA.tsx                 Synergy section
src/index.css                                 Design tokens (@theme)
```
