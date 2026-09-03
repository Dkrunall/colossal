import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Events · Colossal Hospitality Group",
  description: "Live acoustic performances, DJ sets, guest chefs, and curated nights across Colossal Hospitality brands.",
};

export default function EventsPage() {
  return (
    <div className="bg-[#080406] text-[#faf5ee]">
      
      {/* Events Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#080406] flex items-center justify-center border-b border-[#2d1118]">
        <Image
          src="/images/live_stage.png"
          alt="Colossal Events & Acoustics"
          fill
          priority
          className="object-cover object-center brightness-[0.70] scale-105"
          sizes="100vw"
        />
        
        {/* Luxury Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#68152a]/15 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/40 bg-[#16060c]/85 px-4 py-1.5 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#dfc18a]">
              EVENTS &amp; LIVE NIGHTS
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient">
            WHAT'S ON ACROSS THE PORTFOLIO.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#baa89f] leading-relaxed">
            Curated DJ sets, live acoustic sets, and guest chef pop-ups across our addresses in Mumbai, Pune &amp; Dubai.
          </p>
        </div>
      </section>

      {/* Events Showcase Section */}
      <section className="py-24 md:py-32 border-b border-[#2d1118]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          <div className="rounded-[2.5rem] border border-[#38141d] bg-[#14060a] p-8 sm:p-12 text-center shadow-2xl max-w-3xl mx-auto">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
              UPCOMING CALENDAR
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl font-normal tracking-[0.02em] text-gold-gradient mt-2">
              SEASONAL LIVE CALENDAR
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#baa89f] font-light max-w-xl mx-auto leading-relaxed">
              Check back soon for confirmed artist lineups and guest chef tasting dates, or explore our full brand portfolio.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/brands"
                className="group inline-flex items-center gap-2 rounded-full border border-[#dfc18a] bg-[#dfc18a] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#faf5ec] hover:scale-[1.02]"
              >
                <span>Our Brands →</span>
              </Link>
              <Link
                href="/banquets"
                className="group inline-flex items-center gap-2 rounded-full border border-[#38141d] bg-[#1a070e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#faf5ee] transition-all duration-300 hover:border-[#dfc18a] hover:text-[#dfc18a]"
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

