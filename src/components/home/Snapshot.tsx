import Container from "@/components/ui/Container";
import RevealGroup from "@/components/motion/RevealGroup";
import Counter from "@/components/motion/Counter";

const GROUP_STATS = [
  { value: 5, suffix: "", label: "Brands Across Portfolio", sub: "Fine dining, cafés & cloud kitchens" },
  { value: 2, suffix: "", label: "Core Metro Cities", sub: "Mumbai & Pune destinations" },
  { value: 150, suffix: "K+", label: "Annual Guests Served", sub: "Across all active addresses" },
  { value: 4.9, suffix: " ★", label: "Hospitality Rating", sub: "Guest satisfaction score" },
];

export default function Snapshot() {
  return (
    <section id="snapshot" className="relative overflow-hidden border-y border-[#63182b] bg-[#0a0205] py-20 sm:py-28 md:py-32">
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(165, 30, 65, 0.3) 0%, transparent 75%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-[#63182b] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#dfc18a] animate-ping" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5]">
                Company Snapshot
              </span>
            </div>
            <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.02em] text-gold-gradient">
              THE SCALE BEHIND THE ROOMS.
            </h2>
          </div>
          <p className="max-w-[42ch] text-xs sm:text-sm text-[#baa89f] font-light leading-relaxed">
            A group expanding purposefully — figures reflect our active blueprint across hospitality concepts and live entertainment destinations.
          </p>
        </div>

        <RevealGroup
          className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"
          stagger={0.1}
        >
          {GROUP_STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#6b162a] bg-gradient-to-b from-[#340916] to-[#120307] p-6 sm:p-8 transition-all duration-500 hover:border-[#dfc18a] hover:-translate-y-1 shadow-lg"
            >
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-[#dfc18a]/10 to-transparent rounded-bl-full transition-opacity duration-300 group-hover:opacity-100" />
              
              <div>
                <p className="font-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-gold-gradient">
                  {typeof stat.value === "number" && !String(stat.value).includes(".") ? (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value}{stat.suffix}</span>
                  )}
                </p>

                <h3 className="font-luxury mt-4 text-base sm:text-lg font-semibold text-[#faf5ee] transition-colors group-hover:text-[#dfc18a]">
                  {stat.label}
                </h3>
              </div>

              <p className="mt-4 text-xs text-[#baa89f] border-t border-[#6b162a]/80 pt-3 font-light">
                {stat.sub}
              </p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}


