import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_PATH } from '../data/constants';

export function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />

      <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg"
        >
          <p className="text-display text-gradient-brand text-7xl font-bold md:text-8xl">404</p>
          <h1 className="mt-4 text-display text-4xl font-bold md:text-5xl">
            This shot didn&apos;t make the cut.
          </h1>
          <p className="mt-4 text-lg text-brand-muted">
            The page you&apos;re looking for moved or never existed.
          </p>

          <Link to={PRIMARY_CTA_PATH} className="btn-primary mt-8 inline-flex">
            {PRIMARY_CTA_LABEL}
          </Link>

          <p className="mt-8 flex justify-center gap-6 text-sm">
            <Link to="/" className="text-brand-muted hover:text-brand-offwhite">
              ← Back to home
            </Link>
            <Link to="/portfolio" className="text-brand-muted hover:text-brand-offwhite">
              View portfolio
            </Link>
          </p>
        </motion.div>
      </section>
    </>
  );
}
