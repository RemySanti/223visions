import { useEffect, useState } from 'react';

/** Pixels scrolled before the header background is fully opaque (overlay pages only). */
export const NAV_FADE_DISTANCE = 160;

export function useNavOpacity(overlay = false) {
  const [opacity, setOpacity] = useState(() =>
    overlay ? Math.min(1, window.scrollY / NAV_FADE_DISTANCE) : 1
  );

  useEffect(() => {
    if (!overlay) {
      setOpacity(1);
      return;
    }

    const update = () => {
      setOpacity(Math.min(1, window.scrollY / NAV_FADE_DISTANCE));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [overlay]);

  return opacity;
}