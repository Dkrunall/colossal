import Link from "next/link";

export default function ExperienceExtraordinary() {
  return (
    <section className="relative bg-gradient-to-b from-[#280612] via-[#16030a] to-[#0c0205] py-24 md:py-32 text-center border-b border-[#63182b] overflow-hidden">
      {/* Rich warm maroon spotlight */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(180,32,70,0.35)_0%,_transparent_70%)] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        
        {/* Visible Velvet Maroon Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5] mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#dfc18a]" />
          <span>ARCHITECTURAL DINING &amp; COCKTAIL CULTURE</span>
        </div>

        {/* Main Golden Serif Condensed Title matching reference image */}
        <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] leading-[1.15] text-gold-gradient">
          EXPERIENCE THE EXTRAORDINARY
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-xs sm:text-sm md:text-base font-light tracking-wide text-[#f4e0b5]/85 max-w-xl mx-auto">
          Defining the future of hospitality, culinary artistry, and curated evening spaces across Mumbai &amp; Pune.
        </p>

        {/* Action Button & Editorial Link matching reference */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
          <Link
            href="/reservations"
            className="group inline-flex items-center gap-2 rounded-full border border-[#dfc18a] bg-[#dfc18a] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#faf5ec] hover:scale-[1.02]"
          >
            <span>Book Reservation</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/brands"
            className="editorial-link text-xs tracking-[0.2em]"
          >
            <span>Explore All Venues</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

