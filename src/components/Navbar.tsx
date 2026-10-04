import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, List, X } from '@phosphor-icons/react';

interface NavbarProps {
  onOpenResume: () => void;
}

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const leftLinks: NavItem[] = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Expertise', href: '#skills', id: 'skills' },
];
const rightLinks: NavItem[] = [
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];
const allLinks = [...leftLinks, ...rightLinks];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const reduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = allLinks.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.15, 0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const renderLink = (item: NavItem, mobile = false) => (
    <a
      key={item.id}
      href={item.href}
      onClick={() => setMobileMenuOpen(false)}
      aria-current={activeSection === item.id ? 'location' : undefined}
      className={`nav-link ${mobile ? 'nav-link--mobile' : ''} ${activeSection === item.id ? 'nav-link--active' : ''}`}
    >
      {activeSection === item.id && <motion.span className="nav-link__active" layoutId={mobile ? 'mobile-active-nav' : 'active-nav'} transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
      <span className="relative z-10">{item.label}</span>
    </a>
  );

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <motion.header
        className="site-header"
        initial={reduceMotion ? false : { y: -28, opacity: 0, scale: .97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: .75, delay: .08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-pill">
          <nav className="nav-side nav-side--left" aria-label="Primary navigation">
            {leftLinks.map((item) => renderLink(item))}
          </nav>

          <a href="#hero" className="nav-brand" aria-label={`${PERSONAL_INFO.name} home`}>
            <span className="nav-brand__seal">UD</span>
            <span className="nav-brand__name">UJWAL DIMRI</span>
          </a>

          <nav className="nav-side nav-side--right" aria-label="Portfolio navigation">
            <button type="button" className="nav-resume" onClick={onOpenResume}>Resume</button>
            {rightLinks.map((item) => renderLink(item))}
            <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={14} weight="bold" /></a>
          </nav>

          <div className="nav-mobile">
            <button className="nav-mobile__toggle" type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-expanded={mobileMenuOpen} aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}>
              {mobileMenuOpen ? <X size={19} /> : <List size={19} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              className="nav-mobile-panel"
              initial={reduceMotion ? false : { opacity: 0, y: -8, scale: .98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6, scale: .985 }}
              transition={{ duration: .2, ease: 'easeOut' }}
            >
              <nav aria-label="Mobile navigation">{allLinks.map((item) => renderLink(item, true))}</nav>
              <button type="button" className="nav-mobile-panel__resume" onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}>Open resume</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
