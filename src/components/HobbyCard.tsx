"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HobbyCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export default function HobbyCard({ title, description, icon: Icon, color }: HobbyCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="group relative flex flex-col items-center gap-4 rounded-xl hud-glass p-6 transition-all hover:border-primary/50 hover:bg-primary/5"
    >
      <div className={`rounded-full p-4 transition-transform group-hover:scale-110 ${color}`}>
        <Icon size={32} />
      </div>
      <div className="text-center">
        <h3 className="font-space text-lg font-bold text-textMain">{title}</h3>
        <p className="mt-2 text-sm text-textSecondary">{description}</p>
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-white/10 group-hover:border-primary/50" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/10 group-hover:border-primary/50" />
    </motion.div>
  );
}
