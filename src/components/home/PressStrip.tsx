import Container from "@/components/ui/Container";
import Marquee from "@/components/ui/Marquee";
import { pressMentions } from "@/lib/site-data";

export default function PressStrip() {
  // Nothing to show truthfully yet — omit rather than fake a press wall.
  if (pressMentions.length === 0) return null;

  return (
    <section className="border-y border-line py-14">
      <Container className="mb-8 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.14em] text-ink-faint">As Featured In</p>
        <a href="/press" className="text-xs uppercase tracking-[0.1em] text-ink-muted hover:text-gold">
          Press &amp; Media →
        </a>
      </Container>
      <Marquee items={pressMentions} />
    </section>
  );
}
