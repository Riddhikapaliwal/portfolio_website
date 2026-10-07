import React from 'react';
import { portfolio } from '../data/portfolio';
import './Achievements.css';

export default function Achievements() {
  const { achievements } = portfolio;

  return (
    <section id="achievements" className="section-wrapper achievements-stark-section" aria-label="Key Achievements">
      <div className="container">
        
        {/* Section Header */}
        <div className="achievements-header-row">
          <span className="editorial-label">06 — PROOF & MILESTONES</span>
          <h2 className="achievements-editorial-title">Things I'm proud of.</h2>
          <p className="achievements-editorial-sub">
            Real accomplishments in algorithmic problem solving, national hackathons, leadership, and personal creative pursuits.
          </p>
        </div>

        {/* Editorial Giant Typography List (NO CARDS) */}
        <div className="giant-achievements-stack">
          {achievements.map((item, idx) => (
            <div key={idx} className="giant-achievement-row">
              {/* Giant Typography Stat / Metric */}
              <div className="achievement-stat-display">
                <span className="giant-stat-text">{item.bigStat}</span>
              </div>

              {/* Title & Context */}
              <div className="achievement-meta-display">
                <div className="achievement-title-line">
                  <h3 className="achievement-headline">{item.title}</h3>
                  <span className="achievement-year-stamp">{item.year}</span>
                </div>
                <p className="achievement-narrative-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
