import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, ShieldCheck } from '@phosphor-icons/react';

const rise = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const [heroMotionActive, setHeroMotionActive] = useState(() => scrollYProgress.get() < 0.5);
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const active = progress < 0.5;
    setHeroMotionActive((current) => current === active ? current : active);
  });
  const loopMotion = !reduceMotion && heroMotionActive;
  const easedScroll = useSpring(scrollYProgress, { stiffness: 60, damping: 30, restDelta: 0.001 });
  const portraitY = useTransform(easedScroll, [0, 0.5], [0, 32]);
  const portraitScale = useTransform(easedScroll, [0, 0.5], [1, 0.98]);
  const portraitOpacity = useTransform(easedScroll, [0, 0.5], [1, 0.82]);

  return (
    <section ref={heroRef} id="hero" className={`hero-section relative isolate overflow-hidden${heroMotionActive ? '' : ' hero-section--motion-off'}`} aria-labelledby="hero-heading">
      <div className="hero-backdrop" aria-hidden="true">
        <motion.span className="hero-backdrop__glow" animate={loopMotion ? { scale: [1, 1.06, 1], opacity: [.52, .7, .52] } : { scale: 1, opacity: .52 }} transition={loopMotion ? { duration: 8, repeat: Infinity, ease: 'easeInOut' } : { duration: .35 }} />
        <span className="hero-backdrop__grain" />
      </div>

      <div className="hero-content relative z-10 mx-auto flex max-w-6xl flex-col items-center px-5 text-center">
        <motion.div
          className="hero-greeting"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
        >
          <motion.span variants={rise} className="hero-greeting__pill">
            <span className="hero-greeting__dot" aria-hidden="true" />
            Aspiring DevSecOps Engineer <span className="hero-greeting__divider">·</span> UPES
          </motion.span>
          <motion.h1 id="hero-heading" variants={rise} className="hero-heading">
            <span className="hero-heading__line">I’m <em>Ujwal</em> Dimri,</span>
            <span className="hero-heading__role">Full Stack Developer</span>
          </motion.h1>
          <motion.p variants={rise} className="hero-description">
            Building useful web applications today and growing toward secure delivery, cloud infrastructure, and dependable software.
          </motion.p>
        </motion.div>

        <motion.aside
          className="hero-note hero-note--left"
          initial={reduceMotion ? false : { opacity: 0, x: -24, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.85, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Profile summary"
        >
          <span className="hero-note__mark">“</span>
          <p>Security belongs in every stage of the build.</p>
          <span className="hero-note__caption">{PERSONAL_INFO.name} · {PERSONAL_INFO.location}</span>
        </motion.aside>

        <motion.aside
          className="hero-note hero-note--right"
          initial={reduceMotion ? false : { opacity: 0, x: 24, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.85, delay: 0.92, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Academic and project highlights"
        >
          <span className="hero-note__eyebrow"><ShieldCheck size={15} weight="fill" /> Engineering focus</span>
          <strong>8.24 <small>/ 10 CGPA</small></strong>
          <span className="hero-note__caption">40 automated HeatWatch test suites</span>
        </motion.aside>

        <motion.div
          className="hero-portrait"
          style={{ y: reduceMotion ? 0 : portraitY, scale: reduceMotion ? 1 : portraitScale, opacity: reduceMotion ? 1 : portraitOpacity }}
          whileHover={!loopMotion ? undefined : { rotate: 0.5, transition: { type: 'spring', stiffness: 180, damping: 24 } }}
        >
          <motion.div
            className="hero-portrait__float"
            initial={reduceMotion ? false : { opacity: 0, y: 54, scale: 0.94 }}
            animate={loopMotion ? { opacity: 1, y: [0, -6, 0], scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={loopMotion
              ? { opacity: { duration: 0.8, delay: 0.68 }, scale: { duration: 0.8, delay: 0.68 }, y: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 } }
              : { opacity: { duration: .4 }, scale: { duration: .4 }, y: { duration: .4 } }}
          >
            <div className="hero-portrait__sun" aria-hidden="true" />
            <div className="hero-portrait__ring" aria-hidden="true" />
            <div className="hero-portrait__halo" aria-hidden="true" />
            <div className="hero-portrait__location"><MapPin size={14} weight="fill" /> Dehradun, India</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait-popout"
          style={{ y: reduceMotion ? 0 : portraitY, scale: reduceMotion ? 1 : portraitScale, opacity: reduceMotion ? 1 : portraitOpacity }}
        >
          <motion.div
            className="hero-portrait-popout__float"
            initial={reduceMotion ? false : { opacity: 0, y: 54, scale: 0.94 }}
            animate={reduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: [0, -9, 0], scale: 1 }}
            transition={{ opacity: { duration: 0.8, delay: 0.68 }, scale: { duration: 0.8, delay: 0.68 }, y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 } }}
          >
            <img src="/avatar-cutout.png" alt={`Portrait of ${PERSONAL_INFO.name}`} width={600} height={600} fetchPriority="high" />
          </motion.div>
        </motion.div>

        <div className="hero-doodles" aria-hidden="true">
          <motion.svg className="hero-doodle hero-doodle--left" viewBox="0 0 126 148" fill="none" animate={loopMotion ? { y: [0, -7, 0], rotate: [-2, 1, -2] } : undefined} transition={loopMotion ? { duration: 8.5, repeat: Infinity, ease: 'easeInOut' } : undefined}>
            <motion.path d="M21 106c13-5 21-15 25-29 4-15 14-26 29-31 10-4 19-4 29-1M25 117c18-6 29-18 34-35 4-13 12-21 24-25" stroke="#8c78ad" strokeWidth="2.2" strokeLinecap="round" initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: .9 }} transition={{ duration: 1.5, delay: .95 }} />
            <motion.path d="m92 27 4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10ZM31 47l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" stroke="#f18442" strokeWidth="2" strokeLinejoin="round" initial={reduceMotion ? false : { scale: .5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .55, delay: 1.4, type: 'spring' }} />
            <circle cx="35" cy="82" r="4" fill="#f18442" />
          </motion.svg>
          <motion.svg className="hero-doodle hero-doodle--right" viewBox="0 0 142 164" fill="none" animate={loopMotion ? { y: [0, 6, 0], rotate: [1.5, -1.5, 1.5] } : undefined} transition={loopMotion ? { duration: 9.5, repeat: Infinity, ease: 'easeInOut', delay: .4 } : undefined}>
            <motion.path d="M31 51c9-13 21-20 36-21M26 64c-6 12-7 26-2 39M42 126c14 9 30 10 45 4M103 109c9-11 12-25 8-39" stroke="#9a86b6" strokeWidth="2" strokeDasharray="4 7" strokeLinecap="round" initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: .8 }} transition={{ duration: 1.6, delay: 1.1 }} />
            <motion.path d="m90 24 4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10ZM113 117l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" stroke="#f18442" strokeWidth="2" strokeLinejoin="round" initial={reduceMotion ? false : { scale: .5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .55, delay: 1.55, type: 'spring' }} />
            <path d="m40 78 12-9m-12 9 12 9m59-8-12-9m12 9-12 9" stroke="#f18442" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="30" cy="120" r="3.5" fill="#9a86b6" />
          </motion.svg>
          <motion.span className="hero-orbit-dot hero-orbit-dot--one" animate={loopMotion ? { rotate: 360 } : undefined} transition={loopMotion ? { duration: 26, repeat: Infinity, ease: 'linear' } : undefined} />
          <motion.span className="hero-orbit-dot hero-orbit-dot--two" animate={loopMotion ? { rotate: -360 } : undefined} transition={loopMotion ? { duration: 32, repeat: Infinity, ease: 'linear' } : undefined} />
        </div>

        <div className="hero-hover-frame" aria-hidden="true">
          <svg viewBox="0 0 740 430" fill="none" role="presentation">
            <path d="M75 330V112c0-23 19-42 42-42h130M665 330V112c0-23-19-42-42-42H493M75 365h152M665 365H513" stroke="#9a86b6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M132 304c5-130 104-220 238-220s233 90 238 220" stroke="#f18442" strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" />
            <path d="m105 98 12-12 12 12m484 0 12-12 12 12M105 343l12 12 12-12m484 0 12 12 12-12" stroke="#f18442" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="132" cy="304" r="4" fill="#f18442" />
            <circle cx="608" cy="304" r="4" fill="#9a86b6" />
            <circle cx="370" cy="84" r="3" fill="#f18442" />
          </svg>
        </div>

        <motion.a
          className="hero-scroll-cue"
          href="#skills"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: .7 }}
          aria-label="Scroll to expertise"
        >
          <span>Scroll to explore</span>
          <motion.i aria-hidden="true" animate={loopMotion ? { y: [0, 5, 0] } : undefined} transition={loopMotion ? { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } : undefined} />
        </motion.a>
      </div>
    </section>
  );
};
