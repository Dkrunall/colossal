"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { awardsList } from "@/lib/site-data";

export default function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevAward = () => {
    setCurrentIndex((prev) => (prev === 0 ? awardsList.length - 1 : prev - 1));
  };

  const nextAward = () => {
    setCurrentIndex((prev) => (prev === awardsList.length - 1 ? 0 : prev + 1));
  };

  const currentAward = awardsList[currentIndex];

  return (
    <section className="bg-[#080406] py-24 md:py-32 border-b border-[#2d1118]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* Main Awards Card Container - Visible Velvet Maroon */}
        <div className="overflow-hidden rounded-[2.5rem] border border-[#781d34] bg-gradient-to-br from-[#4a0e1e] via-[#300813] to-[#18040a] p-8 sm:p-12 md:p-16 transition-all duration-500 hover:border-[#dfc18a]/60 relative">
          
          {/* Ambient wine highlight */}
          <div
            className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(200,35,75,0.3)_0%,_transparent_70%)] pointer-events-none"
            aria-hidden
          />

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="flex flex-col justify-between h-full lg:col-span-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#631427] px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#dfc18a] mb-4">
                  INDUSTRY RECOGNITIONS
                </span>

                <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient">
                  AWARDS
                </h2>

                <p className="mt-6 text-xs sm:text-sm md:text-base text-[#f4e0b5]/85 leading-relaxed max-w-lg font-light">
                  {currentAward.body}
                </p>

                <div className="mt-8 border-l-2 border-[#dfc18a] pl-4">
                  <p className="font-luxury text-2xl font-bold tracking-wider text-[#faf5ee]">
                    {currentAward.title}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dfc18a] mt-1">
                    {currentAward.category} · {currentAward.year}
                  </p>
                  <p className="text-xs text-[#baa89f] mt-1 font-light">
                    Recipient: {currentAward.recipient}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/awards"
                    className="editorial-link text-xs tracking-[0.2em]"
                  >
                    <span>View All Awards</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Bottom Carousel Arrow Controls `<  >` */}
              <div className="mt-12 flex items-center gap-4 pt-6 border-t border-[#6b182c]">
                <button
                  type="button"
                  onClick={prevAward}
                  aria-label="Previous Award"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#781d34] bg-[#5a1224] text-[#dfc18a] transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black cursor-pointer"
                >
                  ❮
                </button>
                <button
                  type="button"
                  onClick={nextAward}
                  aria-label="Next Award"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#781d34] bg-[#5a1224] text-[#dfc18a] transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black cursor-pointer"
                >
                  ❯
                </button>
                <span className="text-xs uppercase tracking-widest text-[#dfc18a]/80 ml-2 font-luxury">
                  0{currentIndex + 1} / 0{awardsList.length}
                </span>
              </div>
            </div>

            {/* Right Certificate Display */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="group relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border-2 border-[#781d34] bg-[#2a0711] transition-all duration-500 group-hover:border-[#dfc18a]/60">
                <Image
                  src={currentAward.imageSrc}
                  alt={currentAward.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
