import { motion } from 'framer-motion';
import { Lock, Map, Target, TrendingUp, Zap } from 'lucide-react';
import { SEOHead } from '../SEOHead';
import { MarketingCard } from './MarketingCard';
import { RoadmapPhase } from './RoadmapPhase';
import { TierBadge } from './TierBadge';
import {
  getItemsByTier,
  MARKETING_ITEMS,
  ROADMAP_PHASES,
  TIER_META,
  TIERS_ORDER,
} from '../../data/marketingTierList';

export function MarketingTierList() {
  return (
    <>
      <SEOHead
        title="Marketing Tier List (Internal)"
        description="Internal marketing channel ranking and roadmap for 223 Visions."
        path="/internal/marketing-roadmap"
        noindex
      />

      <div className="border-b border-amber-400/20 bg-amber-400/5">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-sm text-amber-200/90 sm:px-6 lg:px-8">
          <Lock size={14} />
          Internal use only — not indexed. Holistic marketing roadmap for 223 Visions.
        </div>
      </div>

      <section className="pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red-light">
              Growth Strategy
            </p>
            <h1 className="mt-3 text-display text-5xl font-bold md:text-6xl">
              Marketing <span className="text-gradient-brand">Tier List</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-muted">
              Platforms and strategies ranked by effectiveness for a local Atlanta photo & video
              agency. Use this to prioritize setup, allocate time, and build a holistic roadmap —
              from GBP and website through GHL automation, social, directories, and paid channels.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, label: 'Channels ranked', value: MARKETING_ITEMS.length },
              {
                icon: TrendingUp,
                label: 'S + A tier (priority)',
                value: getItemsByTier('S').length + getItemsByTier('A').length,
              },
              { icon: Map, label: 'Roadmap phases', value: ROADMAP_PHASES.length },
              { icon: Target, label: 'Core stack', value: 'GBP · Site · GHL' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="card-dark p-5">
                <Icon size={18} className="text-brand-red" />
                <p className="text-display mt-3 text-3xl text-brand-offwhite">{value}</p>
                <p className="mt-1 text-sm text-brand-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {TIERS_ORDER.map((tier) => {
            const meta = TIER_META[tier];
            const items = getItemsByTier(tier);
            if (!items.length) return null;

            return (
              <div key={tier}>
                <div className="mb-6 flex items-start gap-4">
                  <TierBadge tier={tier} />
                  <div>
                    <h2 className="text-display text-3xl text-brand-offwhite md:text-4xl">
                      {meta.label}
                      <span className="ml-3 text-lg font-normal text-brand-muted">
                        — {meta.subtitle}
                      </span>
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-brand-muted">{meta.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {items.map((item, i) => (
                    <MarketingCard key={item.id} item={item} defaultOpen={tier === 'S' && i === 0} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-magenta">
              Execution Plan
            </p>
            <h2 className="mt-2 text-display text-4xl font-bold md:text-5xl">
              Holistic Roadmap to Success
            </h2>
            <p className="mt-3 max-w-2xl text-brand-muted">
              Four phases sequenced by dependency — foundation first, then organic momentum, then
              paid acceleration, then optimize based on GHL-attributed data.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ROADMAP_PHASES.map((phase, i) => (
              <RoadmapPhase key={phase.phase} phase={phase} index={i} />
            ))}
          </div>

          <div className="card-dark mt-10 border-brand-red/20 p-6 md:p-8">
            <h3 className="text-display text-2xl text-brand-offwhite">Ranking methodology</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
                  Impact
                </p>
                <p className="mt-2 text-sm text-brand-muted">
                  How directly a channel drives booked jobs for local photo/video — not vanity
                  metrics.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
                  Effort & time
                </p>
                <p className="mt-2 text-sm text-brand-muted">
                  Setup complexity and weeks-to-meaningful-results. S-tier favors low effort, high
                  intent.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
                  Stack synergy
                </p>
                <p className="mt-2 text-sm text-brand-muted">
                  GBP → Site → GHL is the spine. Social, directories, and ads feed that funnel.
                  Re-rank quarterly using source tags in GHL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}