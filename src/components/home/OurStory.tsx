import Link from "next/link";

export default function OurStory() {
  return (
    <section className="bg-[#050505] py-24 md:py-36 border-b border-[#1c1916] text-center">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        
        {/* Main Golden Title */}
        <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient drop-shadow-[0_2px_15px_rgba(223,193,138,0.2)]">
          OUR STORY
        </h2>




        {/* Story Narrative with Refined Typography and Highlights */}
        <p className="mt-8 text-base sm:text-lg md:text-xl font-light text-[#b0a89d] leading-relaxed max-w-3xl mx-auto">
          <span className="text-[#dfc18a] font-normal">Colossal Hospitality</span> operates a growing portfolio of distinct hospitality and entertainment brands. We balance the <span className="text-[#f7f3eb] font-medium">corporate credibility</span> of a hospitality group with the instincts and cultural fluency of a <span className="text-[#dfc18a] font-normal">lifestyle brand</span>. Spaces are designed around how people actually live, gathering under architectural rooms and chef-led culinary narratives across Mumbai and Pune.
        </p>

        {/* Read More Action Link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#dfc18a] transition-all duration-300 hover:text-white"
          >
            <span>Read More</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
