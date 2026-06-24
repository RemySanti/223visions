import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { Aperture, Monitor } from 'lucide-react';
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_PATH } from '../data/constants';

export function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Meet 223 Visions — Atlanta's hybrid photography and videography agency founded on capturing truth through the lens."
        path="/about"
      />

      <section className="pt-40 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src="/portfolio/portrait/6s3a9749.jpg"
              alt="223 Visions behind the scenes"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-display text-5xl font-bold">About 223 Visions</h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-muted">
              223 Visions was born from a single obsession: capturing truth through a lens.
              Based in Atlanta, we blend photography and videography into hybrid experiences
              that no other agency offers.
            </p>
            <p className="mt-4 leading-relaxed text-brand-muted">
              We work with brands, churches, artists, and families who refuse generic content.
              Every frame is intentional. Every edit serves the story.
            </p>
            <Link to={PRIMARY_CTA_PATH} className="btn-primary mt-8 inline-flex">
              {PRIMARY_CTA_LABEL}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-12">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 text-center sm:gap-16">
          <div className="flex items-center gap-3 text-brand-muted">
            <Aperture className="text-brand-red" size={28} />
            <span className="text-sm uppercase tracking-wider">Sony / Canon Cinema</span>
          </div>
          <div className="flex items-center gap-3 text-brand-muted">
            <Monitor className="text-brand-red" size={28} />
            <span className="text-sm uppercase tracking-wider">DaVinci &amp; Lightroom</span>
          </div>
        </div>
      </section>
    </>
  );
}
