import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { serviceAreaCities, serviceAreaNeighborhoods } from '../data/serviceAreas';

export function ServiceAreas() {
  return (
    <>
      <SEOHead
        title="Atlanta Photography & Videography | Areas We Serve"
        description="223 Visions serves Atlanta, Buckhead, Midtown, Decatur, Marietta, Sandy Springs, and surrounding metro areas with photography and videography."
        path="/service-areas"
      />

      <article className="mx-auto max-w-3xl px-4 pb-28 pt-40 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-display text-4xl font-bold md:text-5xl"
        >
          Atlanta Photography &amp; Videography Services
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert mt-8 max-w-none text-brand-muted"
        >
          <p className="leading-relaxed">
            223 Visions is Atlanta&apos;s premier hybrid shooting agency, delivering
            photography, videography, and same-day hybrid coverage across the metro.
            Whether you need corporate headshots in Buckhead, event coverage in Midtown,
            or a brand film in Decatur — we bring cinematic production value to your
            neighborhood.
          </p>

          <h2 className="text-display mt-10 text-2xl font-semibold text-brand-offwhite">
            Cities &amp; communities we serve
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {serviceAreaCities.map((city) => (
              <li key={city} className="flex items-center gap-2 text-sm">
                <span className="h-1 w-1 rounded-full bg-brand-red" />
                {city}
              </li>
            ))}
          </ul>

          <h2 className="text-display mt-10 text-2xl font-semibold text-brand-offwhite">
            Atlanta neighborhoods
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {serviceAreaNeighborhoods.map((n) => (
              <li key={n} className="text-sm">
                {n}
              </li>
            ))}
          </ul>

          <p className="mt-10">
            Ready to book? Explore our{' '}
            <Link to="/services" className="text-brand-magenta hover:underline">
              services
            </Link>{' '}
            or{' '}
            <Link to="/contact" className="text-brand-magenta hover:underline">
              contact us
            </Link>{' '}
            for a custom quote.
          </p>
        </motion.div>
      </article>
    </>
  );
}
