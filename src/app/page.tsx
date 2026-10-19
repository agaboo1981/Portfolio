import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Beyond = dynamic(() => import("@/components/Beyond"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="bg-background min-h-svh text-text">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Beyond />
      <Contact />
      <Footer />
    </div>
  );
}
