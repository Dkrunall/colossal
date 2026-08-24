"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { brands } from "@/lib/site-data";

export default function BrandsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const prevBrand = () => {
    const nextIdx = currentIndex === 0 ? brands.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const nextBrand = () => {
    const nextIdx = currentIndex === brands.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cards = scrollContainerRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const cardWidth = 360;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx >= 0 && newIdx < brands.length && newIdx !== currentIndex) {
      setCurrentIndex(newIdx);
    }
  };

  return (
    <section className="bg-[#050505] py-24 md:py-32 border-b border-[#1c1916] overflow-hidden">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient drop-shadow-[0_2px_15px_rgba(223,193,138,0.2)]">
            OUR BRANDS
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#b0a89d] leading-relaxed max-w-2xl mx-auto font-light">
            A portfolio of distinct living experiences, each holding its own character, designed around how people live, gather, and celebrate.
          </p>
        </div>



        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-6 custom-scrollbar snap-x snap-mandatory px-2"
          style={{ scrollbarWidth: "none" }}
        >
          {brands.map((brand, idx) => {
            const isUpcoming = brand.status === "upcoming";
            const imageSrc = brand.imageSrc || (idx % 2 === 0 ? "/images/hero_bg.png" : "/images/fine_dining.png");
            
            return (
              <div
                key={brand.slug}
                className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] snap-center"
              >
                <Link
                  href={`/brands/${brand.slug}`}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-[2.2rem] border border-[#26221c] bg-[#11100f] transition-all duration-500 hover:border-[#dfc18a]/60 hover:shadow-[0_16px_36px_rgba(0,0,0,0.85)]"
                >
                  {/* Card Background Image */}
                  <Image
                    src={imageSrc}
                    alt={brand.name}
                    fill
                    className="object-cover object-center brightness-[0.82] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                    sizes="(max-width: 768px) 280px, 380px"
                  />

                  {/* High Legibility Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-95" />

                  {/* Top City / Status Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#f7f3eb] backdrop-blur-md">
                      {isUpcoming ? "Upcoming" : brand.city}
                    </span>
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end">
                    <h3 className="font-luxury text-2xl sm:text-3xl font-semibold tracking-[0.06em] text-[#f7f3eb] transition-colors group-hover:text-[#dfc18a]">
                      {brand.name} {brand.city !== "Upcoming" && brand.city !== "Multi-city" ? `· ${brand.city}` : ""}
                    </h3>

                    
                    <p className="mt-2 text-xs text-[#b0a89d] line-clamp-2 leading-relaxed font-light">
                      {brand.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#332e27] pt-4">
                      <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#dfc18a] transition-all duration-300 group-hover:translate-x-1">
                        Explore →
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-wider text-[#736b60]">
                        {brand.kind}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Carousel Controls `<  01/06  >` */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prevBrand}
            aria-label="Previous Brand"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#38332c] bg-[#121110] text-[#dfc18a] transition-all hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black cursor-pointer"
          >
            ❮
          </button>

          <div className="flex items-center gap-2 font-luxury text-base tracking-[0.2em] text-[#f7f3eb]">
            <span className="text-[#dfc18a] font-bold">0{currentIndex + 1}</span>
            <span className="text-[#736b60]">/</span>
            <span>0{brands.length}</span>
          </div>

          <button
            type="button"
            onClick={nextBrand}
            aria-label="Next Brand"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#38332c] bg-[#121110] text-[#dfc18a] transition-all hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black cursor-pointer"
          >
            ❯
          </button>
        </div>

      </div>
    </section>
  );
}



