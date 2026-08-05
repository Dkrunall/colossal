import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Marquee from "@/components/ui/Marquee";
import NoteBand from "@/components/ui/NoteBand";
import Button from "@/components/ui/Button";
import { pressMentions } from "@/lib/site-data";

const hasCoverage = pressMentions.length > 0;

export const metadata: Metadata = {
  title: "Press / Media",
  description: "Media coverage and press contacts for Colossal Hospitality.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press / Media"
        title="For journalists and media partners."
        lede="Coverage, brand assets, and a direct line to our media team."
      />

      {hasCoverage ? (
        <section className="border-y border-line py-14">
          <Marquee items={pressMentions} />
        </section>
      ) : (
        <NoteBand>
          No press coverage is listed here yet — this strip is wired to populate as soon as
          the client shares confirmed mentions.
        </NoteBand>
      )}

      <NoteBand>
        A downloadable press kit (logos, imagery, fact sheet) is pending — reach the media team
        directly in the meantime.
      </NoteBand>

      <section className="py-20 text-center md:py-28">
        <Container>
          <p className="font-display max-w-xl mx-auto text-3xl italic text-ink md:text-4xl">
            Working on a story about Colossal?
          </p>
          <p className="mx-auto mt-4 max-w-[46ch] text-ink-muted">
            Get in touch for interviews, imagery, or background on the group and its brands.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/contact">Contact Media Team</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
