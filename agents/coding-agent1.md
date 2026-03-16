# Coding Agent 1 Instructions

**Agent Role:**  
You are Coding Agent 1 for Joshua Adesina’s portfolio. Your job is to implement the **Hero, About, and Skills sections** in React + Tailwind CSS, strictly following the outputs from the Research, Reasoning, and UI/UX Analysis agents. You must ensure **interactivity, responsiveness, animations, and style consistency** while reflecting Joshua’s playful, witty, confident, and gamer-friendly personality.

---

## **1. Hero Section**

**Purpose:**  
Introduce Joshua with name, tagline, and avatar. Provide a strong first impression with personality-driven interactivity.

**Components to Build:**  
- **HeroContainer**: main wrapper with full-screen height, background (gradient or subtle pattern)  
- **Avatar**: displays Joshua’s avatar (path: `path/to/avatar.png`)  
- **Name**: “Joshua Adesina” — bold, futuristic sans-serif, prominent  
- **Tagline**: “Civil engineer by degree, tech explorer by passion.”  
- **CTA Button**: interactive button (e.g., “Explore Portfolio”), subtle bounce animation on hover, color transitions according to style guide

**Animations & Interactivity:**  
- Subtle fade-in for avatar and text on load  
- Hover bounce for CTA button  
- Smooth scroll trigger to About section when CTA clicked  
- Optional Easter egg: small playful animation on avatar hover

**Responsiveness:**  
- Mobile: stacked avatar above name/tagline  
- Tablet/Desktop: side-by-side avatar and text  

---

## **2. About Section**

**Purpose:**  
Introduce Joshua’s personality, hobbies, and brief story. Make it playful and engaging.

**Components to Build:**  
- **AboutContainer**: section wrapper with padding/margin per style guide  
- **DescriptionText**: text about Joshua (playful, witty tone), e.g.:  
  > “Joshua Adesina is a civil engineer by degree, a tech explorer by heart, a gamer, and an AI tinkerer who loves building creative apps.”  
- **Highlights/Badges**: small badges for hobbies or personality traits (e.g., AI, Gaming, Problem-Solving, Tech Experiments)  
- **Avatar/Icons**: optional secondary avatar or playful icons representing hobbies

**Animations & Interactivity:**  
- Fade-in and slide-up for text and badges on scroll  
- Hover effects for badges: slight scale-up, shadow, or color highlight  

**Responsiveness:**  
- Mobile: vertical stacking of text, badges, and icons  
- Tablet/Desktop: horizontal or grid alignment for readability and visual appeal  

---

## **3. Skills Section**

**Purpose:**  
Showcase Joshua’s skills in a visually interactive way.

**Components to Build:**  
- **SkillsContainer**: section wrapper with grid/flex layout  
- **SkillCard Component** (reusable): for each skill  
  - Props: `name`, `icon`, `level` (optional for progress bar)  
  - Skills to display:  
    - React, React Native, Flutter, Tailwind, Node.js, Gemini CLI, AI Tools, VS Code, Git, GitHub, Vercel, Adobe After Effects, DaVinci Resolve, CVAT, Labelbox, Scale AI  
- **Animations & Interactivity:**  
  - Hover: scale-up, subtle shadow, slight color glow according to accent color  
  - Optional progress bar animation for skill proficiency  
  - Smooth staggered fade-in for each skill card when section comes into view

**Responsiveness:**  
- Mobile: single column or 2-column grid  
- Tablet/Desktop: 3–4 column grid per style guide  
- Ensure cards wrap properly on smaller screens  

---

## **Data & Props**

**Hero Section:**  
- `name`: “Joshua Adesina”  
- `tagline`: “Civil engineer by degree, tech explorer by passion.”  
- `avatar`: `path/to/avatar.png`

**About Section:**  
- Description text about personality and hobbies  
- Badge data: AI, Gaming, Problem-Solving, Tech Experiments  

**Skills Section:**  
- Skill list with icons (or placeholder icons if unavailable)  
- Optional proficiency percentage or experience level  

---

## **Coding Instructions**

- Use **React functional components** and **Tailwind CSS**  
- Follow style guide from UI/UX Agent for **colors, fonts, spacing, animations**  
- Ensure **responsive layout** across mobile, tablet, and desktop  
- Use **modular, reusable components** (SkillCard, Badge, AvatarComponent)  
- Implement **interactive animations** (hover effects, fade-ins, bounces)  
- Maintain **clean, readable code** for future modifications  

---

## **Deliverables**

1. Fully functional **Hero, About, and Skills sections** as React components  
2. Reusable components for Skills, Badges, Avatar  
3. Smooth scroll between sections  
4. Hover and animation effects implemented  
5. Fully responsive layout, consistent with style guide  

---

**Constraints:**  
- Follow outputs from Research, Reasoning, and UI/UX Agents exactly  
- Reflect Joshua’s personality (playful, witty, confident, gamer-friendly) in design and interactions  
- Take your time — do not rush. This section should be polished and interactive  

---

**Notes:**  
This agent sets the **tone and style** for the portfolio. Its quality directly influences the rest of the website. Focus on detail, interactivity, and polish before proceeding to other sections.