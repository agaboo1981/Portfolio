---
name: portfolio-orchestrator
description: Manages the multi-agent workflow for the portfolio project (Research, Reasoning, Design, Coding, Critique, Styling).
---

# Portfolio Orchestrator Workflow

This skill guides the creation of a modern developer portfolio by delegating tasks to specialized agent personas.

## Workflow Phases

### Phase 1: Research & Planning
- **Goal**: Establish the design and architectural foundation.
- **Agents Involved**: Research, Reasoning, UI/UX Analysis.
- **Action**: Research 2025+ trends, plan the React component tree, and define the design system (Bento Grid).

### Phase 2: Implementation (Coding)
- **Goal**: Build the core sections of the portfolio.
- **Agents Involved**: Coding Agent 1 (Hero, About, Skills), Coding Agent 2 (Projects, Fun/Hobbies, Contact, Footer).
- **Action**: Sequentially or in parallel, implement the sections based on the architectural plan.

### Phase 3: Critique & Styling
- **Goal**: Refine the design, polish interactions, and audit for consistency.
- **Agents Involved**: Design Critic, Stylist.
- **Action**: Audit the implementation, suggest layout/a11y improvements, and apply the final "polish" (transitions, color/font tweaks).

## Specialized Personas
Detailed personas and their specific tasks are defined in [references/agents.md](references/agents.md).

## Usage
- When beginning a new phase, announce which agent is currently active.
- Ensure that the output from one phase (e.g., UI/UX recommendations) is used as input for the next (e.g., Coding).
- Use `grep_search` to verify architectural patterns and styling conventions before coding.