"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Check } from "lucide-react";
import { useState } from "react";
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
  index: number;
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
  index
}: ProjectProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [hasMountedIframe, setHasMountedIframe] = useState(false);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setHasMountedIframe(true)}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/40"
    >
      {/* Left: Metadata Detail Area */}
      <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-between bg-white z-10 relative">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-mono text-sm font-bold">
              0{index + 1}
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600">
              {category}
            </span>
          </div>
          
          <h3 className="font-space text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            {title}
          </h3>

          <p className="text-base text-slate-600 leading-relaxed font-inter">
            {description}
          </p>

          <div className="space-y-3 pt-2">
            <h4 className="font-space text-xs font-bold text-slate-400 uppercase tracking-widest">
              Technical Highlights
            </h4>
            <ul className="space-y-3">
              {metrics.map((metric, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-inter font-medium">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6 pt-10 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] font-semibold text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="h-[1px] bg-slate-100 w-full" />

          <div className="flex items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-4 py-3.5 font-mono text-xs font-semibold uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 rounded-xl border-2 border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800 px-4 py-3.5 font-mono text-xs font-semibold uppercase transition-all duration-300"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right: Mockup Browser Shell Area */}
      <div className="lg:w-7/12 border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-50 flex flex-col p-4 lg:p-8">
        <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200/80 bg-white flex flex-col h-[400px] lg:h-full w-full relative group">
          {/* Browser Top Control Bar */}
          <div className="flex items-center px-4 py-3 bg-slate-100 border-b border-slate-200">
            <div className="flex items-center gap-1.5 mr-4">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>
            <div className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-[10px] text-slate-500 font-mono text-center flex-1 max-w-sm mx-auto truncate shadow-sm flex items-center justify-center gap-2 relative">
               <svg className="w-3 h-3 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
               {getDisplayUrl(liveUrl)}
               
               {/* Minimalist Live Indicator */}
               {iframeLoaded && (
                 <span className="absolute right-3 flex h-2 w-2" title="Live Environment Active">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
               )}
            </div>
          </div>

          {/* Iframe Area */}
          <div className="flex-1 relative bg-slate-100 overflow-hidden">
            {/* Skeleton Loader */}
            {liveUrl && !iframeLoaded && (
              <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center gap-4 z-0">
                 <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-primary animate-spin" />
                 <span className="font-mono text-xs text-slate-400 font-medium tracking-wide">Loading Live Environment...</span>
              </div>
            )}
            
            {liveUrl && hasMountedIframe ? (
              <iframe
                src={liveUrl}
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                className={`absolute inset-0 w-full h-full border-none transition-opacity duration-700 z-0 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                title={`${title} live preview`}
              />
            ) : !liveUrl ? (
              <Image
                src={image}
                alt={`${title} Preview`}
                fill
                className="object-cover object-top"
              />
            ) : null}

            {/* Invisible Scroll Shield (Prevents scroll trapping until hovered) */}
            {iframeLoaded && (
               <div className="absolute inset-0 z-10 bg-transparent opacity-100 group-hover:opacity-0 pointer-events-auto group-hover:pointer-events-none transition-opacity duration-300" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
