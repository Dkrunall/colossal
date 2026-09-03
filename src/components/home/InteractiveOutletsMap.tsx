"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { MapOutlet } from "./RealLeafletMap";

// Dynamic import with SSR disabled to prevent Leaflet window errors
const RealLeafletMap = dynamic(() => import("./RealLeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[580px] w-full flex-col items-center justify-center rounded-[2.5rem] border border-[#781d34] bg-gradient-to-br from-[#2a0712] via-[#150309] to-[#0a0205] p-8 text-center shadow-2xl">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#dfc18a] border-t-transparent" />
      <p className="mt-4 font-luxury text-sm font-bold uppercase tracking-[0.2em] text-[#dfc18a]">
        Loading Cartography...
      </p>
      <p className="mt-1 text-xs text-[#baa89f] font-light">
        Initializing street geography and outlet coordinates
      </p>
    </div>
  ),
});

const OUTLETS: MapOutlet[] = [
  {
    id: "epitome-mumbai",
    name: "Epitome Mumbai",
    city: "Mumbai",
    neighborhood: "Lower Parel",
    concept: "Fine Dining & Bar",
    address: "Mathuradas Mill Compound, NM Joshi Marg, Lower Parel, Mumbai",
    timings: "12:00 PM – 1:30 AM Daily",
    imageSrc: "/images/fine_dining.png",
    slug: "epitome-mumbai",
    phone: "+919999999999",
    lat: 18.9953,
    lng: 72.8272,
    status: "Live",
  },
  {
    id: "epitome-pune",
    name: "Epitome Pune",
    city: "Pune",
    neighborhood: "Pune",
    concept: "Fine Dining & Bar",
    address: "Pune, Maharashtra",
    timings: "12:00 PM – 1:30 AM Daily",
    imageSrc: "/images/live_stage.png",
    slug: "epitome-pune",
    phone: "+919999999999",
    lat: 18.5204,
    lng: 73.8567,
    status: "Live",
  },
  {
    id: "kynd-cafe-pune",
    name: "Kynd Café & Bar",
    city: "Pune",
    neighborhood: "Koregaon Park",
    concept: "All-Day Café & Intimate Evening Bar",
    address: "Lane 6, Koregaon Park, Pune",
    timings: "8:30 AM – 12:30 AM Daily",
    imageSrc: "/images/kynd_cafe.png",
    slug: "kynd-cafe-bar-pune",
    phone: "+918600080503",
    lat: 18.5362,
    lng: 73.894,
    status: "Live",
  },
];

type FilterCity = "ALL" | "Mumbai" | "Pune";

