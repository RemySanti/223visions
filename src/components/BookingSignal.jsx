import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { CalendarCheck, X } from 'lucide-react';
import { generateBookingSignal, randomBetween } from '../data/bookingSignals';

const HIDDEN_PREFIXES = ['/internal/', '/owner', '/contact', '/landing', '/thank-you'];
const INITIAL_DELAY_MS = [8000, 14000];
const INTERVAL_MS = [22000, 38000];
const VISIBLE_MS = 5500;

function isHiddenRoute(pathname) {
  return HIDDEN_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export function BookingSignal() {
  const { pathname } = useLocation();
  const [signal, setSignal] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timersRef = useRef([]);
  const dismissedRef = useRef(false);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const showNext = useCallback(() => {
    if (dismissedRef.current) return;
    setSignal(generateBookingSignal());
    const hideId = setTimeout(() => setSignal(null), VISIBLE_MS);
    timersRef.current.push(hideId);
  }, []);

  const scheduleLoop = useCallback(() => {
    if (dismissedRef.current || isHiddenRoute(pathname)) return;

    const delay = randomBetween(...INTERVAL_MS);
    const id = setTimeout(() => {
      showNext();
      scheduleLoop();
    }, delay);
    timersRef.current.push(id);
  }, [pathname, showNext]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    clearTimers();
    setSignal(null);
    dismissedRef.current = false;

    if (isHiddenRoute(pathname)) return undefined;

    const initialDelay = reducedMotion
      ? randomBetween(20000, 30000)
      : randomBetween(...INITIAL_DELAY_MS);

    const startId = setTimeout(() => {
      showNext();
      scheduleLoop();
    }, initialDelay);
    timersRef.current.push(startId);

    return clearTimers;
  }, [pathname, reducedMotion, clearTimers, showNext, scheduleLoop]);

  if (isHiddenRoute(pathname)) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-4 left-4 z-[55] sm:bottom-6 sm:left-6"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        {signal && (
          <motion.div
            key={`${signal.area}-${signal.message}`}
            initial={{ opacity: 0, y: 16, x: -8 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 8, x: -8 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: 'easeOut' }}
            className="pointer-events-auto flex max-w-[min(100vw-2rem,20rem)] items-start gap-3 rounded-xl border border-white/10 bg-brand-black/95 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_24px_rgba(230,0,0,0.08)] backdrop-blur-md"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/15">
              <CalendarCheck size={18} className="text-brand-red-light" aria-hidden="true" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-brand-black">
                {!reducedMotion && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/80" />
                )}
              </span>
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red-light">
                Recent booking
              </p>
              <p className="mt-1 text-sm leading-snug text-brand-offwhite">{signal.message}</p>
              <p className="mt-1 text-xs text-brand-muted">Atlanta metro area</p>
            </div>

            <button
              type="button"
              onClick={() => {
                setSignal(null);
                dismissedRef.current = true;
                clearTimers();
              }}
              className="shrink-0 rounded-md p-1 text-brand-muted transition-colors hover:bg-white/5 hover:text-brand-offwhite"
              aria-label="Dismiss booking notifications"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
