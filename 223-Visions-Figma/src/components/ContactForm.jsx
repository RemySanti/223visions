import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const initial = {
  name: '',
  email: '',
  phone: '',
  service: 'Not Sure',
  message: '',
  date: '',
};

export function ContactForm({ onSuccess }) {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();
    else navigate('/thank-you');
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-dark p-10 text-center"
        role="status"
      >
        <p className="text-display text-2xl font-semibold text-brand-offwhite">
          We got you.
        </p>
        <p className="mt-3 text-brand-muted">
          Expect to hear from us soon — typically within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Name *
          </span>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-brand-offwhite outline-none focus:border-brand-red"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Email *
          </span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-brand-offwhite outline-none focus:border-brand-red"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
          Phone
        </span>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-brand-offwhite outline-none focus:border-brand-red"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
          Service Interest
        </span>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-brand-offwhite outline-none focus:border-brand-red"
        >
          <option>Photography</option>
          <option>Videography</option>
          <option>Hybrid</option>
          <option>Not Sure</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
          Preferred Date
        </span>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-brand-offwhite outline-none focus:border-brand-red"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
          Message *
        </span>
        <textarea
          required
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-brand-offwhite outline-none focus:border-brand-red"
        />
      </label>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full"
      >
        Send My Request
      </motion.button>
    </form>
  );
}
