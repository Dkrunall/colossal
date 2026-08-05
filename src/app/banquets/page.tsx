"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import Button from "@/components/ui/Button";

const SPACE_TYPES = [
  {
    title: "Private Dining Rooms",
    capacity: "8 to 24 Guests",
    body: "Closed-door architectural suites built for private celebrations, C-suite dinners, and exclusive gatherings.",
    tone: "espresso" as const,
    imageSrc: "/images/fine_dining.png",
  },
  {
    title: "Semi-Private Lounges",
    capacity: "25 to 60 Guests",
    body: "A designated elevated section of the main lounge or café, maintaining ambient energy with exclusive service.",
    tone: "champagne" as const,
    imageSrc: "/images/kynd_cafe.png",
  },
  {
    title: "Full Venue Buyouts",
    capacity: "80 to 250+ Guests",
    body: "The complete venue experience, customized entirely for luxury brand launches, milestone events, and private galas.",
    tone: "bronze" as const,
    imageSrc: "/images/live_stage.png",
  },
];

const EVENT_TYPES = ["Corporate Dinner", "Brand Launch", "Celebration", "Cocktail Soirée", "Private Tasting"];

export default function BanquetsPage() {
  const [selectedEvent, setSelectedEvent] = useState("Corporate Dinner");
  const [selectedSpace, setSelectedSpace] = useState("Private Dining Rooms");

  return (
    <>
      <PageHero
        eyebrow="Banquets & Private Events"
        title="Book the whole room, not just a table."
        lede="From an eight-seat private dining suite to a full-venue buyout — every Colossal venue is available for bespoke private hospitality."
      />

      <section className="py-16 md:py-28">
        <Container>
          {/* Space Types Deck */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-line pb-8 mb-12">
            <div>
              <p className="eyebrow text-gold">Event Spaces</p>
              <h2 className="font-display mt-1 text-3xl italic text-ink">Bespoke Hospitality Venues</h2>
            </div>
            <p className="mt-2 max-w-[42ch] text-xs text-ink-muted">
              Select a space format below to explore tailored dining and cocktail arrangements.
            </p>
          </div>

          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {SPACE_TYPES.map((space) => (
              <div
                key={space.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-bg-raised p-5 transition-all duration-500 hover:border-gold-soft hover:shadow-xl"
              >
                <div>
                  <div className="overflow-hidden rounded-2xl">
                    <Plate tone={space.tone} imageSrc={space.imageSrc} ratio="aspect-[4/3]" />
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-gold">
                        {space.title}
                      </h3>
                    </div>
                    <span className="mt-1 inline-block rounded-full bg-gold/10 px-3 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-gold">
                      {space.capacity}
                    </span>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">{space.body}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-line/60 pt-4">
                  <a
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-line bg-bg-sunken/60 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-all hover:border-gold hover:bg-gold hover:text-white"
                  >
                    <span>Inquire for {space.title}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </RevealGroup>

          {/* Interactive Planner Widget */}
          <div className="mt-20 rounded-3xl border border-line bg-bg-raised p-8 md:p-12 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="eyebrow text-gold">Private Event Concierge</span>
                </div>
                <h3 className="font-display text-3xl italic text-ink md:text-4xl">
                  Tailor your occasion with our events team.
                </h3>
                <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
                  Select your occasion type and space format to generate a custom inquiry directly for our director of banquets.
                </p>

                {/* Event Type Pills */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold mb-3">Occasion Type</p>
                  <div className="flex flex-wrap gap-2">
                    {EVENT_TYPES.map((evt) => (
                      <button
                        key={evt}
                        type="button"
                        onClick={() => setSelectedEvent(evt)}
                        className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] transition-all duration-300 ${
                          selectedEvent === evt
                            ? "bg-gold text-white shadow-sm"
                            : "border border-line bg-bg-sunken/50 text-ink-muted hover:text-ink"
                        }`}
                      >
                        {evt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-line bg-bg-sunken p-6 md:p-8 space-y-5">
                <div className="border-b border-line pb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Selected Experience</p>
                  <p className="font-display text-xl font-semibold text-ink mt-1">{selectedEvent}</p>
                </div>

                <div className="border-b border-line pb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Recommended Format</p>
                  <p className="font-display text-lg italic text-gold mt-1">Custom Tasting &amp; Bar Setup</p>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed">
                  Includes dedicated sommelier, custom printed menus, private entrance option, and bespoke audio-visual setup.
                </p>

                <Button href="/contact" variant="gold" className="w-full">
                  Start {selectedEvent} Inquiry →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

