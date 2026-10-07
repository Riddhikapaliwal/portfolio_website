import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { contact, links, personal } = portfolio;

  const copyEmail = () => {
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="section-wrapper contact-editorial-section" aria-label="Contact and Links">
      <div className="container contact-editorial-container">

        {/* Section Marker */}
        <span className="editorial-label">08 — CONTACT & COLLABORATION</span>

        {/* Large Typographic Statement (NO CARD) */}
        <div className="contact-main-grid">

          {/* Left Column: Enormous Text */}
          <div className="contact-headline-col">
            <h2 className="giant-contact-headline">
              {contact.headingLines.map((line, idx) => (
                <span key={idx} className="giant-contact-line">{line}</span>
              ))}
            </h2>

            <div className="contact-questions-block">
              {contact.questions.map((q, idx) => (
                <div key={idx} className="question-item">{q}</div>
              ))}
            </div>

            <p className="contact-closing-note">
              {contact.closingNote}
            </p>
          </div>

          {/* Right Column: Editorial Links List */}
          <div className="contact-links-col">
            <div className="editorial-links-stack">

              {/* Email Link + Copy */}
              <div className="editorial-link-item-wrap">
                <a
                  href={`mailto:${links.email}`}
                  className="editorial-big-link"
                  title="Send email"
                >
                  <span>EMAIL</span>
                  <ArrowUpRight size={22} className="link-arrow" />
                </a>
                <div className="link-sub-action">
                  <span className="email-raw-text">{links.email}</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="copy-text-btn"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <span className="copied-status">✓ COPIED</span>
                    ) : (
                      <span>[COPY]</span>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="editorial-link-item-wrap">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-big-link"
                  title="Open LinkedIn Profile"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight size={22} className="link-arrow" />
                </a>
                <span className="link-handle-hint">/in/Riddhika-paliwal</span>
              </div>

              {/* GitHub */}
              <div className="editorial-link-item-wrap">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-big-link"
                  title="Open GitHub Profile"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight size={22} className="link-arrow" />
                </a>
                <span className="link-handle-hint">@Riddhikapaliwal</span>
              </div>

              {/* LeetCode */}
              <div className="editorial-link-item-wrap">
                <a
                  href={links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-big-link"
                  title="Open LeetCode Profile"
                >
                  <span>LEETCODE</span>
                  <ArrowUpRight size={22} className="link-arrow" />
                </a>
                <span className="link-handle-hint">300+ Problems Solved</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
