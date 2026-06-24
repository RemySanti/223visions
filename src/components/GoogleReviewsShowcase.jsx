import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GOOGLE_REVIEW_URL } from '../data/constants';
import { GOOGLE_REVIEWS } from '../data/clientInfo';

function Stars({ count = 5 }) {
  return (
    <span className="inline-flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </span>
  );
}

export function GoogleReviewsShowcase() {
  return (
    <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red-light">
              Google Reviews
            </p>
            <h2 className="mt-3 text-display text-4xl font-bold md:text-5xl">Trusted in Atlanta</h2>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Stars />
              <span className="text-display text-3xl text-brand-offwhite">{GOOGLE_REVIEWS.rating}</span>
              <span className="text-sm text-brand-muted">
                (
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400/90 hover:text-sky-300 hover:underline"
                >
                  {GOOGLE_REVIEWS.reviewCount} Google reviews
                </a>
                )
              </span>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !py-2.5 !text-xs"
          >
            Leave a Review
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {GOOGLE_REVIEWS.reviews.map((review, i) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-dark p-6"
            >
              <div className="flex items-center justify-between gap-2">
                <Stars />
                <span className="text-xs text-brand-muted">{review.service}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-brand-offwhite">— {review.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
