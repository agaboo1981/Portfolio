"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";

const INITIAL_MESSAGES = [
  { id: 1, sender: "bot", text: "Hello! I'm AGABOO, Joshua's AI Twin. Ask me anything about his work and skills!" },
];

const FAQ = [
  { q: "Who is Joshua?", a: "Joshua is a software developer dedicated to building high-performance web applications and interactive experiences. He bridges the gap between clean code and creative problem-solving." },
  { q: "What's his tech stack?", a: "He's a JS/TS specialist working with React/Next.js, Node.js, and MongoDB. He also builds mobile apps with React Native, Expo, and Flutter." },
  { q: "Any special abilities?", a: "He's highly proficient in API Integration, AI workflows (Gemini CLI), and creating fluid, game-like UI/UX with Framer Motion." },
  { q: "Tell me about the Predictor!", a: "Joshua led the development of the Collapse Risk Predictor, architecting and implementing 70% of the core machine learning model and prediction logic." },
];

function Message({ m }: { m: { id: number; sender: string; text: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={`flex items-start gap-3 ${m.sender === "user" ? "flex-row-reverse" : ""}`}
    >
      <div className={`p-3 rounded-2xl max-w-[85%] break-words relative overflow-hidden ${
        m.sender === "bot" 
          ? "bg-primary/10 text-offwhite border border-primary/20 rounded-tl-none" 
          : "bg-secondary/20 text-offwhite border border-secondary/20 rounded-tr-none"
      }`}>
        {m.sender === "bot" && (
          <motion.div
            animate={{ 
              x: ["-100%", "200%"],
              opacity: [0, 0.5, 0] 
            }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="absolute inset-0 bg-primary/20 -skew-x-12 pointer-events-none"
          />
        )}
        {m.text}
      </div>
    </motion.div>
  );
}

export default function About() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const handleQuestionClick = (question: string, answer: string) => {
    if (isTyping) return;
    
    setMessages(prev => [
      ...prev, 
      { id: Date.now(), sender: "user", text: question },
    ]);
    
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: answer }
      ]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto min-h-screen flex flex-col justify-center mt-12 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-space font-bold text-4xl text-offwhite tracking-tight">
            CHARACTER <span className="text-primary">BIO</span>
          </h2>
          <p className="text-starlight text-lg leading-relaxed font-inter">
            Joshua Adesina is a software developer crafting high-performance web systems with the precision of a structural engineer. 
          </p>
          <p className="text-starlight text-lg leading-relaxed font-inter">
            Bridging clean code and architectural logic, he builds software that is as sturdy as a bridge and as intuitive as a video game.
          </p>
        </motion.div>

        {/* AGABOO Chat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hud-glass rounded-2xl h-[500px] flex flex-col overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-primary/10 px-4 py-3 border-b border-primary/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <Bot size={18} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-space font-bold text-xs uppercase tracking-widest text-primary">AGABOO_INTERFACE v1.0</span>
                <span className="text-[8px] text-primary/50 font-mono">STATUS: ONLINE</span>
              </div>
            </div>
            {/* System Pulse */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 border border-green-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[7px] font-mono text-green-500">OPTIMIZED</span>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 font-inter text-sm scrollbar-hide scroll-smooth"
          >
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <Message key={m.id} m={m} />
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-primary/10 text-offwhite border border-primary/20 p-3 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Questions */}
          <div className="p-4 bg-background/50 border-t border-primary/10">
            <div className="flex flex-wrap gap-2">
              {FAQ.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(item.q, item.a)}
                  disabled={isTyping}
                  className="text-[10px] px-3 py-1 rounded-full border border-primary/30 text-primary/70 hover:bg-primary/10 hover:border-primary transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
