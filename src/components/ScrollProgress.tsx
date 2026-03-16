"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary origin-left shadow-[0_0_15px_#00F5FF] relative"
        style={{ scaleX }}
      >
        {/* Animated Glow Tip */}
        <motion.div 
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute right-0 top-0 bottom-0 w-4 bg-white blur-sm"
        />
      </motion.div>
    </div>
  );
}
