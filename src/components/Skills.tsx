"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu, Palette, Terminal, Database, Globe, Zap, Shield, Layout, WalletCards,} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML", icon: Globe, level: 100, color: "primary" },
      { name: "CSS", icon: Layout, level: 96, color: "secondary" },
      { name: "JavaScript", icon: Zap, level: 90, color: "secondary" },
      { name: "TypeScript", icon: Shield, level: 88, color: "primary" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React / Next.js", icon: Code2, level: 90, color: "secondary" },
      { name: "React Native / Flutter", icon: Smartphone, level: 85, color: "secondary" },
      { name: "Expo", icon: Smartphone, level: 88, color: "secondary" },
      { name: "Tailwind CSS", icon: Layout, level: 95, color: "primary" },
    ]
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: Database, level: 80, color: "primary" },
      { name: "MongoDB", icon: Database, level: 78, color: "primary" },
      { name: "API Integration", icon: Zap, level: 92, color: "secondary" },
      { name: "Git / GitHub", icon: Terminal, level: 95, color: "secondary" },
      { name: "Vercel / VS Code", icon: Terminal, level: 92, color: "secondary" },
      { name: "After Effects / DaVinci", icon: Palette, level: 70, color: "primary" },
      { name: "Fast API", icon: Code2, level: 89, color: "secondary" },
      { name: "Payment Integration" , icon: WalletCards , color:"secondary"},
    ]
  },
  {
    title: "AI / Data Tools",
    skills: [
      { name: "Gemini CLI", icon: Cpu, level: 85, color: "secondary" },
      { name: "CVAT / Labelbox", icon: Database, level: 75, color: "secondary" },
      { name: "Scale AI", icon: Cpu, level: 80, color: "primary" },
      { name: "Claude prompt engineer" , icon: Cpu, level:78,
        color:"secondary"},
      { name: "AI-model Trainer" , icon: Cpu, level:97,
        color:"secondary"},
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto mt-12 md:mt-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-space font-bold text-4xl text-textMain tracking-tight mb-4 uppercase">
          POWER-<span className="text-primary">UPS</span>
        </h2>
        <p className="text-textSecondary font-inter">Unlocked technologies and character proficiency levels.</p>
      </motion.div>

      <div className="space-y-16">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <div key={catIdx}>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="font-space font-bold text-xl text-primary mb-8 uppercase tracking-widest flex items-center gap-4"
            >
              <span className="h-[1px] w-8 bg-primary/30" />
              {category.title}
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (catIdx * 0.1) + (idx * 0.05) }}
                  viewport={{ once: true }}
                  className="hud-glass p-6 rounded-xl hover:border-primary/50 transition-all group relative overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <skill.icon size={20} className="text-primary group-hover:text-textSecondary transition-colors" />
                      <span className="font-space font-bold text-textMain text-xs uppercase tracking-wider">{skill.name}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-mono text-[9px] text-primary">XP: {skill.level}/100</span>
                    </div>
                  </div>
                  
                  <div className="h-3 bg-background/80 rounded-full overflow-hidden border border-white/5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      style={{ 
                        backgroundColor: `var(--${skill.color})`
                      }}
                      className="h-full rounded-full relative z-10"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
