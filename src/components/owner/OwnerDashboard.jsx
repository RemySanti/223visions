import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  CheckCircle2,
  ClipboardCopy,
  LayoutGrid,
  Lock,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../SEOHead';
import { CONVERSION_SECTIONS, STORAGE_KEY } from '../../data/conversionSections';

const IMPACT_STYLES = {
  'Very High': 'text-brand-red-light bg-brand-red/10',
  High: 'text-emerald-300 bg-emerald-400/10',
  'Medium–High': 'text-emerald-300/90 bg-emerald-400/10',
  Medium: 'text-sky-300 bg-sky-400/10',
  Low: 'text-brand-muted bg-white/5',
};

function loadPicks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function SectionCard({ section, selected, onToggle }) {
  const impactClass = IMPACT_STYLES[section.impact] ?? IMPACT_STYLES.Medium;

  return (
    <motion.article
      layout
      className={`card-dark overflow-hidden transition-colors ${
        selected ? 'border-brand-red/50 ring-1 ring-brand-red/20' : ''
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
        aria-pressed={selected}
      >
        <div
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors ${
            selected
              ? 'border-brand-red bg-brand-red text-white'
              : 'border-white/20 bg-white/5 text-transparent'
          }`}
        >
          <Check size={14} strokeWidth={3} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-display text-xl text-brand-offwhite sm:text-2xl">{section.title}</h2>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${impactClass}`}>
              {section.impact} impact
            </span>
            <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-brand-muted">
              {section.effort} effort
            </span>
          </div>
          <p className="mt-1 text-xs uppercase tracking-wider text-brand-magenta">
            {section.placement}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">{section.summary}</p>
        </div>
      </button>

      <div className="border-t border-white/10 px-5 pb-5 sm:px-6 sm:pb-6">
        <div className="grid gap-5 pt-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
              Why it converts
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">{section.whyItConverts}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
              What we will build
            </p>
            <ul className="mt-2 space-y-1.5">
              {section.includes.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-brand-muted">
                  <Sparkles size={12} className="mt-1 shrink-0 text-brand-magenta" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-brand-muted">
          Best on:{' '}
          <span className="text-brand-offwhite/80">{section.bestOn.join(' · ')}</span>
        </p>
      </div>
    </motion.article>
  );
}

export function OwnerDashboard() {
  const [picks, setPicks] = useState(loadPicks);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(picks));
  }, [picks]);

  const toggle = (id) => {
    setPicks((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const selectedSections = CONVERSION_SECTIONS.filter((s) => picks.includes(s.id));

  const copyPicks = async () => {
    const text =
      selectedSections.length === 0
        ? 'No sections selected yet.'
        : selectedSections.map((s, i) => `${i + 1}. ${s.title} (${s.id})`).join('\n');

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Owner Dashboard — Site Sections"
        description="Pick conversion sections to add to 223 Visions."
        path="/owner"
        noindex
      />

      <div className="border-b border-amber-400/20 bg-amber-400/5">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-sm text-amber-200/90 sm:px-6 lg:px-8">
          <Lock size={14} />
          Owner dashboard — pick sections to add to the live site. Selections save in this browser.
        </div>
      </div>

      <section className="pt-32 pb-12 md:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red-light">
              Conversion Build List
            </p>
            <h1 className="mt-3 text-display text-5xl font-bold md:text-6xl">
              Site <span className="text-gradient-brand">Sections</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-muted">
              Ten sections designed to increase bookings for 223 Visions. Click to select the ones
              you want built — then copy your list or tell us your picks.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="card-dark flex items-center gap-3 px-5 py-3">
              <LayoutGrid size={18} className="text-brand-red" />
              <span className="text-sm text-brand-muted">
                <span className="text-display text-2xl text-brand-offwhite">{picks.length}</span>
                <span className="ml-2">of {CONVERSION_SECTIONS.length} selected</span>
              </span>
            </div>
            <button
              type="button"
              onClick={copyPicks}
              className="btn-ghost !py-2.5 !text-xs"
              disabled={selectedSections.length === 0}
            >
              {copied ? (
                <>
                  <CheckCircle2 size={14} />
                  Copied
                </>
              ) : (
                <>
                  <ClipboardCopy size={14} />
                  Copy my picks
                </>
              )}
            </button>
          </div>

          {selectedSections.length > 0 && (
            <div className="card-dark mt-6 border-brand-red/20 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
                Your selection
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {selectedSections.map((s) => (
                  <li
                    key={s.id}
                    className="rounded-full bg-brand-red/10 px-3 py-1 text-sm text-brand-offwhite"
                  >
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-5 px-4 sm:px-6 lg:px-8">
          {CONVERSION_SECTIONS.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <SectionCard
                section={section}
                selected={picks.includes(section.id)}
                onToggle={() => toggle(section.id)}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
