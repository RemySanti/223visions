import { Link } from 'react-router-dom';
import { Camera, Instagram, Mail, MapPin, User, Video } from 'lucide-react';
import { Logo } from './Logo';
import {
  EMAIL,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  TAGLINE,
} from '../data/constants';
import { LOCATION_PAGES } from '../data/locationPages';

const featuredAreas = LOCATION_PAGES.filter((l) =>
  ['buckhead', 'midtown', 'decatur', 'sandy-springs', 'marietta', 'alpharetta'].includes(l.slug)
);

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/service-areas', label: 'Service Areas' },
];

const services = [
  { icon: Camera, label: 'Photography' },
  { icon: Video, label: 'Videography' },
  { icon: User, label: 'Hybrid Coverage' },
];

function IconButton({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-muted transition-colors hover:border-brand-red/50 hover:text-brand-offwhite"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div>
            <Link to="/">
              <Logo className="h-28" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-muted">{TAGLINE}</p>
            <div className="mt-6 flex gap-3">
              <IconButton href={INSTAGRAM} label="Instagram">
                <Instagram size={18} />
              </IconButton>
              <IconButton href={`mailto:${EMAIL}`} label="Email">
                <Mail size={18} />
              </IconButton>
            </div>
          </div>

          <div>
            <h3 className="text-display mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-offwhite"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-display mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-brand-muted">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Icon size={16} className="text-brand-red" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-display mb-4 text-lg font-semibold">Areas We Serve</h3>
            <ul className="space-y-2">
              {featuredAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/areas/${area.slug}`}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-offwhite"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sm text-brand-magenta hover:underline"
                >
                  All service areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-display mb-4 text-lg font-semibold">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-brand-offwhite">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Mail size={16} />
                  </span>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-brand-offwhite"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Instagram size={16} />
                  </span>
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <MapPin size={16} />
                </span>
                Atlanta, GA
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-brand-muted">
          © {new Date().getFullYear()} 223 Visions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
