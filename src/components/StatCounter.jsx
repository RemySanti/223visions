import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

function StatItem({ value, suffix = '', label, isNumeric = true }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const count = useCountUp(isNumeric ? value : 0, 2000, 0, inView && isNumeric);

  return (
    <div ref={ref} className="text-center">
      <p className="text-display text-4xl font-bold text-brand-offwhite md:text-5xl">
        {isNumeric ? (
          <>
            {count}
            {suffix}
          </>
        ) : (
          value
        )}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-brand-muted">{label}</p>
    </div>
  );
}

export function StatCounter() {
  const stats = [
    { value: 500, suffix: '+', label: 'Sessions', isNumeric: true },
    { value: 3, suffix: '', label: 'States', isNumeric: true },
    { value: 100, suffix: '%', label: 'Satisfaction', isNumeric: true },
    { value: '2020', suffix: '', label: 'Since', isNumeric: false },
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-4 md:grid-cols-4 md:gap-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
