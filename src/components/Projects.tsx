"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project Alpha: AI Sentry",
    description: "An autonomous agent that monitors server health and predicts failures using LSTMs.",
    image: "/projects/ai-sentry.svg",
    tags: ["Python", "TensorFlow", "React", "Node.js"],
    difficulty: "Boss Fight" as const,
    loot: ["98% Prediction Accuracy", "Real-time Monitoring"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Pixel Quest",
    description: "A retro-style RPG built to demonstrate complex state management in React.",
    image: "/projects/pixel-quest.svg",
    tags: ["React", "Zustand", "Framer Motion"],
    difficulty: "Main Quest" as const,
    loot: ["Fluid Combat System", "Responsive Inventory"],
    githubUrl: "#",
  },
  {
    title: "Cipher Vault",
    description: "A secure messaging app with end-to-end encryption and self-destructing messages.",
    image: "/projects/cipher-vault.svg",
    tags: ["Next.js", "Web Crypto API", "Socket.io"],
    difficulty: "Main Quest" as const,
    loot: ["Military Grade Security", "Sub-100ms Latency"],
    liveUrl: "#",
  },
  {
    title: "Collapse Risk Predictor",
    description: "An ML-powered dashboard trained on a 5,000-row Nigeria-based dataset to forecast corporate collapse risk using Logistic Regression.",
    image: "/projects/ai-sentry.svg",
    tags: ["Python", "Streamlit", "Scikit-Learn", "Machine Learning"],
    difficulty: "Boss Fight" as const,
    loot: ["92% Prediction Accuracy", "Nigeria-specific Data Model"],
    githubUrl: "https://github.com/agaboo1981/Group-5",
    liveUrl: "https://group-5-fo6xokxhv776ojjceed5od.streamlit.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 pt-32 lg:pt-20 px-6 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 mb-2 font-mono text-primary text-sm uppercase tracking-widest">
          <span className="w-8 h-[1px] bg-primary"></span>
          Quest Log
        </div>
        <h2 className="text-4xl lg:text-5xl font-space font-bold text-offwhite">
          Active <span className="text-primary">Projects</span>
        </h2>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <ProjectCard {...projects[0]} />
        </div>
        <div className="lg:col-span-5">
          <ProjectCard {...projects[1]} />
        </div>
        <div className="lg:col-span-5">
          <ProjectCard {...projects[2]} />
        </div>
        <div className="lg:col-span-7">
          <ProjectCard {...projects[3]} />
        </div>
      </div>
    </section>
  );
}
