import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Buildings, CalendarBlank } from '@phosphor-icons/react';

export const EducationSection: React.FC = () => {
  const { education } = PERSONAL_INFO;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
          <GraduationCap size={14} aria-hidden="true" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Education &amp; Academic Honors
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl text-pretty">
          Specializing in DevOps and Cloud Systems at UPES with consistent academic distinction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main University Card (8 cols) */}
        <div className="lg:col-span-8 rounded-2xl glass-panel p-6 sm:p-8 border border-emerald-500/30 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                DevOps Specialization
              </span>
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <CalendarBlank size={14} aria-hidden="true" />
                <span>Expected Graduation: {education.expectedGraduation}</span>
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {education.degree}
              </h3>
              <p className="text-base text-zinc-300 font-medium mt-1 flex items-center gap-2">
                <Buildings size={16} className="text-emerald-400" aria-hidden="true" />
                <span>{education.institution}</span>
              </p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed text-pretty">
              Rigorous curriculum spanning Linux systems administration, cloud architecture, containerization pipelines, data structures, algorithms, and full-stack software development.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">First Year Academic Standing:</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-emerald-400 font-mono tabular-nums">
                {education.cgpa}
              </span>
              <span className="text-[11px] font-mono text-zinc-400">CGPA</span>
            </div>
          </div>
        </div>

        {/* Secondary Schooling Card (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl glass-panel p-6 sm:p-7 border border-zinc-800 flex flex-col justify-between space-y-4">
          <div className="border-b border-zinc-800 pb-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Schooling Background
            </h3>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">SBM Public School, Rishikesh</p>
          </div>

          <div className="space-y-4">
            {education.schooling.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-200">{item.level}</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 tabular-nums">
                    {item.score}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400">{item.school}</div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-[11px] font-mono text-zinc-500">
            Strong STEM foundation in mathematics and computational sciences.
          </div>
        </div>
      </div>
    </section>
  );
};
