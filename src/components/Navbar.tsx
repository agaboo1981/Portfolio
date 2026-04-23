"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ScrollProgress from "./ScrollProgress";

const NAV_LINKS = [
  { href: "#hero", label: "Start" },
  { href: "#about", label: "Bio" },
  { href: "#skills", label: "Skills" },
  { href: "#exploring", label: "Armory" },
  { href: "#projects", label: "Quests" },
  { href: "#fun", label: "Side Quest" },
  { href: "#contact", label: "Contact", special: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto max-w-fit">
        <div className="hud-glass px-4 sm:px-6 py-2 rounded-full flex flex-col gap-1 items-center overflow-hidden">
          {/* Desktop Nav */}
          <div className="hidden sm:flex gap-6 items-center text-xs font-space font-medium tracking-widest uppercase">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors whitespace-nowrap ${
                  link.special ? "text-secondary" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Nav Header */}
          <div className="flex sm:hidden w-full items-center justify-between gap-8 px-2">
            <span className="font-space font-bold text-[10px] text-primary tracking-widest uppercase">
              Menu
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Scroll Progress integrated into HUD */}
          <div className="w-full mt-1 px-2">
            <ScrollProgress />
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-16 left-0 right-0 sm:hidden hud-glass rounded-2xl overflow-hidden p-4"
            >
              <div className="flex flex-col gap-4 items-center">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-space font-medium tracking-widest uppercase ${
                      link.special ? "text-secondary" : "text-offwhite"
                    } hover:text-primary transition-colors`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
