"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiExpo,
  SiTailwindcss,
  SiVite,
  SiElectron,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiStripe,
  SiPostman,
  SiLinux,
  SiNginx,
  SiDavinciresolve,
  SiOpenai,
  SiClaude,
  SiGooglegemini,
  SiOllama,
  SiHuggingface,
  SiGithubcopilot,
  SiPerplexity,
  SiLangchain,
  SiN8N,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";

// Custom SVG Icons for missing official brands
const GroqIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c3.42 0 6.46-1.72 8.3-4.35l-3.26-2.45C15.77 16.71 14 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.67 4.22 1.76l2.83-2.83C17.27 3.14 14.81 2 12 2z" />
  </svg>
);

const CursorIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 2l16 12.27h-8.56l-3.14 7.73L4 2z" />
  </svg>
);

const BullMQIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 14c-2 0-4-1.5-4-3.5s2-3.5 4-3.5 4 1.5 4 3.5-2 3.5-4 3.5z" />
    <path d="M12 7c-4 0-7-2-7-5M12 7c4 0 7-2 7-5" />
    <path d="M8 12.5v2.5c0 2.2 1.8 4 4 4s4-1.8 4-4v-2.5" />
  </svg>
);

const ScaleAIIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 8h8v8H8z" fill="#00FF66" />
  </svg>
);

const AnnotationIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" />
    <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.25" />
    <path d="M3 3h3M3 3v3M21 3h-3M21 3v3M3 21h3M3 21v-3M21 21h-3M21 21v-3" strokeWidth="3" />
  </svg>
);

const AfterEffectsIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.35 12.82c-.22.42-.58.74-1.07.95-.49.21-1.12.31-1.89.31-.76 0-1.39-.1-1.88-.31-.49-.21-.86-.52-1.09-.94-.24-.42-.36-.96-.36-1.61v-1.92c0-.66.12-1.2.36-1.62.24-.42.6-.74 1.1-.96.49-.22 1.12-.33 1.88-.33.77 0 1.4.11 1.88.33.49.22.85.54 1.08.96.24.42.36.96.36 1.62v.1h-1.6v-.32c0-.36-.05-.63-.15-.81-.1-.18-.28-.27-.56-.27-.29 0-.47.1-.56.3-.09.2-.14.47-.14.82v2.24c0 .35.05.62.14.82.09.2.27.3.56.3.28 0 .46-.09.56-.28.1-.19.15-.46.15-.81v-.32h1.6v.11c0 .65-.12 1.19-.36 1.61zm8.35-1.54h-4.3v.97c0 .36.05.63.16.82.11.19.3.28.58.28.27 0 .46-.08.56-.25.11-.17.16-.42.16-.76v-.12h1.6c0 .54-.08.97-.24 1.29-.16.32-.42.56-.78.72-.36.16-.84.24-1.44.24-.76 0-1.37-.11-1.83-.34s-.8-.55-1.02-.97c-.22-.42-.33-.94-.33-1.57v-1.9c0-.63.11-1.16.33-1.58.22-.42.56-.74 1.02-.97.46-.23 1.07-.34 1.83-.34.69 0 1.25.09 1.69.28.44.19.76.47.96.83.2.36.31.81.31 1.35v1.82zm-1.6-1.28v-.62c0-.31-.05-.55-.15-.71-.1-.16-.27-.24-.52-.24-.26 0-.43.08-.52.24-.09.16-.14.4-.14.71v.62h1.33z" />
  </svg>
);

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#C5A000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C#", icon: TbBrandCSharp, color: "#239120" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact, color: "#087EA4" },
      { name: "Next.js", icon: SiNextdotjs, color: "#0F172A" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Expo", icon: SiExpo, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0ea5e9" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "React Native", icon: SiReact, color: "#087EA4" },
      { name: "Electron", icon: SiElectron, color: "#47848F" },
    ],
  },
  {
    title: "Backend / Databases / Dev Tools",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", icon: SiMongodb, color: "#13AA52" },
      { name: "Express", icon: SiExpress, color: "#0F172A" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
      { name: "Redis", icon: SiRedis, color: "#D82C20" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
      { name: "Payment Integration (Stripe)", icon: SiStripe, color: "#635BFF" },
      { name: "API Integration (Postman)", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux", icon: SiLinux, color: "#E0A800" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "After Effects", icon: AfterEffectsIcon, color: "#8A2BE2" },
      { name: "DaVinci Resolve", icon: SiDavinciresolve, color: "#0A85FF" },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
      { name: "Claude", icon: SiClaude, color: "#D97757" },
      { name: "Gemini CLI", icon: SiGooglegemini, color: "#8E75C2" },
      { name: "Groq", icon: GroqIcon, color: "#F55036" },
      { name: "Ollama", icon: SiOllama, color: "#0F172A" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#EA580C" },
      { name: "Cursor", icon: CursorIcon, color: "#0083B0" },
      { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#8F2FD4" },
      { name: "Perplexity", icon: SiPerplexity, color: "#1395A2" },
      { name: "LangChain", icon: SiLangchain, color: "#059669" },
      { name: "n8n", icon: SiN8N, color: "#FF6C37" },
      { name: "Scale AI", icon: ScaleAIIcon, color: "#09090B" },
      { name: "CVAT / Labelbox", icon: AnnotationIcon, color: "#4A90E2" },
      { name: "AI-model Trainer (PyTorch)", icon: SiPytorch, color: "#EE4C2C" },
      { name: "AI-model Trainer (TensorFlow)", icon: SiTensorflow, color: "#FF9900" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 22,
    },
  },
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex flex-col items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 p-3 group"
      tabIndex={0}
      aria-label={skill.name}
    >
      {/* Soft Glow Radial Gradient matching Brand Color */}
      <div
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-lg rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${skill.color} 0%, rgba(0,0,0,0) 70%)`,
        }}
      />

      {/* Icon Container */}
      <div
        className="flex items-center justify-center mb-2"
        style={{ color: skill.color }}
      >
        <skill.icon className="w-7 h-7" />
      </div>

      {/* Minimalist Subtitle Name */}
      <span className="text-[9px] font-mono text-textSecondary/80 group-hover:text-textMain transition-colors duration-300 text-center tracking-wider truncate w-full max-w-full">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto mt-12 md:mt-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="font-space font-bold text-4xl text-textMain tracking-tight mb-4 uppercase">
          POWER-<span className="text-primary">UPS</span>
        </h2>
        <p className="text-textSecondary font-inter text-sm max-w-md mx-auto">
          Hover over each technology to see its name. Built with official brand ecosystems.
        </p>
      </motion.div>

      <div className="space-y-16">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <div key={catIdx}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-space font-bold text-lg text-primary mb-8 uppercase tracking-widest flex items-center gap-4"
            >
              <span className="h-[1px] w-8 bg-primary/30" />
              {category.title}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3"
            >
              {category.skills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
