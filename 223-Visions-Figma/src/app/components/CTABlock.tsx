import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface CTABlockProps {
  headline: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'default' | 'dark';
}

export function CTABlock({
  headline,
  description,
  ctaText,
  ctaLink,
  variant = 'default',
}: CTABlockProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`py-16 md:py-24 ${isDark ? 'bg-white/5' : 'bg-white/5'}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4">{headline}</h2>
        {description && <p className="mb-8 max-w-2xl mx-auto opacity-90">{description}</p>}
        <Button asChild size="lg" variant={isDark ? 'secondary' : 'default'}>
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}