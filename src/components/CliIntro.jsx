import React, { useEffect } from 'react';
import { portfolio } from '../data/portfolio';
import './CliIntro.css';

export default function CliIntro({ onClose }) {
  const { personal } = portfolio;

  // ESC key listener to close intro
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="cli-intro-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="CLI Introduction"
    >
      <div className="cli-intro-window">

        {/* Minimal Terminal Header */}
        <div className="cli-window-header">
          <div className="cli-header-left">
            <span className="cli-terminal-indicator">SHELL // v2.6</span>
            <span className="cli-window-title">session: Riddhika-paliwal</span>
          </div>

          <div className="cli-header-actions">
            <button
              type="button"
              className="cli-skip-btn"
              onClick={onClose}
              title="Skip directly to portfolio"
            >
              Skip →
            </button>
            <button
              type="button"
              className="cli-close-btn"
              onClick={onClose}
              aria-label="Close terminal and open portfolio"
              title="Close (ESC)"
            >
              ×
            </button>
          </div>
        </div>

        {/* Monospace Body on Pure White */}
        <div className="cli-window-body">
          <div className="cli-block">
            <div className="cli-prompt-line">
              <span className="cli-dollar">$</span>
              <span className="cli-cmd">whoami</span>
            </div>
            <div className="cli-output bold-output">{personal.name}</div>
          </div>

          <div className="cli-block">
            <div className="cli-prompt-line">
              <span className="cli-dollar">$</span>
              <span className="cli-cmd">role</span>
            </div>
            <div className="cli-output">{personal.role}</div>
          </div>

          <div className="cli-block">
            <div className="cli-prompt-line">
              <span className="cli-dollar">$</span>
              <span className="cli-cmd">location</span>
            </div>
            <div className="cli-output">{personal.location}</div>
          </div>

          <div className="cli-block">
            <div className="cli-prompt-line">
              <span className="cli-dollar">$</span>
              <span className="cli-cmd">currently</span>
            </div>
            <div className="cli-output mono-highlight">{personal.currentlySummary}</div>
          </div>

          <div className="cli-block">
            <div className="cli-prompt-line">
              <span className="cli-dollar">$</span>
              <span className="cli-cmd">status</span>
            </div>
            <div className="cli-output">{personal.status}</div>
          </div>

          {/* Active blinking cursor line */}
          <div className="cli-cursor-line">
            <span className="cli-dollar">$</span>
            <span className="cli-prompt-text">enter_portfolio</span>
            <span className="cli-blink-cursor">_</span>
          </div>
        </div>

        {/* Action footer */}
        <div className="cli-window-footer">
          <button
            type="button"
            className="cli-enter-portfolio-btn"
            onClick={onClose}
          >
            <span>Enter Portfolio</span>
            <span className="arrow-icon">→</span>
          </button>
          <span className="cli-esc-hint">Press ESC or click × to exit</span>
        </div>

      </div>
    </div>
  );
}