export default function InteractiveOutletsMap() {
  const [selectedCity, setSelectedCity] = useState<FilterCity>("ALL");
  const [activeOutlet, setActiveOutlet] = useState<MapOutlet>(OUTLETS[0]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#140207] via-[#090204] to-[#0a0205] py-24 md:py-32 border-b border-[#63182b]">
      {/* Background Ambient Velvet Maroon & Gold Glows */}
      <div
        className="absolute top-1/4 left-1/4 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,_rgba(165,30,65,0.22)_0%,_transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-10 right-1/4 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,_rgba(223,193,138,0.12)_0%,_transparent_70%)] pointer-events-none blur-2xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1560px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#63182b]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5] mb-4">
              <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
              DESTINATIONS &amp; VENUES MAP
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient">
              INTERACTIVE OUTLET RADAR
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base text-[#baa89f] font-light max-w-xl">
              Explore our physical rooms across Mumbai and Pune on real street cartography. Select any destination pin to inspect room details, street coordinates, and direct table reservation channels.
            </p>
          </div>

          {/* City Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {(["ALL", "Mumbai", "Pune"] as FilterCity[]).map((city) => {
              const isActive = selectedCity === city;
              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setSelectedCity(city);
                    const matching =
                      city === "ALL"
                        ? OUTLETS[0]
                        : OUTLETS.find((o) => o.city === city) || OUTLETS[0];
                    setActiveOutlet(matching);
                  }}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border border-[#dfc18a] bg-[#dfc18a] text-black shadow-lg scale-105"
                      : "border border-[#6b162a] bg-[#380916] text-[#f4e0b5] hover:border-[#dfc18a] hover:text-white"
                  }`}
                >
                  {city === "ALL"
                    ? `All Outlets (${OUTLETS.length})`
                    : `${city} (${OUTLETS.filter((o) => o.city === city).length})`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Stage: Equal-Height Map (7 Cols) + Equal-Height Focus Card (5 Cols) on Desktop, Responsive Stack on Mobile */}
        <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-12 items-stretch">
          
          {/* 1. Real Interactive Leaflet Street Map Container */}
          <div className="lg:col-span-7 flex flex-col h-[380px] sm:h-[480px] lg:h-full lg:min-h-[620px] rounded-[2rem] sm:rounded-[2.5rem] border border-[#781d34] bg-[#120308] p-2.5 sm:p-3.5 shadow-2xl relative overflow-hidden">
            <RealLeafletMap
              outlets={OUTLETS}
              activeOutlet={activeOutlet}
              onSelectOutlet={(outlet) => setActiveOutlet(outlet)}
              selectedCity={selectedCity}
            />
          </div>

          {/* 2. Active Venue Focus Card */}
          <div className="lg:col-span-5 flex flex-col justify-between h-auto lg:h-full lg:min-h-[620px] rounded-[2rem] sm:rounded-[2.5rem] border border-[#781d34] bg-gradient-to-b from-[#340916] via-[#20050e] to-[#0e0206] p-5 sm:p-7 md:p-9 shadow-2xl relative overflow-hidden">
            
            {/* Ambient Wine Radial Flare */}
            <div
              className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(195,35,75,0.3)_0%,_transparent_70%)] pointer-events-none"
              aria-hidden
            />

            <div className="relative z-10">
              {/* Photo Banner of Selected Venue */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#6b162a] bg-[#1a040b]">
                <Image
                  src={activeOutlet.imageSrc}
                  alt={activeOutlet.name}
                  fill
                  className="object-cover object-center brightness-90 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-3.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#f4e0b5] backdrop-blur-md">
                    {activeOutlet.city} · {activeOutlet.status}
                  </span>
                </div>
                <div className="absolute bottom-3 right-4">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#dfc18a] bg-black/70 px-3 py-1 rounded-full backdrop-blur-md">
                    {activeOutlet.neighborhood}
                  </span>
                </div>
              </div>

              {/* Outlet Title & Metadata */}
              <div className="mt-6">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#dfc18a]">
                  {activeOutlet.concept}
                </span>

                <h3 className="font-luxury text-3xl sm:text-4xl font-normal text-[#faf5ee] mt-1.5">
                  {activeOutlet.name}
                </h3>

                {/* Key Spec Grid */}
                <div className="mt-5 space-y-3 rounded-2xl border border-[#6b162a] bg-[#22060f] p-4 sm:p-5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#dfc18a] text-sm">📍</span>
                    <p className="text-[#baa89f] font-light leading-relaxed">
                      {activeOutlet.address}
                    </p>
                  </div>
                  <div className="border-t border-[#38141d] pt-3 flex items-center justify-between">
                    <span className="text-[#dfc18a] text-sm flex items-center gap-2">
                      🕒 <span className="text-[#f4e0b5] font-light">{activeOutlet.timings}</span>
                    </span>
                    <span className="text-[0.65rem] uppercase font-bold text-[#dfc18a] bg-[#420d1a] px-2.5 py-0.5 rounded-full border border-[#781d34]">
                      Valet On Site
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-[#6b162a] relative z-10">
              <Link
                href={`/brands/${activeOutlet.slug}`}
                className="flex-1 rounded-full border border-[#dfc18a] bg-[#dfc18a] px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-[#faf5ec] hover:scale-[1.02]"
              >
                Reserve Table →
              </Link>

              <a
                href={`https://wa.me/919999999999?text=Hello%20Colossal,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                  activeOutlet.name
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#781d34] bg-[#420d1a] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#f4e0b5] transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                WhatsApp Desk
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Quick Outlet Picker Strip */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 border-t border-[#63182b] pt-8">
          {OUTLETS.map((item) => {
            const isSelected = activeOutlet.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveOutlet(item);
                  if (selectedCity !== "ALL" && selectedCity !== item.city) {
                    setSelectedCity("ALL");
                  }
                }}
                className={`flex flex-col text-left rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-[#dfc18a] bg-[#340916] shadow-lg scale-[1.02]"
                    : "border-[#6b162a]/70 bg-[#160309] hover:border-[#dfc18a]/60 hover:bg-[#22060f]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[#dfc18a]">
                    {item.city}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isSelected ? "bg-[#dfc18a] animate-ping" : "bg-[#781d34]"
                    }`}
                  />
                </div>
                <p className="font-luxury text-base font-semibold text-[#faf5ee] mt-1 truncate">
                  {item.name}
                </p>
                <p className="text-[0.68rem] text-[#baa89f] font-light mt-0.5 truncate">
                  {item.neighborhood}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
