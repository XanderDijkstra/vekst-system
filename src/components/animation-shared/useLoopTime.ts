import { useEffect, useRef, useState } from "react";

export const DURATION = 11;

/**
 * Returns the current looping time in seconds (0 → DURATION → 0).
 * Shared across all iPhone-showcase animations to keep them in sync
 * with step pills, screen transitions, and content timelines.
 */
export function useLoopTime(duration = DURATION): number {
  const [time, setTime] = useState(0);
  const startRef = useRef(0);

  useEffect(() => {
    startRef.current = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = ((now - startRef.current) / 1000) % duration;
      setTime(elapsed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration]);

  return time;
}

/**
 * Cross-screen fade helper. Returns 0-1 opacity based on cross-fade
 * windows. `inS → inE`: fade in. `outS → outE`: fade out.
 */
export function fadeWindow(
  t: number,
  inS: number,
  inE: number,
  outS: number,
  outE: number,
): number {
  if (t < inS) return 0;
  if (t < inE) return (t - inS) / (inE - inS);
  if (t < outS) return 1;
  if (t < outE) return 1 - (t - outS) / (outE - outS);
  return 0;
}
