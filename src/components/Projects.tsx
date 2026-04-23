"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Collapse Risk Predictor",
    description: "A machine learning project that predicts corporate financial distress with strong model performance and clear risk outputs.",
    image: "/projects/ai-sentry.svg",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Streamlit"],
    difficulty: "Boss Fight" as const,
    loot: ["92% Accuracy Rating", "Real-time Risk Assessment", "Production-ready App"],
    githubUrl: "https://github.com/agaboo1981/CollapeRiskModel",
    liveUrl: "https://group-5-fo6xokxhv776ojjceed5od.streamlit.app",
  },
  {
    title: "BlockCore",
    description: "A modern blockchain project focused on transparent, secure, and user-friendly decentralized interactions.",
    image: "/projects/blockchain.svg",
    tags: ["Solidity", "Web3", "Next.js", "Vercel"],
    difficulty: "Boss Fight" as const,
    loot: ["Smart Contract Workflow", "Decentralized Architecture", "Clean UI"],
    githubUrl: "https://github.com/agaboo1981/blockcore",
    liveUrl: "https://blockcore.vercel.app/",
  },
  {
    title: "Vogue",
    description: "A stylish, conversion-focused fashion-themed web experience with polished visuals and responsive interactions.",
    image: "/projects/ecommerce.svg",
    tags: ["Next.js", "Tailwind", "Responsive UI", "Vercel"],
    difficulty: "Main Quest" as const,
    loot: ["Elegant Product Storytelling", "Mobile-first Layout", "Fast Navigation"],
    githubUrl: "https://github.com/agaboo1981/vogue",
    liveUrl: "https://vogue-teal.vercel.app/",
  },
  {
    title: "Nexus",
    description: "A modern fintech landing page showcasing services, trust signals, and clear calls-to-action for users.",
    image: "/projects/fintech.svg",
    tags: ["Next.js", "Fintech UI", "Tailwind", "Vercel"],
    difficulty: "Boss Fight" as const,
    loot: ["Professional Brand Presence", "SEO-friendly Structure", "Responsive Sections"],
    githubUrl: "https://github.com/agaboo1981/nexus",
    liveUrl: "https://nexus-nu-navy.vercel.app/",
  },
  {
    title: "Nexus Conflict",
    description: "A Landing page for a fictional game, showcasing dynamic visuals, engaging content, and clear calls-to-action to immerse visitors in the gaming world.",
    image: "/projects/pixel-quest.svg",
    tags: ["React", "Animation", "Game UI", "Vercel"],
    difficulty: "Main Quest" as const,
    loot: ["High-energy Visual Design", "Interactive Experience", "Responsive Performance"],
    githubUrl: "https://github.com/agaboo1981/gaming",
    liveUrl: "https://gaming-ecru-phi.vercel.app/",
  },
  {
    title: "La Dolce Vita",
    description: "A modern e-commerce experience designed for smooth browsing, clear product discovery, and polished checkout flow.",
    image: "/projects/ecommerce.svg",
    tags: ["Next.js", "E-commerce", "Tailwind", "Vercel"],
    difficulty: "Main Quest" as const,
    loot: ["Conversion-focused UX", "Mobile Optimization", "Clean Product Pages"],
    githubUrl: "https://github.com/agaboo1981/ladolcevita",
    liveUrl: "https://ladolcevita-seven.vercel.app/",
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
        <div className="md:col-span-2 lg:col-span-12">
          <ProjectCard {...projects[0]} />
        </div>
        <div className="lg:col-span-7">
          <ProjectCard {...projects[1]} />
        </div>
        <div className="lg:col-span-5">
          <ProjectCard {...projects[2]} />
        </div>
        <div className="lg:col-span-5">
          <ProjectCard {...projects[3]} />
        </div>
        <div className="lg:col-span-7">
          <ProjectCard {...projects[4]} />
        </div>
        <div className="md:col-span-2 lg:col-span-12">
          <ProjectCard {...projects[5]} />
        </div>
      </div>
    </section>
  );
}
