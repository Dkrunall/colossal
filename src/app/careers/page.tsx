import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import NoteBand from "@/components/ui/NoteBand";
import RevealGroup from "@/components/motion/RevealGroup";
import Button from "@/components/ui/Button";
import { careerTracks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build the next room with Colossal Hospitality.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Come build the next room with us."
        lede="Colossal is growing — across kitchens, floors, events, and the group itself. Here's where people typically join."
      />

      <NoteBand>
        No live openings are listed yet — this page is scaffolded to connect to a roles feed
        or ATS. Reach out directly in the meantime.
      </NoteBand>

      <section className="py-20 md:py-28">
        <Container>
          <RevealGroup className="grid gap-x-8 gap-y-14 sm:grid-cols-2" stagger={0.1}>
            {careerTracks.map((track) => (
              <div key={track.title} className="border-t border-line-strong pt-5">
                <p className="font-display text-xl italic text-ink">{track.title}</p>
                <p className="mt-2 max-w-[42ch] text-ink-muted">{track.body}</p>
              </div>
            ))}
          </RevealGroup>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-10">
            <p className="max-w-[42ch] text-ink-muted">
              Don&apos;t see your track listed? Send your details anyway — we&apos;re hiring
              across every brand as we grow.
            </p>
            <Button href="/contact">Get In Touch</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
