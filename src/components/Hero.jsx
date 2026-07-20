import { Link } from "react-router-dom";
import myMainPic from "/me2.jpg";
import resume from "../assets/resumee-2026-07-20.pdf";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__photo"
          src={myMainPic}
          alt=""
          width={800}
          height={1000}
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Frontend developer</p>
        <h1 className="hero__brand">NikAfz</h1>
        <p className="hero__lede">
          Building fast, thoughtful web experiences — co-founder &amp; frontend
          lead at LibMate.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Get in touch
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--ghost-light"
          >
            Résumé
          </a>
          <Link to="/" className="btn btn--ghost btn--ghost-light">
            Home
          </Link>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}

export default Hero;
