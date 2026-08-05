import Container from "@/components/ui/Container";
import RevealGroup from "@/components/motion/RevealGroup";
import Counter from "@/components/motion/Counter";

const GROUP_STATS = [
  { value: 6, suffix: "", label: "Brands Across Portfolio", sub: "Fine dining, cafés & live stages" },
  { value: 2, suffix: "", label: "Core Metro Cities", sub: "Mumbai & Pune destinations" },
  { value: 150, suffix: "K+", label: "Annual Guests Served", sub: "Across all active addresses" },
  { value: 4.9, suffix: " ★", label: "Hospitality Rating", sub: "Guest satisfaction score" },
];

export default function Snapshot() {
  return (
    <section id="snapshot" className="relative overflow-hidden border-y border-line bg-bg-sunken py-24 md:py-32 transition-colors duration-500">
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140, 90, 43, 0.3) 0%, transparent 75%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-line pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="eyebrow text-gold">Company Snapshot</span>
            </div>
            <h2 className="font-display max-w-xl text-3xl italic leading-tight text-ink md:text-5xl">
              The scale behind the rooms.
            </h2>
          </div>
          <p className="max-w-[42ch] text-sm text-ink-muted leading-relaxed">
            A group expanding purposefully — figures reflect our active blueprint across hospitality concepts and live entertainment destinations.
          </p>
        </div>

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {GROUP_STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-bg-raised p-8 shadow-sm transition-all duration-500 hover:border-gold-soft hover:shadow-xl hover:-translate-y-1.5"
            >
              <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full transition-opacity duration-300 group-hover:opacity-100" />
              
              <div>
                <p className="font-display text-5xl font-semibold text-gold md:text-6xl">
                  {typeof stat.value === "number" && !String(stat.value).includes(".") ? (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value}{stat.suffix}</span>
                  )}
                </p>

                <h3 className="font-display mt-4 text-lg font-semibold text-ink transition-colors group-hover:text-gold">
                  {stat.label}
                </h3>
              </div>

              <p className="mt-2 text-xs text-ink-muted border-t border-line/60 pt-3">
                {stat.sub}
              </p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}


