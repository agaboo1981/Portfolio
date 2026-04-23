"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Hud() {
  const [isSecretUnlocked, setIsSecretUnlocked] = useState(false);

  useEffect(() => {
    const handleSecretUnlocked = (event: Event) => {
      const customEvent = event as CustomEvent;
      setIsSecretUnlocked(customEvent.detail);
    };

    window.addEventListener("secretUnlocked", handleSecretUnlocked);
    return () => window.removeEventListener("secretUnlocked", handleSecretUnlocked);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Global Glitch Effect when Secret Unlocked */}
      <AnimatePresence>
        {isSecretUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.8, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, repeat: 4 }}
            className="absolute inset-0 bg-primary/10 mix-blend-overlay z-[100]"
          >
            <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uWUicGv5K/giphy.gif')] opacity-10 bg-cover mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary font-mono text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.2em] sm:tracking-[0.5em] md:tracking-[1em] animate-pulse text-center w-full px-4">
              [ ACCESSING_HIDDEN_DATA ]
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD Corner Elements - Hidden on mobile to prevent collision */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/60 tracking-tighter hidden md:block">
        {isSecretUnlocked ? "[SECRET_LEVEL: UNLOCKED]" : "[SYSTEM_STATUS: ONLINE]"}
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-primary/60 tracking-tighter hidden md:block">
        [UPTIME: 25y_4m_2d]
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary/60 tracking-tighter vertical-text hidden md:block">
        [CONNECTING...]
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/60 tracking-tighter hidden md:block">
        [VERSION: 2.0.26]
      </div>
    </div>
  );
}
