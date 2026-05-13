import { ReactNode } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  headline: string;
  subheadline?: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  backgroundImage?: string;
  children?: ReactNode;
}

export function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  children,
}: HeroProps) {
  return (
    <section
      className="relative py-20 md:py-32 bg-gray-100"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl ${backgroundImage ? 'text-white' : ''}`}>
          <h1 className="mb-6">{headline}</h1>
          {subheadline && <p className="mb-8 opacity-90">{subheadline}</p>}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Button asChild size="lg">
                  <Link to={primaryCTA.link}>{primaryCTA.text}</Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button asChild variant="outline" size="lg">
                  <Link to={secondaryCTA.link}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
