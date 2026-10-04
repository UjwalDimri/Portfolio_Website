import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, Certificate, Confetti, Medal, Sparkle, Trophy } from '@phosphor-icons/react';
import confetti from 'canvas-confetti';

export const AchievementsSection: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const selected = ACHIEVEMENTS[activeIndex];

  const moveTo = (nextIndex: number) => setActiveIndex((nextIndex + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);
  const celebrate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 48,
      spread: 64,
      origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight },
      colors: ['#f18442', '#ffbb8c', '#fff7f0', '#c85f28'],
      disableForReducedMotion: true,
    });
  };

  const getIcon = (badge?: string) => {
    if (badge === 'Top 0.9%') return <Trophy size={34} weight="duotone" />;
    if (badge === 'Certification') return <Certificate size={34} weight="duotone" />;
    if (badge === 'Selected') return <Medal size={34} weight="duotone" />;
    return <Sparkle size={34} weight="duotone" />;
  };

  return (
    <section id="achievements" className="dark-band award-showcase scroll-mt-24 px-5 py-16 sm:px-9 sm:py-20 lg:px-14" aria-labelledby="awards-heading">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-11 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold text-emerald-400">Awards &amp; recognition</p>
          <h2 id="awards-heading" className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl">
            Progress worth <span className="text-emerald-400">sharing.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">A few milestones from competitions, open source, and technical learning.</p>
        </header>

        <div className="award-carousel">
          <div className="award-carousel__art" aria-hidden="true">
            <motion.div
              className="award-orbit award-orbit--outer"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            />
            <div className="award-orbit award-orbit--inner" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selected.title}
                className="award-emblem"
                initial={reduceMotion ? false : { opacity: 0, scale: .78, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: .82, rotate: 10 }}
                transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}
              >
                {getIcon(selected.badge)}
                <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              </motion.div>
            </AnimatePresence>
            <span className="award-showcase__flare award-showcase__flare--one" />
            <span className="award-showcase__flare award-showcase__flare--two" />
          </div>

          <div className="award-carousel__copy">
            <span className="award-carousel__year">{selected.year} <span>{selected.badge}</span></span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selected.title}
                initial={reduceMotion ? false : { opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -18 }}
                transition={{ duration: .34, ease: 'easeOut' }}
              >
                <h3>{selected.title}</h3>
                <p className="award-carousel__org">{selected.organization}</p>
                <p className="award-carousel__description">{selected.description}</p>
                <div className="award-carousel__highlight">{selected.highlight}</div>
              </motion.div>
            </AnimatePresence>

            <div className="award-carousel__controls">
              <div className="award-carousel__dots" role="group" aria-label="Choose an achievement">
                {ACHIEVEMENTS.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`award-dot ${activeIndex === index ? 'award-dot--active' : ''}`}
                    onClick={() => moveTo(index)}
                    aria-label={`Show achievement ${index + 1}: ${item.title}`}
                    aria-pressed={activeIndex === index}
                  />
                ))}
              </div>
              <div className="award-carousel__buttons">
                <button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="Previous achievement"><ArrowLeft size={17} /></button>
                <button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="Next achievement"><ArrowRight size={17} /></button>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="award-celebrate" onClick={celebrate}>
          <Confetti size={17} /> Celebrate a milestone
        </button>
      </div>
    </section>
  );
};
