import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <main className="portfolio">
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default Portfolio;
