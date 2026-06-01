import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-display mb-12 text-center text-4xl font-bold"
        >
          Client Stories
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="card-dark p-8 md:p-12"
            >
              <div className="mb-4 flex gap-1 text-brand-red">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-brand-offwhite md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="font-semibold text-brand-offwhite">{t.name}</span>
                  <span className="mt-1 block text-sm text-brand-muted">{t.service}</span>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:border-brand-red"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-brand-red' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:border-brand-red"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
