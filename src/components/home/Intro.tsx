import Container from "@/components/ui/Container";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Button from "@/components/ui/Button";

export default function Intro() {
  return (
    <section className="py-24 md:py-36">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="eyebrow text-gold">About Colossal</span>
          </div>

          <SplitHeading
            text="A group first. A portfolio of rooms second."
            as="h2"
            triggerOnScroll
            className="font-display max-w-xl text-3xl italic leading-[1.12] text-ink md:text-5xl"
          />

          <Reveal className="mt-8 max-w-[54ch] space-y-5 text-ink-muted text-base leading-relaxed" delay={0.15}>
            <p>
              Colossal Hospitality operates a growing portfolio of hospitality and entertainment
              brands, each built with its own identity and presented under one design language.
              We balance the corporate credibility of a hospitality group with the instincts of a lifestyle brand.
            </p>
            <p>
              This site exists to introduce the group — our vision, our scale, and our philosophy — before pointing you straight to whichever room you came here to experience.
            </p>
          </Reveal>

          {/* Quick Feature Pillars */}
          <Reveal delay={0.2} className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 max-w-lg">
            <div className="rounded-2xl border border-line bg-bg-raised/60 p-4">
              <span className="font-display text-lg font-semibold text-gold">Editorial Focus</span>
              <p className="mt-1 text-xs text-ink-muted">Distinct atmosphere and chef-curated menus for every brand.</p>
            </div>
            <div className="rounded-2xl border border-line bg-bg-raised/60 p-4">
              <span className="font-display text-lg font-semibold text-gold">Multi-City Scale</span>
              <p className="mt-1 text-xs text-ink-muted">Expanding across Mumbai, Pune, and upcoming key destinations.</p>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="mt-8">
            <Button href="/about" variant="solid">
              More About The Group →
            </Button>
          </Reveal>
        </div>

        {/* Visual Layered Plate Deck */}
        <Reveal className="relative lg:col-span-5" y={30}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <Plate tone="bronze" imageSrc="/images/fine_dining.png" ratio="aspect-[4/5]" caption="Signature Dining" className="shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 hidden sm:block w-48 rounded-2xl border border-line bg-bg-raised/95 p-5 backdrop-blur-xl shadow-xl">
              <p className="eyebrow text-[0.65rem] text-gold">Group Philosophy</p>
              <p className="font-display mt-2 text-sm italic text-ink">
                &ldquo;Spaces designed around how people actually live.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

