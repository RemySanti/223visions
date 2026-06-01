import { PortfolioGrid } from '../components/PortfolioGrid';
import { SEOHead } from '../components/SEOHead';
import { portfolioItems } from '../data/portfolioItems';
import { motion } from 'framer-motion';

export function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfolio"
        description="View the 223 Visions portfolio — Atlanta photographer and videographer specializing in portraits, events, weddings, and hybrid coverage."
        path="/portfolio"
      />

      <section className="border-b border-white/10 pb-12 pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display text-5xl font-bold md:text-6xl"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-brand-muted"
          >
            Atlanta photographer &amp; videographer — cinematic stills and motion across
            portraits, events, and hybrid productions.
          </motion.p>
        </div>
      </section>

      <PortfolioGrid
        items={portfolioItems}
        showTitle={false}
        filterMode="long"
      />
    </>
  );
}
