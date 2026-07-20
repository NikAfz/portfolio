import { Link } from "react-router-dom";
import meLookingRight from "/me3.jpg";
import resume from "../assets/resumee-2026-07-20.pdf";

function Landing() {
  return (
    <main className="landing">
      <div className="landing__media" aria-hidden="true">
        <img src={meLookingRight} alt="" className="landing__photo" />
        <div className="landing__veil" />
      </div>

      <div className="landing__content">
        <p className="landing__eyebrow">Frontend Web Developer</p>
        <h1 className="landing__brand">NikAfz</h1>
        <p className="landing__lede">
          Fast, clean interfaces — from production apps to polished side
          projects.
        </p>
        <div className="landing__actions">
          <Link to="/detail" className="btn btn--primary">
            View portfolio
          </Link>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Résumé
          </a>
        </div>
      </div>
    </main>
  );
}

export default Landing;
