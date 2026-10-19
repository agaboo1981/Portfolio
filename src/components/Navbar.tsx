"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="page-shell mx-auto flex h-14 max-w-[1440px] items-center justify-between">
        <a
          href="#top"
          className="font-display text-[16px] font-medium tracking-tight text-ink"
        >
          Joshua Adesina
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] text-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-solid !min-h-[38px] !px-4 !text-[14px]"
          >
            Email me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-11 min-w-[44px] items-center justify-center text-ink md:hidden"
        >
          <span className="text-[16px] font-medium">{isOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            aria-label="Mobile"
            className="bg-background px-5 pb-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] md:hidden" /* taste-skill-ignore: shadow on a floating menu, allowed */
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="min-h-[48px] py-3 text-[16px] text-text"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-solid mt-4 w-full"
              >
                Email me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
