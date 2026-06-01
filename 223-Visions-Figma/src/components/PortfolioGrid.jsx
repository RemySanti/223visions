import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbox } from './Lightbox';

const FILTERS = ['All', 'Photo', 'Video', 'Hybrid'];

export function PortfolioGrid({
  items,
  title = 'Our Work',
  showTitle = true,
  filterMode = 'short',
}) {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(() => {
    if (active === 'All') return items;
    if (filterMode === 'long') {
      const map = { Photography: 'Photo', Videography: 'Video', Hybrid: 'Hybrid' };
      return items.filter((i) => map[i.filter] === active || i.category === active);
    }
    return items.filter((i) => i.category === active || i.filter === active);
  }, [items, active, filterMode]);

  const tabs =
    filterMode === 'long'
      ? ['All', 'Photography', 'Videography', 'Hybrid']
      : FILTERS;

  const tabToFilter = (tab) => {
    if (filterMode === 'long') {
      const m = { Photography: 'Photo', Videography: 'Video', Hybrid: 'Hybrid' };
      return m[tab] || tab;
    }
    return tab;
  };

  return (
    <section className="py-20 md:py-28" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-display text-4xl font-bold md:text-5xl">{title}</h2>
          </motion.div>
        )}

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => {
            const value = tab === 'All' ? 'All' : tabToFilter(tab);
            const isActive = active === value || (tab !== 'All' && active === tab);
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(value)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-red to-brand-magenta text-white'
                    : 'border border-white/10 text-brand-muted hover:border-brand-red/50 hover:text-brand-offwhite'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: (index % 12) * 0.05 }}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.thumb || item.image}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/65 group-hover:opacity-100">
                <span className="mb-2 rounded-full border border-brand-red/60 bg-brand-red/20 px-3 py-1 text-xs uppercase tracking-wider text-brand-offwhite">
                  {item.category || item.filter}
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-offwhite">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
