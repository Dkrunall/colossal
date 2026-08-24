import Link from "next/link";

export default function ExperienceExtraordinary() {
  return (
    <section className="relative bg-[#050505] py-20 md:py-28 text-center border-b border-[#1c1916]">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Main Golden Serif Condensed Title matching reference image */}
        <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] leading-[1.15] text-gold-gradient drop-shadow-[0_2px_15px_rgba(223,193,138,0.2)]">
          EXPERIENCE THE EXTRAORDINARY
        </h2>



        {/* Subtitle */}
        <p className="mt-4 text-xs sm:text-sm md:text-base font-light tracking-wide text-[#b0a89d] max-w-xl mx-auto">
          Defining the future of hospitality, culinary artistry, and curated evening spaces.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <Link
            href="/reservations"
            className="group inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/80 bg-transparent px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#dfc18a] transition-all duration-300 hover:bg-[#dfc18a] hover:text-black hover:shadow-[0_0_25px_rgba(223,193,138,0.4)]"
          >
            <span>Book Reservation</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

