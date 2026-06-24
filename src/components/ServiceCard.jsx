import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function ServiceCard({ icon: Icon, title, description, index = 0, startingAt, popular }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`card-dark group relative p-8 transition-shadow duration-300 hover:border-brand-magenta/50 hover:shadow-[0_0_40px_rgba(230,0,126,0.2)] ${
        popular ? 'border-brand-red/30' : ''
      }`}
    >
      {popular && (
        <span className="absolute right-4 top-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-red-light">
          <Star size={12} fill="currentColor" />
          Popular
        </span>
      )}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-brand-red/10 text-brand-red transition-colors group-hover:bg-gradient-to-br group-hover:from-brand-red group-hover:to-brand-magenta group-hover:text-white">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-display text-2xl font-semibold text-brand-offwhite">{title}</h3>
      {startingAt != null && (
        <p className="mt-2 text-sm text-brand-muted">
          Starting at <span className="font-semibold text-brand-offwhite">${startingAt}</span>
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-brand-muted">{description}</p>
    </motion.article>
  );
}
