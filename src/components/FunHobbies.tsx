"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Cpu, HardHat, Trophy, Keyboard , Film, } from "lucide-react";
import { useState } from "react";
import HobbyCard from "./HobbyCard";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

const hobbies = [
  {
    title: "Gaming",
    description: "Conquering high-stakes raids in competitive RPGs.",
    icon: Gamepad2,
    color: "text-textSecondary",
  },
  {
    title: "AI Tinkering",
    description: "Training small models for obscure automation tasks.",
    icon: Cpu,
    color: "text-primary",
  },
  {
    title: "Movie Binge Sessions",
    description: "Watching classic films and discovering hidden gems.",
    icon: Film,
    color: "text-primary",
  },
  {
    title: "Structural Analysis",
    description: "Analysis of structure in my field of study which is civil engineering",
    icon: HardHat,
    color: "text-primary",
  },
];

export default function FunHobbies() {
  const [showSecret, setShowSecret] = useState(false);

  useKeyboardShortcut("PLAY", () => {
    setShowSecret(true);
    window.dispatchEvent(new CustomEvent("secretUnlocked", { detail: true }));
    setTimeout(() => {
      setShowSecret(false);
      window.dispatchEvent(new CustomEvent("secretUnlocked", { detail: false }));
    }, 3000);
  });

  return (
    <section id="fun" className="py-20 pt-32 lg:pt-20 px-6 lg:px-20 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 mb-2 font-mono text-textSecondary text-sm uppercase tracking-widest">
          <span className="w-8 h-[1px] bg-textSecondary"></span>
          Side Quests
        </div>
        <h2 className="text-4xl lg:text-5xl font-space font-bold text-textMain">
          Beyond the <span className="text-textSecondary">Code</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <HobbyCard {...hobby} />
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center font-mono text-textSecondary/40 text-xs flex items-center justify-center gap-2">
        <Keyboard size={12} className="text-textSecondary/50" />
        <span>[TIP: TYPE</span>
        <kbd className="px-1.5 py-0.5 rounded border border-primary/15 bg-primary/5 text-[10px]">P</kbd>
        <kbd className="px-1.5 py-0.5 rounded border border-primary/15 bg-primary/5 text-[10px]">L</kbd>
        <kbd className="px-1.5 py-0.5 rounded border border-primary/15 bg-primary/5 text-[10px]">A</kbd>
        <kbd className="px-1.5 py-0.5 rounded border border-primary/15 bg-primary/5 text-[10px]">Y</kbd>
        <span>TO UNLOCK THE SECRET LEVEL]</span>
      </p>

      {/* Secret Level Achievement */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed bottom-10 right-10 z-50 flex items-center gap-4 rounded-lg border-2 border-primary bg-background p-4"
          >
            <div className="rounded-full bg-primary p-2 text-background">
              <Trophy size={24} />
            </div>
            <div>
              <p className="font-space font-bold text-primary uppercase tracking-wider">
                Achievement Unlocked
              </p>
              <p className="text-sm text-textMain">The Secret Explorer</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
