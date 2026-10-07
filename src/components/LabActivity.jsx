import React from 'react';
import { portfolio } from '../data/portfolio';
import { Code2, ArrowUpRight, Activity, GitCommit, Flame } from 'lucide-react';
import { GithubIcon } from './Icons';
import './LabActivity.css';

export default function LabActivity() {
  const { links } = portfolio;

  // Generate a realistic 52-week contribution heat matrix pattern (client-side rendered, no flaky API calls)
  const weeks = 28;
  const daysPerWeek = 7;
  
  // Deterministic seed pattern showing active consistency
  const getActivityLevel = (weekIdx, dayIdx) => {
    const seed = (weekIdx * 7 + dayIdx * 13) % 29;
    if (seed < 8) return 0; // inactive
    if (seed < 16) return 1; // low
    if (seed < 23) return 2; // medium
    return 3; // high
  };

  return (
    <section className="section-wrapper lab-section" aria-label="Coding Activity & Lab">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">09 — LAB & DAILY PRACTICE</div>
          <h2 className="section-title">Currently in the lab.</h2>
          <p className="section-subtitle">
            Consistent coding activity, algorithm problem solving, and public repository contributions.
          </p>
        </div>

        {/* Lab Card Container */}
        <div className="lab-card">
          
          {/* Top Row: Links to GitHub and LeetCode */}
          <div className="lab-header-row">
            <div className="lab-status-badge">
              <Activity size={14} className="activity-pulse-icon" />
              <span>Active Sprint • Daily Problem Solving</span>
            </div>

            <div className="lab-links-group">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary lab-btn"
                title="View GitHub Profile"
              >
                <GithubIcon size={15} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent-outline lab-btn"
                title="View LeetCode Profile"
              >
                <Code2 size={15} />
                <span>LeetCode Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Activity Heat Matrix Visual */}
          <div className="activity-matrix-container">
            <div className="matrix-title-row">
              <span className="matrix-title">
                <GitCommit size={14} />
                <span>Simulated Activity Cadence (Trailing 28 Weeks)</span>
              </span>
              <div className="matrix-legend">
                <span className="legend-text">Less</span>
                <span className="heat-box heat-0"></span>
                <span className="heat-box heat-1"></span>
                <span className="heat-box heat-2"></span>
                <span className="heat-box heat-3"></span>
                <span className="legend-text">More</span>
              </div>
            </div>

            <div className="heatmap-grid" role="img" aria-label="Contribution activity grid">
              {Array.from({ length: weeks }).map((_, wIdx) => (
                <div key={wIdx} className="heatmap-column">
                  {Array.from({ length: daysPerWeek }).map((_, dIdx) => {
                    const level = getActivityLevel(wIdx, dIdx);
                    return (
                      <span 
                        key={dIdx} 
                        className={`heat-cell heat-${level}`}
                        title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${level > 0 ? `${level * 2} commits / problems` : 'Rest day'}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Footnote */}
          <div className="lab-metrics-strip">
            <div className="lab-metric-chip">
              <span className="chip-key">Primary Language</span>
              <span className="chip-val">C++ (GCC 11+)</span>
            </div>
            <div className="lab-metric-chip">
              <span className="chip-key">Problem Target</span>
              <span className="chip-val">Graphs & Dynamic Programming</span>
            </div>
            <div className="lab-metric-chip">
              <span className="chip-key">Active Stack</span>
              <span className="chip-val">React + Next.js + Node</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
