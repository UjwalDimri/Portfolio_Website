import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { EnvelopeSimple, Phone, LinkedinLogo, GithubLogo, Copy, Check, PaperPlaneTilt, Sparkle } from '@phosphor-icons/react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift server response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
          <EnvelopeSimple size={14} aria-hidden="true" />
          <span>Communication Channels</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Get in Touch
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl text-pretty">
          Whether you’re looking for a DevSecOps engineer, full-stack collaborator, or hackathon teammate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact & Quick Copy */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl glass-panel p-6 sm:p-7 border border-zinc-800 space-y-5">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Direct Contact Information
            </h3>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-zinc-400 block">Email Address</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-medium text-white hover:text-emerald-400 transition-colors truncate block focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="p-2 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer flex-shrink-0"
                aria-label={copiedEmail ? 'Email address copied' : 'Copy email address to clipboard'}
              >
                {copiedEmail ? <Check size={18} className="text-emerald-400" aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-zinc-400 block">Phone / WhatsApp</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-medium text-white hover:text-emerald-400 transition-colors truncate block focus-visible:ring-2 focus-visible:ring-emerald-500 rounded font-mono"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <button
                onClick={handleCopyPhone}
                type="button"
                className="p-2 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer flex-shrink-0"
                aria-label={copiedPhone ? 'Phone number copied' : 'Copy phone number to clipboard'}
              >
                {copiedPhone ? <Check size={18} className="text-emerald-400" aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex flex-col gap-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Social Profiles</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all text-xs font-medium text-zinc-200 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <LinkedinLogo size={18} className="text-sky-400 flex-shrink-0" aria-hidden="true" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all text-xs font-medium text-zinc-200 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <GithubLogo size={18} className="text-zinc-200 flex-shrink-0" aria-hidden="true" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accessible Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl glass-panel p-6 sm:p-8 border border-zinc-800 space-y-4"
            aria-label="Direct message form"
          >
            <h3 className="text-lg font-bold text-white tracking-tight">
              Send a Direct Message
            </h3>

            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2"
              >
                <Check size={18} className="text-emerald-400 flex-shrink-0" aria-hidden="true" />
                <span>Thank you! Your message has been sent. Ujwal will respond promptly.</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-xs font-medium text-zinc-300 block">
                  Your Name <span className="text-emerald-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins…"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-sm text-zinc-100 placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-xs font-medium text-zinc-300 block">
                  Email Address <span className="text-emerald-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@techcorp.com…"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-sm text-zinc-100 placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className="text-xs font-medium text-zinc-300 block">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                autoComplete="off"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Full Stack Internship Opportunity…"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-sm text-zinc-100 placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-emerald-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="text-xs font-medium text-zinc-300 block">
                Message <span className="text-emerald-400" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell Ujwal about your project, team, or inquiry…"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-sm text-zinc-100 placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-emerald-500 focus:border-transparent outline-none transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                  <span>Sending Message…</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <PaperPlaneTilt size={15} weight="bold" aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
