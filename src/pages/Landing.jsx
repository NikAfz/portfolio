import { Link } from "react-router-dom";
import SocialLink from "../components/SocialLink";
import meLookingRight from "/me1.jpg";

function Landing(props) {
  return (
    <>
      <SocialLink />
      <div className="landing-text--container">
        <p className="landing-text--small">Hi my name is</p>

        <p className="landing-text--big">
          {"<"}NikAfz/{">"}
        </p>
        <p className="landing-text--small">I am a </p>

        <p className="landing-text--mid">Front End web developer</p>

        <div className="landing-button--container">
          <Link to="/portfolio/more">
            <button className="landing-button main--button">portfolio</button>
          </Link>

          <a target="_blank" href="src/assets/NikAfz.pdf">
            <button className="landing-button secondary--button">résumé</button>
          </a>
        </div>
      </div>

      <div className="landing--pic">
        <img src={meLookingRight} alt="my picture" />
      </div>
    </>
  );
}
export default Landing;
