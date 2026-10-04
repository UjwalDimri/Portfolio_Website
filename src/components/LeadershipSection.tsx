import React from 'react';
import { LEADERSHIP_ROLES } from '../data/portfolioData';
import { UsersThree, Trophy, Star, Sparkle, ArrowRight } from '@phosphor-icons/react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
          <UsersThree size={14} aria-hidden="true" />
          <span>Community Impact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Positions of Responsibility &amp; Leadership
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl text-pretty">
          Leading engineering teams, mentoring junior developers, and organizing technical symposiums at UPES.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEADERSHIP_ROLES.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl glass-panel p-6 border transition-all flex flex-col justify-between ${
              idx === 0
                ? 'border-emerald-500/40 bg-zinc-900/80 shadow-lg'
                : 'border-zinc-800/80 hover:border-zinc-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {item.tag}
                </span>
                {item.period && (
                  <span className="text-[11px] font-mono text-zinc-400">{item.period}</span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                {item.role}
              </h3>
              <p className="text-xs font-semibold text-emerald-400 font-mono mt-0.5">
                {item.organization}
              </p>

              <p className="text-xs text-zinc-300 leading-relaxed mt-3 text-pretty">
                {item.description}
              </p>
            </div>

            {idx === 0 && (
              <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <Sparkle size={13} aria-hidden="true" />
                <span>Executive Chapter Leadership</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
