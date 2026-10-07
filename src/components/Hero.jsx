import React from 'react';
import { portfolio } from '../data/portfolio';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { personal } = portfolio;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-editorial-section" aria-label="Introduction">
      <div className="container hero-editorial-container">
        
        {/* Asymmetrical Grid: Left Headline vs Right Info Column */}
        <div className="hero-asymmetric-grid">
          
          {/* Left Column: Stark Typography */}
          <div className="hero-left-col">
            <div className="hero-name-label">
              <span>{personal.name}</span>
            </div>

            <h1 className="hero-stacked-headline">
              <span className="headline-line">{personal.heroHeadline.line1}</span>
              <span className="headline-line">{personal.heroHeadline.line2}</span>
              <span className="headline-line">{personal.heroHeadline.line3}</span>
            </h1>
          </div>

          {/* Right Column: Small Editorial Metadata & Bio */}
          <div className="hero-right-col">
            <div className="meta-tag-block">
              <div className="meta-item">JAIPUR, INDIA</div>
              <div className="meta-item">CSE • FINAL YEAR</div>
              <div className="meta-item status-live">OPEN TO SOFTWARE ROLES</div>
            </div>

            <div className="hero-bio-block">
              <p className="hero-description-text">
                {personal.heroDescription}
              </p>
            </div>

            <div className="hero-status-subnote">
              <span className="subnote-bullet">■</span>
              <span>Available for full-time engineering and internship roles</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Action CTAs + Hairline Divider */}
        <div className="hero-bottom-actions">
          <div className="hero-btn-group">
            <button
              type="button"
              onClick={() => scrollTo('work')}
              className="btn-editorial-primary"
            >
              <span>View Selected Work</span>
              <ArrowDownRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="btn-editorial-outline"
            >
              <span>Get in Touch</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="hero-scroll-indicator">
            <span className="scroll-hint-text">SCROLL FOR WORK & BACKGROUND ↓</span>
          </div>
        </div>

      </div>
    </section>
  );
}
