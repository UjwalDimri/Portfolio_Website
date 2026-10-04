import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/60 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8 text-zinc-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Name and Status */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="font-semibold text-zinc-200">{PERSONAL_INFO.name}</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">&bull;</span>
          <span>B.Tech CSE (DevOps) &bull; UPES '29</span>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="GitHub Profile"
          >
            <GithubLogo size={16} aria-hidden="true" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="LinkedIn Profile"
          >
            <LinkedinLogo size={16} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Send Email"
          >
            <EnvelopeSimple size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Right Side: Back to top & copyright */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-500">&copy; 2026 Ujwal Dimri</span>
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Scroll back to top of the page"
          >
            <span>Top</span>
            <ArrowUp size={12} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
