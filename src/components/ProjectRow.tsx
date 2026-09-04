"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ExternalLink, Github, Globe, Lock, Plus } from "lucide-react";
import Image from "next/image";

interface ProjectRowProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  metrics: string[];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const getDisplayUrl = (url?: string) => {
  if (!url) return "localhost:3000";
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  }
};

function PreviewPane({ title, image, liveUrl }: { title: string; image: string; liveUrl?: string }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktopOrTablet(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktopOrTablet(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    setIframeLoaded(false);
    setIframeFailed(false);
    loadedRef.current = false;
    if (!liveUrl) return;
    // If the site refuses to be embedded (X-Frame-Options, etc.) fall back to
    // the static preview image instead of spinning forever.
    const timer = setTimeout(() => {
      if (!loadedRef.current) setIframeFailed(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [liveUrl]);

  const showIframe = Boolean(liveUrl) && isDesktopOrTablet && !iframeFailed;

  return (
    <div className="group/browser relative w-full">
      <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
        {/* Browser Top Control Bar */}
        <div className="flex items-center px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center gap-1.5 mr-3 sm:mr-4">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <div className="bg-white border border-slate-200 rounded-md px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] text-slate-500 font-mono flex items-center gap-1.5 flex-1 max-w-sm mx-auto truncate shadow-sm">
            {liveUrl ? <Lock size={10} className="shrink-0" /> : <Globe size={10} className="shrink-0" />}
            <span className="truncate">{getDisplayUrl(liveUrl)}</span>
          </div>
        </div>

        {/* Viewport: static image base layer with live iframe fading in on top */}
        <div className="relative h-[240px] sm:h-[340px] lg:h-[440px] bg-slate-100 overflow-hidden">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className={`object-cover object-top transition-opacity duration-700 ${
              showIframe && iframeLoaded ? "opacity-0" : "opacity-100"
            }`}
          />


          {showIframe && (
            <iframe
              src={liveUrl}
              loading="lazy"
              onLoad={() => {
                loadedRef.current = true;
                setIframeLoaded(true);
              }}
              title={`${title} live preview`}
              className={`absolute inset-0 w-full h-full border-none transition-opacity duration-700 ${
                iframeLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* Invisible scroll shield until the user intentionally hovers the viewport */}
          {showIframe && iframeLoaded && (
            <div className="absolute inset-0 z-10 bg-transparent opacity-100 group-hover/browser:opacity-0 pointer-events-auto group-hover/browser:pointer-events-none transition-opacity duration-300" />
          )}

          {/* Loading state */}
          {showIframe && !iframeLoaded && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-slate-50/80">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 border-slate-200 border-t-primary animate-spin" />
              <span className="font-mono text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide uppercase">
                Loading live environment...
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default function ProjectRow({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  category,
  metrics,
  index,
  isOpen,
  onToggle,
}: ProjectRowProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className={`border-b border-slate-200 transition-colors duration-300 ${
        isOpen ? "bg-slate-50/60" : "bg-transparent"
      }`}
    >
      {/* Row header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-4 sm:gap-x-6 px-2 sm:px-6 py-5 sm:py-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm transition-colors duration-300 hover:bg-slate-50 lg:grid-cols-[48px_minmax(0,1fr)_200px_130px_56px]"
      >
        {/* Index number */}
        <span
          className={`font-mono text-xs sm:text-sm font-bold tracking-widest transition-colors duration-300 ${
            isOpen ? "text-primary" : "text-slate-300 group-hover:text-slate-500"
          }`}
        >
          {number}
        </span>

        {/* Title + inline meta */}
        <span className="min-w-0">
          <span className="block font-space text-lg sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight transition-transform duration-300 group-hover:translate-x-1">
            {title}
          </span>
          <span className="mt-1.5 flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 lg:hidden">
              {category}
            </span>
            <span className="hidden lg:flex items-center gap-2">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] uppercase tracking-wider text-slate-400 border border-slate-200 rounded px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="font-mono text-[9px] text-slate-300">+{tags.length - 4}</span>
              )}
            </span>
          </span>
        </span>

        {/* Category (desktop column) */}
        <span className="hidden lg:block font-mono text-[10px] uppercase tracking-widest text-slate-400 whitespace-nowrap">
          {category}
        </span>

        {/* Status (desktop column) */}
        <span
          className={`hidden lg:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest ${
            liveUrl ? "text-emerald-600" : "text-slate-400"
          }`}
        >
          {liveUrl && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          )}
          {liveUrl ? "Live" : "Repo"}
        </span>

        {/* Expand toggle */}
        <span
          className={`justify-self-end flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "bg-slate-900 border-slate-900 text-white rotate-45"
              : "border-slate-200 text-slate-500 group-hover:border-slate-300 group-hover:text-slate-900"
          }`}
        >
          <Plus size={16} strokeWidth={2.5} />
        </span>
      </button>

      {/* Expandable detail panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-2 sm:px-6 pb-8 sm:pb-10 pt-1">
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                {/* Details */}
                <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-inter max-w-xl">
                    {description}
                  </p>

                  <div className="mt-6 space-y-3">
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Technical Highlights
                    </h4>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {metrics.map((metric, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-inter font-medium"
                        >
                          <Check size={15} className="text-primary mt-0.5 shrink-0" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] sm:text-[10px] font-semibold text-slate-600 bg-slate-100/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-7 flex items-center gap-3">
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

                {/* Live preview */}
                <div className="order-1 lg:order-2 lg:col-span-5">
                  <PreviewPane title={title} image={image} liveUrl={liveUrl} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
