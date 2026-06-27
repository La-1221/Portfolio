import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { NAV_LINKS } from "../utils/data";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="hero" smooth duration={500} className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          LF
          <span className="navbar__logo-bracket">/&gt;</span>
        </Link>

        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="navbar__link--active"
              className="navbar__link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="contact"
          smooth
          duration={500}
          offset={-80}
          className="btn btn-primary navbar__cta"
        >
          Contact Me
        </Link>

        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
        ref={menuRef}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth
            duration={500}
            offset={-80}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="contact"
          smooth
          duration={500}
          offset={-80}
          className="btn btn-primary"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
