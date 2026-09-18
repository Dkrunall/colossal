import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Special Menus · Colossal Hospitality Group",
  description: "A rotating set of tasting menus, festive specials, and chef-led collaborations across the Colossal portfolio.",
};

const MENU_PROGRAMS = [
  { title: "Seasonal Tasting Menu" },
  { title: "Festive & Holiday Menus" },
  { title: "Weekend Brunch (Kynd Café & Bar)" },
  { title: "Chef's Collaboration Menus" },
  { title: "Beverage & Cocktail Programme" },
];

export default function MenusPage() {
  return (
    <div className="bg-[#080406] text-[#faf5ee]">

      {/* Menus Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#080406] flex items-center justify-center border-b border-[#2d1118]">
        <Image
          src="/images/Kynd3.png"
          alt="Colossal Special Menus"
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
              SPECIAL MENUS
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient">
            MENUS BUILT AROUND THE SEASON.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#baa89f] leading-relaxed">
            A rotating set of tasting menus, festive specials, and chef-led collaborations across the portfolio — each address keeps its own kitchen identity, refreshed by season.
          </p>
        </div>
      </section>

      {/* Menu Programs Grid */}
      <section className="py-24 md:py-32 border-b border-[#2d1118]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">

          <div className="grid gap-6 sm:grid-cols-2">
            {MENU_PROGRAMS.map((program) => (
              <div
                key={program.title}
                className="group flex items-center justify-between rounded-[2rem] border border-[#38141d] bg-[#14060a] p-6 sm:p-8 transition-all duration-500 hover:border-[#dfc18a]/60"
              >
                <h3 className="font-luxury text-xl sm:text-2xl font-normal text-[#faf5ee] transition-colors group-hover:text-[#dfc18a]">
                  {program.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-[#38141d] bg-[#14060a] p-8 sm:p-10 sm:flex-row shadow-2xl">
            <div>
              <h4 className="font-luxury text-2xl font-normal text-[#faf5ee]">Explore Menus, Address by Address</h4>
              <p className="mt-1 text-xs text-[#baa89f] font-light">
                Each address keeps its own kitchen identity — visit its dedicated site for the full current menu.
              </p>
            </div>
            <Link
              href="/brands"
              className="rounded-full border border-[#dfc18a] bg-[#dfc18a] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black transition-all hover:bg-[#faf5ec] hover:scale-[1.02] flex-shrink-0"
            >
              View Brand Menus →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
