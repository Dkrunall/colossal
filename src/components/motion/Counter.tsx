"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

/** Counts up to `value` once it scrolls into view. */
export default function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { gsap } = ensureGsap();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.n)}${suffix}`;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
