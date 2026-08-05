import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Plate from "@/components/ui/Plate";
import RevealGroup from "@/components/motion/RevealGroup";
import Button from "@/components/ui/Button";
import { experiences } from "@/lib/site-data";

export default function Experiences() {
  return (
    <section className="border-t border-line bg-bg-sunken py-24 md:py-36">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHeading eyebrow="Curated Experiences" title="Beyond the table." />
            <p className="mt-4 max-w-[46ch] text-ink-muted">
              From chef&apos;s table narratives to private dining rooms and curated late-night entertainment.
            </p>
          </div>
          <Button href="/experiences" variant="outline">
            All Experiences →
          </Button>
        </div>

        {/* Asymmetric Bento Deck */}
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-12" stagger={0.12}>
          {experiences.map((exp, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={exp.title}
                className={`group relative overflow-hidden rounded-3xl border border-line bg-bg-raised p-5 transition-all duration-500 hover:border-gold-soft hover:shadow-xl ${
                  isLarge ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div className="overflow-hidden rounded-2xl">
                  <Plate
                    tone={exp.tone}
                    imageSrc={exp.imageSrc}
                    ratio={isLarge ? "aspect-[16/9]" : "aspect-[4/3]"}
                    pending={false}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="eyebrow text-xs text-gold">Experience 0{idx + 1}</span>
                      <span className="rounded-full border border-line px-3 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-ink-faint">
                        Curated
                      </span>
                    </div>
                    <h3 className="font-display mt-2 text-2xl text-ink transition-colors group-hover:text-gold">
                      {exp.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}

