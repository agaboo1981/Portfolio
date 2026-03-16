import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Exploring from "@/components/Exploring";
import Projects from "@/components/Projects";
import FunHobbies from "@/components/FunHobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-offwhite selection:bg-primary selection:text-background">
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
