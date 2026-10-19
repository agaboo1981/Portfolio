"use client";

import { motion } from "framer-motion";

/**
 * Contact — 100svh in the inverse palette. The email address is the display
 * type: one line fitted to the width on desktop, broken after the @ on a
 * phone. No form.
 */
export default function Contact() {
  const email = "giganticjosha@gmail.com";

  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] flex-col justify-between bg-inverse px-5 pb-6 pt-16 text-inverse-text sm:px-8 sm:pt-20 md:px-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[16em] text-[19px] leading-[1.45]"
      >
        Write a few lines about what you&apos;re building. I read everything.
      </motion.p>

      {/* The email as display type */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 sm:mb-14"
      >
        {/* Phone: break after the @ */}
        <a
          href={`mailto:${email}`}
          className="block text-[12.5vw] font-medium leading-[0.98] tracking-[-0.03em] text-inverse-text transition-colors duration-200 hover:text-inverse-muted md:hidden"
        >
          giganticjosha
          <br />
          @gmail.com
        </a>

        {/* Desktop: one line, fitted edge to edge */}
        <a href={`mailto:${email}`} aria-label={`Email ${email}`} className="hidden md:block">
          <svg
            viewBox="0 0 1200 112"
            className="block h-auto w-full text-inverse-text transition-colors duration-200 hover:text-inverse-muted"
            aria-hidden="true"
            focusable="false"
          >
            <text
              x="0"
              y="100"
              textLength="1200"
              lengthAdjust="spacingAndGlyphs"
              className="fill-current font-display font-medium"
              style={{ fontSize: "132px", letterSpacing: "-0.03em" }}
            >
              giganticjosha@gmail.com
            </text>
          </svg>
        </a>
      </motion.div>

      {/* Bottom corners */}
      <div className="flex flex-col gap-4 text-[14px] text-inverse-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Lagos, Nigeria · replies within two days</p>
        <div className="flex items-center gap-6">
          <a
            href="https://x.com/Agabo07"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-inverse-text"
          >
            X ↗
          </a>
          <a
            href="https://github.com/agaboo1981"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-inverse-text"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/joshua-adesina"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-inverse-text"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
