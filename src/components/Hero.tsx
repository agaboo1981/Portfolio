"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Hero — "The name as a monument".
 * The full name is set as one line fitted to the viewport width (inline SVG,
 * so it can never wrap at any width). Beneath it, the sentence and the single
 * action sit left while the portrait runs to the right and bottom edges.
 * On a phone the composition stacks: name, text, then the photograph as a
 * full-width band anchored to the bottom.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] flex-col overflow-hidden bg-background"
    >
      {/* Monument name — fitted edge to edge, never wraps */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="page-shell pt-3 sm:pt-5"
      >
        <h1 className="sr-only">JOSHUA ADESINA</h1>
        <svg
          viewBox="0 0 1200 108"
          className="block h-auto w-full text-ink"
          aria-hidden="true"
          focusable="false"
        >
          <text
            x="0"
            y="100"
            textLength="1200"
            lengthAdjust="spacingAndGlyphs"
            className="fill-current font-display font-bold"
            style={{ fontSize: "138px", letterSpacing: "-0.02em" }}
          >
            JOSHUA ADESINA
          </text>
        </svg>
      </motion.div>

      {/* Desktop composition: text left, portrait running to right + bottom edges */}
      <div className="flex min-h-0 flex-1 flex-col md:flex-row md:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="page-shell flex shrink-0 flex-col justify-start md:flex-1 md:justify-center"
        >
          <p className="max-w-[30ch] text-[16px] leading-[1.5] text-text sm:text-[19px]">
            I build web applications and AI tooling.
          </p>
          <p className="mt-2 max-w-[34ch] text-[14px] leading-[1.5] text-muted sm:text-[16px]">
            Backends in Python, frontends in TypeScript and React.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href="#work" className="btn-solid">
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center text-[16px] font-medium text-muted underline decoration-1 underline-offset-8 transition-colors duration-200 hover:text-ink"
            >
              Email me
            </a>
          </div>

          <p className="mt-9 text-[14px] text-muted">
            Lagos, Nigeria · Available for projects
          </p>
        </motion.div>

        {/* Portrait: right and bottom edges on desktop; full-width band on phone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="relative mt-8 h-[300px] w-full sm:mt-10
                     md:mt-0 md:h-auto md:w-[40%] md:max-w-[560px] md:self-stretch"
        >
          <div className="relative h-full w-full overflow-hidden md:pr-0">
            <Image
              src="/assets/joshua.jpg"
              alt="Joshua Adesina"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="motion-safe-shot grayscale-photo object-cover object-[center_38%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
