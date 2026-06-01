import { useEffect, useState } from 'react';

export function useCountUp(end, duration = 2000, start = 0, active = false) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!active) return;

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(start + (end - start) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start, active]);

  return value;
}
