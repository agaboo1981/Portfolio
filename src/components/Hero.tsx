"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useState, useEffect } from "react";

function UfoInteraction({ onAvatarReveal }: { onAvatarReveal: () => void }) {
  const [stage, setStage] = useState<"entering" | "beaming" | "chatting" | "exiting" | "gone">("entering");

  useEffect(() => {
    const sequence = async () => {
      // 1. Enter and hover (tightened from 1.5s to 0.8s)
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStage("beaming");
      
      // 2. Beam down and reveal avatar
      await new Promise((resolve) => setTimeout(resolve, 600));
      onAvatarReveal();
      
      // 3. Chat bubble (tightened from 1s to 0.5s)
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStage("chatting");
      
      // 4. Fly away
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setStage("exiting");
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStage("gone");
    };
    sequence();
  }, [onAvatarReveal]);

  if (stage === "gone") return null;

  return (
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-48 h-48 z-50 pointer-events-none">
      {/* UFO Body */}
      <motion.div
        initial={{ y: -200, x: 200, opacity: 0, scale: 0.5 }}
        animate={
          stage === "exiting"
            ? { y: -500, x: -500, opacity: 0, scale: 0.2, rotate: -20 }
            : { 
                y: stage === "chatting" ? [0, -8, 2, -5, 0] : [0, -10, 0], 
                x: 0, 
                opacity: 1, 
                scale: 1,
                transition: {
                  y: { 
                    repeat: stage === "chatting" ? 0 : Infinity, 
                    duration: stage === "chatting" ? 2 : 2, 
                    ease: "easeInOut" 
                  },
                  opacity: { duration: 0.5 },
                  x: { duration: 0.8, ease: "easeOut" },
                }
              }
        }
        className="relative"
      >
        <svg viewBox="0 0 100 60" className="w-full h-auto drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]">
          {/* Glass Dome */}
          <path d="M30 30 Q 50 5 70 30" fill="#00F5FF" fillOpacity="0.3" stroke="#00F5FF" strokeWidth="1" />
          {/* Main Body */}
          <path d="M10 35 Q 50 15 90 35 Q 50 55 10 35" fill="#1A1A1A" stroke="#00F5FF" strokeWidth="1.5" />
          {/* Bottom Rim */}
          <path d="M15 37 Q 50 50 85 37" fill="none" stroke="#00F5FF" strokeWidth="0.5" opacity="0.5" />
          {/* Pulsing Lights */}
          {[25, 40, 50, 60, 75].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={35 + (i % 2 === 0 ? 5 : 8)}
              r="1.5"
              fill="#FF2DAA"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
            />
          ))}
        </svg>

        {/* Chat Bubble */}
        {stage === "chatting" && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-lg font-mono text-[10px] shadow-[0_0_20px_rgba(0,245,255,0.4)] border border-primary/50 whitespace-nowrap backdrop-blur-sm"
          >
            <span className="text-secondary mr-2">{">"}</span>
            PLAYER_1 IDENTIFIED
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/90 rotate-45 border-r border-b border-primary/50" />
          </motion.div>
        )}

        {/* Source Glow at UFO Base */}
        {stage === "beaming" && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-primary/60 blur-md rounded-full"
          />
        )}
      </motion.div>

      {/* Light Beam */}
      {stage === "beaming" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: [0, 0.6, 0.4], height: 320 }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-[45px] left-1/2 -translate-x-1/2 w-40 origin-top bg-gradient-to-b from-primary/60 via-primary/20 to-transparent clip-path-beam"
          style={{
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {/* Beam Particles (Stable distribution) */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: 320, 
                  opacity: [0, 1, 1, 0],
                  x: [0, (i % 2 === 0 ? 10 : -10), 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5 + (i * 0.1), 
                  delay: i * 0.15,
                  ease: "linear"
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{ left: `${(i * 8.33)}%` }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function Avatar() {
  const [hasError, setHasError] = useState(false);
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative w-40 h-40 md:w-64 md:h-64 shrink-0 mb-8 md:mb-0">
      {/* Interaction Component */}
      <UfoInteraction onAvatarReveal={() => setRevealed(true)} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={revealed ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
        
        {/* Landing Glow on Avatar */}
        {!revealed && (
          <motion.div
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute inset-0 bg-primary/30 rounded-full blur-xl z-0"
          />
        )}

        {/* Rank Badge */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={revealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-2 -right-2 z-20 bg-secondary px-2 py-1 rounded text-[10px] font-bold text-white shadow-pink border border-white/20"
        >
          S-TIER
        </motion.div>

        <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden hud-glass flex items-center justify-center">
          {!hasError ? (
            <>
              <img
                src="/assets/avatar.png"
                alt="Joshua Adesina"
                className="w-full h-full object-cover"
                onError={() => setHasError(true)}
              />
              {/* Scanning Line */}
              <motion.div 
                animate={{ 
                  top: ["-10%", "110%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute left-0 right-0 h-[2px] bg-primary/60 shadow-[0_0_15px_rgba(0,245,255,0.8)] z-10 pointer-events-none"
              />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-primary/40">
              <User size={80} strokeWidth={1} />
              <span className="text-[10px] font-mono mt-2 uppercase tracking-tighter">Avatar_Not_Loaded</span>
            </div>
          )}
        </div>
        {/* Decorative rings */}
        <div className="absolute -inset-2 md:-inset-4 border border-secondary/30 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
        <div className="absolute -inset-4 md:-inset-8 border border-primary/20 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 z-10">
        <Avatar />

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary mb-2 text-sm uppercase tracking-widest"
          >
            &gt; Loading Player_1...
          </motion.p>
          
          <h1 className="font-space font-bold text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tighter text-offwhite overflow-visible">
            <motion.span
              whileHover={{ 
                skewX: [0, -20, 20, -10, 0],
                x: [0, -2, 2, -1, 0],
                textShadow: [
                  "0 0 0px #00F5FF",
                  "2px 0 5px #FF2DAA",
                  "-2px 0 5px #00F5FF",
                  "0 0 0px #00F5FF"
                ],
                transition: { duration: 0.3, repeat: 0 } 
              }}
              className="inline-block hover:text-secondary transition-colors cursor-default"
            >
              JOSHUA <span className="text-primary">ADESINA</span>
            </motion.span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-inter text-lg md:text-xl lg:text-2xl text-starlight max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            Software developer dedicated to building high-performance web applications and interactive experiences. 
            I specialize in crafting clean code with <span className="text-secondary italic">JavaScript and TypeScript</span>, 
            leveraging modern AI workflows to solve complex problems.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a href="#projects" className="btn-primary">
              Start Quest
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a href="#about" className="btn-ghost">
              View Bio
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-10 hidden md:block"
      >
        <div className="font-mono text-[10px] text-starlight space-y-1">
          <Typewriter text="LVL: 25" delay={1.2} />
          <Typewriter text="CLASS: FULL-STACK ENGINEER" delay={1.4} />
          <Typewriter text="COFFEE_INTAKE: 85%" delay={1.6} />
        </div>
      </motion.div>

      {/* Hero Bottom Border Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary/30 z-20 shadow-[0_-2px_10px_rgba(0,245,255,0.2)]" />
    </section>
  );
}

function Typewriter({ text, delay }: { text: string; delay: number }) {
  const characters = text.split("");
  return (
    <div className="flex">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, display: "none" }}
          animate={{ opacity: 1, display: "inline-block" }}
          transition={{
            delay: delay + i * 0.05,
            duration: 0.01,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          delay: delay + characters.length * 0.05,
          duration: 0.8,
          repeat: Infinity,
        }}
        className="ml-0.5 w-1 h-3 bg-primary inline-block self-center"
      />
    </div>
  );
}

