import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Button from "@/components/ui/Button";
import { brands } from "@/lib/site-data";
import Link from "next/link";

export default function ReservationsCTA() {
  const liveBrands = brands.filter((b) => b.status === "live");

  return (
    <section className="py-24 md:py-36">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="eyebrow text-gold">Direct Reservations</span>
          </div>

          <SplitHeading
            text="Pick a room. We'll point you there."
            as="h2"
            triggerOnScroll
            className="font-display max-w-lg text-3xl italic leading-[1.12] text-ink md:text-5xl"
          />

          <Reveal delay={0.15} className="mt-6 max-w-[48ch] text-ink-muted text-base leading-relaxed">
            Select an outlet and you&apos;ll be directed straight to its primary booking channel — whether via WhatsApp, direct call line, or dedicated online platform.
          </Reveal>

          <Reveal delay={0.25} className="mt-8">
            <Button href="/reservations" variant="gold">
              Explore All Venues & Channels →
            </Button>
          </Reveal>
        </div>

        {/* Outlet Channel Cards */}
        <Reveal as="div" className="lg:col-span-6" y={30}>
          <div className="rounded-3xl border border-line bg-bg-raised p-6 md:p-8 shadow-lg">
            <div className="flex items-center justify-between border-b border-line pb-4 mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                Active Outlets ({liveBrands.length})
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                Mumbai · Pune · Dubai
              </span>
            </div>

            <div className="space-y-3">
              {liveBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  href="/reservations"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-line/60 bg-bg-sunken/40 p-4 transition-all duration-300 hover:border-gold-soft hover:bg-bg-sunken hover:shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 font-display font-semibold text-gold">
                      {brand.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-display text-base text-ink group-hover:text-gold transition-colors">
                        {brand.name}
                      </p>
                      <p className="text-xs text-ink-faint font-medium">
                        {brand.kind} · {brand.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                    <span className="hidden sm:inline-block rounded-full bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                      Channel Ready
                    </span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

