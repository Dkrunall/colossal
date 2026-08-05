"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ensureGsap } from "@/lib/gsap";

/**
 * Wires Lenis (smooth scroll) into GSAP's ticker so ScrollTrigger stays in
 * sync with the eased scroll position instead of raw native scroll events.
 * Respects prefers-reduced-motion by skipping smoothing entirely.
 */
export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
