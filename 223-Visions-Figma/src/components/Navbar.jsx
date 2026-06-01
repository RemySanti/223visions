import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { BOOKING_URL } from '../data/constants';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar({ minimal = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navClass = scrolled
    ? 'nav-blur border-b border-white/10'
    : 'bg-transparent';

  if (minimal) {
    return (
      <header className={`fixed inset-x-0 top-0 z-50 ${navClass}`}>
        <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" aria-label="223 Visions home">
            <Logo className="h-24" />
          </Link>
          <div className="flex items-center gap-4 text-sm text-brand-muted">
            <a href="mailto:Christian@223visions.com" className="hover:text-brand-offwhite">
              Christian@223visions.com
            </a>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navClass}`}>
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-36 lg:px-8">
        <Link to="/" aria-label="223 Visions home">
          <Logo className="h-24 md:h-28" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative text-sm font-medium uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand-offwhite' : 'text-brand-muted hover:text-brand-offwhite'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !text-xs">
            Book Now
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/80 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-[min(100%,20rem)] flex-col gap-2 border-l border-white/10 bg-brand-black p-6 pt-40 md:hidden"
              aria-label="Mobile"
            >
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-lg ${
                        isActive
                          ? 'bg-brand-red/20 text-brand-offwhite'
                          : 'text-brand-muted hover:bg-white/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full text-center"
              >
                Book Now
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
