import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CONVERSION_FAQS } from '../data/clientInfo';

export function FAQSection({ limit }) {
  const [open, setOpen] = useState(0);
  const faqs = limit ? CONVERSION_FAQS.slice(0, limit) : CONVERSION_FAQS;

  return (
    <section className="border-t border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red-light">
            Questions
          </p>
          <h2 className="mt-3 text-display text-4xl font-bold md:text-5xl">
            Before You Book
          </h2>
          <p className="mt-4 text-brand-muted">
            Straight answers on pricing, turnaround, and what happens after you inquire.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="card-dark overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-brand-offwhite">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-white/10 px-5 pb-5 pt-3 text-sm leading-relaxed text-brand-muted">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
