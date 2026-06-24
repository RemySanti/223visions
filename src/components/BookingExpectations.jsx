import { BOOKING_STEPS } from '../data/clientInfo';

export function BookingExpectations({ compact = false }) {
  if (compact) {
    return (
      <div className="card-dark p-6">
        <h2 className="text-display text-xl font-semibold">What Happens After You Book</h2>
        <ol className="mt-4 space-y-4">
          {BOOKING_STEPS.map((step) => (
            <li key={step.step} className="flex gap-3">
              <span className="text-display shrink-0 text-lg text-brand-red/80">0{step.step}</span>
              <div>
                <p className="text-sm font-medium text-brand-offwhite">{step.title}</p>
                <p className="mt-0.5 text-xs text-brand-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="card-dark p-8">
      <h2 className="text-display mb-2 text-2xl font-semibold">What Happens After You Book</h2>
      <p className="mb-6 text-sm text-brand-muted">
        After you submit, here is the typical timeline — no surprises.
      </p>
      <ol className="relative space-y-6 border-l border-white/10 pl-6">
        {BOOKING_STEPS.map((step) => (
          <li key={step.step} className="relative">
            <span className="absolute -left-[1.6rem] flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
              {step.step}
            </span>
            <p className="text-sm font-medium text-brand-offwhite">{step.title}</p>
            <p className="mt-1 text-sm text-brand-muted">{step.description}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-brand-muted">
        Full booking and policy details are shared when you confirm your date. Custom quotes
        available for events, multi-hour coverage, and add-ons.
      </p>
    </div>
  );
}
