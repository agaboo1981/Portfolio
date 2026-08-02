"use client";

import { motion } from "framer-motion";
import { Sparkles, Smartphone, GraduationCap, CreditCard } from "lucide-react";

const EXPLORING_ITEMS = [
  {
    title: "AI Agent Workflows",
    description: "Designing autonomous multi-agent systems for complex task automation.",
    icon: Sparkles,
    status: "ACTIVE R&D",
    color: "primary"
  },
  {
    title: "React Native Mobile Apps",
    description: "Building cross-platform mobile experiences with a focus on high performance.",
    icon: Smartphone,
    status: "PRODUCTION READY",
    color: "secondary"
  },
  {
    title: "AI-Powered Learning Tools",
    description: "Creating intelligent assistants that adapt to individual student needs.",
    icon: GraduationCap,
    status: "R&D FOCUS",
    color: "secondary"
  },
  {
    title: "Multi-provider Fintech APIs",
    description: "Integrating global payment gateways and financial data aggregators.",
    icon: CreditCard,
    status: "PRODUCTION READY",
    color: "primary"
  }
];

const COLOR_MAP = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    bar: "bg-primary/40",
    borderHover: "hover:border-primary/50"
  },
  secondary: {
    bg: "bg-textSecondary/10",
    border: "border-textSecondary/20",
    text: "text-textSecondary",
    bar: "bg-textSecondary/40",
    borderHover: "hover:border-textSecondary/50"
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
        <h2 className="font-space font-bold text-4xl text-textMain tracking-tight mb-4 uppercase">
          SPECIALIZATION & <span className="text-textSecondary">RESEARCH</span>
        </h2>
        <p className="text-textSecondary font-inter tracking-wide text-xs uppercase flex items-center justify-center gap-2">
          <span>Actively expanding capabilities across emerging domain architectures</span>
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
              className={`hud-glass p-6 rounded-2xl border border-primary/10 ${colors.borderHover} transition-all group relative overflow-hidden flex flex-col h-full`}
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border} ${colors.text}`}>
                  <item.icon size={20} />
                </div>
                <span className={`font-mono text-[8px] px-2 py-0.5 rounded border border-primary/15 ${colors.text}/80 tracking-tighter uppercase`}>
                  {item.status}
                </span>
              </div>

              <h3 className="font-space font-bold text-textMain text-lg mb-3 leading-tight group-hover:text-textSecondary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-textSecondary text-sm font-inter leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* Competency Depth Indicator */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[8px] font-mono text-textSecondary/50 uppercase tracking-tighter">
                  <span>Domain_Focus</span>
                  <span>{85 + (idx * 3)}%</span>
                </div>
                <div className="h-1 bg-background/50 rounded-full overflow-hidden border border-primary/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${85 + (idx * 3)}%` }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`h-full ${colors.bar} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
