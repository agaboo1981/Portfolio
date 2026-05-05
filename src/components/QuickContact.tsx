"use client";

import { motion } from "framer-motion";
import { Mail, Twitter, ExternalLink } from "lucide-react";

export default function QuickContact() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="hud-glass p-8 rounded-3xl border-textSecondary/30 relative overflow-hidden group"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left">
            <h2 className="font-space font-bold text-2xl text-textMain mb-2 uppercase tracking-tight">
              Quick <span className="text-textSecondary">Contact</span>
            </h2>
            <p className="text-textSecondary text-sm font-inter max-w-sm">
              Ready to start a new quest? Reach out directly via email or X (Twitter) for collaborations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto overflow-hidden">
            <a 
              href="mailto:giganticjosha@gmail.com"
              className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all group/link w-full sm:w-auto"
            >
              <Mail size={18} className="text-primary shrink-0" />
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-[10px] font-mono text-textSecondary/50 uppercase">Email_Direct</span>
                <span className="text-sm font-space font-bold text-textMain group-hover/link:text-primary transition-colors truncate w-full">giganticjosha@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://x.com/Agaboo07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all group/link w-full sm:w-auto"
            >
              <Twitter size={18} className="text-primary shrink-0" />
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-[10px] font-mono text-textSecondary/50 uppercase">Follow_X</span>
                <span className="text-sm font-space font-bold text-textMain group-hover/link:text-primary transition-colors truncate w-full">@Agaboo07</span>
              </div>
              <ExternalLink size={12} className="text-textSecondary/30 ml-2 shrink-0" />
            </a>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-textSecondary/20 rounded-bl-3xl" />
      </motion.div>
    </section>
  );
}
