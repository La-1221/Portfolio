import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { sendContactMessage } from '../utils/api';
import { PROFILE } from '../utils/data';
import './Contact.css';

const INITIAL = { name: '', email: '', subject: '', message: '' };

const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/\s/g, '')}`,
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/La-1221',
    href: PROFILE.github,
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/lakachew-ferede',
    href: PROFILE.linkedin,
  },
];

const Contact = () => {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const { ref, isVisible } = useScrollReveal();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      await sendContactMessage(form);
      setStatus('success');
      setForm(INITIAL);
    } catch (err) {
      setStatus('error');
      const validationErrors = err.response?.data?.errors;
      if (validationErrors && Array.isArray(validationErrors)) {
        setErrorMsg(validationErrors.map((e) => e.msg).join(', '));
      } else {
        setErrorMsg(
          err.response?.data?.message || err.message || 'Something went wrong. Please try again.'
        );
      }
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div ref={ref} className={`contact__header ${isVisible ? 'fade-up' : ''}`}>
          <p className="section-label">{"// get in touch"}</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Open to software development, IT support, and data analysis roles.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info panel */}
          <div className="contact__info">
            <p className="contact__info-text">
              I'm a Computer Science graduate actively seeking opportunities
              to contribute to impactful products. Whether you need a
              dedicated developer or want to discuss a project — let's connect.
            </p>

            <div className="contact__info-items">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact__info-item"
                >
                  <span className="contact__info-icon">{item.icon}</span>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__availability">
              <span className="contact__avail-dot" />
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Form */}
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="contact__input"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                disabled={status === 'loading'}
              />
            </div>

            {status === 'success' && (
              <div className="contact__alert contact__alert--success">
                ✓ Message sent! I'll get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__alert contact__alert--error">
                ✗ {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <span className="contact__spinner" />
                  Sending...
                </>
              ) : (
                <>Send Message →</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
