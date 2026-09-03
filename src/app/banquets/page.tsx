"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SPACE_TYPES = [
  {
    title: "PRIVATE DINING SUITES",
    capacity: "8 to 24 Guests",
    body: "Closed-door architectural suites built for private celebrations, C-suite dinners, and exclusive gatherings.",
    imageSrc: "/images/fine_dining.png",
  },
  {
    title: "SEMI-PRIVATE LOUNGES",
    capacity: "25 to 60 Guests",
    body: "A designated elevated section of the main lounge or café, maintaining ambient energy with exclusive service.",
    imageSrc: "/images/kynd_cafe.png",
  },
  {
    title: "FULL VENUE BUYOUTS",
    capacity: "80 to 250+ Guests",
    body: "The complete venue experience, customized entirely for luxury brand launches, milestone events, and private galas.",
    imageSrc: "/images/live_stage.png",
  },
];

const EVENT_TYPES = ["Corporate Dinner", "Brand Launch", "Celebration", "Cocktail Soirée", "Private Tasting"];

export default function BanquetsPage() {
  const [selectedEvent, setSelectedEvent] = useState("Corporate Dinner");

  return (
    <div className="bg-[#080406] text-[#faf5ee]">
      
      {/* Banquets Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#080406] flex items-center justify-center border-b border-[#2d1118]">
        <Image
          src="/images/fine_dining.png"
          alt="Colossal Banquets & Private Events"
          fill
          priority
          className="object-cover object-center brightness-[0.70] scale-105"
          sizes="100vw"
        />
        
        {/* Luxury Vignette Overlays with Maroon Ambient Hue */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#68152a]/15 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-4 py-1.5 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5]">
              PRIVATE BANQUETS &amp; EVENTS
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient">
            BOOK THE WHOLE ROOM, NOT JUST A TABLE.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#baa89f] leading-relaxed">
            From an eight-seat private dining suite to a full venue buyout — every Colossal venue is available for bespoke private hospitality and milestone occasions.
          </p>
        </div>
      </section>

      {/* Event Spaces Cards Grid */}
      <section className="py-24 md:py-32 border-b border-[#2d1118]">
        <div className="mx-auto max-w-[1560px] px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5] mb-4">
              EVENT FORMATS
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient">
              BESPOKE HOSPITALITY SUITES
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SPACE_TYPES.map((space) => (
              <div
                key={space.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] border border-[#6b162a] bg-gradient-to-b from-[#340916] via-[#20050e] to-[#0e0206] p-6 sm:p-8 transition-all duration-500 hover:border-[#dfc18a]"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1b070f]">
                    <Image
                      src={space.imageSrc}
                      alt={space.title}
                      fill
                      className="object-cover object-center brightness-[0.88] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140207]/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="mt-6">
                    <span className="rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#f4e0b5]">
                      {space.capacity}
                    </span>
                    <h3 className="font-luxury text-2xl font-normal tracking-[0.04em] text-[#faf5ee] transition-colors group-hover:text-[#dfc18a] mt-3">
                      {space.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#baa89f] leading-relaxed font-light">
                      {space.body}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#6b162a] pt-5">
                  <Link
                    href="/contact"
                    className="editorial-link text-xs tracking-[0.2em]"
                  >
                    <span>Inquire Space</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Concierge Widget - Visible Velvet Maroon */}
          <div className="mt-20 rounded-[2.5rem] border border-[#781d34] bg-gradient-to-br from-[#4a0e1e] via-[#2b0711] to-[#140308] p-8 md:p-14 shadow-2xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfc18a]/60 bg-[#631427] px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#f4e0b5] mb-3">
                  PRIVATE EVENT CONCIERGE
                </span>
                <h3 className="font-luxury text-3xl sm:text-4xl font-normal tracking-[0.02em] text-gold-gradient">
                  TAILOR YOUR OCCASION.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#f4e0b5]/85 leading-relaxed font-light max-w-lg">
                  Select your occasion type below to customize your consultation directly with our director of private events.
                </p>

                {/* Event Type Pills */}
                <div className="mt-8">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#dfc18a] mb-3">
                    SELECT OCCASION TYPE
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {EVENT_TYPES.map((evt) => (
                      <button
                        key={evt}
                        type="button"
                        onClick={() => setSelectedEvent(evt)}
                        className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                          selectedEvent === evt
                            ? "bg-[#dfc18a] text-black font-extrabold"
                            : "border border-[#6b162a] bg-[#380916] text-[#f4e0b5] hover:border-[#dfc18a] hover:text-white"
                        }`}
                      >
                        {evt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-[#6b162a] bg-[#22060f] p-6 sm:p-8 space-y-5">
                <div className="border-b border-[#38141d] pb-4">
                  <p className="text-[0.62rem] font-bold uppercase tracking-wider text-[#dfc18a]/70">
                    Selected Occasion
                  </p>
                  <p className="font-luxury text-xl font-normal text-[#faf5ee] mt-1">
                    {selectedEvent}
                  </p>
                </div>

                <div className="border-b border-[#38141d] pb-4">
                  <p className="text-[0.62rem] font-bold uppercase tracking-wider text-[#dfc18a]/70">
                    Recommended Setup
                  </p>
                  <p className="font-luxury text-base font-normal text-[#dfc18a] mt-1">
                    Custom Tasting Menu &amp; Sommelier Pairings
                  </p>
                </div>

                <p className="text-xs text-[#baa89f] leading-relaxed font-light">
                  Includes dedicated sommelier, custom printed menus, private entrance option, and bespoke audio-visual setup.
                </p>

                <Link
                  href="/contact"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-[#dfc18a] bg-[#dfc18a] py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-lg transition-all duration-300 hover:bg-[#f4e0b5] hover:scale-[1.02]"
                >
                  <span>Start {selectedEvent} Inquiry →</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}


