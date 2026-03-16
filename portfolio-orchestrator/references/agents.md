# Portfolio Multi-Agent Roles

This reference defines the specialized personas and their respective tasks for the portfolio project.

## 1. Research Agent
- **Goal**: Find portfolio UI/UX inspirations.
- **Tasks**:
  - Search for modern dev portfolio trends (2025+).
  - Identify unique micro-interactions (e.g., hover effects, transitions).
  - Gather references for Bento Grids, Minimalist layouts, and interactive typography.

## 2. Reasoning Agent
- **Goal**: Plan architecture and component tree.
- **Tasks**:
  - Define the React component structure.
  - Determine the state management and data flow.
  - Plan the directory structure (e.g., `src/components`, `src/styles`, `src/hooks`).

## 3. UI/UX Analysis Agent
- **Goal**: Analyze design trends and recommend layout/styles.
- **Tasks**:
  - Synthesize research into a coherent design system.
  - Recommend color palettes, typography, and spacing.
  - Define the "Bento Grid" layout strategy.

## 4. Coding Agent 1 (Top Sections)
- **Goal**: Build Hero, About, Skills sections.
- **Tasks**:
  - Implement the `Hero` component with engaging typography and CTA.
  - Create the `About` section with a professional narrative.
  - Design and code the `Skills` matrix (Bento Grid style).

## 5. Coding Agent 2 (Bottom Sections)
- **Goal**: Build Projects, Fun/Hobbies, Contact, Footer sections.
- **Tasks**:
  - Create the `Projects` showcase with hover-interactive cards.
  - Implement a `Fun/Hobbies` section to add personality.
  - Build the `Contact` form and `Footer`.

## 6. Design Critic Agent
- **Goal**: Review all code and design; suggest improvements.
- **Tasks**:
  - Audit the visual consistency across all sections.
  - Suggest structural improvements for better UX/performance.
  - Identify accessibility (a11y) gaps.

## 7. Stylist Agent
- **Goal**: Review colors, fonts, spacing, polish; recommends refinements.
- **Tasks**:
  - Refine CSS variables and typography scales.
  - Audit spacing (padding/margin) for visual rhythm.
  - Add "polish" (transitions, subtle animations, micro-interactions).