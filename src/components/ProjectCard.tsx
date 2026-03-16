"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, Zap, Shield, Target } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  difficulty: "Side Quest" | "Main Quest" | "Boss Fight";
  loot: string[];
  videoUrl?: string;
}

const difficultyColors = {
  "Side Quest": "text-primary border-primary/40",
  "Main Quest": "text-secondary border-secondary/40",
  "Boss Fight": "text-highlight border-highlight/40",
};

const difficultyGlows = {
  "Side Quest": "shadow-cyan group-hover:border-primary/50",
  "Main Quest": "shadow-purple group-hover:border-secondary/50",
  "Boss Fight": "shadow-orange animate-pulse-fast border-highlight/40 group-hover:border-highlight group-hover:shadow-orange-lg",
};

function LootIcon({ text }: { text: string }) {
  const lowercaseText = text.toLowerCase();
  if (lowercaseText.includes("accuracy") || lowercaseText.includes("security") || lowercaseText.includes("encrypted")) {
    return <Shield size={10} />;
  }
  if (lowercaseText.includes("latency") || lowercaseText.includes("speed") || lowercaseText.includes("real-time") || lowercaseText.includes("fluid")) {
    return <Zap size={10} />;
  }
  if (lowercaseText.includes("prediction") || lowercaseText.includes("objective") || lowercaseText.includes("system") || lowercaseText.includes("monitoring")) {
    return <Target size={10} />;
  }
  return <Trophy size={10} />;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  difficulty,
  loot,
  videoUrl,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-primary/20 bg-nebula-gradient p-4 backdrop-blur-xl transition-all ${difficultyGlows[difficulty]}`}
    >
      {/* Project Image/Video Preview */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-primary/10">
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
          />
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-space font-bold uppercase tracking-widest text-primary">
            Press Start
          </span>
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-space text-xl font-bold text-offwhite">{title}</h3>
          <span
            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-tighter ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>

        <p className="text-sm text-starlight line-clamp-2">{description}</p>

        {/* Loot / Outcomes */}
        <div className="flex flex-wrap gap-2">
          {loot.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 rounded bg-primary/5 px-2 py-1 font-mono text-[10px] text-primary"
            >
              <LootIcon text={item} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-starlight/60 uppercase"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase text-starlight transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
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
              className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase text-starlight transition-all hover:border-secondary/50 hover:bg-secondary/10 hover:text-secondary"
            >
              <ExternalLink size={14} />
              <span>{liveUrl === githubUrl ? "View Source" : "Live Demo"}</span>
            </a>
          )}
        </div>
      </div>

      {/* Interactive Glow Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
}
