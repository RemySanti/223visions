import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { getItemById, TIER_META } from '../../data/marketingTierList';

export function RoadmapPhase({ phase, index }) {
  const items = phase.items.map((id) => getItemById(id)).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="card-dark relative overflow-hidden p-6"
    >
      <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-brand-red/10 to-transparent" />
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="text-display text-4xl text-brand-red/80">0{phase.phase}</span>
        <div>
          <h3 className="text-display text-2xl text-brand-offwhite">{phase.title}</h3>
          <p className="text-sm text-brand-magenta">{phase.timeline}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-brand-muted">{phase.goal}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item.id}
            className={`rounded-full px-3 py-1 text-xs font-medium ${TIER_META[item.tier].badge}`}
          >
            {item.name}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
        {phase.checkpoints.map((checkpoint) => (
          <li key={checkpoint} className="flex gap-2 text-sm text-brand-muted">
            <Target size={14} className="mt-0.5 shrink-0 text-brand-red" />
            {checkpoint}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
