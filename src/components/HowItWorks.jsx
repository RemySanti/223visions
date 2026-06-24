import { motion } from 'framer-motion';
import { BOOKING_STEPS } from '../data/clientInfo';

export function HowItWorks() {
  return (
    <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-magenta">
            Simple Process
          </p>
          <h2 className="mt-3 text-display text-4xl font-bold md:text-5xl">How It Works</h2>
          <p className="mt-4 text-brand-muted">
            From first message to final delivery — here is what to expect when you book 223 Visions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BOOKING_STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-dark p-6"
            >
              <span className="text-display text-4xl text-brand-red/80">0{item.step}</span>
              <h3 className="mt-3 text-display text-xl text-brand-offwhite">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
