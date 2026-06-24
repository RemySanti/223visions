import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Clapperboard, Layers } from 'lucide-react';
import { SEOHead, serviceSchema } from '../components/SEOHead';
import { CTABand } from '../components/CTABand';
import { PackagesSection } from '../components/PackagesSection';
import { FAQSection } from '../components/FAQSection';
import { CORE_PACKAGES } from '../data/clientInfo';

const blocks = [
  {
    title: 'Photography',
    icon: Camera,
    startingAt: CORE_PACKAGES[0].startingAt,
    image: '/portfolio/portrait/1h4a0002.jpg',
    imageClass: 'aspect-[3/4] object-cover object-top',
    description:
      'From executive headshots to full-scale events, we craft still imagery with editorial intent and commercial polish.',
    includes: [
      'Portraits & headshots',
      'Corporate & church events',
      'Brand & product shoots',
      'Retouched deliverables',
    ],
    reverse: false,
  },
  {
    title: 'Videography',
    icon: Clapperboard,
    startingAt: CORE_PACKAGES[1].startingAt,
    image: '/portfolio/video-productions/1h4a2152.jpg',
    imageClass: 'aspect-[4/3] object-cover object-center',
    description:
      'Cinematic motion for brands, artists, and live experiences — story-driven edits that move audiences.',
    includes: [
      'Brand films & promos',
      'Event & live coverage',
      'Music videos',
      'Social-first cuts',
    ],
    reverse: true,
  },
  {
    title: 'Hybrid Coverage',
    icon: Layers,
    startingAt: CORE_PACKAGES[2].startingAt,
    popular: true,
    image: '/portfolio/weddings/1h4a0130.jpg',
    imageClass: 'aspect-[4/3] object-cover object-[center_20%]',
    description:
      'One team, one vision: synchronized photo and video capture with cohesive creative direction on shoot day.',
    includes: [
      'Same-session photo + video',
      'Unified shot list',
      'Priority turnaround options',
      'Best value for events',
    ],
    reverse: false,
  },
];

export function Services() {
  return (
    <>
      <SEOHead
        title="Photography & Videography Services"
        description="Professional photography, videography, and hybrid coverage in Atlanta. Portraits, events, brand films, and more from 223 Visions."
        path="/services"
        jsonLd={[
          serviceSchema('Photography'),
          serviceSchema('Videography'),
          serviceSchema('Hybrid Coverage'),
        ]}
      />

      <section className="flex min-h-[40vh] items-end border-b border-white/10 pb-16 pt-40">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display text-5xl font-bold md:text-6xl"
          >
            What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-xl text-brand-muted"
          >
            Three disciplines. One obsessive standard: truth through the lens.
          </motion.p>
        </div>
      </section>

      {blocks.map((block, i) => (
        <section
          key={block.title}
          className={`py-16 md:py-24 ${i % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: block.reverse ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={block.reverse ? 'lg:order-2' : ''}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red">
                <block.icon size={24} />
              </div>
              <h2 className="text-display text-3xl font-bold md:text-4xl">{block.title}</h2>
              <p className="mt-2 text-sm text-brand-muted">
                Starting at <span className="font-semibold text-brand-offwhite">${block.startingAt}</span>
                {block.popular && (
                  <span className="ml-2 text-xs font-bold uppercase tracking-wider text-brand-red-light">
                    · Most Popular
                  </span>
                )}
              </p>
              <p className="mt-4 leading-relaxed text-brand-muted">{block.description}</p>
              <ul className="mt-6 space-y-2">
                {block.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-offwhite">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary mt-8 inline-flex">
                Book {block.title}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-2xl ${block.reverse ? 'lg:order-1' : ''}`}
            >
              <img
                src={block.image}
                alt={block.title}
                loading="lazy"
                className={`w-full ${block.imageClass ?? 'aspect-[4/3] object-cover object-center'}`}
              />
            </motion.div>
          </div>
        </section>
      ))}

      <PackagesSection showCore={false} showSpecialty showBookingLink />

      <FAQSection />

      <CTABand
        headline="Not sure which service fits?"
        subtext="Book a free consultation — we'll map the right package to your goals."
        buttonLabel="Book a Consultation"
        buttonTo="/contact"
      />
    </>
  );
}
