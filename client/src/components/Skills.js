import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { SKILLS, TECH_PILLS, CERTIFICATIONS, EDUCATION } from '../utils/data';
import './Skills.css';

const CATEGORIES = [
  { key: 'frontend', label: 'Frontend', icon: '⬡' },
  { key: 'backend',  label: 'Backend',  icon: '◈' },
  { key: 'tools',    label: 'Tools',    icon: '◉' },
];

const SkillBar = ({ name, level, delay }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="skill-bar" ref={ref} style={{ animationDelay: `${delay}ms` }}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [active, setActive] = useState('frontend');
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div ref={ref} className={`skills__header ${isVisible ? 'fade-up' : ''}`}>
          <p className="section-label">{'// expertise'}</p>
          <h2 className="section-title">Skills Matrix</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build full-stack web applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="skills__tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`skills__tab ${active === cat.key ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(cat.key)}
            >
              <span className="skills__tab-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="skills__grid">
          {SKILLS[active].map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
          ))}
        </div>

        {/* Tech pills */}
        <div className="skills__pills">
          {TECH_PILLS.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Education + Certifications */}
        <div className="skills__credentials">
          <div className="skills__card">
            <h3 className="skills__card-title">
              <span className="skills__card-icon">🎓</span> Education
            </h3>
            <p className="skills__edu-degree">{EDUCATION.degree}</p>
            <p className="skills__edu-school">{EDUCATION.school} &middot; {EDUCATION.period}</p>

            <ul className="skills__coursework">
              {EDUCATION.coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="skills__card">
            <h3 className="skills__card-title">
              <span className="skills__card-icon">📜</span> Certifications
            </h3>
            <p className="skills__cert-source">Ethiopian Five Million Coders Program</p>
            <ul className="skills__cert-list">
              {CERTIFICATIONS.map((c) => (
                <li key={c}>
                  <span className="skills__cert-check">✓</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
