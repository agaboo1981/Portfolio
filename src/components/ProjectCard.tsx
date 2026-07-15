"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Check } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  metrics: string[];
  layout?: "horizontal" | "vertical";
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  category,
  metrics,
  layout = "vertical",
}: ProjectProps) {
  const isHorizontal = layout === "horizontal";

  // Extracts clean domain name for mockup URL bar
  const getDisplayUrl = (url?: string) => {
    if (!url) return "localhost:3000";
    try {
      const parsed = new URL(url);
      return parsed.hostname;
    } catch {
      return url.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${
        isHorizontal ? "lg:flex-row lg:items-stretch" : ""
      } overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300`}
    >
      {/* Mockup Browser Shell Area */}
      <div
        className={`${
          isHorizontal ? "lg:w-[55%] border-b lg:border-b-0 lg:border-r" : "border-b"
        } border-slate-200 bg-slate-50 flex flex-col`}
      >
        {/* Browser Top Control Bar */}
        <div className="flex items-center px-4 py-3 bg-slate-100/80 border-b border-slate-200/60">
          {/* Faux window control buttons */}
          <div className="flex items-center gap-1.5 mr-4">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          {/* Faux URL bar */}
          <div className="bg-white border border-slate-200 rounded px-3 py-0.5 text-[10px] text-slate-500 font-mono text-center flex-1 max-w-xs mx-auto truncate shadow-sm">
            {getDisplayUrl(liveUrl)}
          </div>
        </div>

        {/* Visual Content Display */}
        <div className="flex-1 bg-slate-900 flex items-center justify-center p-8 min-h-[220px] aspect-video relative group overflow-hidden">
          <Image
            src={image}
            alt={`${title} Preview`}
            width={480}
            height={192}
            className="w-4/5 max-h-48 object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Metadata Detail Area */}
      <div
        className={`flex-1 p-6 flex flex-col justify-between ${
          isHorizontal ? "lg:w-[45%]" : ""
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-space text-2xl font-bold text-slate-900">{title}</h3>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-600">
              {category}
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-inter">{description}</p>

          {/* Key Achievements / Technical Outcomes */}
          <div className="space-y-2 pt-1">
            <h4 className="font-space text-xs font-bold text-slate-800 uppercase tracking-wider">
              Technical Highlights
            </h4>
            <ul className="space-y-2">
              {metrics.map((metric, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-inter">
                  <Check size={14} className="text-slate-400 mt-0.5 shrink-0" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Triggers & Tags */}
        <div className="space-y-4 pt-6">
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] font-semibold text-slate-500 bg-slate-100/80 border border-slate-200/50 px-2 py-0.5 rounded uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="h-[1px] bg-slate-200" />

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 font-mono text-xs font-semibold uppercase transition-colors duration-200 shadow-sm"
              >
                <Github size={14} />
                <span>View Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 font-mono text-xs font-semibold uppercase transition-colors duration-200 shadow-sm"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
