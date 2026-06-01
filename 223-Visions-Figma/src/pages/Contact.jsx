import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SEOHead, localBusinessSchema } from '../components/SEOHead';
import { EMAIL, INSTAGRAM, INSTAGRAM_HANDLE } from '../data/constants';

export function Contact() {
  return (
    <>
      <SEOHead
        title="Book a Session"
        description="Book Atlanta photography and videography with 223 Visions. Request a quote or schedule your hybrid session today."
        path="/contact"
        jsonLd={localBusinessSchema()}
      />

      <section className="border-b border-white/10 pb-8 pt-40">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display text-5xl font-bold"
          >
            Book a Session
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-brand-muted"
          >
            Atlanta Photography &amp; Videography — tell us about your project.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 lg:grid-cols-2 sm:px-6 lg:px-8">
          <div>
            <span id="conversion-anchor" className="sr-only">
              Conversion form anchor
            </span>
            <ContactForm />
            <p className="mt-4 text-center text-sm text-brand-muted lg:text-left">
              Response within 24 hours. Based in Atlanta, GA.
            </p>
          </div>

          <div className="space-y-8">
            <div className="card-dark p-8">
              <h2 className="text-display mb-6 text-2xl font-semibold">Get In Touch</h2>
              <ul className="space-y-5">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 text-brand-muted hover:text-brand-offwhite"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5">
                      <Mail size={20} className="text-brand-red" />
                    </span>
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-brand-muted hover:text-brand-offwhite"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5">
                      <Instagram size={20} className="text-brand-red" />
                    </span>
                    {INSTAGRAM_HANDLE}
                  </a>
                </li>
                <li className="flex items-center gap-4 text-brand-muted">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5">
                    <MapPin size={20} className="text-brand-red" />
                  </span>
                  Atlanta, GA
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              {['500+ Happy Clients', 'Atlanta-Based', 'Fast Turnaround'].map((t) => (
                <div key={t} className="card-dark p-4 text-xs font-semibold uppercase tracking-wide text-brand-muted">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
