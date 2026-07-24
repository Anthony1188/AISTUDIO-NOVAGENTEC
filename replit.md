# Novagentec Landing Page

A React + Vite + TypeScript landing page for **Novagentec**, showcasing two product divisions (Commercial Small Business and Government & Aerospace) with animated cards and a call-to-action section.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server on port 5000)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** (`motion`) for animations
- **Lucide React** for icons

## Running the app

```bash
npm run dev
```

The dev server starts on port 5000. Open the Replit webview to preview.

## Other scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | TypeScript type-check |

## Project structure

```
src/
  App.tsx                  # Root layout (hero, cards, CTA, footer)
  components/
    Header.tsx             # Navigation bar
    DivisionCards.tsx      # Two product-division cards
    SynergyCTA.tsx         # Call-to-action section
    Footer.tsx             # Footer
    Logo.tsx               # SVG logo mark
  assets/images/           # Hero and card background images
  index.css                # Global styles + Tailwind imports
  main.tsx                 # React entry point
```

## Environment variables

| Variable | Purpose |
|----------|---------|
| `GEMINI_API_KEY` | Google Gemini API key (only needed if AI features are added) |
| `APP_URL` | Public URL of the deployed app (optional) |

Copy `.env.example` to `.env` and fill in values if needed.

## User preferences

- Keep the existing project structure; do not migrate or restructure without asking.
