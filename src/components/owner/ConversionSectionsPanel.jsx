import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Sparkles } from 'lucide-react';
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
    <article
      className={`card-dark overflow-hidden transition-colors ${
        selected ? 'border-brand-red/40' : ''
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-4 text-left sm:p-5"
        aria-pressed={selected}
      >
        <div
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
            selected
              ? 'border-brand-red bg-brand-red text-white'
              : 'border-white/20 bg-white/5 text-transparent'
          }`}
        >
          <Check size={12} strokeWidth={3} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-display text-lg text-brand-offwhite">{section.title}</h3>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${impactClass}`}>
              {section.impact}
            </span>
            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-brand-muted">
              {section.effort} effort
            </span>
          </div>
          <p className="mt-1 text-[11px] uppercase tracking-wider text-brand-magenta">
            {section.placement}
          </p>
          <p className="mt-2 text-sm text-brand-muted">{section.summary}</p>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {selected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-4 pb-4 sm:px-5 sm:pb-5">
              <div className="grid gap-4 pt-4 lg:grid-cols-2">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-red-light">
                    Why it converts
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                    {section.whyItConverts}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-red-light">
                    What we will build
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {section.includes.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-brand-muted">
                        <Sparkles size={11} className="mt-1 shrink-0 text-brand-magenta" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-xs text-brand-muted">
                Best on:{' '}
                <span className="text-brand-offwhite/80">{section.bestOn.join(' · ')}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function ConversionSectionsPanel({ picks, onToggle }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-brand-muted">
        Select sections to add to the live site. Tap again to deselect and collapse details.
      </p>
      {CONVERSION_SECTIONS.map((section) => (
        <SectionCard
          key={section.id}
          section={section}
          selected={picks.includes(section.id)}
          onToggle={() => onToggle(section.id)}
        />
      ))}
    </div>
  );
}

export function useConversionSectionPicks() {
  const [picks, setPicks] = useState(loadPicks);

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
        ? 'No conversion sections selected.'
        : selectedSections.map((s, i) => `${i + 1}. ${s.title} (${s.id})`).join('\n');
    await navigator.clipboard.writeText(text);
    return text;
  };

  return { picks, toggle, selectedSections, copyPicks };
}
