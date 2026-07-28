import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Exploring = dynamic(() => import("@/components/Exploring"));
const Projects = dynamic(() => import("@/components/Projects"));
const FunHobbies = dynamic(() => import("@/components/FunHobbies"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-textMain selection:bg-primary selection:text-background">
      <Hero />
      <About />
      <Skills />
      <Exploring />
      <Projects />
      <FunHobbies />
      <Contact />
      <Footer />
    </div>
  );
}
