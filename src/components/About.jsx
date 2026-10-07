import React from 'react';
import { portfolio } from '../data/portfolio';
import './About.css';

export default function About() {
  const { about, personal } = portfolio;

  return (
    <section id="about" className="section-wrapper about-editorial-section" aria-label="About Riddhika Paliwal">
      <div className="container">

        {/* Section Marker */}
        <span className="editorial-label">01 — ABOUT</span>

        {/* Editorial Two-Column Layout (NO CARDS) */}
        <div className="about-editorial-grid">

          {/* Left Column: Heading & Large Narrative Paragraphs */}
          <div className="about-text-column">
            <h2 className="about-large-heading">{about.heading}</h2>

            <div className="about-narrative-flow">
              {about.paragraphs.map((para, idx) => (
                <p key={idx} className="about-lead-para">
                  {para}
                </p>
              ))}
            </div>

            {/* Academic Footnote */}
            <div className="about-education-line">
              <span className="edu-tag">ACADEMIC BACKGROUND //</span>
              <span className="edu-content">
                {personal.education.degree} — <strong>{personal.education.institution}</strong> ({personal.education.period})
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Note "Currently figuring out" */}
          <div className="about-note-column">
            <div className="editorial-note-block">
              <div className="note-header-line">
                <span className="note-title">{about.figuringOutNote.title}</span>
                <span className="note-year">2026</span>
              </div>

              <ul className="note-checklist">
                {about.figuringOutNote.items.map((item, idx) => (
                  <li key={idx} className="note-check-item">
                    <span className="arrow-bullet">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="note-bottom-quote">
                “I am still learning, but I build seriously.”
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
