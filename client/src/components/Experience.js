import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { EXPERIENCE } from "../utils/data";
import "./Experience.css";

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section experience" id="experience">
      <div className="container experience__inner" ref={ref}>
        <div className={`section-intro ${isVisible ? "fade-up" : ""}`}>
          
          <h2 className="section-title">Where I&apos;ve worked</h2>
          <p className="section-subtitle">
            Hands-on experience in a live banking IT and networking environment.
          </p>
        </div>

        <article className={`experience__card ${isVisible ? "fade-up" : ""}`}>
          <div className="experience__card-head">
            <div>
              <span className="experience__eyebrow">
                Internship
              </span>
              <h3>{EXPERIENCE.role}</h3>
              <p className="experience__company">{EXPERIENCE.company}</p>
            </div>

            <div className="experience__date">{EXPERIENCE.period}</div>
          </div>

          <p className="experience__summary">
            I worked directly in a fast-paced banking IT setting, supporting
            network operations, systems availability, and collaboration across
            technical teams.
          </p>

          <ul className="experience__list">
            {EXPERIENCE.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
