import Image from "next/image";
import Link from "next/link";

const SPOTLIGHT_ITEMS = [
  {
    title: "COLOSSAL BANQUETS",
    category: "Private Dining & Grand Celebrations",
    description:
      "From intimate private dining suites to milestone celebratory evenings, corporate galas, and bespoke brand takeovers, our venues combine seamless hospitality, custom menus, and dedicated event planning.",
    image: "/images/fine_dining.png",
    link: "/banquets",
    actionText: "Explore Banquets →",
  },
  {
    title: "THE CURATED EXPERIENCES",
    category: "Chef's Table & Live Acoustics",
    description:
      "An indulgent dining and sensory experience crafted across all addresses. Chef's table tasting journeys, omakase courses, and curated DJ sets under the Epitome Live banner across Mumbai and Pune.",
    image: "/images/live_stage.png",
    link: "/experiences",
    actionText: "Explore Experiences →",
  },
];

export default function FeaturedSpotlight() {
  return (
    <section className="bg-[#050505] py-20 md:py-28 border-b border-[#1c1916]">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">
        <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
          {SPOTLIGHT_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between rounded-[2.2rem] border border-[#26221c] bg-[#11100f] p-6 sm:p-8 transition-all duration-500 hover:border-[#dfc18a]/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
            >
              <div>
                {/* Widescreen Rounded Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1c1916]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center brightness-[0.88] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Block */}
                <div className="mt-8">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#dfc18a]">
                    {item.category}
                  </span>
                  <h3 className="font-luxury text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.02em] text-gold-gradient transition-colors mt-2">
                    {item.title}
                  </h3>


                  <p className="mt-4 text-xs sm:text-sm text-[#b0a89d] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Bottom Action Link */}
              <div className="mt-8 border-t border-[#26221c] pt-5">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dfc18a] transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <span>{item.actionText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

