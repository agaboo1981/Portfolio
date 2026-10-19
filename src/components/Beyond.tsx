"use client";

import { motion } from "framer-motion";

/**
 * Beyond the code — a narrow text column with the page's deliberate empty
 * field around it: what Joshua is exploring between contracts, and what
 * fills the off hours. The nav label carries the name; no heading theatrics.
 */
export default function Beyond() {
  return (
    <section id="beyond" className="page-shell mx-auto max-w-[1440px] pb-20 pt-4 lg:pb-28 lg:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[380px] lg:ml-[15%]"
      >
        <p className="text-[16px] font-medium leading-[1.6] text-ink">
          Between contracts I build whatever teaches me the most. Lately
          that&apos;s agent systems: how they fail in real use, what testing
          them costs, and when they&apos;re the wrong tool.
        </p>
        <ul className="mt-6 space-y-2 text-[16px] leading-[1.55] text-ink">
          <li>Fine-tuning evaluation for LLM products</li>
          <li>Retrieval that survives real documents</li>
          <li>Multi-agent loops that stay useful past step three</li>
        </ul>
        <p className="mt-6 text-[16px] leading-[1.6] text-ink">
          This year&apos;s recurring questions are above; the answers land in
          GitHub repos as they come.
        </p>
        <p className="mt-6 text-[16px] leading-[1.6] text-ink">
          Away from the editor: strategy games with actual systems in them,
          films watched like study material, and the structural mechanics
          behind how things stand up.
        </p>
      </motion.div>
    </section>
  );
}
