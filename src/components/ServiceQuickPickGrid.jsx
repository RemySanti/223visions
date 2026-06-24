import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICE_QUICK_PICKS } from '../data/clientInfo';

export function ServiceQuickPickGrid() {
  return (
    <section className="border-t border-white/10 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-magenta">
            What Are You Planning?
          </p>
          <h2 className="mt-3 text-display text-4xl font-bold md:text-5xl">Pick Your Project</h2>
          <p className="mt-4 text-brand-muted">
            Tap a service to start your quote with the right details pre-filled.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_QUICK_PICKS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/contact?project=${encodeURIComponent(item.project)}&service=${encodeURIComponent(item.service)}`}
                className="card-dark group block overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                  />
                </div>
                <div className="flex items-end justify-between gap-2 p-5">
                  <div>
                    <h3 className="text-display text-xl text-brand-offwhite">{item.label}</h3>
                    <p className="mt-1 text-sm text-brand-muted">{item.outcome}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-brand-red opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
