import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  MagnifyingGlass,
  ArrowRight,
  Code,
  Briefcase,
  SquaresFour,
  UsersThree,
  Trophy,
  FileText,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  ArrowSquareOut,
  X
} from '@phosphor-icons/react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions = [
    { id: 'projects', title: 'Explore Featured Projects', category: 'Navigation', icon: <Code size={16} />, action: () => { window.location.hash = '#projects'; onClose(); } },
    { id: 'heatwatch', title: 'HeatWatch SIH Live Demo', category: 'Live Demo', icon: <ArrowSquareOut size={16} />, action: () => { window.open('https://heatwatch-14t5.onrender.com', '_blank'); onClose(); } },
    { id: 'volunteer', title: 'Volunteer System Live Demo', category: 'Live Demo', icon: <ArrowSquareOut size={16} />, action: () => { window.open('https://volunteer-registration-system-for.onrender.com', '_blank'); onClose(); } },
    { id: 'experience', title: 'View Work & Internship Experience', category: 'Navigation', icon: <Briefcase size={16} />, action: () => { window.location.hash = '#experience'; onClose(); } },
    { id: 'skills', title: 'Browse Technical Skills Matrix', category: 'Navigation', icon: <SquaresFour size={16} />, action: () => { window.location.hash = '#skills'; onClose(); } },
    { id: 'leadership', title: 'Positions of Responsibility', category: 'Navigation', icon: <UsersThree size={16} />, action: () => { window.location.hash = '#leadership'; onClose(); } },
    { id: 'achievements', title: 'Hackathons & Honors', category: 'Navigation', icon: <Trophy size={16} />, action: () => { window.location.hash = '#achievements'; onClose(); } },
    { id: 'resume', title: 'Open Full Verified Resume', category: 'Document', icon: <FileText size={16} />, action: () => { onClose(); onOpenResume(); } },
    { id: 'contact', title: 'Get in Touch / Send Message', category: 'Navigation', icon: <EnvelopeSimple size={16} />, action: () => { window.location.hash = '#contact'; onClose(); } },
    { id: 'copy-email', title: `Copy Email (${PERSONAL_INFO.email})`, category: 'Quick Action', icon: <EnvelopeSimple size={16} />, action: () => { navigator.clipboard.writeText(PERSONAL_INFO.email); alert('Email copied to clipboard!'); onClose(); } },
    { id: 'github', title: 'Visit GitHub Profile', category: 'Social', icon: <GithubLogo size={16} />, action: () => { window.open(PERSONAL_INFO.github, '_blank'); onClose(); } },
    { id: 'linkedin', title: 'Connect on LinkedIn', category: 'Social', icon: <LinkedinLogo size={16} />, action: () => { window.open(PERSONAL_INFO.linkedin, '_blank'); onClose(); } },
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent, but if toggle needed
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-[#121217] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800">
          <MagnifyingGlass size={18} className="text-zinc-400 flex-shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or jump to section…"
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-400 outline-none"
            aria-label="Search command options"
          />
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-400 rounded border border-zinc-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-400">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={action.id}
                  onClick={action.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/25'
                      : 'text-zinc-300 hover:bg-zinc-800/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? 'text-emerald-400' : 'text-zinc-400'}>
                      {action.icon}
                    </span>
                    <span className="font-medium">{action.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {action.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 border-t border-zinc-800/80 bg-zinc-950/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span>&uarr;&darr; Navigate</span>
            <span>&crarr; Select</span>
          </div>
          <span>Ujwal Dimri &bull; Portfolio</span>
        </div>
      </div>
    </div>
  );
};
