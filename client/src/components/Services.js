import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { SERVICES } from '../utils/data';
import './Services.css';

const ServiceCard = ({ service, index }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`service-card ${isVisible ? 'fade-up' : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="service-card__icon">{service.icon}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>
      <div className="service-card__arrow">→</div>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section services" id="services">
      <div className="container">
        <div ref={ref} className={`services__header ${isVisible ? 'fade-up' : ''}`}>
          <p className="section-label">{"// what I do"}</p>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            From idea to deployment — here's how I can help.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className={`services__banner ${isVisible ? 'fade-up' : ''}`}>
          <div className="services__banner-content">
            <h3>Have a project in mind?</h3>
            <p>Let's discuss your idea and build something great together.</p>
          </div>
          <a href="#contact" className="btn btn-primary services__banner-btn">
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
