import React from 'react';
import { portfolio } from '../data/portfolio';
import './Philosophy.css';

export default function Philosophy() {
  const { learningGoals } = portfolio;

  return (
    <section id="learning" className="section-wrapper learning-snapshot-section" aria-label="Current Learning Goals">
      <div className="container">
        
        {/* Section Header */}
        <div className="learning-header-block">
          <span className="editorial-label">07 — CURRENT SNAPSHOT</span>
          <h2 className="learning-editorial-title">What I'm figuring out.</h2>
          <p className="learning-editorial-sub">
            A snapshot of where my focus and curiosity are directed right now — moving beyond tutorial code into production fundamentals.
          </p>
        </div>

        {/* 4-Column Editorial Matrix */}
        <div className="learning-matrix-grid">
          {learningGoals.map((item) => (
            <div key={item.num} className="learning-goal-item">
              <div className="goal-top-marker">
                <span className="goal-num">{item.num} //</span>
              </div>
              <h3 className="goal-topic-title">{item.topic}</h3>
              <p className="goal-detail-text">{item.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
