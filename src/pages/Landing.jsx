import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { BookingExpectations } from '../components/BookingExpectations';
import { SEOHead } from '../components/SEOHead';
import { Logo } from '../components/Logo';
import { EMAIL, PRIMARY_CTA_LABEL } from '../data/constants';

export function Landing() {
  return (
    <>
      <SEOHead
        title={PRIMARY_CTA_LABEL}
        description="Start your Atlanta photography or videography project with 223 Visions. Limited availability — tell us about your shoot today."
        path="/landing"
        noindex
      />

      <header className="fixed inset-x-0 top-0 z-50 bg-brand-black">
        <div className="mx-auto flex h-28 max-w-4xl items-center justify-between px-4">
          <Logo className="h-24" />
          <a href={`mailto:${EMAIL}`} className="text-sm text-brand-muted hover:text-brand-offwhite">
            {EMAIL}
          </a>
        </div>
      </header>

      <main className="min-h-screen pt-36 pb-16">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Atlanta Photography &amp; Videography
            </p>
            <h1 className="text-display mt-3 text-4xl font-bold">{PRIMARY_CTA_LABEL}</h1>
            <p className="mt-3 text-brand-muted">
              Photography from $250 · Video from $350 · Hybrid from $550
            </p>
            <p className="mt-2 text-sm text-brand-muted">
              Businesses, athletes, churches &amp; creators — Atlanta metro
            </p>
          </motion.div>

          <div className="mb-8">
            <BookingExpectations compact />
          </div>

          <span id="conversion-anchor" className="sr-only">
            Conversion form anchor
          </span>

          <ContactForm />
        </div>
      </main>
    </>
  );
}
