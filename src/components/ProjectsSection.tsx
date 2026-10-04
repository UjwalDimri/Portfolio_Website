import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowSquareOut, Cpu, GitBranch, ShieldCheck, ArrowRight, SlidersHorizontal } from '@phosphor-icons/react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'AI & Scientific', 'Full Stack', 'Web Systems'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const flagship = PROJECTS.find((p) => p.id === 'heatwatch')!;
  const standardProjects = filteredProjects.filter((p) => activeFilter === 'All' ? p.id !== 'heatwatch' : true);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Cpu size={14} aria-hidden="true" />
            <span>My Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl text-pretty">
            Production-tested architectures, mathematical biometeorology models, and robust full-stack platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start md:self-auto overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              type="button"
              className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'text-zinc-950 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              {activeFilter === cat && (
                <motion.span
                  layout={!reduceMotion}
                  layoutId={reduceMotion ? undefined : 'project-filter-active'}
                  className="absolute inset-0 rounded-lg bg-emerald-500 shadow-sm"
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Flagship Feature Bento (HeatWatch) - Displayed when "All" or "AI & Scientific" is selected */}
      {(activeFilter === 'All' || activeFilter === 'AI & Scientific') && (
        <div className="mb-8 rounded-2xl glass-panel border border-emerald-500/30 overflow-hidden relative group">
          {/* Subtle Accent Glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 text-[11px] font-mono font-medium uppercase tracking-wider rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Smart India Hackathon Flagship
                </span>
                <span className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  SIH &bull; Biometeorology ML
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  <ShieldCheck size={13} aria-hidden="true" />
                  <span>40 Automated Tests</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {flagship.title}
                </h3>
                <p className="text-sm sm:text-base text-emerald-400/90 font-medium mt-1">
                  {flagship.subtitle}
                </p>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl text-pretty">
                Computes scientific Universal Thermal Climate Index (UTCI) from live atmospheric telemetry and layers a Random Forest model to personalize thermal risk into HTSI based on worker exertion, hydration, and occupational vulnerability.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 py-2 max-w-lg">
                <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-400 block">Automated Tests</span>
                  <span className="text-lg font-bold text-white font-mono tabular-nums">40 Suites</span>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-400 block">Telemetry APIS</span>
                  <span className="text-lg font-bold text-white font-mono">NASA / IMD</span>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-400 block">GIS Risk Heatmap</span>
                  <span className="text-lg font-bold text-white font-mono">Leaflet.js</span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {flagship.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                {flagship.liveUrl && (
                  <a
                    href={flagship.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>Launch Live Demo</span>
                    <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
                  </a>
                )}
                <button
                  onClick={() => onSelectProject(flagship)}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-colors cursor-pointer"
                >
                  <SlidersHorizontal size={14} aria-hidden="true" />
                  <span>Inspect Pipeline &amp; Tests</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Architecture Diagram Preview */}
            <div className="lg:col-span-5 bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-5 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400 font-medium">pipeline-architecture.sys</span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Feeds Active
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-300">
                  <div className="text-[10px] text-emerald-400 uppercase tracking-wide">Step 01 &bull; Telemetry Ingestion</div>
                  <div className="text-zinc-200 mt-0.5">Open-Meteo &bull; NASA POWER &bull; IMD API</div>
                </div>

                <div className="text-center text-zinc-600">&darr;</div>

                <div className="p-2.5 rounded bg-zinc-900/90 border border-emerald-500/20 text-zinc-300">
                  <div className="text-[10px] text-teal-400 uppercase tracking-wide">Step 02 &bull; Scientific Model</div>
                  <div className="text-zinc-200 mt-0.5">UTCI Polynomial Engine + Vapour Pressure</div>
                </div>

                <div className="text-center text-zinc-600">&darr;</div>

                <div className="p-2.5 rounded bg-zinc-900/90 border border-cyan-500/20 text-zinc-300">
                  <div className="text-[10px] text-cyan-400 uppercase tracking-wide">Step 03 &bull; Random Forest AI</div>
                  <div className="text-zinc-200 mt-0.5">Vulnerability &bull; Exertion &bull; HTSI Output</div>
                </div>

                <div className="text-center text-zinc-600">&darr;</div>

                <div className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-300">
                  <div className="text-[10px] text-amber-400 uppercase tracking-wide">Step 04 &bull; Citizen &amp; Admin Portal</div>
                  <div className="text-zinc-200 mt-0.5">Leaflet GIS Risk Map &bull; JWT Guarded</div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 flex justify-between">
                <span>Test Suite: 40/40 Passing</span>
                <span className="text-emerald-400 font-semibold">100% Coverage</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other Systems */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
        {standardProjects.map((project) => (
          <motion.div
            key={project.id}
            layout={!reduceMotion}
            initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12, scale: 0.97 }}
            className="flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7 border border-zinc-800/80 transition-all group"
            whileHover={reduceMotion ? undefined : { y: -7, scale: 1.01, transition: { type: 'spring', stiffness: 260, damping: 22 } }}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider rounded bg-zinc-800/90 text-zinc-300 border border-zinc-700/60">
                  {project.category}
                </span>
                <span className="text-xs text-zinc-400 font-mono">{project.period}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed text-pretty">
                {project.tagline}
              </p>

              {/* Bullet highlights */}
              <ul className="space-y-1.5 text-xs text-zinc-400 pt-1">
                {project.highlights.slice(0, 2).map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">&bull;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-800/60">
              <button
                onClick={() => onSelectProject(project)}
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-500 rounded cursor-pointer"
              >
                <span>System Architecture</span>
                <ArrowRight size={13} aria-hidden="true" />
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <span>Live App</span>
                  <ArrowSquareOut size={13} aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
