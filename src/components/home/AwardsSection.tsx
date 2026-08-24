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
    <section className="bg-[#070707] py-24 md:py-32 border-b border-[#1c1916]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* Main Awards Card Container */}
        <div className="overflow-hidden rounded-[2.5rem] border border-[#26221c] bg-[#11100f] p-8 sm:p-12 md:p-16 shadow-2xl transition-all duration-500 hover:border-[#dfc18a]/40">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="flex flex-col justify-between h-full lg:col-span-6">
              <div>
                <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient">
                  AWARDS
                </h2>



                <p className="mt-6 text-xs sm:text-sm md:text-base text-[#b0a89d] leading-relaxed max-w-lg font-light">
                  {currentAward.body}
                </p>


                <div className="mt-8 border-l-2 border-[#dfc18a] pl-4">
                  <p className="font-luxury text-2xl font-bold tracking-wider text-[#f7f3eb]">
                    {currentAward.title}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dfc18a] mt-1">
                    {currentAward.category} · {currentAward.year}
                  </p>
                  <p className="text-xs text-[#736b60] mt-1 font-light">
                    Recipient: {currentAward.recipient}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/awards"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dfc18a] transition-all hover:text-white"
                  >
                    <span>View All Awards →</span>
                  </Link>
                </div>
              </div>

              {/* Bottom Carousel Arrow Controls `<  >` */}
              <div className="mt-12 flex items-center gap-4 pt-6 border-t border-[#26221c]">
                <button
                  type="button"
                  onClick={prevAward}
                  aria-label="Previous Award"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#38332c] bg-[#171513] text-[#dfc18a] transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black"
                >
                  ❮
                </button>
                <button
                  type="button"
                  onClick={nextAward}
                  aria-label="Next Award"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#38332c] bg-[#171513] text-[#dfc18a] transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black"
                >
                  ❯
                </button>
                <span className="text-xs uppercase tracking-widest text-[#736b60] ml-2">
                  0{currentIndex + 1} / 0{awardsList.length}
                </span>
              </div>
            </div>

            {/* Right Certificate Display */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="group relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border-2 border-[#38332c] bg-[#1a1714] shadow-2xl transition-all duration-500 group-hover:border-[#dfc18a]">
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
