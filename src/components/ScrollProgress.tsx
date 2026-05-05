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
        className="h-full bg-primary origin-left relative"
        style={{ scaleX }}
      />
    </div>
  );
}
