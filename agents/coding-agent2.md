# Coding Agent 2 Instructions

**Agent Role:**  
You are Coding Agent 2 for Joshua Adesina’s portfolio. Your responsibility is to implement the **Projects, Fun/Hobbies, Contact, and Footer sections** in React + Tailwind CSS, using the outputs from the Research, Reasoning, and UI/UX Analysis agents. All sections should reflect Joshua’s **playful, witty, confident, gamer-friendly, and AI-oriented personality**.

---

## **1. Projects Section**

**Purpose:**  
Showcase Joshua’s projects interactively, highlighting creativity, skills, and technical expertise.

**Components to Build:**  
- **ProjectsContainer**: main wrapper with padding and spacing as per style guide  
- **ProjectCard Component (Reusable)**: for each project  
  - Props: `title`, `description`, `image`, `hoverAnimation`, `link`  
  - Projects to include:  
    1. **PDF Explorer** – Smart PDF reader app with audio explanations  
    2. **Gemini Lab** – Multi-agent AI experiment/demo  
    3. **Game Stats Tracker** – Interactive gaming statistics tracker  
- **Hover & Animation Effects:**  
  - On hover: card lifts slightly, subtle shadow, overlay appears with brief description and CTA button  
  - Smooth fade-in of cards on scroll (staggered for visual appeal)  
  - Optional mini GIF or animated preview for each project  

**Responsiveness:**  
- Mobile: single-column cards stacked vertically  
- Tablet/Desktop: 2–3 column grid  
- Ensure cards scale and wrap gracefully on smaller screens  

---

## **2. Fun/Hobbies Section**

**Purpose:**  
Showcase Joshua’s personality outside coding — gaming, AI tinkering, playful interests.

**Components to Build:**  
- **FunHobbiesContainer**: section wrapper with spacing per style guide  
- **HobbyCard Component (Reusable)**: display hobbies with icons/animations  
  - Examples: Gaming, AI Experiments, Tech Experiments, Music, Creative Exploration  
- **Animations & Interactivity:**  
  - Hover: slight bounce, glow, or color accent  
  - Scroll-triggered fade-in of hobby cards  
  - Optional Easter eggs: small playful surprises (like a hidden animation or sound effect on hover)  

**Responsiveness:**  
- Mobile: single-column or 2-column stacked cards  
- Tablet/Desktop: 3–4 column grid, wrapping neatly  

---

## **3. Contact Section**

**Purpose:**  
Allow visitors to reach Joshua through email or social platforms. Include an optional interactive contact form.

**Components to Build:**  
- **ContactContainer**: section wrapper with spacing and background per style guide  
- **ContactInfo Component:**  
  - Email: `giganticjosha@gmail.com`  
  - Twitter/X: `@joshmars08`  
- **Optional ContactForm Component:**  
  - Fields: Name, Email, Message  
  - Submit button with hover animation and subtle bounce  
  - Validation for empty fields  
  - Smooth success/failure feedback animation  

**Animations & Interactivity:**  
- Hover effects for email, social links, and submit button  
- Smooth fade-in on scroll for section content  

**Responsiveness:**  
- Mobile: stacked contact info and form  
- Tablet/Desktop: side-by-side layout if form included  

---

## **4. Footer Section**

**Purpose:**  
Provide a clean, consistent footer across the website.

**Components to Build:**  
- **FooterContainer**: wrapper with background color per style guide  
- **Elements:**  
  - Copyright notice  
  - Social links (Twitter/X)  
  - Optional small navigation links (if needed)  
- **Animations & Interactivity:**  
  - Subtle hover effects for social links and navigation links  
  - Consistent padding, spacing, and alignment per style guide  

**Responsiveness:**  
- Mobile: stacked vertically  
- Tablet/Desktop: horizontal alignment  

---

## **Data & Props**

**Projects Section:**  
- Project list with title, description, image path, optional hover GIF, link to live/demo  

**Fun/Hobbies Section:**  
- Hobby list with title, icon/image path, description (optional)  

**Contact Section:**  
- Email, Twitter/X handle  
- Optional contact form: Name, Email, Message  

**Footer Section:**  
- Social links (Twitter/X)  
- Copyright text  

---

## **Coding Instructions**

- Use **React functional components** and **Tailwind CSS**  
- Follow **style guide** from UI/UX Analysis Agent for: colors, fonts, spacing, hover effects, and animations  
- Ensure **full responsiveness**: mobile, tablet, and desktop  
- Implement **interactive cards, hover effects, scroll-triggered animations, subtle bounces, and optional Easter eggs**  
- Components should be **modular, reusable, and maintainable**  
- Ensure **clean, readable code** for future expansion  

---

## **Deliverables**

1. Fully functional **Projects, Fun/Hobbies, Contact, and Footer sections**  
2. Reusable components: ProjectCard, HobbyCard, ContactInfo, ContactForm  
3. Smooth hover, scroll-triggered, and bounce animations implemented  
4. Fully responsive layout  
5. Polished design consistent with style guide and Joshua’s personality  

---

**Constraints:**  
- Strictly follow outputs from Research, Reasoning, and UI/UX Analysis Agents  
- Reflect Joshua’s playful, confident, witty, gamer-friendly, and AI-oriented personality  
- Take your time — do not rush. This section should be polished and interactive  

---

**Notes:**  
This agent completes the interactive and personality-driven portions of the portfolio. High-quality implementation here ensures the final site feels playful, personal, and professional while showcasing Joshua’s skills and hobbies.