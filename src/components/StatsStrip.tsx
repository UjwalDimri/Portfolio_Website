import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'motion/react';
import { ChartLineUp, ShieldCheck, Trophy, UsersThree } from '@phosphor-icons/react';

interface Metric {
  label: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
}

const CountUp: React.FC<{ value: string; reduceMotion: boolean }> = ({ value, reduceMotion }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [display, setDisplay] = useState(reduceMotion ? value : '0');

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setDisplay(value);
      return;
    }
    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) { setDisplay(value); return; }
    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    const decimals = digits.includes('.') ? digits.split('.')[1].length : 0;
    const controls = animate(0, target, {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return <span ref={ref}>{display}</span>;
};

export const StatsStrip: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const statItems: Metric[] = [
    { label: 'Academic standing', value: '8.24', detail: 'CGPA / 10 · UPES', icon: <ChartLineUp size={19} /> },
    { label: 'Reliability work', value: '40', detail: 'HeatWatch test suites', icon: <ShieldCheck size={19} /> },
    { label: 'Hackathon result', value: 'Top 2', detail: 'In Uttarakhand', icon: <Trophy size={19} /> },
    { label: 'Community impact', value: '100+', detail: 'Student engineers mentored', icon: <UsersThree size={19} /> },
  ];

  return (
    <section className="light-highlight px-5 py-14 sm:px-9 sm:py-16 lg:px-14" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 grid gap-4 md:grid-cols-[.8fr_1fr] md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold text-[#c45f28]">Why work with me?</p>
            <h2 id="stats-heading" className="text-3xl font-semibold tracking-[-0.045em] text-zinc-100 sm:text-4xl">Learning, building, delivering.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-400 md:justify-self-end">
            Early-career experience with measurable project work, a strong academic foundation, and a habit of sharing what I learn.
          </p>
        </header>
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
          {statItems.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="metric-item"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: .5, delay: index * .08 }}
            >
              <span className="metric-item__icon" aria-hidden="true">{stat.icon}</span>
              <strong><CountUp value={stat.value} reduceMotion={Boolean(reduceMotion)} /></strong>
              <span className="metric-item__label">{stat.label}</span>
              <span className="metric-item__detail">{stat.detail}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
