# Joshua Adesina Portfolio: Strategic Reasoning Plan

This document outlines the architectural blueprint, component hierarchy, and implementation workflow for Joshua Adesina's portfolio. The plan synthesizes research findings into a scalable React-based structure, emphasizing a "Gamer HUD" and "Retro-Futuristic" aesthetic.

---

## 1. Vision & Core Identity
- **Personality:** Playful, witty, confident, gamer-friendly, AI-oriented.
- **Theme:** "The Quest of the Full-Stack Developer" (RPG/Gamer HUD vibe).
- **Tech Stack:** Next.js 15 (App Router), Tailwind CSS, Framer Motion, Lucide React, (Optional) React Three Fiber.

---

## 2. Website Structure & Section Breakdown

### A. Hero: "The Title Screen"
- **Sub-components:** 
  - `HeroBackground`: 3D interactive elements (R3F) or animated mesh gradient.
  - `HeroContent`: Name, witty tagline, primary CTA ("Start Quest").
  - `HUDOverlay`: Floating "System Status" and "Uptime" indicators in corners.
- **Data:** `name`, `tagline`, `stats` (e.g., "Coffee Level: 85%").
- **Interactions:** Mouse-parallax on background, typing effect for tagline, spring-based entrance for HUD.

### B. About: "Character Bio"
- **Sub-components:**
  - `AITwinChat`: A mini-chat interface where users can select questions.
  - `AvatarDisplay`: Stylized 3D character or Memoji with breathing animation.
- **Data:** `bioText`, `faqList` (Questions & Answers).
- **Interactions:** Conversational UI transitions, glassmorphism card effects.

### C. Skills: "Power-Ups / Character Sheet"
- **Sub-components:**
  - `SkillCategory`: Grouping (Frontend, Backend, AI).
  - `SkillBar`: RPG-style health/mana bars representing proficiency levels.
  - `BadgeGrid`: Grid of technology icons (Lucide React).
- **Data:** `skillsArray` (name, level, category, icon, specialMove).
- **Interactions:** Bars animate from 0% on scroll, hover-to-reveal "Special Move" description.

### D. Projects: "Quest Log"
- **Sub-components:**
  - `ProjectCard`: Bento-box style card with video/GIF preview.
  - `ProjectModal`: Expanded view for deep dives.
  - `QuestMeta`: Difficulty level (e.g., "Boss Fight"), Loot (Key outcomes).
- **Data:** `projectsArray` (title, description, techStack, previewUrl, difficulty, loot).
- **Interactions:** Scrollytelling transitions, "Press Start" hover effect on cards, expand-on-click animations.

### E. Fun/Hobbies: "Secret Level"
- **Sub-components:**
  - `EasterEggTrigger`: Keyboard shortcut listener ('PLAY').
  - `MiniGameContainer`: Simple JS game (Snake or clicking challenge).
  - `HobbyGallery`: Interactive grid of non-code interests.
- **Data:** `hobbies`, `gameHighScore`.
- **Interactions:** Keyboard listeners, hidden "glitch" effects to signal secrets.

### F. Contact & Footer: "Save Point"
- **Sub-components:**
  - `ContactForm`: "Save Your Progress" styled inputs.
  - `SocialLinks`: Floating icons with glow effects.
  - `FooterCredit`: Witty closing remark.
- **Data:** `email`, `socials` (links).
- **Interactions:** Input focus glow, "Message Sent" achievement notification.

---

## 3. Component Tree & Folder Structure

### Suggested React Folder Structure
```text
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Global HUD & Navbar
│   └── page.tsx          # Main scrolling experience
├── components/
│   ├── ui/               # Reusable primitives (Buttons, Inputs, Cards)
│   ├── layout/           # HUD, Navbar, Footer
│   ├── Hero/             # Hero specific components
│   ├── About/            # Chatbot & Avatar
│   ├── Skills/           # RPG Bars & Badges
│   ├── Projects/         # Quest Log & Cards
│   ├── Fun/              # Easter Eggs & Games
│   └── Contact/          # Form & Socials
├── hooks/                # Custom hooks (useKeyboardShortcut, useMousePosition)
├── data/                 # JSON files for projects, skills, and bio
├── styles/               # Global CSS and Tailwind configs
└── utils/                # Helper functions (animations, formatting)
```

---

## 4. Data Flow & Props

| Component | Parent | Key Props | Description |
| :--- | :--- | :--- | :--- |
| `SkillBar` | `SkillsSection` | `name`, `level`, `color` | Renders a single RPG bar. |
| `ProjectCard` | `ProjectsGrid` | `projectData`, `onSelect` | Displays quest overview. |
| `AITwinChat` | `AboutSection` | `conversations` | Manages state of the chat UI. |
| `HUDElement` | `Layout` | `label`, `value`, `position` | Corner-pinned status labels. |

---

## 5. Interactive & UX Logic

- **Animation Strategy (Framer Motion):**
  - **Scroll Reveal:** Use `whileInView` with `viewport: { once: true }`.
  - **Hover Effects:** `whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}`.
  - **Transitions:** `type: "spring", stiffness: 100`.
- **Custom Hooks:**
  - `useMousePosition`: For parallax effects and custom cursor logic.
  - `useKeyboardShortcut`: To trigger the "Secret Level" (Fun section).
- **Global HUD:** The navbar and corner elements should remain fixed, giving the impression of a persistent gamer interface.

---

## 6. Actionable Workflow for Coding Agents

### Phase 1: Foundation (Coding Agent 1)
1. Initialize Next.js 15 project with Tailwind.
2. Setup `tailwind.config.ts` with the "Retro Arcade" palette.
3. Build the `Layout` with persistent HUD elements.
4. Implement the `Hero` section with basic Framer Motion animations.

### Phase 2: Core Sections (Coding Agent 2)
1. Implement `About` (Chatbot logic) and `Skills` (RPG bars).
2. Create the `Projects` grid using the bento-box pattern.
3. Map data from `src/data/` to these components.

### Phase 3: Polish & Interaction (Coding Agent 1 & 2 Parallel)
1. **Agent 1:** Implement `Contact` form and `Footer`. Add the "Secret Level" keyboard listener.
2. **Agent 2:** Refine all `hover` and `scroll` animations. Add the custom cursor and GLSL-like glow effects.
3. **Both:** Perform accessibility audits (ARIAL labels, keyboard navigation).

---
*Generated by Reasoning Agent for Joshua Adesina*
