"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ensureGsap } from "@/lib/gsap";

/**
 * Automatically applies smooth GSAP ScrollTrigger animations to headings, cards,
 * and background images as the user scrolls with Lenis.
 */
export default function GsapScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    // Small delay to allow Next.js DOM rendering after route change
    const timer = setTimeout(() => {
      // 1. Heading Fade & Slide Up Reveal
      const headings = document.querySelectorAll("h2, h3");
      headings.forEach((heading) => {
        if (heading.getAttribute("data-gsap-init")) return;
        heading.setAttribute("data-gsap-init", "true");

        gsap.fromTo(
          heading,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. Section Cards Stagger Reveal
      const cardContainers = document.querySelectorAll(".grid");
      cardContainers.forEach((container) => {
        const cards = container.querySelectorAll(".group, .luxury-card");
        if (cards.length === 0) return;

        cards.forEach((card, index) => {
          if (card.getAttribute("data-gsap-init")) return;
          card.setAttribute("data-gsap-init", "true");

          gsap.fromTo(
            card,
            { opacity: 0, y: 45, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              delay: (index % 3) * 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });

      // Refresh ScrollTrigger calculations after DOM setup
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
