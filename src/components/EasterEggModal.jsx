import React, { useState, useEffect, useRef } from 'react';
import { portfolio } from '../data/portfolio';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import './EasterEggModal.css';

export default function EasterEggModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'cmd', text: 'git status' },
    { type: 'output', text: 'On branch main\nYour working tree is clean. Ready for high-impact production code.' },
    { type: 'tip', text: 'Tip: Type "help", "whoami", "skills", "clear", or "sudo hire" to interact.' }
  ]);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // Auto focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom on new output
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'cmd', text: inputVal }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available commands:\n  whoami    - Developer overview\n  skills    - Core competencies & C++ problem solving\n  status    - Current career availability\n  sudo hire - Direct contact details\n  clear     - Clear terminal buffer\n  exit      - Close this terminal'
        });
        break;
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `${portfolio.personal.name} — ${portfolio.personal.role}\nBased in ${portfolio.personal.location}\nEducation: ${portfolio.personal.education.degree}, ${portfolio.personal.education.institution}`
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          text: 'LANGUAGES: C++, JavaScript, TypeScript, Python, SQL\nFRONTEND:  React.js, Next.js, Tailwind CSS\nBACKEND:   Node.js, Express, REST APIs, JWT\nDATABASE:  PostgreSQL, MongoDB, Firebase\nDSA:       300+ LeetCode problems solved in C++'
        });
        break;
      case 'status':
        newHistory.push({
          type: 'output',
          text: `Current Status: ${portfolio.personal.availability}\nOpen to: Software Engineer / Full Stack Developer roles.`
        });
        break;
      case 'sudo hire':
      case 'hire':
        newHistory.push({
          type: 'output',
          text: `ACCESS GRANTED.\nLet's get in touch!\nEmail:    ${portfolio.links.email}\nLinkedIn: ${portfolio.links.linkedin}\nGitHub:   ${portfolio.links.github}`
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'exit':
      case 'quit':
        onClose();
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `bash: command not found: ${cmd}. Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="terminal-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="terminal-modal-window" onClick={(e) => e.stopPropagation()}>

        {/* Terminal Titlebar */}
        <div className="terminal-modal-titlebar">
          <div className="titlebar-dots">
            <button type="button" className="dot-btn close" onClick={onClose} aria-label="Close terminal" />
            <span className="dot-btn min" />
            <span className="dot-btn max" />
          </div>
          <div className="titlebar-caption">
            <Terminal size={13} className="caption-icon" />
            <span>developer@Riddhika-paliwal: ~/interactive-shell</span>
          </div>
          <button type="button" className="titlebar-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={15} />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="terminal-modal-body" ref={bodyRef}>
          {history.map((entry, idx) => (
            <div key={idx} className={`history-entry ${entry.type}`}>
              {entry.type === 'cmd' && (
                <div className="cmd-prompt-line">
                  <span className="prompt-dir">~/portfolio</span>
                  <span className="prompt-dollar">$</span>
                  <span className="prompt-cmd">{entry.text}</span>
                </div>
              )}
              {entry.type !== 'cmd' && (
                <pre className="output-pre">{entry.text}</pre>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommand} className="active-command-form">
            <span className="prompt-dir">~/portfolio</span>
            <span className="prompt-dollar">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="terminal-text-input"
              autoFocus
              spellCheck="false"
              autoComplete="off"
              aria-label="Terminal command input"
              placeholder="type a command (e.g. whoami, help)..."
            />
            <button type="submit" className="terminal-submit-btn" aria-label="Execute command">
              <CornerDownLeft size={12} />
            </button>
          </form>
        </div>

        <div className="terminal-modal-footer">
          <span>Type <code>help</code> or <code>exit</code> to close • ESC also closes</span>
        </div>

      </div>
    </div>
  );
}
