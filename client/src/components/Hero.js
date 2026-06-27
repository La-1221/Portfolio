import React from "react";
import { Link } from "react-scroll";
import useTypewriter from "../hooks/useTypewriter";
import { ROLES, STATS, PROFILE } from "../utils/data";
import "./Hero.css";

const Hero = () => {
  const role = useTypewriter(ROLES, 90, 2200);

  return (
    <section className="hero" id="hero">
      <div className="status-strip" aria-hidden="true">
        <div className="track"></div>
      </div>

      <div className="hero__grid" aria-hidden />
      <div className="hero__orb hero__orb--1" aria-hidden />
      <div className="hero__orb hero__orb--2" aria-hidden />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to opportunities
          </div>

          <h1 className="hero__name">
            {PROFILE.name}
            <br />
            <span className="hero__name-accent">{PROFILE.lastName}</span>
          </h1>

          <p className="hero__role">
            <span className="hero__role-prefix">{"> "}</span>
            <span className="hero__role-text">{role}</span>
            <span className="hero__cursor">_</span>
          </p>

          <p className="hero__bio">
            Computer Science graduate from Debre Tabor University, building
            full-stack web applications with the MERN stack. I turn real-world
            problems into clean, working software.
          </p>

          <div className="hero__actions">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="btn btn-primary"
            >
              View My Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="btn btn-outline"
            >
              Get In Touch
            </Link>
          </div>

          <div className="hero__stats">
            {STATS.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__code-card">
            <div className="hero__code-header">
              <span
                className="hero__code-dot"
                style={{ background: "#ff5f56" }}
              />
              <span
                className="hero__code-dot"
                style={{ background: "#ffbd2e" }}
              />
              <span
                className="hero__code-dot"
                style={{ background: "#27c93f" }}
              />
              <span className="hero__code-filename">developer.json</span>
            </div>
            <pre className="hero__code-body">
              <code>
                <span className="c-keyword">const </span>
                <span className="c-var">developer</span>
                <span> = {"{"}</span>
                {"\n"}
                <span className="c-prop"> name</span>
                <span>: </span>
                <span className="c-str">'Lakachew Ferede'</span>,{"\n"}
                <span className="c-prop"> role</span>
                <span>: </span>
                <span className="c-str">'MERN Stack Dev'</span>,{"\n"}
                <span className="c-prop"> university</span>
                <span>: </span>
                <span className="c-str">'Debre Tabor Uni'</span>,{"\n"}
                <span className="c-prop"> stack</span>
                <span>: [</span>
                {"\n"}
                <span className="c-str"> 'React'</span>,{"\n"}
                <span className="c-str"> 'Node.js'</span>,{"\n"}
                <span className="c-str"> 'MongoDB'</span>,{"\n"}
                <span className="c-str"> 'Express'</span>,{"\n"}
                <span className="c-str"> 'Typescript'</span>,{"\n"}
              
                <span> ],</span>
                {"\n"}
               
                <span className="c-prop"> status</span>
                <span>: </span>
                <span className="c-str">'open to work'</span>,{"\n"}
                <span>{"}"}</span>
              </code>
            </pre>
          </div>

          <div className="hero__float hero__float--react">
            <span>⚛</span> React
          </div>

          <div className="hero__float hero__float--node">
            <span>🟢</span> Node.js
          </div>
          <div className="hero__float hero__float--mongo">
            <span>🍃</span> MongoDB
          </div>
          <div className="hero__float hero__float--express">
            <span>🚂</span> Express
          </div>
          <div className="hero__float hero__float--typescript">
            <span>📝</span> Typescript
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
