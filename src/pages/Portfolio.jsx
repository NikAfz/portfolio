import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SocialLink from "../components/SocialLink";
import AboutMe from "../components/AboutMe";
import PageLink from "../components/PageLink";

function Portfolio(props) {
  return (
    <>
      <SocialLink />
      <PageLink />
      <Hero />
      <AboutMe />
    </>
  );
}

export default Portfolio;
