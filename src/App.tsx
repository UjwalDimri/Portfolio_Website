import React, { useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';
import { Reveal } from './components/Reveal';
import { TechTicker } from './components/TechTicker';

export function App() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="portfolio-shell relative min-h-screen bg-white text-[#201d1a] selection:bg-orange-500/20 selection:text-orange-900">
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-[#fd853a]"
        style={{ scaleX: progress, opacity: reduceMotion ? 0 : 1 }}
      />

      {/* Main Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Semantic Main Content Container */}
      <main id="main-content" className="relative z-10 focus:outline-none" tabIndex={-1}>
        {/* Intro and portrait */}
        <Hero />

        {/* Capabilities lead into the career timeline, following the reference portfolio flow */}
        <Reveal><SkillsSection /></Reveal>
        <TechTicker />
        <Reveal delay={0.04}><ExperienceSection /></Reveal>
        <Reveal><StatsStrip /></Reveal>
        <Reveal><ProjectsSection onSelectProject={(p) => setSelectedProject(p)} /></Reveal>
        <Reveal><AchievementsSection /></Reveal>
        <Reveal><LeadershipSection /></Reveal>
        <Reveal><EducationSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

export default App;
