import React from 'react';
import { portfolio } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  const { skillsIndex } = portfolio;

  return (
    <section id="skills" className="section-wrapper skills-directory-section" aria-label="Technical Skills Index">
      <div className="container">
        
        {/* Section Header */}
        <div className="skills-header-row">
          <span className="editorial-label">04 — TECHNICAL INDEX</span>
          <h2 className="skills-editorial-title">What I work with.</h2>
          <p className="skills-editorial-sub">
            A structured directory of tools, languages, and core concepts I can confidently discuss and defend.
          </p>
        </div>

        {/* Typographic Directory / Index List (NO CARDS, NO LOGO WALL) */}
        <div className="skills-index-list">
          {skillsIndex.map((item) => (
            <div key={item.index} className="skills-index-row">
              {/* Index & Category Name */}
              <div className="skills-cat-label-col">
                <span className="skills-cat-num">{item.index} /</span>
                <span className="skills-cat-name">{item.category}</span>
              </div>

              {/* Monospace Skills String with middle dots */}
              <div className="skills-cat-content-col">
                <span className="skills-items-string">{item.skills}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Integrity Footnote */}
        <div className="skills-footer-note">
          <span className="footnote-prefix">// INDEX NOTE:</span>
          <span>No inflated skill bars or logo grids. Every technology listed has been used in actual projects or algorithmic problem solving.</span>
        </div>

      </div>
    </section>
  );
}
