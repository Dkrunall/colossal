"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Plate from "@/components/ui/Plate";
import RevealGroup from "@/components/motion/RevealGroup";
import { brands } from "@/lib/site-data";

const CITIES = ["All Cities", "Mumbai", "Pune"] as const;

export default function ReservationsPage() {
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const liveBrands = brands.filter(
    (b) => b.status === "live" && (selectedCity === "All Cities" || b.city === selectedCity)
  );

  return (
    <>
      <PageHero
        eyebrow="Direct Booking Portal"
        title="Pick a room. We'll point you there."
        lede="Select your desired venue below for instant direct channel access — WhatsApp concierge, call reservations, or online booking platforms."
      />

      <section className="py-16 md:py-24">
        <Container>
          {/* City Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-8">
            <div>
              <p className="eyebrow text-gold">Location Filter</p>
              <h2 className="font-display mt-1 text-2xl italic text-ink">Choose a city</h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                    selectedCity === city
                      ? "bg-gold text-white shadow-md scale-105"
                      : "border border-line bg-bg-raised text-ink-muted hover:border-gold-soft hover:bg-bg-sunken hover:text-ink"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Outlet Grid */}
          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {liveBrands.map((brand) => (
              <div
                key={brand.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-bg-raised/80 p-5 transition-all duration-500 hover:border-gold-soft hover:shadow-xl"
              >
                <div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Plate tone={brand.tone} label={brand.name} ratio="aspect-[4/3]" />
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                        {brand.city}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl text-ink">{brand.name}</h3>
                      <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                        Open for Booking
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
                      {brand.kind}
                    </p>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">{brand.description}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-line/60 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveModal(brand.name)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-gold hover:shadow-md"
                  >
                    <span>Reserve Table</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </RevealGroup>

          {/* Quick Help Box */}
          <div className="mt-16 rounded-3xl border border-line bg-bg-sunken p-8 text-center max-w-2xl mx-auto">
            <h4 className="font-display text-xl italic text-ink">Prefer Large Groups or Private Events?</h4>
            <p className="mt-2 text-sm text-ink-muted">
              For parties over 12 or custom banquet reservations, contact our corporate hospitality team directly.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block rounded-full border border-line-strong px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink hover:border-gold hover:text-gold"
            >
              Private Banquet Inquiry →
            </a>
          </div>

          {/* Channel Modal / Toast */}
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="w-full max-w-md rounded-3xl border border-line bg-bg-raised p-6 shadow-2xl text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 font-display font-bold text-gold text-xl">
                  {activeModal.charAt(0)}
                </div>
                <h3 className="font-display mt-3 text-2xl italic text-ink">{activeModal}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gold">
                  Direct Booking Concierge
                </p>

                <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                  Booking channels for {activeModal} (WhatsApp concierge, direct hotline &amp; table booking link) are being connected by the management.
                </p>

                <div className="mt-6 space-y-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="w-full rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-wider text-white"
                  >
                    Got It
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

