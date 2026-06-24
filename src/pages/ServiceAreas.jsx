import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { SEOHead, localBusinessSchema } from '../components/SEOHead';
import { CTABand } from '../components/CTABand';
import { LOCATION_PAGES } from '../data/locationPages';
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_PATH } from '../data/constants';

const REGIONS = ['Metro Core', 'North Metro', 'Northwest Metro', 'East Metro', 'South Metro'];

function LocationCard({ location }) {
  return (
    <Link
      to={`/areas/${location.slug}`}
      className="card-dark group flex flex-col p-5 transition-colors hover:border-brand-red/30"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
        {location.type === 'city' ? 'City' : 'Neighborhood'}
      </p>
      <h3 className="text-display mt-1 text-xl text-brand-offwhite group-hover:text-brand-red-light">
        {location.name}
      </h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-brand-muted">
        {location.intro}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-magenta">
        View {location.name} services <ArrowRight size={14} />
      </span>
    </Link>
  );
}

export function ServiceAreas() {
  return (
    <>
      <SEOHead
        title="Atlanta Photography & Videography Service Areas"
        description="223 Visions serves Atlanta, Buckhead, Midtown, Decatur, Marietta, Sandy Springs, Alpharetta, and 19+ metro communities with photography, videography, and hybrid coverage."
        path="/service-areas"
        jsonLd={localBusinessSchema()}
      />

      <article>
        <section className="border-b border-white/10 pb-12 pt-40">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-magenta"
            >
              <MapPin size={14} />
              Greater Atlanta Metro
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-display mt-3 text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Areas We Serve
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-brand-muted"
            >
              Local photography and videography across Atlanta — browse your area for services,
              starting rates, and location-specific FAQs. Every page is built for businesses,
              churches, creators, and families in your community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8"
            >
              <Link to={PRIMARY_CTA_PATH} className="btn-primary inline-flex">
                {PRIMARY_CTA_LABEL}
              </Link>
            </motion.div>
          </div>
        </section>

        {REGIONS.map((region) => {
          const locations = LOCATION_PAGES.filter((l) => l.region === region);
          if (locations.length === 0) return null;

          return (
            <section key={region} className="border-b border-white/10 py-16 md:py-20">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-display text-3xl font-bold md:text-4xl">{region}</h2>
                <p className="mt-2 text-brand-muted">
                  Photography &amp; videography in {region.toLowerCase()} Atlanta communities.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {locations.map((location) => (
                    <LocationCard key={location.slug} location={location} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <CTABand
          headline="Don't see your area?"
          subtext="We serve the full Atlanta metro. Start your project and tell us where you're located."
          buttonLabel={PRIMARY_CTA_LABEL}
          buttonTo={PRIMARY_CTA_PATH}
        />
      </article>
    </>
  );
}
