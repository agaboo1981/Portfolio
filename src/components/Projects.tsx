"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  what: string;
  built: string;
  stack: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "HIMAI",
    what: "An AI tutor for university subjects: explains material, saves what it finds, quizzes you.",
    built: "I designed the backend architecture and API, and built the core AI system logic. Deployed on Railway.",
    stack: "Python · API design · Railway",
    image: "/projects/himai.png",
    liveUrl: "https://www.himai.com.ng",
    githubUrl: "https://github.com/BAMZY0030/AI-project-",
  },
  {
    title: "Collapse Risk Predictor",
    what: "Scores the collapse risk of a construction project from its details.",
    built: "Wrote the Scikit-Learn risk model and built the Streamlit interface for our civil engineering capstone.",
    stack: "Python · Scikit-Learn · Streamlit",
    image: "/projects/collapse-risk-predictor.png",
    liveUrl: "https://group-5-fo6xokxhv776ojjceed5od.streamlit.app",
    githubUrl: "https://github.com/agaboo1981/CollapeRiskModel",
  },
  {
    title: "BlockCore",
    what: "A web3 platform for smart-contract interactions.",
    built: "Wrote the Solidity contracts and the wallet-connection flow, with real-time event listeners.",
    stack: "Solidity · Next.js · web3",
    image: "/projects/blockcore.png",
    liveUrl: "https://blockcore.vercel.app/",
    githubUrl: "https://github.com/agaboo1981/blockcore",
  },
  {
    title: "Vogue",
    what: "A fashion e-commerce storefront.",
    built: "Built the responsive Next.js front end with image optimisation and search indexing.",
    stack: "Next.js · Tailwind · Vercel",
    image: "/projects/vogue.png",
    liveUrl: "https://vogue-teal.vercel.app/",
    githubUrl: "https://github.com/agaboo1981/vogue",
  },
  {
    title: "Nexus",
    what: "A fintech interface with interactive yield calculators.",
    built: "Built the Next.js app with dynamic calculators and strict semantic HTML.",
    stack: "Next.js · Tailwind · Vercel",
    image: "/projects/nexus.png",
    liveUrl: "https://nexus-nu-navy.vercel.app/",
    githubUrl: "https://github.com/agaboo1981/nexus",
  },
  {
    title: "SALVAGE",
    what: "A lore site for an orbital extraction shooter.",
    built: "Built with React 19 and Vite: scroll-driven scenes, an automated SEO pipeline, and Playwright E2E tests.",
    stack: "React 19 · Vite · Playwright",
    image: "/projects/salvage.png",
    liveUrl: "https://gaming-ecru-phi.vercel.app/",
    githubUrl: "https://github.com/agaboo1981/gaming",
  },
  {
    title: "La Dolce Vita",
    what: "An Italian e-commerce catalogue.",
    built: "Built the Next.js catalogue with optimised image loading and accessible product pages.",
    stack: "Next.js · Tailwind · Vercel",
    image: "/projects/la-dolce-vita.png",
    liveUrl: "https://ladolcevita-seven.vercel.app/",
    githubUrl: "https://github.com/agaboo1981/ladolcevita",
  },
];

/**
 * Selected work — an editorial index.
 * Rows of plain text on the shared grid; on a hover-capable screen the
 * project's real screenshot rises and follows the cursor. On phones the
 * screenshot sits inline in the row. No numbering, no table chrome.
 */
export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 220, damping: 26, mass: 0.6 });
  const py = useSpring(my, { stiffness: 220, damping: 26, mass: 0.6 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section id="work" className="page-shell mx-auto max-w-[1440px] pb-20 pt-16 sm:pt-24 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 sm:mb-16"
      >
        <h2 className="font-display text-[34px] font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[44px] lg:text-[58px]">
          Selected work
        </h2>
        <p className="mt-3 text-[16px] text-muted">
          Seven projects, shipped. Hover a row to see it.
        </p>
      </motion.div>

      {/* Desktop: rows + cursor-following preview */}
      <div
        ref={listRef}
        onMouseMove={handleMove}
        className="relative hidden lg:block"
      >
        {/* The floating preview: one layer with every screenshot stacked */}
        <motion.div
          style={reduced ? undefined : { x: px, y: py }}
          className="pointer-events-none absolute left-0 top-0 z-20"
        >
          <div className="relative translate-x-6 -translate-y-1/2">
            <motion.div
              animate={
                hovered === null
                  ? { opacity: 0, scale: 0.96 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative h-[290px] w-[430px] overflow-hidden bg-surface"
            >
              {projects.map((p, i) => (
                <Image
                  key={p.title}
                  src={p.image}
                  alt=""
                  fill
                  sizes="430px"
                  className={`object-cover object-top transition-opacity duration-200 ${
                    i === hovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.25), ease: "easeOut" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`relative grid grid-cols-12 items-baseline gap-x-6 px-4 py-7 transition-colors duration-200 ${
              hovered === i ? "bg-surface" : i % 2 === 1 ? "bg-surface/60" : "bg-transparent"
            }`}
          >
            <h3 className="col-span-4 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] text-ink">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                {project.title}
                <span aria-hidden="true" className="ml-2 inline-block text-muted transition-transform duration-200 group-hover:translate-x-1 hover:translate-x-1">
                  ↗
                </span>
              </a>
            </h3>
            <div className="col-span-5">
              <p className="text-[16px] text-text">{project.what}</p>
              <p className="mt-1 max-w-[60ch] text-[16px] leading-[1.5] text-text">{project.built}</p>
            </div>
            <p className="col-span-2 text-[14px] leading-[1.6] text-muted">{project.stack}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 justify-self-end text-[14px] font-medium text-muted hover:text-ink"
            >
              Source ↗
            </a>
          </motion.article>
        ))}
      </div>

      {/* Tablet + phone: same rows, screenshots inline */}
      <div className="lg:hidden">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.2), ease: "easeOut" }}
            className="pb-10"
          >
            <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden bg-surface">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
            <h3 className="font-display text-[28px] font-bold leading-tight tracking-[-0.02em] text-ink">
              {project.title}
            </h3>
            <p className="mt-1 max-w-[60ch] text-[16px] text-text">{project.what}</p>
            <p className="mt-1 max-w-[60ch] text-[16px] leading-[1.5] text-text">{project.built}</p>
            <p className="mt-2 text-[14px] text-muted">{project.stack}</p>
            <div className="mt-4 flex items-center gap-5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-[16px] font-medium text-ink underline decoration-1 underline-offset-4"
                >
                  Live site ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-[16px] text-muted underline decoration-1 underline-offset-4 hover:text-ink"
                >
                  Source ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
