import React from 'react';
import { portfolio } from '../data/portfolio';
import { Flame, Clock, Award, Users } from 'lucide-react';
import './Hackathons.css';

export default function Hackathons() {
  const { hackathons } = portfolio;

  return (
    <section className="section-wrapper hackathons-section" aria-label="Hackathons Experience">
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="section-header">
          <div className="section-label">07 — SPRINT ENGINEERING</div>
          <h2 className="section-title">{hackathons.heading}</h2>
          <p className="section-subtitle">
            “{hackathons.intro}”
          </p>
        </div>

        {/* 2-Column Hackathon Cards */}
        <div className="hackathons-grid">
          {hackathons.items.map((hack, idx) => (
            <div key={idx} className="hackathon-card">
              
              <div className="hack-card-top">
                <div className="hack-badge-row">
                  <span className="hack-standing-pill">{hack.result}</span>
                  <span className="hack-tier-tag">{hack.badge}</span>
                </div>
                <span className="hack-year">{hack.year}</span>
              </div>

              <h3 className="hack-name">{hack.name}</h3>

              <div className="hack-takeaway-box">
                <span className="takeaway-kicker">Core Engineering Takeaway:</span>
                <p className="takeaway-text">{hack.takeaway}</p>
              </div>

              <div className="hack-footer-indicators">
                <div className="indicator-chip">
                  <Clock size={12} />
                  <span>36h Time Constraint</span>
                </div>
                <div className="indicator-chip">
                  <Users size={12} />
                  <span>Cross-functional Team</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
