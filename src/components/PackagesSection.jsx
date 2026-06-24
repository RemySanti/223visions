import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { CORE_PACKAGES, SPECIALTY_PACKAGES } from '../data/clientInfo';
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_PATH } from '../data/constants';

function PackageCard({ pkg, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`card-dark relative flex flex-col p-6 md:p-8 ${
        pkg.popular ? 'border-brand-red/40 ring-1 ring-brand-red/20' : ''
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          <Star size={12} fill="currentColor" />
          Most Popular
        </span>
      )}
      <h3 className="text-display text-2xl text-brand-offwhite">{pkg.title}</h3>
      <p className="mt-3">
        <span className="text-sm text-brand-muted">Starting at</span>
        <span className="text-display ml-2 text-4xl text-brand-offwhite">${pkg.startingAt}</span>
      </p>
      <ul className="mt-6 flex-1 space-y-2.5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-brand-muted">
            <Check size={14} className="mt-0.5 shrink-0 text-brand-red" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        to={`/contact?service=${encodeURIComponent(pkg.title)}`}
        className={`mt-8 inline-flex w-full justify-center ${pkg.popular ? 'btn-primary' : 'btn-ghost'}`}
      >
        {PRIMARY_CTA_LABEL}
      </Link>
    </motion.article>
  );
}

export function PackagesSection({ showSpecialty = true, showBookingLink = false, showCore = true }) {
  return (
    <section className="border-t border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red-light">
            Investment
          </p>
          <h2 className="mt-3 text-display text-4xl font-bold md:text-5xl">
            Packages &amp; Starting Rates
          </h2>
          <p className="mt-4 text-brand-muted">
            Helping businesses, athletes, churches, and creators tell their story. Custom quotes
            available for larger projects.
          </p>
        </div>

        {showCore && (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CORE_PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        )}

        {showSpecialty && (
          <div className={`grid gap-4 sm:grid-cols-2 ${showCore ? 'mt-10' : 'mt-12'}`}>
            {SPECIALTY_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="card-dark flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-display text-xl text-brand-offwhite">{pkg.title}</h3>
                  <p className="mt-1 text-sm text-brand-muted">{pkg.description}</p>
                </div>
                <p className="text-display shrink-0 text-2xl text-brand-offwhite">
                  <span className="text-sm font-normal text-brand-muted">from </span>${pkg.startingAt}
                </p>
              </div>
            ))}
          </div>
        )}

        {showBookingLink && (
          <p className="mt-8 text-center text-sm text-brand-muted">
            Ready to move forward?{' '}
            <Link to={PRIMARY_CTA_PATH} className="text-brand-red-light hover:underline">
              {PRIMARY_CTA_LABEL}
            </Link>{' '}
            and we&apos;ll map the right package to your goals.
          </p>
        )}
      </div>
    </section>
  );
}
