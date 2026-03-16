# Joshua Adesina Portfolio: UI/UX Style & Design Guide

This document defines the visual language, interactive behavior, and design standards for Joshua Adesina's portfolio. It is the authoritative reference for all Coding Agents to ensure a consistent, playful, and professional user experience.

---

## 1. Visual Identity & Color Palette: "Retro Arcade"
The theme blends deep space aesthetics with neon highlights to create a high-contrast, gamer-centric interface.

| Role | Name | HEX | RGB | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | Deep Space | `#0B0F1A` | `11, 15, 26` | Main background, dark sections. |
| **Primary** | Electric Cyan | `#00F5FF` | `0, 245, 255` | Primary buttons, links, active states, HUD lines. |
| **Secondary** | Neon Pink | `#FF2DAA` | `255, 45, 170` | Secondary accents, hover highlights, "Special Move" indicators. |
| **Highlight** | Cyber Yellow | `#FFD700` | `255, 215, 0` | Easter eggs, alerts, "Level Up" badges, high-priority icons. |
| **Text (Primary)** | Off-White | `#F7F7FF` | `247, 247, 255` | Main body text, headings. |
| **Text (Muted)** | Starlight | `#94A3B8` | `148, 163, 184` | Captions, metadata, secondary labels. |
| **Glass Overlay** | Nebula Glass | `rgba(15, 23, 42, 0.7)` | | Background for cards and HUD elements with `backdrop-blur-xl`. |

### Surface & Borders
- **Borders:** `1px solid rgba(0, 245, 255, 0.2)` (Cyan glow effect).
- **Glow (Box Shadow):** `0 0 15px rgba(0, 245, 255, 0.3)` for primary elements.
- **Gradients:** Use `linear-gradient(135deg, #0B0F1A 0%, #162033 100%)` for card backgrounds.

---

## 2. Typography Pairings
Modern tech-oriented fonts that balance personality with extreme readability.

| Category | Font Family | Weights | Usage |
| :--- | :--- | :--- | :--- |
| **Headings** | **Space Grotesk** | 700 (Bold), 500 (Med) | Section titles, Hero name, HUD labels. |
| **Body** | **Inter** | 400 (Reg), 600 (Semi) | Bio text, project descriptions, chat messages. |
| **Accents/Code** | **JetBrains Mono** | 400 (Regular) | Stats, code snippets, "System Uptime" in HUD. |

### Type Scale (Desktop)
- **H1 (Hero):** 4.5rem / 1.1 line-height (Space Grotesk 700)
- **H2 (Section):** 2.5rem / 1.2 line-height (Space Grotesk 700)
- **H3 (Card Title):** 1.5rem / 1.4 line-height (Space Grotesk 500)
- **Body:** 1.125rem / 1.6 line-height (Inter 400)
- **Small/HUD:** 0.875rem / 1.2 line-height (JetBrains Mono 400)

---

## 3. Layout: The "Bento HUD" Strategy
The layout uses a modular Bento Grid for content, framed by a persistent "Gamer HUD".

### Global HUD Layout
- **Fixed Navigation:** Top-center glassmorphism pill.
- **Corner Indicators (Fixed):** 
    - **Top-Left:** `[SYSTEM_STATUS: ONLINE]`
    - **Top-Right:** `[UPTIME: 25y_4m_2d]` (Dynamic or static bio age).
    - **Bottom-Left:** Social link icons in a vertical stack.
    - **Bottom-Right:** `[VERSION: 2.0.25]`

### Section Spacing & Grid
- **Container Max-Width:** 1280px.
- **Section Padding:** 8rem (Desktop), 4rem (Mobile).
- **Bento Grid Gap:** 1.5rem (24px).
- **Grid Structure:** 12-column grid system for complex sections (Projects/Skills).

---

## 4. Interactive Elements & Animations
Built with **Framer Motion** for a tactile, "responsive-machine" feel.

### Button States
- **Primary CTA:** Cyan background, black text. 
    - **Hover:** `scale: 1.05`, `box-shadow: 0 0 20px #00F5FF`.
    - **Tap:** `scale: 0.95`.
- **Ghost Button:** Cyan border, transparent background.
    - **Hover:** Cyan background, black text (inverted).

### Animation Definitions
1. **Scroll Reveal:** `initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { type: "spring", stiffness: 100 }`.
2. **Project Card Hover:** `whileHover: { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }`.
3. **"Secret Level" Transition:** A full-screen "glitch" effect (using a CSS filter keyframe) followed by a color-invert transition.

---

## 5. Icons & Imagery
- **Icon Library:** `lucide-react`. Use `stroke-width={1.5}` for a modern look.
- **Avatar:** Use a stylized 3D avatar (Memoji-style) with a "breathing" animation: `animate={{ y: [0, -10, 0] }, transition: { duration: 4, repeat: Infinity }}`.
- **Project Previews:** Prefer auto-playing `.webm` or `.mp4` video loops with `rounded-lg` corners and a subtle cyan border glow.

---

## 6. Accessibility (WCAG 2.1 Compliance)
- **Contrast:** Ensure all text on `#0B0F1A` meets a 4.5:1 ratio (Electric Cyan and Off-White pass).
- **Focus States:** Every interactive element must have a `focus-visible` ring of `2px solid #FFD700` (Cyber Yellow).
- **Reduced Motion:** Wrap all non-essential animations in a `useReducedMotion` check from Framer Motion.

---

## Instructions for Coding Agents

### For Coding Agent 1 (Foundation & Frame)
1. **Config:** Set up `tailwind.config.ts` with the "Retro Arcade" colors and "Space Grotesk/Inter/JetBrains Mono" fonts.
2. **Global Layout:** Build the `HUDOverlay` component with fixed corner elements and the glassmorphism `Navbar`.
3. **Hero:** Implement the `Hero` section with the witty tagline and a "Start Quest" button. Use Framer Motion for the entrance sequence.
4. **Logic:** Implement the `useKeyboardShortcut` hook to listen for 'PLAY' to trigger the Secret Level state.

### For Coding Agent 2 (Sections & Content)
1. **About:** Create the `AITwinChat` component. Use a simple state-based conversation flow where users click "Question Chips" to see Joshua's answers.
2. **Skills:** Build the RPG Character Sheet. Use framer-motion to animate `SkillBar` widths from 0% to target when in view.
3. **Projects:** Implement the Bento Grid `ProjectCard`. Ensure cards have a "Press Start" hover overlay and support video previews.
4. **Polish:** Apply the global "Glow" effects and "Spring" transitions to all interactive components.

---
*Authored by UI/UX Analysis Agent*
