import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Hud from "@/components/Hud";
import ScrollProgress from "@/components/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Joshua Adesina | Portfolio",
  description: "Civil engineer by degree, tech explorer by passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary selection:text-background`}
      >
        <div className="scanlines" />
        <Hud />
        
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[60]">
          <div className="hud-glass px-6 py-2 rounded-full flex flex-col gap-1 items-center overflow-hidden">
            <div className="flex gap-4 sm:gap-6 items-center text-[9px] sm:text-xs font-space font-medium tracking-widest uppercase">
              <a href="#hero" className="hover:text-primary transition-colors whitespace-nowrap">Start</a>
              <a href="#about" className="hover:text-primary transition-colors whitespace-nowrap">Bio</a>
              <a href="#skills" className="hover:text-primary transition-colors whitespace-nowrap">Skills</a>
              <a href="#exploring" className="hover:text-primary transition-colors whitespace-nowrap">Armory</a>
              <a href="#projects" className="hover:text-primary transition-colors whitespace-nowrap">Quests</a>
              <a href="#fun" className="hover:text-primary transition-colors whitespace-nowrap">Side Quest</a>
              <a href="#contact" className="hover:text-primary transition-colors whitespace-nowrap text-secondary">Contact</a>
            </div>
            {/* Scroll Progress integrated into HUD */}
            <div className="w-full mt-1 px-2">
              <ScrollProgress />
            </div>
          </div>
        </nav>

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
