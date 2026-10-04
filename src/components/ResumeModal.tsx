import React, { useEffect, useRef } from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, LEADERSHIP_ROLES, ACHIEVEMENTS } from '../data/portfolioData';
import { X, Printer, ArrowSquareOut, DownloadSimple, CheckCircle } from '@phosphor-icons/react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto overscroll-contain animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-[#101014] text-zinc-100 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-10 space-y-8 max-h-[92vh] overflow-y-auto print:max-h-none print:overflow-visible print:border-none print:p-0 print:bg-white print:text-black"
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <h2 id="resume-modal-title" className="text-sm font-mono uppercase tracking-wider text-zinc-300">
              Verified Curriculum Vitae
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer size={15} aria-hidden="true" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="space-y-7 text-xs sm:text-sm">
          {/* Header */}
          <div className="text-center space-y-1.5 border-b border-zinc-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-400 print:text-zinc-700 font-mono">
              <span>{PERSONAL_INFO.phone}</span>
              <span>&bull;</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 print:text-black underline">
                {PERSONAL_INFO.email}
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-emerald-400 print:text-black underline">
                LinkedIn
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-emerald-400 print:text-black underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-black font-bold">
              Summary
            </h3>
            <p className="text-zinc-300 print:text-zinc-800 leading-relaxed">
              Aspiring DevSecOps Engineer and B.Tech Computer Science student (DevOps Specialization) at UPES with hands-on experience in full-stack and AI-driven web development. Skilled in Node.js, Express.js, MongoDB, MySQL, Linux, Git, and CI/CD workflows. Currently serving as Associate Technical Head at the IET UPES Chapter and contributing to enterprise web platform development at Xebia. Interested in secure software delivery, cloud infrastructure, and reliable systems.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-black font-bold">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 print:text-zinc-800 text-xs">
              <div><strong className="text-white print:text-black">Languages:</strong> C, Python, JavaScript, SQL</div>
              <div><strong className="text-white print:text-black">Web &amp; Backend:</strong> HTML, CSS, Node.js, Express.js, MongoDB, MySQL, REST APIs</div>
              <div><strong className="text-white print:text-black">DevSecOps:</strong> Linux, Git, CI/CD, Docker, Bash, Application Security</div>
              <div><strong className="text-white print:text-black">Tools &amp; Systems:</strong> Git, GitHub, Postman, Hoppscotch, Linux</div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-black font-bold">
              Experience
            </h3>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-white print:text-black">
                    <div>
                      <span>{exp.role}</span> &mdash; <span className="text-emerald-400 print:text-black">{exp.company}</span>
                    </div>
                    <span className="font-mono text-zinc-400 print:text-zinc-600">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 print:text-zinc-800 text-xs leading-relaxed">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-black font-bold">
              Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-white print:text-black gap-2">
                    <div>
                      <span>{proj.title}</span>
                      <span className="font-mono text-zinc-400 font-normal ml-2">| {proj.tags.slice(0, 5).join(', ')}</span>
                    </div>
                    {proj.liveUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-emerald-400 print:text-black underline font-mono text-[11px]">
                        Live Demo
                      </a>
                    )}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 print:text-zinc-800 text-xs leading-relaxed">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Responsibilities */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-black font-bold">
              Positions of Responsibility
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 print:text-zinc-800">
              {LEADERSHIP_ROLES.map((r, i) => (
                <div key={i} className="space-y-0.5">
                  <strong className="text-white print:text-black">{r.role}</strong> &ndash; {r.organization}
                  <p className="text-zinc-400 print:text-zinc-600 text-[11px]">{r.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-black font-bold">
              Achievements &amp; Certifications
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 list-disc list-inside text-xs text-zinc-300 print:text-zinc-800">
              {ACHIEVEMENTS.map((a, i) => (
                <li key={i}>
                  <strong className="text-white print:text-black">{a.title}</strong> &ndash; {a.organization} ({a.year})
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-2 border-t border-zinc-800 pt-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 print:text-black font-bold">
              Education
            </h3>
            <div className="space-y-1.5 text-xs text-zinc-300 print:text-zinc-800">
              <div className="flex items-center justify-between font-semibold text-white print:text-black">
                <span>{PERSONAL_INFO.education.degree}</span>
                <span className="font-mono text-zinc-400 font-normal">Expected {PERSONAL_INFO.education.expectedGraduation}</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>{PERSONAL_INFO.education.institution}</span>
                <span className="font-mono text-emerald-400 font-bold">CGPA: {PERSONAL_INFO.education.cgpa}</span>
              </div>
              {PERSONAL_INFO.education.schooling.map((s, i) => (
                <div key={i} className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>{s.level} &ndash; {s.school}</span>
                  <span className="font-mono text-zinc-300">{s.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
