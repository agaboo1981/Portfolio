# Joshua Adesina Portfolio

A gaming-inspired, interactive portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

This project showcases my engineering projects, technical skills, and design style through an arcade/cyberpunk user experience.

## Features

- Cinematic hero animation with custom UFO sequence and avatar reveal
- Smooth section transitions and scroll-based motion effects
- Project showcase with difficulty tiers and achievement-style metadata
- Contact form integration with EmailJS
- Responsive layout across mobile, tablet, and desktop
- Themed UI system with custom Tailwind color tokens and shadows

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript + React 19
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** EmailJS (`@emailjs/browser`)

## Project Structure

```text
src/
  app/
    page.tsx               # Main landing page composition
  components/
    Hero.tsx               # Intro animation and hero content
    About.tsx
    Skills.tsx
    Exploring.tsx
    Projects.tsx
    ProjectCard.tsx
    FunHobbies.tsx
    Contact.tsx            # EmailJS contact form
    Footer.tsx
  hooks/
    useKeyboardShortcut.ts # Keyboard-triggered interaction helper
public/
  projects/                # Project card assets
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

### 3) Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` - start local development server (Turbopack)
- `npm run build` - create production build
- `npm run start` - start production server
- `npm run lint` - run ESLint checks

## Notes

- Contact form submission requires valid EmailJS credentials.
- Some project links may be placeholders while repositories or demos are being finalized.

## Deployment

This project is ready to deploy on Vercel or any platform that supports Next.js.

For Vercel:

1. Import the repository.
2. Add the same environment variables from `.env.local`.
3. Deploy.
