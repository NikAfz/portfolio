import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`nav ${scrolled && !open ? "nav--scrolled" : ""} ${open ? "nav--menu-open" : ""}`}
    >
      <a href="#hero" className="nav__brand" onClick={() => setOpen(false)}>
        NikAfz
      </a>

      <button
        type="button"
        className={`nav__toggle ${open ? "nav__toggle--open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav__link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="nav__social">
          <a
            href="mailto:nikafz980@gmail.com"
            aria-label="Email"
            className="nav__icon"
          >
            <AlternateEmailIcon fontSize="small" />
          </a>
          <a
            href="https://github.com/NikAfz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="nav__icon"
          >
            <GitHubIcon fontSize="small" />
          </a>
          <a
            href="https://www.linkedin.com/in/nik-afz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="nav__icon"
          >
            <LinkedInIcon fontSize="small" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
