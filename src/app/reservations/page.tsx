"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/site-data";

const CITIES = ["All Cities", "Mumbai", "Pune"] as const;

export default function ReservationsPage() {
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const liveBrands = brands.filter(
    (b) => b.status === "live" && (selectedCity === "All Cities" || b.city === selectedCity)
  );

  return (
    <div className="bg-[#050505] text-[#f7f3eb]">
      
      {/* Reservations Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#050505] flex items-center justify-center border-b border-[#1c1916]">
        <Image
          src="/images/fine_dining.png"
          alt="Reservations Concierge"
          fill
          priority
          className="object-cover object-center brightness-[0.70] scale-105"
          sizes="100vw"
        />
        
        {/* Luxury Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#dfc18a]/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/40 bg-[#0e0d0c]/80 px-4 py-1.5 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#dfc18a]">
              DIRECT BOOKING PORTAL
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            PICK A ROOM. WE'LL POINT YOU THERE.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#b0a89d] leading-relaxed">
            Select your desired venue below for instant direct channel access — WhatsApp concierge, call reservations, or online table booking.
          </p>
        </div>
      </section>

      {/* Outlet Filter & Cards Section */}
      <section className="py-24 md:py-32 border-b border-[#1c1916]">
        <div className="mx-auto max-w-[1560px] px-6 md:px-12">
          
          {/* City Filter Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#1c1916] pb-10 mb-16">
            <div>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
                LOCATION SELECTION
              </span>
              <h2 className="font-luxury text-2xl sm:text-3xl font-normal text-[#f7f3eb] mt-1">
                SELECT A DESTINATION
              </h2>
            </div>

            <div className="flex items-center gap-2.5">
              {CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                    selectedCity === city
                      ? "bg-[#dfc18a] text-black shadow-[0_0_18px_rgba(223,193,138,0.45)] scale-105"
                      : "border border-[#38332c] bg-[#141210] text-[#b0a89d] hover:border-[#dfc18a]/60 hover:text-white"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Outlet Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {liveBrands.map((brand, idx) => {
              const imageSrc = brand.imageSrc || (idx % 2 === 0 ? "/images/hero_bg.png" : "/images/fine_dining.png");
              return (
                <div
                  key={brand.slug}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] border border-[#26221c] bg-[#11100f] p-6 sm:p-8 transition-all duration-500 hover:border-[#dfc18a]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1c1916]">
                      <Image
                        src={imageSrc}
                        alt={brand.name}
                        fill
                        className="object-cover object-center brightness-[0.85] transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#f7f3eb] backdrop-blur-md">
                          {brand.city}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-luxury text-2xl font-normal text-[#f7f3eb] transition-colors group-hover:text-[#dfc18a]">
                          {brand.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#dfc18a]">
                        {brand.kind}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-[#b0a89d] leading-relaxed font-light">
                        {brand.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#26221c] pt-5">
                    <button
                      type="button"
                      onClick={() => setActiveModal(brand.name)}
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-white bg-[#f7f3eb] py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-lg transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:shadow-[0_0_25px_rgba(223,193,138,0.5)] hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Reserve Table</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Concierge Help Modal */}
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
              <div className="w-full max-w-md rounded-[2.2rem] border border-[#dfc18a]/40 bg-[#0e0d0c] p-8 shadow-2xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#dfc18a]/40 bg-[#171513] font-luxury font-bold text-[#dfc18a] text-2xl shadow-md">
                  {activeModal.charAt(0)}
                </div>
                <h3 className="font-luxury mt-4 text-2xl font-normal text-[#f7f3eb]">
                  {activeModal}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#dfc18a]">
                  Direct Concierge Desk
                </p>

                <p className="mt-4 text-xs text-[#b0a89d] leading-relaxed font-light">
                  Direct reservation channels (WhatsApp concierge hotline &amp; instant table booking) for {activeModal} are being connected for you.
                </p>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="w-full rounded-full border border-[#dfc18a] bg-[#dfc18a] py-3 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-lg transition-all hover:bg-[#f2dbab] cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}


