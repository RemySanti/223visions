import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const IMPACT_STYLES = {
  Critical: 'text-amber-300 bg-amber-400/10',
  'Very High': 'text-brand-red-light bg-brand-red/10',
  High: 'text-emerald-300 bg-emerald-400/10',
  'Medium–High': 'text-emerald-300/90 bg-emerald-400/10',
  Medium: 'text-sky-300 bg-sky-400/10',
  'Medium (B2B niche)': 'text-sky-300 bg-sky-400/10',
  'Low–Medium (early stage)': 'text-brand-muted bg-white/5',
  'Low (niche)': 'text-brand-muted bg-white/5',
  Low: 'text-brand-muted bg-white/5',
  Variable: 'text-brand-muted bg-white/5',
};

export function MarketingCard({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const impactClass = IMPACT_STYLES[item.impact] ?? IMPACT_STYLES.Medium;

  return (
    <div className="card-dark overflow-hidden transition-colors">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-white/[0.02] sm:p-6"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-display text-xl tracking-wide text-brand-offwhite sm:text-2xl">
              {item.name}
            </h3>
            <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs uppercase tracking-wider text-brand-muted">
              {item.category}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${impactClass}`}>
              {item.impact} impact
            </span>
            <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-brand-muted">
              {item.effort} effort
            </span>
            <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-brand-muted">
              {item.timeToImpact}
            </span>
            {item.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-brand-offwhite/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`mt-1 shrink-0 text-brand-muted transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-white/10 px-5 pb-5 sm:px-6 sm:pb-6"
        >
          <div className="grid gap-6 pt-5 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
                Why this tier
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.whyRanked}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
                Track these metrics
              </p>
              <ul className="mt-2 space-y-1.5">
                {item.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-2 text-sm text-brand-muted">
                    <span className="h-1 w-1 rounded-full bg-brand-magenta" />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
              Priority actions
            </p>
            <ol className="mt-2 space-y-2">
              {item.actions.map((action, i) => (
                <li key={action} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                  <span className="text-display shrink-0 text-brand-red/80">{i + 1}.</span>
                  {action}
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      )}
    </div>
  );
}
