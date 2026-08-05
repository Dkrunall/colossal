"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ensureGsap } from "@/lib/gsap";
import SplitHeading from "@/components/motion/SplitHeading";

const HERO_SCENES = [
  {
    id: "epitome-mumbai",
    name: "Epitome Mumbai",
    tagline: "Fine Dining & Lounge · Lower Parel",
    imageDark: "/images/hero_bg.png",
    imageLight: "/images/hero_bg_light.png",
  },
  {
    id: "fine-dining",
    name: "Signature Culinary",
    tagline: "Chef-Led Menus & Tasting Rooms",
    imageDark: "/images/fine_dining.png",
    imageLight: "/images/fine_dining_light.png",
  },
  {
    id: "kynd-cafe",
    name: "Kynd Café & Bar",
    tagline: "Day-to-Night Sanctuary · Pune",
    imageDark: "/images/kynd_cafe.png",
    imageLight: "/images/kynd_cafe_light.png",
  },
  {
    id: "live-stage",
    name: "Epitome Live Stage",
    tagline: "Acoustic Nights & Live Music",
    imageDark: "/images/live_stage.png",
    imageLight: "/images/live_stage_light.png",
  },
];

export default function Hero() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeScene = HERO_SCENES[activeSceneIndex];
  const activeImage = theme === "light" ? activeScene.imageLight : activeScene.imageDark;

  useEffect(() => {
    const updateTheme = () => {
      const current = (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light";
      setTheme(current);
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const bg = bgRef.current;
    const content = contentRef.current;
    if (!bg || !content) return () => observer.disconnect();

    const { gsap, ScrollTrigger } = ensureGsap();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const items = content.querySelectorAll("[data-hero-anim]");
    if (reduceMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
    } else {
      gsap.set(items, { opacity: 0, y: 20 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }

    let st: ReturnType<typeof ScrollTrigger.create> | undefined;
    if (!reduceMotion) {
      st = ScrollTrigger.create({
        trigger: bg.parentElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(bg, { yPercent: self.progress * 15, scale: 1 + self.progress * 0.05 });
        },
      });
    }

    return () => {
      st?.kill();
      observer.disconnect();
    };
  }, []);

  const isLight = theme === "light";

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#150e0a] pt-32 pb-16">
      {/* 100% Full Viewport Background Photo */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full will-change-transform">
        <Image
          key={activeImage}
          src={activeImage}
          alt={activeScene.name}
          fill
          priority
          className="object-cover object-center transition-opacity duration-700"
          sizes="100vw"
        />
      </div>

      {/* Cinematic Black Overlay for High Contrast */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#150e0a] via-black/30 to-black/20 pointer-events-none" />

      {/* Hero Content Container */}
      <div ref={contentRef} className="relative z-10 w-full px-6 md:px-12">
        <div className="mx-auto max-w-[1560px] flex flex-col justify-between min-h-[75vh]">
          
          {/* Top Editorial Block */}
          <div className="max-w-4xl pt-6">
            {/* Clean Eyebrow */}
            <div data-hero-anim className="inline-flex items-center gap-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-champagne animate-pulse" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-champagne font-body">
                Colossal Hospitality Group
              </span>
            </div>

            {/* Clean Serif Headline */}
            <div data-hero-anim>
              <SplitHeading
                text="Places worth returning to, twice."
                as="h1"
                className="font-display text-4xl italic leading-[1.04] sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#f7f1e8]"
              />
            </div>

            {/* Sub-narrative */}
            <p data-hero-anim className="mt-6 max-w-[48ch] text-base leading-relaxed sm:text-lg font-normal text-[#f7f1e8]/85">
              Architectural dining rooms, curated cocktail lounges, and live music stages across Mumbai &amp; Pune.
            </p>

            {/* Clean Action Buttons */}
            <div data-hero-anim className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/reservations"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-2xl transition-all duration-300 hover:bg-gold-soft hover:shadow-gold/30 hover:-translate-y-0.5"
              >
                <span>Book a Reservation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/brands"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#f7f1e8] backdrop-blur-md transition-all duration-300 hover:border-champagne hover:bg-black/60 hover:text-champagne"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>

          {/* Bottom Block — Scene Switcher & Metrics */}
          <div data-hero-anim className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Clean Scene Switcher Pills */}
            <div className="flex flex-wrap gap-2">
              {HERO_SCENES.map((scene, idx) => (
                <button
                  key={scene.id}
                  type="button"
                  onClick={() => setActiveSceneIndex(idx)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 backdrop-blur-md ${
                    activeSceneIndex === idx
                      ? "bg-gold text-white shadow-lg"
                      : "bg-black/50 text-white/80 border border-white/20 hover:bg-black/70 hover:text-white"
                  }`}
                >
                  0{idx + 1} · {scene.name}
                </button>
              ))}
            </div>

            {/* Clean Group Metrics */}
            <div className="flex items-center gap-6 text-xs text-[#f7f1e8]/85">
              <div>
                <span className="font-display text-lg font-bold text-champagne">6</span>
                <span className="uppercase tracking-wider text-[0.68rem] text-[#f7f1e8]/65 ml-2">Brands</span>
              </div>
              <div className="h-3 w-px bg-white/25" />
              <div>
                <span className="font-display text-lg font-bold text-champagne">2</span>
                <span className="uppercase tracking-wider text-[0.68rem] text-[#f7f1e8]/65 ml-2">Cities</span>
              </div>
              <div className="h-3 w-px bg-white/25" />
              <div>
                <span className="font-display text-lg font-bold text-champagne">4.9 ★</span>
                <span className="uppercase tracking-wider text-[0.68rem] text-[#f7f1e8]/65 ml-2">Rating</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}







