# Joshua Adesina — Portfolio

A minimalist, monochrome developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

White-on-black editorial layout: a full-width monument hero, an index-style project list with a cursor-following screenshot preview on desktop (inline screenshots on mobile), text-column skills, and a giant-type contact screen.

## Features

- Static export-friendly Next.js App Router build — no backend, no environment variables
- Editorial project index: seven rows with real screenshots of the live sites
- Cursor-following screenshot preview (spring-smoothed) on desktop; inline thumbnails on small screens
- Auto-refreshing project screenshots — a GitHub Action re-captures the live sites on every push to `main`
- Fully responsive, from 390px phones to 1440px desktop
- Reduced-motion support for entrance animations and hover effects

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript + React 19
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Screenshot automation:** Puppeteer (headless Chrome) via `puppeteer-core`

## Project Structure

```text
src/
  app/
    layout.tsx             # Fonts (Space Grotesk + Inter), metadata
    globals.css            # Design tokens, keyframes, reduced-motion fallbacks
    page.tsx               # Section composition
  components/
    Navbar.tsx             # Sticky nav with mobile menu
    Hero.tsx               # SVG-fitted full-width name + portrait
    Projects.tsx           # Editorial index + cursor-following preview
    About.tsx              # Drop-cap bio + facts rail
    Skills.tsx             # Text-column skills with hover descriptions
    Beyond.tsx             # Off-hours list
    Contact.tsx            # Full-screen email display type
    Footer.tsx             # Black footer with full-width wordmark
public/
  projects/                # Auto-refreshed project screenshots
scripts/
  capture-all.mjs          # Batch capture (reads screenshots.config.json)
  capture-sites.mjs        # Single-site capture CLI
  lib-capture.mjs          # Shared headless-browser logic
  screenshots.config.json  # Project URLs and output paths
.github/workflows/
  refresh-screenshots.yml  # Capture on every push to main
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No configuration needed — the site has no environment variables.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run capture:screenshots` | Re-capture all project screenshots locally |

## Screenshot Pipeline

Project screenshots live in `public/projects/` and are re-captured from the live sites:

- **Automatically**: on every push to `main`, `.github/workflows/refresh-screenshots.yml` runs `npm run capture:screenshots` in headless Chrome on a GitHub runner and commits any changed PNGs. It never commits a broken capture — if a site is unreachable, its previous screenshot is kept.
- **Locally**: `npm run capture:screenshots`, or one at a time:

```bash
node scripts/capture-sites.mjs <url> <out.png> [--wake]
```

Sites built on Streamlit's free tier sleep when idle; their entries use `"wake": true` in `scripts/screenshots.config.json` so the capture waits for them to boot.

## Deployment (Vercel)

1. Import the repository into Vercel.
2. Deploy — no build overrides or environment variables are required.
