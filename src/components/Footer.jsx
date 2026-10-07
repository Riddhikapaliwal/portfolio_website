import React from 'react';
import { portfolio } from '../data/portfolio';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenPhoto, onOpenCli }) {
  const { footer, links } = portfolio;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer" aria-label="Colophon and Footer">
      <div className="container footer-content-wrap">

        {/* Top Line */}
        <div className="footer-meta-line">
          <div className="footer-author-brand">
            <span className="footer-brand-title">{footer.name}</span>
            <span className="footer-colophon">({footer.colophon})</span>
          </div>

          <button
            type="button"
            className="footer-top-trigger"
            onClick={scrollToTop}
            title="Return to top"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <span>© {footer.year} Riddhika Paliwal</span>
            <span className="legal-dot">•</span>
            <span>Jaipur, India</span>
          </div>

          <div className="footer-nav-links">
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="footer-text-link">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="footer-text-link">
              LinkedIn
            </a>
            <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="footer-text-link">
              LeetCode
            </a>
            <a href={links.resume} target="_blank" rel="noopener noreferrer" className="footer-text-link">
              Resume PDF
            </a>
            <button type="button" onClick={onOpenPhoto} className="footer-alt-link">
              Portrait
            </button>
            <button type="button" onClick={onOpenCli} className="footer-alt-link">
              $ CLI
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
