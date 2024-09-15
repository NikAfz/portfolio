import Hero from "../components/Hero";
import SocialLink from "../components/SocialLink";
import AboutMe from "../components/AboutMe";
import PageLink from "../components/PageLink";
import Skills from "../components/Skills";

function Portfolio(props) {
  return (
    <>
      <SocialLink />
      <PageLink />
      <Hero />
      <AboutMe />
      <Skills />
    </>
  );
}

export default Portfolio;
