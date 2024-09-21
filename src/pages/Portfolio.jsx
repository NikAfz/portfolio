import Hero from "../components/Hero";
import SocialLink from "../components/SocialLink";
import AboutMe from "../components/AboutMe";
import PageLink from "../components/PageLink";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Portfolio(props) {
  return (
    <>
      <SocialLink />

      <PageLink />

      <Hero />

      <AboutMe />

      <Skills />

      <Projects />

      <Footer />
    </>
  );
}

export default Portfolio;
