import React, { useState, useEffect } from 'react';
import { portfolio } from '../data/portfolio';
import { ArrowUpRight, Menu, X, Terminal, User } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenPhoto, onOpenCli }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['work', 'about', 'dsa', 'skills', 'experience', 'achievements', 'learning', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`minimal-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">

        {/* Left: Author Brand */}
        <div className="navbar-left">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="navbar-brand-name"
            aria-label="Riddhika Paliwal - Top"
          >
            {portfolio.personal.name}
          </a>
        </div>

        {/* Right: Minimal Typography Links */}
        <nav className="desktop-navbar-nav" aria-label="Main navigation">
          <ul className="nav-links-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`nav-text-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Resume Link */}
            <li>
              <a
                href={portfolio.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-resume-link"
                title="View Resume PDF"
              >
                <span>Resume</span>
                <ArrowUpRight size={13} className="arrow-icon" />
              </a>
            </li>

            {/* Quick triggers to reopen Photo / CLI intro */}
            <li className="intro-reopen-group">
              <button
                type="button"
                onClick={onOpenPhoto}
                className="icon-reopen-btn"
                title="View photo portrait"
                aria-label="View photo portrait"
              >
                <User size={14} />
              </button>
              <button
                type="button"
                onClick={onOpenCli}
                className="icon-reopen-btn"
                title="View CLI interface"
                aria-label="View CLI interface"
              >
                <Terminal size={14} />
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container mobile-drawer-inner">
          <ul className="mobile-links-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="mobile-text-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={portfolio.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-text-link mobile-resume"
              >
                Resume ↗
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-bottom">
            <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenPhoto(); }} className="mobile-alt-btn">
              View Portrait
            </button>
            <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenCli(); }} className="mobile-alt-btn">
              $ CLI Shell
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
