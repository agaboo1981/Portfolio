"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Collapse Risk Predictor",
    description: "A machine learning pipeline and interactive application that predicts corporate financial distress using ensemble model classification and real-time risk indicators.",
    image: "/projects/collapse-risk-predictor.png",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Streamlit"],
    category: "AI & Data Science",
    metrics: [
      "92% classification recall on distressed companies",
      "Real-time corporate risk matrix computation",
      "Fully interactive analytical dashboard",
    ],
    githubUrl: "https://github.com/agaboo1981/CollapeRiskModel",
    liveUrl: "https://group-5-fo6xokxhv776ojjceed5od.streamlit.app",
  },
  {
    title: "BlockCore",
    description: "A secure web3 platform designed to facilitate transparent, secure, and user-friendly decentralized smart contract interactions.",
    image: "/projects/blockchain.svg",
    tags: ["Solidity", "Web3", "Next.js", "Vercel"],
    category: "Blockchain / Web3",
    metrics: [
      "Secure gas-optimized Solidity smart contracts",
      "Automated web3 wallet provider connection client",
      "Real-time event listener state machine",
    ],
    githubUrl: "https://github.com/agaboo1981/blockcore",
    liveUrl: "https://blockcore.vercel.app/",
  },
  {
    title: "Vogue",
    description: "A conversion-optimized, responsive fashion-themed web experience featuring sub-second transitions and structured content organization.",
    image: "/projects/vogue.png",
    tags: ["Next.js", "Tailwind", "Responsive UI", "Vercel"],
    category: "E-Commerce",
    metrics: [
      "Fully responsive and mobile-optimized layouts",
      "Fast page loads under 0.8s on 3G connections",
      "Integrated analytics and search indexing (SEO)",
    ],
    githubUrl: "https://github.com/agaboo1981/vogue",
    liveUrl: "https://vogue-teal.vercel.app/",
  },
  {
    title: "Nexus",
    description: "A modern fintech application interface built to streamline financial discovery, trust signals, and user interactive calculations.",
    image: "/projects/fintech.svg",
    tags: ["Next.js", "Fintech UI", "Tailwind", "Vercel"],
    category: "Fintech Platform",
    metrics: [
      "Dynamic interactive financial yield calculators",
      "Optimized Core Web Vitals score (98+ Performance)",
      "Strict semantic HTML and metadata setup (SEO)",
    ],
    githubUrl: "https://github.com/agaboo1981/nexus",
    liveUrl: "https://nexus-nu-navy.vercel.app/",
  },
  {
    title: "Nexus Conflict",
    description: "An immersive entertainment landing page designed to showcase high-fidelity visuals, scroll-driven interactions, and product messaging.",
    image: "/projects/pixel-quest.svg",
    tags: ["React", "Animation", "Game UI", "Vercel"],
    category: "Web Experience",
    metrics: [
      "Fluid, GPU-accelerated transition animations",
      "Structured content flow for peak marketing conversion",
      "Comprehensive responsive touch-device scaling",
    ],
    githubUrl: "https://github.com/agaboo1981/gaming",
    liveUrl: "https://gaming-ecru-phi.vercel.app/",
  },
  {
    title: "La Dolce Vita",
    description: "A high-performance modern digital store experience centered around rapid product catalog traversal and clean product showcase logic.",
    image: "/projects/ecommerce.svg",
    tags: ["Next.js", "E-commerce", "Tailwind", "Vercel"],
    category: "E-Commerce",
    metrics: [
      "Polished category traversal and product display",
      "Optimized image loading pipelines (Next/Image)",
      "Accessible design supporting screen readers",
    ],
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
          Showcase
        </div>
        <h2 className="text-4xl lg:text-5xl font-space font-bold text-slate-900">
          Active <span className="text-primary">Projects</span>
        </h2>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12">
          <ProjectCard {...projects[0]} layout="horizontal" />
        </div>
        <div className="lg:col-span-7">
          <ProjectCard {...projects[1]} layout="vertical" />
        </div>
        <div className="lg:col-span-5">
          <ProjectCard {...projects[2]} layout="vertical" />
        </div>
        <div className="lg:col-span-5">
          <ProjectCard {...projects[3]} layout="vertical" />
        </div>
        <div className="lg:col-span-7">
          <ProjectCard {...projects[4]} layout="vertical" />
        </div>
        <div className="lg:col-span-12">
          <ProjectCard {...projects[5]} layout="horizontal" />
        </div>
      </div>
    </section>
  );
}
