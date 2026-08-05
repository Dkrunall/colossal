"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
};

/** Staggers the direct children of the wrapper into view as a group. */
export default function RevealGroup({ children, className, stagger = 0.1, y = 24 }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { gsap } = ensureGsap();
    const items = Array.from(el.children);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y });
    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 82%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [stagger, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
