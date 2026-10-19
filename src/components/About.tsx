"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * About — no heading, one biography set large with the portrait floated as a
 * drop capital, and a narrow column of facts to its left.
 */
export default function About() {
  return (
    <section id="about" className="page-shell mx-auto max-w-[1440px] pb-20 pt-16 lg:pb-28 lg:pt-24">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-8">
        {/* Biography */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-10"
        >
          <p className="max-w-[24em] text-[23px] leading-[1.3] tracking-[-0.01em] text-text md:text-[30px] lg:text-[34px] lg:leading-[1.25]">
            <span className="relative float-left mr-4 mb-2 inline-block h-[3.2em] w-[3.2em] overflow-hidden bg-surface sm:mr-5">
              <Image
                src="/assets/joshua.jpg"
                alt="Portrait of Joshua Adesina"
                fill
                sizes="150px"
                className="grayscale-photo object-cover object-[center_35%]"
              />
            </span>
            <span className="font-medium text-ink">I&apos;m Joshua.</span>{" "}
            Civil Engineering turned into software: Python backends, React
            frontends.
          </p>
          <p className="mt-8 max-w-[24em] text-[23px] leading-[1.3] tracking-[-0.01em] text-text md:text-[30px] lg:text-[34px] lg:leading-[1.25]">
            The systems thinking came from structures: load paths, tolerance,
            and what happens when a piece fails.
          </p>
        </motion.div>

        {/* Facts rail */}
        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-row flex-wrap gap-x-10 gap-y-2 items-start
                     lg:col-span-2 lg:flex-col lg:gap-y-3 lg:pt-2"
        >
          <p className="text-[14px] text-text">Lagos, Nigeria</p>
          <p className="text-[14px] text-muted">Full-stack & AI engineer</p>
          <a
            href="mailto:giganticjosha@gmail.com"
            className="text-[14px] text-muted underline decoration-1 underline-offset-4 transition-colors hover:text-ink lg:break-all"
          >
            giganticjosha@gmail.com
          </a>
          <p className="text-[14px] text-muted">Available for projects</p>
        </motion.aside>
      </div>
    </section>
  );
}
