"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Skill = { name: string; desc: string };

const GROUPS: { name: string; summary: string; skills: Skill[] }[] = [
  {
    name: "Languages",
    summary:
      "TypeScript and Python are the daily pair; C++ and Java from university years.",
    skills: [
      { name: "JavaScript", desc: "The first language, still the fastest path from idea to working page." },
      { name: "TypeScript", desc: "Default choice for anything with more than one developer or one deploy." },
      { name: "Python", desc: "Backends, ML pipelines, and automation scripts." },
      { name: "C++", desc: "From university coursework and the structural-mechanics side." },
      { name: "Java", desc: "Coursework and Android-era projects." },
      { name: "HTML & CSS", desc: "Fluently. Most of this page is set by hand." },
    ],
  },
  {
    name: "Frameworks & tools",
    summary:
      "Most work lately ships as a Next.js front end on Vercel behind a FastAPI service.",
    skills: [
      { name: "React / Next.js", desc: "The front end of everything in the work section." },
      { name: "Node.js", desc: "APIs and tooling when the happens-to-be-JavaScript layer suits." },
      { name: "FastAPI", desc: "Serving ML models and product APIs in Python." },
      { name: "PostgreSQL", desc: "The default database; comfortable with schema design and migrations." },
      { name: "MongoDB", desc: "Used on product projects where the data is document-shaped." },
      { name: "Tailwind CSS", desc: "Design tokens and layout on every recent front end." },
      { name: "Docker", desc: "Packaging services so deploys don't depend on my laptop." },
      { name: "Git & GitHub", desc: "Trunk-based, small PRs, review-ready commits." },
      { name: "Vercel", desc: "Hosting and preview deploys for the front ends." },
    ],
  },
  {
    name: "AI & data",
    summary:
      "Applied work: production LLM integration, evaluation, and where it fails.",
    skills: [
      { name: "LLM APIs", desc: "OpenAI, Gemini, Groq: streaming, function calling, cost control." },
      { name: "LangChain", desc: "Orchestrating retrieval and tool use in the HIMAI backend." },
      { name: "Ollama", desc: "Local models for private data and fast iteration." },
      { name: "PyTorch", desc: "Training small models; reading paper code without fear." },
      { name: "Scikit-Learn", desc: "The Collapse Risk pipeline (ensemble classifiers, 92% recall)." },
      { name: "Hugging Face", desc: "Models, datasets, and fine-tuning experiments." },
      { name: "n8n", desc: "Wiring agents and services into automations." },
    ],
  },
];

/**
 * Skills — pure text at one size. Three columns of capability names; on a
 * hover-capable screen the hovered name's one-line description appears in the
 * deliberately empty right-hand columns. On a phone the stacks close with a
 * summary sentence.
 */
export default function Skills() {
  const [active, setActive] = useState<Skill | null>(null);

  return (
    <section id="skills" className="page-shell mx-auto max-w-[1440px] pb-20 pt-12 lg:pb-28 lg:pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[28px] font-bold tracking-[-0.02em] text-ink"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3 max-w-[42ch] text-[16px] text-muted"
      >
        What I use for real work. Depth: TypeScript, Python, React and Next.js,
        Node, Postgres.
      </motion.p>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-12 lg:mt-24">
        {GROUPS.map((group, gi) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.05 + gi * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="sm:col-span-3"
          >
            <h3 className="text-[16px] font-medium text-ink">{group.name}</h3>
            <ul className="mt-4 space-y-0.5">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  onMouseEnter={() => setActive(skill)}
                  onMouseLeave={() => setActive(null)}
                  className="cursor-default text-[16px] leading-[1.35] text-muted transition-colors duration-150 hover:text-ink"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[52ch] text-[14px] leading-[1.55] text-muted lg:hidden">
              {group.summary}
            </p>
          </motion.div>
        ))}

        {/* Description zone: the empty right-hand columns on desktop */}
        <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
          <div className="sticky top-24 min-h-[1.35em]">
            {active && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-[16px] leading-[1.5] text-text"
              >
                {active.desc}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
