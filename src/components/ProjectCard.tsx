"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Check, Folder } from "lucide-react";
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setHasMountedIframe(true)}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative group w-full"
    >
      {/* Folder Top Tab Header */}
      <div className="flex items-end relative z-20">
        <div className="relative bg-white border-t border-l border-r border-slate-200/90 rounded-t-xl sm:rounded-t-2xl px-3.5 sm:px-6 py-1.5 sm:py-2.5 flex items-center gap-2 sm:gap-3.5 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Folder size={16} className="text-primary shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="flex items-center justify-center px-1.5 py-0.5 rounded bg-slate-900 text-white font-mono text-[10px] sm:text-xs font-bold leading-none">
              0{index + 1}
            </span>
          </div>

          <div className="h-3 sm:h-4 w-[1px] bg-slate-200" />

          <div className="flex items-center gap-1.5 truncate max-w-[130px] sm:max-w-[220px]">
            <span className="font-mono text-[9px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-widest truncate">
              {category}
            </span>
          </div>

          <span className="hidden sm:flex h-2 w-2 relative ml-1" title="Active Project">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>

        {/* Folder Concave Transition Curve (Tab to Main Top Border) */}
        <div className="relative w-4 h-4 sm:w-6 sm:h-6 -ml-[1px] self-end pointer-events-none overflow-hidden">
          <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
            <path d="M 0 0 A 24 24 0 0 0 24 24 L 0 24 Z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="absolute inset-0 w-full h-full stroke-slate-200/90 fill-none"
            strokeWidth="1.5"
          >
            <path d="M 0 0 A 24 24 0 0 0 24 24" />
          </svg>
        </div>
      </div>

      {/* Main Folder Card Body */}
      <div className="flex flex-col lg:flex-row bg-white rounded-b-[1.5rem] sm:rounded-b-[2rem] rounded-tr-[1.5rem] sm:rounded-tr-[2rem] rounded-tl-none border border-slate-200/90 shadow-2xl shadow-slate-200/40 overflow-hidden relative -mt-[1px]">
        {/* Left: Metadata Detail Area */}
        <div className="lg:w-5/12 p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-white z-10 relative">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                {category}
              </span>
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                FILE // 0{index + 1}
              </span>
            </div>
            
            <h3 className="font-space text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              {title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-inter">
              {description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-space text-xs font-bold text-slate-400 uppercase tracking-widest">
                Technical Highlights
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-inter font-medium">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5 pt-8 sm:pt-10 mt-auto">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] sm:text-[10px] font-semibold text-slate-600 bg-slate-100/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded uppercase tracking-wider"
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
                  className="flex-1 flex justify-center items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-3.5 sm:px-4 py-3 sm:py-3.5 font-mono text-[11px] sm:text-xs font-semibold uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 rounded-xl border-2 border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800 px-3.5 sm:px-4 py-3 sm:py-3.5 font-mono text-[11px] sm:text-xs font-semibold uppercase transition-all duration-300"
                >
                  <Github size={15} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: Mockup Browser Shell Area */}
        <div className="lg:w-7/12 border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-50 flex flex-col p-3.5 sm:p-5 lg:p-8">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200/80 bg-white flex flex-col h-[320px] sm:h-[400px] lg:h-full w-full relative group/browser">
            {/* Browser Top Control Bar */}
            <div className="flex items-center px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-100 border-b border-slate-200">
              <div className="flex items-center gap-1.5 mr-3 sm:mr-4">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="bg-white border border-slate-200 rounded-md px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] text-slate-500 font-mono text-center flex-1 max-w-sm mx-auto truncate shadow-sm flex items-center justify-center gap-1.5 relative">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                <span className="truncate">{getDisplayUrl(liveUrl)}</span>
                 
                {/* Minimalist Live Indicator (Desktop only) */}
                {iframeLoaded && (
                  <span className="hidden lg:flex absolute right-2 sm:right-3 h-2 w-2" title="Live Environment Active">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                )}
              </div>
            </div>

            {/* Preview Content Area */}
            <div className="flex-1 relative bg-slate-100 overflow-hidden">
              {/* Mobile View: High Quality Image Preview (No Iframe) */}
              <div className="block lg:hidden relative w-full h-full">
                <Image
                  src={image}
                  alt={`${title} Mobile Preview`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Desktop View: Live Environment Iframe / Fallback Image */}
              {liveUrl && !iframeLoaded && (
                <div className="hidden lg:flex absolute inset-0 bg-slate-50 flex-col items-center justify-center gap-4 z-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 border-slate-200 border-t-primary animate-spin" />
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">Loading Live Environment...</span>
                </div>
              )}
              
              {liveUrl && hasMountedIframe ? (
                <iframe
                  src={liveUrl}
                  loading="lazy"
                  onLoad={() => setIframeLoaded(true)}
                  className={`hidden lg:block absolute inset-0 w-full h-full border-none transition-opacity duration-700 z-0 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                  title={`${title} live preview`}
                />
              ) : !liveUrl ? (
                <div className="hidden lg:block relative w-full h-full">
                  <Image
                    src={image}
                    alt={`${title} Preview`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : null}

              {/* Invisible Scroll Shield for Desktop Iframe */}
              {iframeLoaded && (
                <div className="hidden lg:block absolute inset-0 z-10 bg-transparent opacity-100 group-hover/browser:opacity-0 pointer-events-auto group-hover/browser:pointer-events-none transition-opacity duration-300" />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
