import React from 'react';
import { portfolio } from '../data/portfolio';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

export default function Projects() {
  const { projects } = portfolio;

  // Render bespoke stylized UI previews tailored to each project's distinct frame & shape
  const renderVisualMockup = (project) => {
    if (project.id === "01") {
      // Loop Out: Sharp Square Frame UI Mockup
      return (
        <div className="project-frame square-frame">
          <div className="frame-header-simple">
            <span className="frame-tag">LOOP_OUT // CAMPUS_SYSTEM</span>
            <span className="frame-dot"></span>
          </div>

          <div className="frame-canvas loopout-canvas">
            <div className="campus-sim-card">
              <div className="sim-user-row">
                <div className="sim-avatar">RP</div>
                <div>
                  <div className="sim-name">Riddhika Paliwal</div>
                  <div className="sim-sub">B.Tech CSE • Final Year</div>
                </div>
                <div className="sim-rep">★ 4.9 REP</div>
              </div>

              <div className="sim-skills-row">
                <span className="sim-skill-chip">C++ (42)</span>
                <span className="sim-skill-chip">React (38)</span>
                <span className="sim-skill-chip">DSA (56)</span>
              </div>

              <div className="sim-post-box">
                <div className="sim-post-tag">CAMPUS FEED</div>
                <div className="sim-post-body">
                  "Looking for 1 backend collaborator for national hackathon qualifier round."
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === "02") {
      // Messenger: Slightly Rounded Frame UI Mockup
      return (
        <div className="project-frame rounded-frame">
          <div className="frame-header-simple">
            <span className="frame-tag">MESSENGER // REALTIME_WEBSOCKET</span>
            <span className="frame-status">ACTIVE</span>
          </div>

          <div className="frame-canvas messenger-canvas">
            <div className="chat-sim-thread">
              <div className="chat-msg incoming">
                <span className="msg-author">Aditya [14:32]</span>
                <span className="msg-bubble">Did you verify the optimistic update rollback if the database transaction fails?</span>
              </div>

              <div className="chat-msg outgoing">
                <span className="msg-author">You [14:33]</span>
                <span className="msg-bubble">Yes, wrapped Prisma mutation in transaction isolation and verified socket sync.</span>
              </div>

              <div className="chat-typing-line">
                <span className="typing-pulse"></span>
                <span className="typing-text">Pusher channel: connected • 4 peers active</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === "03") {
      // NewsAgent: Browser Window Minimal Frame Mockup
      return (
        <div className="project-frame browser-window-frame">
          <div className="browser-chrome-bar">
            <div className="browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="browser-address">localhost:8000/api/v1/research-agent</div>
            <span className="browser-status-chip">IN PROGRESS</span>
          </div>

          <div className="frame-canvas browser-canvas">
            <div className="agent-pipeline-view">
              <div className="agent-query-box">
                <span className="query-label">INPUT:</span>
                <span className="query-val">"Distributed Consensus & Raft vs Paxos"</span>
              </div>

              <div className="agent-pipeline-flow">
                <div className="pipeline-step completed">
                  <span className="step-idx">01</span> Ingest arXiv Feeds
                </div>
                <div className="pipeline-step completed">
                  <span className="step-idx">02</span> Vector Indexing & Deduplication
                </div>
                <div className="pipeline-step active">
                  <span className="step-idx">03</span> FastAPI Summary Generation...
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="work" className="section-wrapper projects-editorial-section" aria-label="Selected Work">
      <div className="container">

        {/* Section Header */}
        <div className="projects-header-block">
          <span className="editorial-label">03 — SELECTED WORK</span>
          <h2 className="projects-main-title">Things I've built.</h2>
          <p className="projects-main-subtitle">
            Projects where I learned by actually building to understand how software works.
          </p>
        </div>

        {/* Projects List with Intentionally Different Compositions */}
        <div className="projects-stack">
          {projects.map((project) => {
            const isReversed = project.layoutType === 'visual-left-text-right';
            const isNarrow = project.layoutType === 'narrow-editorial';

            return (
              <article
                key={project.id}
                className={`editorial-project-row ${isReversed ? 'row-reversed' : ''} ${isNarrow ? 'row-narrow' : ''}`}
              >
                {/* Text Content Column */}
                <div className="project-text-column">
                  <div className="project-num-marker">
                    <span>{project.numberStr}</span>
                    {project.status && (
                      <span className="project-dev-badge">{project.status}</span>
                    )}
                  </div>

                  <h3 className="project-headline-title">{project.title}</h3>
                  <p className="project-lead-desc">{project.description}</p>

                  <div className="project-tech-line">
                    <span className="tech-kicker">STACK //</span>
                    <span className="tech-items">{project.techStack}</span>
                  </div>

                  {/* "WHAT I BUILT" Features list */}
                  <div className="what-i-built-block">
                    <span className="built-heading">WHAT I BUILT</span>
                    <ul className="built-items-list">
                      {project.whatIBuilt.map((feat, fIdx) => (
                        <li key={fIdx} className="built-item">
                          <span className="bullet-arrow">→</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Links */}
                  <div className="project-action-bar">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="Inspect GitHub"
                    >
                      <GithubIcon size={15} />
                      <span>GitHub</span>
                    </a>

                    {project.liveUrl && project.status !== 'In Progress' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn live"
                        title="Open Demo"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Preview Column with Unique Shape Treatment */}
                <div className="project-visual-column">
                  {renderVisualMockup(project)}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
