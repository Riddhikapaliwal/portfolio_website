import React, { useEffect } from 'react';
import { portfolio, PROFILE_IMAGE_PATH } from '../data/portfolio';
import profileImg from '../assets/profile.jpg';
import './PhotoIntro.css';

export default function PhotoIntro({ onClose, onSkipAll }) {
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
      className="photo-intro-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome Introduction"
    >
      {/* Top controls: Skip option */}
      <div className="photo-intro-topbar">
        <button
          type="button"
          className="skip-intro-text-btn"
          onClick={onSkipAll}
          title="Skip intro and go directly to portfolio"
        >
          Skip Intro →
        </button>
      </div>

      <div className="photo-intro-center-stage">

        {/* Photo Container with Close Button */}
        <div className="portrait-composition">

          {/* Circular Frame with Black Border */}
          <div className="portrait-circle-frame">
            <img
              src={profileImg || PROFILE_IMAGE_PATH}
              alt="Riddhika Paliwal - Editorial Portrait"
              className="portrait-img"
              loading="eager"
            />
          </div>

          {/* Close button positioned near the photo, not on face */}
          <button
            type="button"
            className="photo-close-btn"
            onClick={onClose}
            aria-label="Close photo introduction and continue"
            title="Close (or press ESC)"
          >
            ×
          </button>
        </div>

        {/* Name and subtitle underneath */}
        <div className="portrait-caption">
          <h1 className="caption-name">{personal.name}</h1>
          <p className="caption-subtitle">{personal.subtitle}</p>
        </div>

        {/* Gentle hint to proceed */}
        <div className="intro-proceed-hint">
          <button type="button" className="continue-prompt-btn" onClick={onClose}>
            <span>Continue</span>
            <span className="prompt-arrow">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}
