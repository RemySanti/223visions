import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_PATH } from '../data/constants';

export function CTABand({
  headline = 'Ready to Tell Your Story?',
  subtext = 'Based in Atlanta. Available Nationwide.',
  buttonLabel = PRIMARY_CTA_LABEL,
  buttonTo = PRIMARY_CTA_PATH,
  external = false,
  href,
}) {
  return (
    <section className="cta-border-top relative overflow-hidden bg-brand-black py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red/15 via-brand-magenta/5 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
      >
        <h2 className="text-display text-4xl font-bold md:text-5xl">{headline}</h2>
        <p className="mt-4 text-lg text-brand-muted">{subtext}</p>
        {external && href ? (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary mt-8 inline-flex"
          >
            {buttonLabel}
          </motion.a>
        ) : (
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-block">
            <Link to={buttonTo} className="btn-primary">
              {buttonLabel}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
