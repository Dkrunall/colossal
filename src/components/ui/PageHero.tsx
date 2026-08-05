import Container from "@/components/ui/Container";
import SplitHeading from "@/components/motion/SplitHeading";
import Reveal from "@/components/motion/Reveal";

export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-bg-sunken/40 via-bg to-bg pb-20 pt-36 md:pb-24 md:pt-44">
      {/* Background Radial Glow Accent */}
      <div
        className="absolute top-0 right-1/4 h-80 w-80 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140, 90, 43, 0.4) 0%, transparent 75%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="eyebrow text-gold">{eyebrow}</span>
        </div>

        <SplitHeading
          text={title}
          as="h1"
          className="font-display max-w-4xl text-4xl italic leading-[1.08] text-ink sm:text-5xl lg:text-6xl xl:text-7xl"
        />

        {lede && (
          <Reveal delay={0.2} className="mt-8 max-w-[54ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            {lede}
          </Reveal>
        )}
      </Container>
    </section>
  );
}

