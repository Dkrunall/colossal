import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Live Events · Colossal Hospitality Group",
  description: "Live acoustic performances, DJ sets, guest chefs, and curated nights across Colossal Hospitality brands.",
};

export default function EventsPage() {
  const liveBrand = brands.find((b) => b.slug === "epitome-live");

  return (
    <div className="bg-[#050505] text-[#f7f3eb]">
      
      {/* Events Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#050505] flex items-center justify-center border-b border-[#1c1916]">
        <Image
          src="/images/live_stage.png"
          alt="Colossal Events & Acoustics"
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
              EPITOME LIVE &amp; EVENTS
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            WHAT'S ON ACROSS THE PORTFOLIO.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#b0a89d] leading-relaxed">
            Curated DJ sets, live acoustic sets, guest chef pop-ups, and milestone brand takeovers under the Epitome Live banner across Mumbai &amp; Pune.
          </p>
        </div>
      </section>

      {/* Events Showcase Section */}
      <section className="py-24 md:py-32 border-b border-[#1c1916]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          <div className="rounded-[2.5rem] border border-[#26221c] bg-[#11100f] p-8 sm:p-12 text-center shadow-2xl max-w-3xl mx-auto">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
              UPCOMING CALENDAR
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl font-normal tracking-[0.02em] text-gold-gradient mt-2">
              SEASONAL LIVE CALENDAR
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#b0a89d] font-light max-w-xl mx-auto leading-relaxed">
              Check back soon for confirmed artist lineups and guest chef tasting dates, or explore our live entertainment arm ({liveBrand?.name ?? "Epitome Live"}).
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/brands/epitome-live"
                className="group inline-flex items-center gap-2 rounded-full border border-[#dfc18a] bg-[#dfc18a] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-lg transition-all duration-300 hover:bg-[#f2dbab] hover:scale-[1.02]"
              >
                <span>Epitome Live →</span>
              </Link>
              <Link
                href="/banquets"
                className="group inline-flex items-center gap-2 rounded-full border border-[#38332c] bg-[#171513] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#f7f3eb] transition-all duration-300 hover:border-[#dfc18a] hover:text-[#dfc18a]"
              >
                <span>Book Private Event</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

