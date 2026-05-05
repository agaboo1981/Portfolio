"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, Zap, Shield, Target } from "lucide-react";

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
  "Main Quest": "text-textSecondary border-textSecondary/40",
  "Boss Fight": "text-textMain border-textMain/40",
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
      className="flex flex-col overflow-hidden rounded-lg border border-primary/15 bg-background p-4"
    >
      {/* Metadata */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-space text-xl font-bold text-textMain">{title}</h3>
          <span
            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-tighter ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>

        <p className="text-sm text-textSecondary line-clamp-2">{description}</p>

        {/* Loot / Outcomes */}
        <div className="flex flex-wrap gap-2">
          {loot.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 rounded border border-primary/10 px-2 py-1 font-mono text-[10px] text-textSecondary"
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
              className="font-mono text-[10px] text-textSecondary/60 uppercase"
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
              className="flex items-center gap-2 rounded-md border border-primary/15 px-3 py-1.5 font-mono text-[10px] uppercase text-textSecondary"
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
              className="flex items-center gap-2 rounded-md border border-primary/15 px-3 py-1.5 font-mono text-[10px] uppercase text-textSecondary"
            >
              <ExternalLink size={14} />
              <span>{liveUrl === githubUrl ? "View Source" : "Live Demo"}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
