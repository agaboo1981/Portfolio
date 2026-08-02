"use client";

import { motion } from "framer-motion";
import { Gamepad2, Cpu, HardHat, Film } from "lucide-react";
import HobbyCard from "./HobbyCard";

const hobbies = [
  {
    title: "Strategic Systems & Gaming",
    description: "Analyzing game engine state machines, systemic mechanics, and high-level strategy in competitive RPG environments.",
    icon: Gamepad2,
    color: "text-slate-800",
  },
  {
    title: "AI Research & Model Tinkering",
    description: "Experimenting with local LLM fine-tuning, multi-agent orchestration loops, and small-scale automation scripts.",
    icon: Cpu,
    color: "text-slate-800",
  },
  {
    title: "Cinematic Arts & Analysis",
    description: "Studying visual storytelling, narrative structure, and cinematography across classic and contemporary cinema.",
    icon: Film,
    color: "text-slate-800",
  },
  {
    title: "Structural Mechanics & Engineering",
    description: "Applying load distribution, structural integrity, and computational physics from civil engineering to software architecture.",
    icon: HardHat,
    color: "text-slate-800",
  },
];

export default function FunHobbies() {
  return (
    <section id="fun" className="py-20 pt-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12 lg:mb-16"
      >
        <div className="flex items-center gap-2 mb-2 font-mono text-primary text-sm uppercase tracking-widest">
          <span className="w-8 h-[1px] bg-primary"></span>
          Personal Pursuits
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold text-slate-900">
          Beyond the <span className="text-primary">Code</span>
        </h2>
        <p className="mt-3 text-slate-600 font-inter text-sm max-w-xl">
          A collection of creative domains, analytical pursuits, and engineering disciplines that inform my problem-solving approach.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <HobbyCard {...hobby} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
