"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

type SplitHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  triggerOnScroll?: boolean;
};

/** Reveals a headline word by word, each word masked until it rises into place. */
export default function SplitHeading({
  text,
  as = "h1",
  className,
  delay = 0,
  triggerOnScroll = false,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { gsap } = ensureGsap();
    const targets = el.querySelectorAll<HTMLElement>("[data-word-inner]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(targets, { yPercent: 0 });
      return;
    }

    gsap.set(targets, { yPercent: 115 });
    const tween = gsap.to(targets, {
      yPercent: 0,
      duration: 1.05,
      delay,
      stagger: 0.06,
      ease: "power4.out",
      scrollTrigger: triggerOnScroll
        ? { trigger: el, start: "top 85%", once: true }
        : undefined,
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text, delay, triggerOnScroll]);

  const Tag = as;

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <span data-word-inner style={{ display: "inline-block" }}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
