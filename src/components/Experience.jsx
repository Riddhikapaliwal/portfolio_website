import React from 'react';
import { portfolio } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="section-wrapper experience-timeline-section" aria-label="Work Experience">
      <div className="container">
        
        {/* Section Header */}
        <div className="experience-header-block">
          <span className="editorial-label">05 — EXPERIENCE</span>
          <h2 className="experience-editorial-title">Where I've contributed.</h2>
          <p className="experience-editorial-sub">
            Practical engineering experience writing production code, participating in reviews, and deploying features.
          </p>
        </div>

        {/* Minimal Vertical Timeline (Lines, Not Cards) */}
        <div className="minimal-vertical-timeline">
          {experience.map((item, idx) => (
            <div key={idx} className="timeline-entry-row">
              {/* Left Column: Year & Period */}
              <div className="timeline-year-column">
                <span className="timeline-big-year">{item.year}</span>
                <span className="timeline-period-text">{item.period}</span>
                <span className="timeline-loc-text">{item.location}</span>
              </div>

              {/* Center Line Marker */}
              <div className="timeline-spine-column">
                <span className="spine-dot"></span>
                <span className="spine-line"></span>
              </div>

              {/* Right Column: Role, Company & Bulleted Deliverables */}
              <div className="timeline-details-column">
                <div className="role-company-lockup">
                  <h3 className="timeline-role-title">{item.role}</h3>
                  <div className="timeline-company-name">{item.company}</div>
                </div>

                <div className="timeline-work-block">
                  <span className="block-label">WHAT I BUILT & DELIVERED</span>
                  <ul className="timeline-bullets-list">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="timeline-bullet-item">
                        <span className="bullet-dash">—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-learnings-block">
                  <span className="block-label">WHAT I LEARNED</span>
                  <p className="learned-text">{item.learned}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
