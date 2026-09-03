"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HERO_SLIDES = [
  {
    id: "epitome-mumbai",
    name: "Epitome Mumbai",
    tagline: "Fine Dining & Architectural Lounge · Lower Parel",
    image: "/images/hero_bg.png",
  },
  {
    id: "signature-dining",
    name: "Signature Culinary",
    tagline: "Chef-Led Tasting Rooms & Bespoke Menus",
    image: "/images/fine_dining.png",
  },
  {
    id: "kynd-cafe",
    name: "Kynd Café & Bar",
    tagline: "All-Day Café to Low-Lit Night Lounge · Pune",
    image: "/images/kynd_cafe.png",
  },
  {
    id: "epitome-pune",
    name: "Epitome Pune",
    tagline: "Fine Dining & Bar · Pune",
    image: "/images/live_stage.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative h-[85vh] sm:h-[92vh] w-full overflow-hidden bg-[#080406]">
      {/* Background Image Carousel with Smooth Crossfade */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority={idx === 0}
            className="object-cover object-center brightness-[0.80]"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Luxury Cinematic Gradient Vignettes with Maroon Ambient Glow */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#080406] via-[#080406]/40 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-transparent to-[#080406]/95 pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_rgba(95,18,37,0.15)_0%,_transparent_70%)] pointer-events-none" />

      {/* Bottom Carousel Navigation Bar `<  01/04  >` */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-16 inset-x-0 z-30 flex flex-col items-center justify-center gap-2.5 sm:gap-3 px-4">
        <div className="flex items-center gap-3 sm:gap-5 rounded-full border border-[#dfc18a]/40 bg-[#120408]/88 px-4 sm:px-6 py-1.5 sm:py-2 backdrop-blur-xl">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="text-[#dfc18a] transition-all hover:scale-125 hover:text-[#fff5dc] p-1 text-xs sm:text-sm cursor-pointer"
          >
            ❮
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2 font-luxury text-xs sm:text-sm md:text-base tracking-[0.16em] sm:tracking-[0.2em] text-[#faf5ee]">
            <span className="text-[#dfc18a] font-bold">0{current + 1}</span>
            <span className="text-[#78656b]">/</span>
            <span>0{HERO_SLIDES.length}</span>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="text-[#dfc18a] transition-all hover:scale-125 hover:text-[#fff5dc] p-1 text-xs sm:text-sm cursor-pointer"
          >
            ❯
          </button>
        </div>

        {/* Current Venue Badge */}
        <p className="text-[0.62rem] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.24em] text-[#dfc18a] text-center max-w-xs sm:max-w-md truncate">
          {slide.name} · {slide.tagline.split("·")[1] || "Colossal Hospitality"}
        </p>
      </div>

    </section>
  );
}









