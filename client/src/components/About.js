import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { PROFILE } from "../utils/data";
import "./About.css";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div
          ref={ref}
          className={`section-intro ${isVisible ? "fade-up" : ""}`}
        >
          <p className="section-label">{"// about"}</p>
          <h2 className="section-title">Profile summary</h2>
          <p className="section-subtitle">
            A quick read on how I work and what I&apos;m looking for next.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__content">
            <p>{PROFILE.bio}</p>
            <p>
              I enjoy taking practical problems and turning them into polished,
              easy-to-use software. I&apos;m passionate about learning new
              technologies, building clean digital experiences, and working in
              teams where ideas turn into real results.
            </p>

            <div className="about__tags">
              <span className="tag">Analytical</span>
              <span className="tag">Problem Solver</span>
              <span className="tag">Collaborative</span>
              <span className="tag">Fast Learner</span>
              <span className="tag">Clear Communicator</span>
            </div>
          </div>

          <aside className="about__card">
            <h3>Quick facts</h3>
            <div className="about__fact">
              <span>Location</span>
              <span>{PROFILE.location}</span>
            </div>
            <div className="about__fact">
              <span>University</span>
              <span>Debre Tabor University</span>
            </div>
            <div className="about__fact">
              <span>Field</span>
              <span>Computer Science</span>
            </div>
            <div className="about__fact">
              <span>Status</span>
              <span>Open to work</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
