import React, { useEffect, useRef } from 'react';
import { Project } from '../data/portfolioData';
import { X, ArrowSquareOut, CheckCircle, Cpu, CloudCheck, ShieldCheck } from '@phosphor-icons/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto overscroll-contain animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl bg-[#121217] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                {project.category}
              </span>
              <span className="text-xs text-zinc-400 font-mono">{project.period}</span>
            </div>
            <h2 id="modal-project-title" className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-300 mt-0.5">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Close project details modal"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Tagline / Overview */}
        <p className="text-zinc-200 text-sm leading-relaxed">
          {project.tagline}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
              <div className="text-xs text-zinc-400">{m.label}</div>
              <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5 tabular-nums">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & Pipeline (if available) */}
        {project.architecture && (
          <div className="space-y-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Cpu size={16} aria-hidden="true" />
              <span>Core System Architecture &amp; Data Pipeline</span>
            </h3>

            <div className="space-y-2">
              {project.architecture.pipeline.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-mono text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-zinc-800/80 grid sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-zinc-400 block mb-1 font-mono text-[11px]">Telemetry Feeds:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.architecture.apis.map((api, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 text-[11px] font-mono">
                      {api}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-zinc-400 block mb-1 font-mono text-[11px]">Validation &amp; Tests:</span>
                <p className="text-zinc-300 text-[11px]">{project.architecture.testing}</p>
              </div>
            </div>
          </div>
        )}

        {/* Highlights List */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Technical Engineering Highlights
          </h3>
          <ul className="space-y-2">
            {project.highlights.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Technologies Used</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-800/80 text-zinc-200 border border-zinc-700/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <div className="text-xs text-zinc-400">
            Role: <span className="text-zinc-200 font-medium">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Launch Live Demo</span>
                <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
              </a>
            )}
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
