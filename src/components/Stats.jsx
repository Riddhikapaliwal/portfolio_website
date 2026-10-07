import React from 'react';
import { portfolio } from '../data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import './Stats.css';

export default function Stats() {
  const { dsa, links } = portfolio;

  return (
    <section id="dsa" className="section-wrapper dsa-stark-section" aria-label="300+ LeetCode DSA Focus">
      <div className="container">
        
        {/* Section Label */}
        <span className="editorial-label">02 — PROBLEM SOLVING RIGOR</span>

        {/* Visually Dramatic Enormous Number (NO CARDS) */}
        <div className="dsa-hero-composition">
          
          <div className="dsa-number-display">
            <span className="giant-dsa-number">{dsa.number}</span>
            <div className="dsa-label-lockup">
              <span className="dsa-main-label">{dsa.label}</span>
              <span className="dsa-lang-badge">LANGUAGE // C++ (STL)</span>
            </div>
          </div>

          {/* Personal narrative and story */}
          <div className="dsa-narrative-split">
            <div className="dsa-story-column">
              <p className="dsa-story-body">
                {dsa.story}
              </p>
            </div>

            <div className="dsa-action-column">
              <div className="dsa-principles-list">
                <div className="dsa-principle-item">
                  <span className="principle-bullet">▪</span>
                  <span>Arrays • Two Pointers • HashMaps</span>
                </div>
                <div className="dsa-principle-item">
                  <span className="principle-bullet">▪</span>
                  <span>Binary Search • Trees • Graph BFS/DFS</span>
                </div>
                <div className="dsa-principle-item">
                  <span className="principle-bullet">▪</span>
                  <span>Dynamic Programming • Logic Invariants</span>
                </div>
              </div>

              <a
                href={links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-outline dsa-profile-btn"
                title="Verify on LeetCode"
              >
                <span>Verify on LeetCode</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
