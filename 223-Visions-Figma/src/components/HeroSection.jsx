import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { BOOKING_URL } from '../data/constants';

const HERO_POSTER = '/portfolio/weddings/1h4a0130.jpg';

export function HeroSection({
  headline = "We Don't Just Capture Moments. We Create Them.",
  subheadline = "Atlanta's Premier Hybrid Photography & Videography Agency",
  showPpcLine = false,
  primaryCta = { label: 'Book a Session', href: BOOKING_URL, external: true },
  secondaryCta = { label: 'View Our Work', to: '/portfolio' },
}) {
  const scrollToContent = () => {
    document.getElementById('services-strip')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Replace with actual client video URL */}
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
          aria-hidden="true"
        >
          <source src="" type="video/mp4" />
        </video>
        <img
          src={HERO_POSTER}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8">
        {showPpcLine && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-magenta"
          >
            Atlanta Photography &amp; Videography | Book Your Session Today
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-display text-4xl font-bold leading-[1.05] text-brand-offwhite sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We Don&apos;t Just Capture Moments.
          <br />
          <span className="text-gradient-brand">We Create Them.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-brand-muted md:text-xl"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {primaryCta.external ? (
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              {primaryCta.label}
            </a>
          ) : (
            <Link to={primaryCta.to || '/contact'} className="btn-primary w-full sm:w-auto">
              {primaryCta.label}
            </Link>
          )}
          <Link to={secondaryCta.to} className="btn-ghost w-full sm:w-auto">
            {secondaryCta.label}
          </Link>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-brand-muted hover:text-brand-offwhite"
        aria-label="Scroll to content"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
