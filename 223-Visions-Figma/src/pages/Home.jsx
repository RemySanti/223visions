import { Camera, Clapperboard, Layers } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { ServiceCard } from '../components/ServiceCard';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { StatCounter } from '../components/StatCounter';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { CTABand } from '../components/CTABand';
import { SEOHead, localBusinessSchema } from '../components/SEOHead';
import { homePortfolioItems } from '../data/portfolioItems';
const services = [
  {
    icon: Camera,
    title: 'Photography',
    description:
      'Portraits, events, brand shoots, and editorial work with cinematic lighting and precision.',
  },
  {
    icon: Clapperboard,
    title: 'Videography',
    description:
      'Brand films, event coverage, music videos, and social content built for impact.',
  },
  {
    icon: Layers,
    title: 'Hybrid Coverage',
    description:
      'Photo and video in one session — unified creative direction, same-day synergy.',
  },
];

export function Home() {
  return (
    <>
      <SEOHead
        title="223 Visions | Atlanta Photography & Videography Agency"
        description="Atlanta's #1 hybrid shooting agency. Photography, videography, and hybrid coverage. Book your session today."
        path="/"
        jsonLd={localBusinessSchema()}
      />

      <HeroSection showPpcLine />

      <section id="services-strip" className="border-t border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid items={homePortfolioItems} />

      <StatCounter />

      <TestimonialSlider />

      <CTABand buttonTo="/contact" />
    </>
  );
}
