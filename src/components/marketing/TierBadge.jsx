import { TIER_META } from '../../data/marketingTierList';

export function TierBadge({ tier }) {
  const meta = TIER_META[tier];
  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br ${meta.accent} ${meta.border} ${meta.glow}`}
    >
      <span className="text-display text-2xl font-bold text-brand-black">{tier}</span>
    </div>
  );
}
