import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Check, MapPin, Video } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CTABand } from '../components/CTABand';
import { getLocationBySlug, getNearbyLocations, getLocationHeroImage } from '../data/locationPages';
import { CORE_PACKAGES } from '../data/clientInfo';
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_PATH, SITE_URL } from '../data/constants';
import { SiloHeroImage } from '../components/SiloHeroImage';

function locationSchema(location, heroImage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `223 Visions — ${location.name} Photography & Videography`,
    description: location.intro,
    url: `${SITE_URL}/areas/${location.slug}`,
    image: `${SITE_URL}${heroImage}`,
    areaServed: {
      '@type': location.type === 'city' ? 'City' : 'Place',
      name: `${location.name}, GA`,
      containedInPlace: {
        '@type': 'City',
        name: 'Atlanta, GA',
      },
    },
    provider: {
      '@type': 'LocalBusiness',
      name: '223 Visions',
      email: 'Christian@223visions.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Atlanta',
        addressRegion: 'GA',
        addressCountry: 'US',
      },
    },
    serviceType: ['Photography', 'Videography', 'Hybrid Photo and Video'],
  };
}

function breadcrumbSchema(location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Service Areas',
        item: `${SITE_URL}/service-areas`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.name,
        item: `${SITE_URL}/areas/${location.slug}`,
      },
    ],
  };
}

function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function LocationPage() {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);

  if (!location) {
    return <Navigate to="/service-areas" replace />;
  }

  const nearby = getNearbyLocations(location.nearbySlugs);
  const heroImage = getLocationHeroImage(location.slug);
  const pageTitle = `${location.name} Photography & Videography`;
  const metaDescription = `Professional photography and videography in ${location.name}, GA. ${location.intro.slice(0, 140)}…`;

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        path={`/areas/${location.slug}`}
        image={heroImage}
        jsonLd={[locationSchema(location, heroImage), breadcrumbSchema(location), faqSchema(location.faqs)]}
      />

      <article>
        <section className="border-b border-white/10 pb-12 pt-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 text-sm text-brand-muted" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-brand-offwhite">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/service-areas" className="hover:text-brand-offwhite">
                    Service Areas
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-brand-offwhite">{location.name}</li>
              </ol>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-magenta">
                  <MapPin size={14} />
                  {location.region} · {location.type === 'city' ? 'City' : 'Neighborhood'}
                </p>
                <h1 className="text-display mt-3 text-4xl font-bold md:text-5xl lg:text-6xl">
                  {location.name} Photography &amp; Videography
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-brand-muted">{location.intro}</p>
                <Link to={PRIMARY_CTA_PATH} className="btn-primary mt-8 inline-flex">
                  {PRIMARY_CTA_LABEL}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <SiloHeroImage
                  src={heroImage}
                  alt={`Photography and videography in ${location.name}, Atlanta`}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-display text-3xl font-bold md:text-4xl">
              What We Shoot in {location.name}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {location.shootTypes.map((item) => (
                <div key={item} className="card-dark flex items-start gap-3 p-5">
                  <Check size={16} className="mt-1 shrink-0 text-brand-red" />
                  <span className="text-brand-offwhite">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-white/[0.02] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-display text-3xl font-bold md:text-4xl">
              Why Clients in {location.name} Choose 223 Visions
            </h2>
            <ul className="mt-8 space-y-4">
              {location.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-brand-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-white/10 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-display text-3xl font-bold md:text-4xl">Starting Investment</h2>
            <p className="mt-3 max-w-2xl text-brand-muted">
              Transparent starting rates for {location.name} projects. Custom quotes for events,
              multi-hour coverage, and add-ons.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {CORE_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="card-dark p-6">
                  <div className="flex items-center gap-2 text-brand-red">
                    {pkg.title.includes('Video') && !pkg.title.includes('Photo') ? (
                      <Video size={18} />
                    ) : (
                      <Camera size={18} />
                    )}
                    <h3 className="text-display text-xl text-brand-offwhite">{pkg.title}</h3>
                  </div>
                  <p className="mt-2 text-2xl text-brand-offwhite">
                    From <span className="text-display">${pkg.startingAt}</span>
                  </p>
                  <Link
                    to={`${PRIMARY_CTA_PATH}?service=${encodeURIComponent(pkg.title)}&location=${encodeURIComponent(location.name)}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-brand-red-light hover:underline"
                  >
                    Get a quote <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-display text-3xl font-bold md:text-4xl">
              {location.name} Photography FAQ
            </h2>
            <div className="mt-8 space-y-4">
              {location.faqs.map((faq) => (
                <div key={faq.q} className="card-dark p-6">
                  <h3 className="text-display text-lg text-brand-offwhite">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {nearby.length > 0 && (
          <section className="border-b border-white/10 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-display text-3xl font-bold md:text-4xl">Nearby Areas We Serve</h2>
              <p className="mt-3 text-brand-muted">
                Explore photography and videography in communities near {location.name}.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {nearby.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/areas/${area.slug}`}
                    className="card-dark group flex items-center justify-between p-5 transition-colors hover:border-brand-red/30"
                  >
                    <span className="text-brand-offwhite group-hover:text-brand-red-light">
                      {area.name}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-brand-muted group-hover:text-brand-red-light"
                    />
                  </Link>
                ))}
              </div>
              <Link
                to="/service-areas"
                className="mt-6 inline-flex items-center gap-1 text-sm text-brand-magenta hover:underline"
              >
                View all Atlanta service areas <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        )}

        <CTABand
          headline={`Ready to shoot in ${location.name}?`}
          subtext="Tell us about your project — we respond within 24 hours with a custom plan."
          buttonLabel={PRIMARY_CTA_LABEL}
          buttonTo={PRIMARY_CTA_PATH}
        />
      </article>
    </>
  );
}
