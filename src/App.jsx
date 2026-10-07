import React, { useState, useEffect } from 'react';
import { SHOW_INTRO_EVERY_VISIT } from './data/portfolio';
import PhotoIntro from './components/PhotoIntro';
import CliIntro from './components/CliIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Opening Experience State: 'photo' | 'cli' | 'none'
  const [introStep, setIntroStep] = useState('none');

  useEffect(() => {
    // Check if intro should be displayed
    const hasSeenIntro = localStorage.getItem('portfolio_intro_seen');

    if (SHOW_INTRO_EVERY_VISIT || !hasSeenIntro) {
      setIntroStep('photo');
    } else {
      setIntroStep('none');
    }

    // Friendly console log for inspecting recruiters/engineers
    console.log(
      '%c✦ Riddhika Paliwal — Full Stack Developer & Problem Solver',
      'color: #000000; font-family: monospace; font-size: 14px; font-weight: bold;'
    );
    console.log(
      'color: #666666; font-family: monospace; font-size: 12px;'
    );
  }, []);

  // Handler: close Photo intro -> move to CLI intro
  const handleClosePhoto = () => {
    setIntroStep('cli');
  };

  // Handler: close CLI intro -> enter portfolio & remember in localStorage
  const handleCloseCli = () => {
    localStorage.setItem('portfolio_intro_seen', 'true');
    setIntroStep('none');
  };

  // Handler: Skip all intros immediately
  const handleSkipAll = () => {
    localStorage.setItem('portfolio_intro_seen', 'true');
    setIntroStep('none');
  };

  return (
    <div className="portfolio-app-root">
      {/* Stage 1: Photo Opening Experience */}
      {introStep === 'photo' && (
        <PhotoIntro
          onClose={handleClosePhoto}
          onSkipAll={handleSkipAll}
        />
      )}

      {/* Stage 2: CLI Opening Experience */}
      {introStep === 'cli' && (
        <CliIntro
          onClose={handleCloseCli}
        />
      )}

      {/* Main Portfolio Interface */}
      {introStep === 'none' && (
        <>
          <Navbar
            onOpenPhoto={() => setIntroStep('photo')}
            onOpenCli={() => setIntroStep('cli')}
          />

          <main id="main-content">
            {/* Hero (Asymmetrical, Stark Typography) */}
            <Hero />

            {/* 01 — About (Two-column narrative, no card) */}
            <About />

            {/* 02 — 300+ DSA Section (Enormous Typography, no card) */}
            <Stats />

            {/* 03 — Selected Work (Non-identical layouts & frames) */}
            <Projects />

            {/* 04 — Technical Stack (Typographic Directory Index, no logo wall) */}
            <Skills />

            {/* 05 — Experience (Vertical Line Timeline, no cards) */}
            <Experience />

            {/* 06 — Achievements (Giant Numbers, no cards) */}
            <Achievements />

            {/* 07 — What I'm Figuring Out (Current Learning Snapshot) */}
            <Philosophy />

            {/* 08 — Contact (Large Expressive Editorial Typography, no card) */}
            <Contact />
          </main>

          {/* Footer (Monochrome Colophon) */}
          <Footer
            onOpenPhoto={() => setIntroStep('photo')}
            onOpenCli={() => setIntroStep('cli')}
          />
        </>
      )}
    </div>
  );
}
