import Link from "next/link";

export default function OurStory() {
  return (
    <section className="relative bg-maroon-velvet py-24 md:py-36 border-y border-[#842038] text-center overflow-hidden">
      {/* Ambient luxury wine vignette */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(210,40,85,0.45)_0%,_transparent_75%)] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        
        {/* Subtle Maroon & Gold Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#631427] px-4 py-1.5 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#dfc18a]" />
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
            COLOSSAL HOSPITALITY
          </span>
        </div>

        {/* Main Title matching reference image style */}
        <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-[#faf5ee]">
          OUR STORY
        </h2>

        {/* Story Narrative with Velvet Maroon Editorial Typography and Pale Gold Highlights */}
        <p className="mt-8 text-base sm:text-lg md:text-xl font-light text-[#f4e0b5]/90 leading-relaxed max-w-3xl mx-auto">
          <span className="text-[#dfc18a] font-semibold">Colossal Hospitality</span> operates a growing portfolio of distinct hospitality and entertainment brands. We balance the <span className="text-white font-medium">corporate credibility</span> of a hospitality group with the instincts and cultural fluency of a <span className="text-[#dfc18a] font-semibold">lifestyle brand</span>. Spaces are designed around how people actually live, gathering under architectural rooms and chef-led culinary narratives across Mumbai and Pune.
        </p>

        {/* Editorial Action Link matching reference image ("НАЧАТЬ ТВОРИТЬ ИСТОРИЮ →") */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/about"
            className="editorial-link text-xs tracking-[0.24em]"
          >
            <span>READ OUR FULL STORY</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
