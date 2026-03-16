import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A", // Deep Space
        primary: "#00F5FF",    // Electric Cyan
        secondary: "#FF2DAA",  // Neon Pink
        highlight: "#FFD700",  // Cyber Yellow
        offwhite: "#F7F7FF",   // Off-White
        starlight: "#94A3B8",  // Starlight
        nebula: "rgba(15, 23, 42, 0.7)", // Nebula Glass
      },
      fontFamily: {
        space: ["var(--font-space-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        cyan: "0 0 15px rgba(0, 245, 255, 0.3)",
        "cyan-lg": "0 0 25px rgba(0, 245, 255, 0.5)",
        "cyan-sm": "0 0 10px rgba(0, 245, 255, 0.2)",
        pink: "0 0 15px rgba(255, 45, 170, 0.3)",
        yellow: "0 0 15px rgba(255, 215, 0, 0.3)",
        orange: "0 0 20px rgba(255, 165, 0, 0.4)",
        "orange-lg": "0 0 35px rgba(255, 100, 0, 0.7)",
        purple: "0 0 20px rgba(147, 51, 234, 0.4)",
      },
      backgroundImage: {
        "nebula-gradient": "linear-gradient(135deg, #0B0F1A 0%, #162033 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
