import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';
import { ArrowUpRight } from '@phosphor-icons/react';

export const ExperienceSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12" aria-labelledby="experience-heading">
      <header className="mb-14">
        <p className="mb-3 text-sm font-semibold text-[#c45f28]">My work</p>
        <h2 id="experience-heading" className="text-4xl font-semibold tracking-[-0.05em] text-zinc-100 sm:text-6xl">
          Experience <span className="text-[#f18442]">that compounds.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
          Growing through internships, real product work, and engineering communities.
        </p>
      </header>

      <div className="experience-timeline">
        {EXPERIENCES.map((experience, index) => (
          <motion.article
            key={experience.id}
            className="experience-row"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="experience-row__company">
              <h3>{experience.company}{experience.location ? ` · ${experience.location.split('/')[0].trim()}` : ''}</h3>
              <p>{experience.period}</p>
              {experience.badge && <span>{experience.badge}</span>}
            </div>
            <div className="experience-row__marker" aria-hidden="true"><i /></div>
            <div className="experience-row__detail">
              <h4>{experience.role}</h4>
              <p>{experience.summary}</p>
              <ul>
                {experience.bullets.slice(0, 2).map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="experience-row__skills">
                {experience.skills.slice(0, 5).map((skill) => <span key={skill}>{skill}</span>)}
                {experience.skills.length > 5 && <span className="experience-row__more">+{experience.skills.length - 5}</span>}
              </div>
            </div>
            <a className="experience-row__arrow" href="#projects" aria-label={`View projects related to ${experience.company}`}>
              <ArrowUpRight size={17} weight="bold" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
