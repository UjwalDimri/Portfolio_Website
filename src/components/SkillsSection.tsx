import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code, Terminal, Cpu, Database, HardDrives, Browsers, PlugsConnected,
  SquaresFour, FrameCorners, Eye, GitBranch, PaperPlaneTilt,
  CloudArrowUp, TerminalWindow, Sparkle
} from '@phosphor-icons/react';

const icons: Record<string, React.ReactNode> = {
  Code: <Code size={18} />, Terminal: <Terminal size={18} />, Cpu: <Cpu size={18} />,
  Database: <Database size={18} />, Server: <HardDrives size={18} />, Browsers: <Browsers size={18} />,
  PlugsConnected: <PlugsConnected size={18} />, SquaresFour: <SquaresFour size={18} />,
  FrameCorners: <FrameCorners size={18} />, Eye: <Eye size={18} />, GitBranch: <GitBranch size={18} />,
  PaperPlaneTilt: <PaperPlaneTilt size={18} />, CloudArrowUp: <CloudArrowUp size={18} />,
  TerminalWindow: <TerminalWindow size={18} />,
};

export const SkillsSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="dark-band scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 grid gap-5 md:grid-cols-[1fr_.8fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-400">My services</p>
            <h2 id="skills-heading" className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl">
              Secure systems, <span className="text-emerald-400">built to ship.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-zinc-300 md:justify-self-end md:text-base">
            From application code to delivery pipelines, I bring a practical engineering foundation to every layer of a product.
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.article
              key={category.name}
              className="capability-panel"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.56, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -7, transition: { type: 'spring', stiffness: 280, damping: 24 } }}
            >
              <div className="capability-panel__index">0{index + 1}</div>
              <h3>{category.name}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="capability-panel__icon" aria-hidden="true">{icons[skill.icon] ?? <Sparkle size={18} />}</span>
                    <span><strong>{skill.name}</strong><small>{skill.level}</small></span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
