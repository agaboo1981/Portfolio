"use client";

import {  Github, Linkedin, ChevronUp } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-background px-6 py-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Branding & Witty Remark */}
        <div className="text-center md:text-left">
          <h3 className="font-space text-xl font-bold text-offwhite uppercase tracking-tighter">
            Joshua <span className="text-primary">Adesina</span>
          </h3>
          <p className="mt-2 text-sm text-starlight max-w-xs">
            Built with Next.js 15, Framer Motion, and a lot of caffeine. 
            No pixels were harmed in the making of this quest log.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://x.com/Agabo07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-starlight transition-all hover:text-primary hover:scale-110"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://github.com/agaboo1981"
            target="_blank"
            rel="noopener noreferrer"
            className="text-starlight transition-all hover:text-secondary hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/joshua-adesina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-starlight transition-all hover:text-highlight hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2 font-mono text-[10px] text-starlight uppercase tracking-widest transition-colors hover:text-primary"
        >
          <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-primary group-hover:shadow-cyan">
            <ChevronUp size={20} />
          </div>
          <span>Return to Start</span>
        </button>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span className="font-mono text-[8px] text-primary/60 uppercase tracking-widest">System_Status: Optimized</span>
        </div>
        <div className="text-center font-mono text-[10px] text-starlight/20 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Joshua Adesina • All rights reserved • [VERSION: 2.0.27]
        </div>
      </div>
    </footer>
  );
}
