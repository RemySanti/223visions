import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { INSTAGRAM, INSTAGRAM_HANDLE } from '../data/constants';

export function ThankYou() {
  return (
    <>
      <SEOHead
        title="Thank You"
        description="Thank you for contacting 223 Visions. We'll be in touch within 24 hours."
        path="/thank-you"
        noindex
      />

      <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg"
        >
          <h1 className="text-display text-4xl font-bold md:text-5xl">
            You&apos;re booked in.
          </h1>
          <p className="mt-4 text-lg text-brand-muted">
            We&apos;ll be in touch within 24 hours. In the meantime, follow our latest work.
          </p>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            <Instagram size={20} />
            Follow {INSTAGRAM_HANDLE}
          </a>

          <p className="mt-8">
            <Link to="/" className="text-sm text-brand-muted hover:text-brand-offwhite">
              ← Back to home
            </Link>
          </p>
        </motion.div>
      </section>
    </>
  );
}
