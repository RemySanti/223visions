import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { Aperture, Monitor } from 'lucide-react';

const team = [
  {
    name: 'Christian Bates',
    role: 'Creative Director & Founder',
    image: '/portfolio/portrait/1h4a0002.jpg',
    bio: 'Leading 223 Visions with a passion for visual storytelling, hybrid production, and Atlanta-rooted creative excellence.',
  },
  {
    name: 'Production Team',
    role: 'Photo & Video Crew',
    image: '/portfolio/events/IMG_2332.jpg',
    bio: 'A tight roster of photographers, videographers, and editors who execute with speed, taste, and reliability.',
  },
];

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
              src="/portfolio/portrait/1h4a0222.jpg"
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
            <Link to="/contact" className="btn-primary mt-8 inline-flex">
              Work With Us
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

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-display mb-12 text-center text-4xl font-bold">The Team</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-dark overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className={`w-full object-cover ${
                    member.image.includes('/portrait/')
                      ? 'aspect-[3/4] object-top'
                      : 'aspect-[4/3] object-center'
                  }`}
                />
                <div className="p-6">
                  <h3 className="text-display text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-wider text-brand-red">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-brand-muted">{member.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
