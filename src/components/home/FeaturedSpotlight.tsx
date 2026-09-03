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
      "An indulgent dining and sensory experience crafted across all addresses. Chef's table tasting journeys, omakase courses, and curated DJ sets across Epitome Mumbai, Juhu, and Dubai.",
    image: "/images/live_stage.png",
    link: "/experiences",
    actionText: "Explore Experiences →",
  },
];

export default function FeaturedSpotlight() {
  return (
    <section className="bg-[#080406] py-20 md:py-28 border-b border-[#2d1118]">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">
        <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
          {SPOTLIGHT_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between rounded-[2.2rem] border border-[#6b162a] bg-gradient-to-b from-[#340916] via-[#20050e] to-[#0e0206] p-6 sm:p-8 transition-all duration-500 hover:border-[#dfc18a]"
            >
              <div>
                {/* Widescreen Rounded Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1b070f]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center brightness-[0.84] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140207]/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Block */}
                <div className="mt-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#f4e0b5]">
                    {item.category}
                  </span>
                  <h3 className="font-luxury text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.02em] text-gold-gradient transition-colors mt-3">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-[#baa89f] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button & Link matching reference style */}
              <div className="mt-8 border-t border-[#6b162a] pt-5">
                <Link
                  href={item.link}
                  className="editorial-link text-xs tracking-[0.2em]"
                >
                  <span>{item.actionText.replace("→", "")}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

