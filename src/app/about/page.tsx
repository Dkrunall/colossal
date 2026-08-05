import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Snapshot from "@/components/home/Snapshot";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "The vision, scale, and people behind Colossal Hospitality Group.",
};

const pillars = [
  { title: "Premium", body: "Every room is built to a standard, not a budget.", code: "01" },
  { title: "Experiential", body: "We design for how a night unfolds, not just how a room looks.", code: "02" },
  { title: "Contemporary", body: "Current without chasing trends — spaces built to age well.", code: "03" },
  { title: "Visionary", body: "Each brand is a bet on a concept we believe deserves to exist.", code: "04" },
  { title: "Lifestyle-Led", body: "Guests, not covers. We design around how people actually live.", code: "05" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Colossal"
        title="A hospitality group, built like a portfolio."
        lede="Colossal Hospitality establishes and grows a portfolio of hospitality and entertainment brands — each distinct, each held to the same standard of design and experience."
      />

      <section className="py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Plate tone="walnut" ratio="aspect-[4/5]" caption="Brand shoot pending" className="shadow-xl" />
          </Reveal>
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="eyebrow text-gold">Our Group Position</span>
            </div>
            <h2 className="font-display max-w-lg text-3xl italic leading-[1.12] text-ink md:text-5xl">
              Corporate credibility. Lifestyle instincts.
            </h2>
            <Reveal delay={0.15} className="mt-7 max-w-[54ch] space-y-5 text-ink-muted text-base leading-relaxed">
              <p>
                The parent brand balances the trust and professionalism guests, partners, and
                investors expect from a hospitality group with the design sensibility and
                cultural fluency of a lifestyle brand.
              </p>
              <p>
                We lead with the group — its vision, its scale, its standards — while giving
                every individual brand room to keep its own identity. Colossal is the frame;
                each brand is its own picture.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pillars Section */}
      <section className="border-t border-line bg-bg-sunken py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="eyebrow text-gold mb-2">Our Core Blueprint</p>
              <h2 className="font-display text-3xl italic text-ink md:text-4xl">What We Stand For</h2>
            </div>
            <p className="mt-3 max-w-[40ch] text-sm text-ink-muted md:mt-0">
              Five non-negotiable principles that guide every space, menu, and experience we create.
            </p>
          </div>

          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-line bg-bg-raised p-6 transition-all duration-500 hover:border-gold-soft hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <span className="font-display text-xs font-semibold text-gold">Pillar {p.code}</span>
                  <h3 className="font-display mt-3 text-2xl italic text-ink transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-ink-muted">{p.body}</p>
                </div>
                <div className="mt-6 h-0.5 w-8 bg-line transition-all duration-500 group-hover:w-full group-hover:bg-gold" />
              </div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Snapshot />

      <section className="py-24 text-center md:py-32">
        <Container>
          <h2 className="font-display mx-auto max-w-2xl text-3xl italic leading-tight text-ink md:text-5xl">
            Come build the next room with us.
          </h2>
          <p className="mt-4 max-w-[42ch] mx-auto text-sm text-ink-muted">
            We are actively expanding across culinary, operations, management, and corporate roles.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/careers" variant="gold">
              View Group Openings →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

