"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const nexus = {
  title: "Nexus",
  what: "A fintech interface with interactive yield calculators.",
  built:
    "I built the Next.js application, the calculator interactions, and the semantic HTML structure.",
  stack: "Next.js · Tailwind · Vercel",
  image: "/projects/nexus.png",
  liveUrl: "https://nexus-nu-navy.vercel.app/",
  githubUrl: "https://github.com/agaboo1981/nexus",
};

/**
 * First screen — the name as a monument, and real shipped work before any scroll.
 * Nexus is the featured case study: a dominant screenshot with a short, honest write-up.
 */
export default function CaseStudy() {
  return (
    <section
      id="work"
      className="relative flex h-[100svh] flex-col overflow-hidden bg-background"
    >
      {/* Monument name — fitted edge to edge, never wraps */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="page-shell pt-3 sm:pt-5"
      >
        <h1 className="sr-only">Joshua Adesina</h1>
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

      {/* Case study: write-up left, screenshot right (stacked on phones) */}
      <div className="flex min-h-0 flex-1 flex-col md:flex-row md:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="page-shell flex shrink-0 flex-col justify-center py-5 md:w-[42%] md:max-w-[560px] md:py-0"
        >
          <h2 className="font-display text-[clamp(34px,5.8vw,58px)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            {nexus.title}
          </h2>
          <p className="mt-3 max-w-[34ch] text-[16px] leading-[1.5] text-text sm:text-[19px] sm:max-w-[28ch]">
            {nexus.what}
          </p>
          <p className="mt-2 max-w-[40ch] text-[14px] leading-[1.55] text-text sm:text-[16px]">
            {nexus.built}
          </p>
          <p className="mt-4 text-[14px] text-muted">{nexus.stack}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={nexus.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid"
            >
              Live site
            </a>
            <a
              href={nexus.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center text-[16px] font-medium text-muted underline decoration-1 underline-offset-8 transition-colors duration-200 hover:text-ink"
            >
              Source
            </a>
          </div>
        </motion.div>

        {/* Screenshot: dominant, real work visible before scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.9, ease: "easeOut" }}
          className="relative min-h-0 flex-1 md:h-auto md:self-stretch"
        >
          <div className="relative h-full min-h-[32vh] w-full overflow-hidden bg-surface md:min-h-0">
            <Image
              src={nexus.image}
              alt="Nexus interface showing interactive yield calculators"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="motion-safe-shot object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
