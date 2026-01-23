import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Certifications from "../components/Certifications";
import GitHubContributions from "../components/GitHubContributions";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Prabhat Shukla | Data Science Professional";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Certifications />
        <GitHubContributions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}