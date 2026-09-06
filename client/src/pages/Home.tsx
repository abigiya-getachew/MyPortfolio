import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Hero from "@/components/portfolio/Hero";
import Navbar from "@/components/portfolio/Navbar";
import Skills from "@/components/portfolio/Skills";
import Work from "@/components/portfolio/Work";

export default function Home() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
