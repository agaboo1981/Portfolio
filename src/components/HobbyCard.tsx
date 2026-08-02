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
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-xl bg-slate-100/90 text-slate-800 transition-transform duration-300 group-hover:scale-105 ${color}`}>
            <Icon size={24} />
          </div>
          <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            PERSPECTIVE
          </span>
        </div>

        <div>
          <h3 className="font-space text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-inter leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>DOMAIN // INTEREST</span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors" />
      </div>
    </motion.div>
  );
}
