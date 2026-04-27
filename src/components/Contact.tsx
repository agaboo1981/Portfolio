"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Trophy, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setError(false);

    // Get EmailJS credentials from environment variables
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Validate that credentials are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || 
        SERVICE_ID === 'YOUR_SERVICE_ID' || 
        TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.error("EmailJS is not configured. Please add your credentials to .env.local");
      setError(true);
      setIsSending(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSent(true);
        setIsSending(false);
        formRef.current?.reset();
        // Hide success message after 5 seconds
        setTimeout(() => setIsSent(false), 5000);
      }, (err) => {
        console.error("EMAILJS ERROR:", err);
        setError(true);
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 pt-32 lg:pt-20 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-highlight text-sm uppercase tracking-widest">
            <span className="w-8 h-[1px] bg-highlight"></span>
            Save Point
          </div>
          <h2 className="text-4xl lg:text-5xl font-space font-bold text-offwhite mb-6">
            Ready to <span className="text-highlight">Team Up?</span>
          </h2>
          <p className="text-starlight text-lg mb-8 max-w-md">
            Whether you have a boss-level project or just want to chat about code and gaming, 
            my inbox is always open. Save your progress and send a message!
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:giganticjosha@gmail.com" 
              className="flex items-center gap-4 text-starlight hover:text-primary transition-all cursor-pointer group w-fit"
            >
              <div className="h-10 w-10 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:shadow-cyan transition-all">
                <span className="font-mono text-primary group-hover:scale-110 transition-transform">@</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-starlight/40 uppercase tracking-tighter">Email_Direct</span>
                <span className="font-space font-bold group-hover:translate-x-1 transition-transform tracking-tight">giganticjosha@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://x.com/Agabo07" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-starlight hover:text-secondary transition-all cursor-pointer group w-fit"
            >
              <div className="h-10 w-10 rounded-lg border border-secondary/20 bg-secondary/5 flex items-center justify-center group-hover:shadow-pink transition-all">
                <svg 
                  viewBox="0 0 24 24" 
                  aria-hidden="true" 
                  className="h-5 w-5 fill-secondary group-hover:scale-110 transition-transform"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-starlight/40 uppercase tracking-tighter">Follow_X</span>
                <span className="font-space font-bold group-hover:translate-x-1 transition-transform tracking-tight">@Agabo07</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl hud-glass p-8"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase text-starlight ml-1">Hero Name</label>
              <input
                required
                name="user_name"
                type="text"
                placeholder="How should I call you?"
                className="w-full terminal-input placeholder:text-starlight/30"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase text-starlight ml-1">Comm Channel (Email)</label>
              <input
                required
                name="user_email"
                type="email"
                placeholder="Where should I reply?"
                className="w-full terminal-input placeholder:text-starlight/30"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase text-starlight ml-1">The Quest Details (Message)</label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="What's the objective?"
                className="w-full terminal-input placeholder:text-starlight/30 resize-none"
              />
            </div>

            <button
              disabled={isSending}
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <span>UPLOADING_DATA...</span>
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>
            
            {error && (
              <p className="text-center font-mono text-[10px] text-secondary mt-2 uppercase tracking-widest animate-pulse">
                Error: Connection_Failed. Please try again.
              </p>
            )}
          </form>

          {/* Achievement Notification */}
          <AnimatePresence>
            {isSent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center bg-background/90 rounded-2xl z-10"
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-highlight flex items-center justify-center text-background shadow-yellow animate-bounce">
                    <Trophy size={32} />
                  </div>
                  <h3 className="font-space font-bold text-2xl text-highlight uppercase tracking-wider">
                    Message Sent!
                  </h3>
                  <p className="text-starlight font-mono text-sm">Achievement Unlocked: Communication Master</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="text-primary text-xs uppercase font-bold tracking-widest hover:underline"
                  >
                    Send another?
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
