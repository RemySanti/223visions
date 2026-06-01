import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useSpring } from 'framer-motion';

function getScrollProgress() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const max = scrollHeight - clientHeight;
  return max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
}

export function ScrollProgress() {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const scaleX = useSpring(0, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const update = () => {
      const value = getScrollProgress();
      setProgress(value);
      if (!reducedMotion) scaleX.set(value);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname, scaleX, reducedMotion]);

  useEffect(() => {
    setProgress(0);
    scaleX.set(0);
    const id = requestAnimationFrame(update);
    function update() {
      const value = getScrollProgress();
      setProgress(value);
      if (!reducedMotion) scaleX.set(value);
    }
    return () => cancelAnimationFrame(id);
  }, [pathname, scaleX, reducedMotion]);

  const percent = Math.round(progress * 100);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-black/40"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      {reducedMotion ? (
        <div
          className="h-full bg-gradient-to-r from-brand-red via-brand-magenta to-brand-red"
          style={{ width: `${percent}%` }}
        />
      ) : (
        <motion.div
          className="h-full w-full origin-left bg-gradient-to-r from-brand-red via-brand-magenta to-brand-red shadow-[0_0_12px_rgba(230,0,126,0.5)]"
          style={{ scaleX }}
        />
      )}
    </div>
  );
}
