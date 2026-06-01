import { motion } from 'framer-motion';

export function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="card-dark group p-8 transition-shadow duration-300 hover:border-brand-magenta/50 hover:shadow-[0_0_40px_rgba(230,0,126,0.2)]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-brand-red/10 text-brand-red transition-colors group-hover:bg-gradient-to-br group-hover:from-brand-red group-hover:to-brand-magenta group-hover:text-white">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-display text-2xl font-semibold text-brand-offwhite">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted">{description}</p>
    </motion.article>
  );
}
