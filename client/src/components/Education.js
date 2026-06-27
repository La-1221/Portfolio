import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { EDUCATION } from "../utils/data";
import "./Education.css";

const Education = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section education" id="education">
      <div className="container education__inner" ref={ref}>
        <div className={`section-intro ${isVisible ? "fade-up" : ""}`}>
          <p className="section-label">// education</p>
          <h2 className="section-title">Academic background</h2>
          <p className="section-subtitle">
            Foundational coursework and university achievements.
          </p>
        </div>

        <div className={`education__card ${isVisible ? "fade-up" : ""}`}>
          <div className="education__mark" aria-hidden="true">
            <span>🎓</span>
          </div>
          <div className="education__content">
            <h3>{EDUCATION.degree}</h3>
            <p className="education__school">
              {EDUCATION.school} · {EDUCATION.period}
            </p>
            <ul className="education__list">
              {EDUCATION.coursework.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="education__stats">
            <div>
              <p className="education__stat-value">{EDUCATION.gpa}</p>
              <p className="education__stat-label">Cumulative GPA</p>
            </div>
            <div>
              <p className="education__stat-value">{EDUCATION.exitExam}</p>
              <p className="education__stat-label">National Exit Exam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
