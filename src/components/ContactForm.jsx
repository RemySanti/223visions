import { useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BUDGET_RANGES,
  DELIVERABLE_OPTIONS,
  PROJECT_TYPES,
  SERVICE_OPTIONS,
} from '../data/clientInfo';
import { submitContactToGhl } from '../lib/submitContactToGhl';
import { trackGenerateLead, clarityEvent } from '../lib/analytics';

const inputClass =
  'w-full rounded-lg border border-white/10 bg-brand-black px-4 py-3 text-brand-offwhite outline-none focus:border-brand-red';

const selectClass = `${inputClass} scheme-dark cursor-pointer`;

function matchServiceOption(param) {
  if (!param) return 'Not sure yet';
  const lower = param.toLowerCase();
  if (lower.includes('hybrid')) return 'Hybrid (Photo + Video)';
  if (lower.includes('video') || lower.includes('videography')) return 'Video';
  if (lower.includes('photo')) return 'Photography';
  return SERVICE_OPTIONS.includes(param) ? param : 'Not sure yet';
}

function matchProjectType(param) {
  if (!param) return 'Other';
  const found = PROJECT_TYPES.find(
    (t) => t.toLowerCase() === param.toLowerCase() || t.toLowerCase().includes(param.toLowerCase())
  );
  return found ?? 'Other';
}

export function ContactForm({ onSuccess }) {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    projectType: matchProjectType(searchParams.get('project')),
    service: matchServiceOption(searchParams.get('service')),
    date: '',
    location: searchParams.get('location') || '',
    budget: 'Not sure yet',
    deliverables: [],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const toggleDeliverable = (item) => {
    setForm((f) => ({
      ...f,
      deliverables: f.deliverables.includes(item)
        ? f.deliverables.filter((d) => d !== item)
        : [...f.deliverables, item],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await submitContactToGhl(form, {
        formPage: location.pathname,
        referrer: document.referrer || '',
      });
      trackGenerateLead({
        project_type: form.projectType,
        service: form.service,
        form_page: location.pathname,
      });
      clarityEvent('generate_lead', form.projectType);
      setSubmitted(true);
      if (onSuccess) onSuccess();
      else navigate('/thank-you');
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email us directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-dark p-10 text-center"
        role="status"
      >
        <p className="text-display text-2xl font-semibold text-brand-offwhite">We got you.</p>
        <p className="mt-3 text-brand-muted">
          Expect a response within 24 hours with an accurate quote for your project.
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
          <input required name="name" value={form.name} onChange={handleChange} className={inputClass} />
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
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Phone
          </span>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Business / Organization
          </span>
          <input
            name="organization"
            value={form.organization}
            onChange={handleChange}
            className={inputClass}
            placeholder="Optional"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Project Type
          </span>
          <select name="projectType" value={form.projectType} onChange={handleChange} className={selectClass}>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Services Needed
          </span>
          <select name="service" value={form.service} onChange={handleChange} className={selectClass}>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Project Date
          </span>
          <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
            Location
          </span>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className={inputClass}
            placeholder="Venue, neighborhood, or address"
          />
        </label>
      </div>

      <fieldset>
        <legend className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
          Deliverables Interested In
        </legend>
        <div className="flex flex-wrap gap-2">
          {DELIVERABLE_OPTIONS.map((item) => {
            const active = form.deliverables.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleDeliverable(item)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  active
                    ? 'border-brand-red bg-brand-red/15 text-brand-offwhite'
                    : 'border-white/10 text-brand-muted hover:border-white/20'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
          Budget Range
        </span>
        <select name="budget" value={form.budget} onChange={handleChange} className={selectClass}>
          {BUDGET_RANGES.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-muted">
          Tell Us About Your Project *
        </span>
        <textarea
          required
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Goals, key moments, inspiration, or anything we should know..."
        />
      </label>

      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={submitting ? undefined : { scale: 1.02 }}
        whileTap={submitting ? undefined : { scale: 0.98 }}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? 'Sending...' : 'Request My Project'}
      </motion.button>

      {error && (
        <p className="text-center text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
