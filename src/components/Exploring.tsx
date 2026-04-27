"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Smartphone, GraduationCap, CreditCard } from "lucide-react";

const EXPLORING_ITEMS = [
  {
    title: "AI Agent Workflows",
    description: "Designing autonomous multi-agent systems for complex task automation.",
    icon: Sparkles,
    status: "IN_PROGRESS",
    color: "primary"
  },
  {
    title: "React Native Mobile Apps",
    description: "Building cross-platform mobile experiences with a focus on high performance.",
    icon: Smartphone,
    status: "EXPERT",
    color: "secondary"
  },
  {
    title: "AI-Powered Learning Tools",
    description: "Creating intelligent assistants that adapt to individual student needs.",
    icon: GraduationCap,
    status: "EXPERIMENTING",
    color: "highlight"
  },
  {
    title: "Multi-provider Fintech APIs",
    description: "Integrating global payment gateways and financial data aggregators.",
    icon: CreditCard,
    status: "EXPERT",
    color: "primary"
  }
];

function Bitrate() {
  const [rate, setRate] = useState(48);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRate(Math.floor(Math.random() * (64 - 32 + 1)) + 32);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return <span>{rate} kb/s</span>;
}

const COLOR_MAP = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    bar: "bg-primary/40",
    glow: "bg-primary/5",
    glowHover: "group-hover:bg-primary/10",
    borderHover: "hover:border-primary/50"
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    bar: "bg-secondary/40",
    glow: "bg-secondary/5",
    glowHover: "group-hover:bg-secondary/10",
    borderHover: "hover:border-secondary/50"
  },
  highlight: {
    bg: "bg-highlight/10",
    border: "border-highlight/20",
    text: "text-highlight",
    bar: "bg-highlight/40",
    glow: "bg-highlight/5",
    glowHover: "group-hover:bg-highlight/10",
    borderHover: "hover:border-highlight/50"
  }
};

export default function Exploring() {
  return (
    <section id="exploring" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-space font-bold text-4xl text-offwhite tracking-tight mb-4 uppercase">
          SKILL_<span className="text-secondary">TREE</span>
        </h2>
        <p className="text-starlight font-inter tracking-wide uppercase text-xs flex items-center justify-center gap-2">
          <span>Scanning for new technologies...</span>
          <span className="font-mono text-secondary"><Bitrate /></span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {EXPLORING_ITEMS.map((item, idx) => {
          const colors = COLOR_MAP[item.color as keyof typeof COLOR_MAP];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`hud-glass p-6 rounded-2xl border border-white/5 ${colors.borderHover} transition-all group relative overflow-hidden flex flex-col h-full`}
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border} ${colors.text}`}>
                  <item.icon size={20} />
                </div>
                <span className={`font-mono text-[8px] px-2 py-0.5 rounded border border-white/10 ${colors.text}/80 tracking-tighter uppercase`}>
                  {item.status}
                </span>
              </div>

              <h3 className="font-space font-bold text-offwhite text-lg mb-3 leading-tight group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-starlight text-sm font-inter leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* Syncing Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[8px] font-mono text-starlight/50 uppercase tracking-tighter">
                  <span>Syncing_Data...</span>
                  <span>{25 + (idx * 5)}%</span>
                </div>
                <div className="h-1 bg-background/50 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${25 + (idx * 5)}%` }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                    className={`h-full ${colors.bar} rounded-full`}
                  />
                </div>
              </div>

              {/* Decorative background element */}
              <div className={`absolute -bottom-4 -right-4 w-16 h-16 ${colors.glow} rounded-full blur-2xl ${colors.glowHover} transition-all`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
