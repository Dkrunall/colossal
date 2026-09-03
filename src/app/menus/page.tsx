"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Plate from "@/components/ui/Plate";
import RevealGroup from "@/components/motion/RevealGroup";

const VENUES = ["Epitome Mumbai", "Epitome Pune", "Kynd Café & Bar"] as const;
type Venue = (typeof VENUES)[number];

const MENU_CATEGORIES = ["Chef's Tasting", "A La Carte Mains", "Craft Cocktails", "Desserts"] as const;

type MenuItem = {
  name: string;
  category: string;
  description: string;
  price: string;
  badge?: string;
};

const MENU_ITEMS: Record<Venue, MenuItem[]> = {
  "Epitome Mumbai": [
    {
      name: "Truffle & Wild Mushroom Risotto",
      category: "Chef's Tasting",
      description: "Aged carnaroli rice, winter black truffle shaving, parmigiano reggiano.",
      price: "₹ 1,450",
      badge: "Chef's Signature",
    },
    {
      name: "Smoked Chilean Sea Bass",
      category: "Chef's Tasting",
      description: "Saffron glaze, braised leeks, yuzu emulsion, crispy lotus root.",
      price: "₹ 2,250",
      badge: "Featured",
    },
    {
      name: "Charred Lamb Cutlets",
      category: "A La Carte Mains",
      description: "Pistachio crust, roasted garlic jus, smoked aubergine puree.",
      price: "₹ 1,850",
    },
    {
      name: "The Velvet Smoked Old Fashioned",
      category: "Craft Cocktails",
      description: "Bourbon whisky infused with charred oak, orange bitters, smoked cinnamon.",
      price: "₹ 950",
      badge: "Mixologist Choice",
    },
    {
      name: "Valrhona Dark Chocolate Sphere",
      category: "Desserts",
      description: "Salted caramel ganache, hazelnut praline, warm espresso pour.",
      price: "₹ 750",
    },
  ],
  "Epitome Pune": [
    {
      name: "Wood-Fired Burrata & Figs",
      category: "Chef's Tasting",
      description: "Fresh artisanal burrata, caramelized figs, aged balsamic glaze, toasted sourdough.",
      price: "₹ 1,150",
      badge: "Popular",
    },
    {
      name: "Pan-Seared Duck Breast",
      category: "A La Carte Mains",
      description: "Plum reduction, roasted root vegetables, parsnip velvet.",
      price: "₹ 1,950",
      badge: "Signature",
    },
    {
      name: "Golden Hour Botanical Tonic",
      category: "Craft Cocktails",
      description: "Artisanal gin, elderflower liqueur, rosemary syrup, gold leaf shimmer.",
      price: "₹ 850",
    },
  ],
  "Kynd Café & Bar": [
    {
      name: "Avocado & Truffle Poached Eggs",
      category: "Chef's Tasting",
      description: "Single-origin sourdough, smashed Hass avocado, organic eggs, black truffle drizzle.",
      price: "₹ 750",
      badge: "All-Day Favorite",
    },
    {
      name: "Matcha Espresso Cold Brew",
      category: "Craft Cocktails",
      description: "Uji matcha, house cold brew coffee, oat milk, vanilla pod.",
      price: "₹ 450",
    },
    {
      name: "Artisanal Berry Tart",
      category: "Desserts",
      description: "Vanilla bean custard, fresh wild berries, edible blossoms.",
      price: "₹ 550",
    },
  ],
};

export default function MenusPage() {
  const [activeVenue, setActiveVenue] = useState<Venue>("Epitome Mumbai");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const currentItems = MENU_ITEMS[activeVenue].filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <>
      <PageHero
        eyebrow="Special Menus"
        title="Menus, curated by room."
        lede="Explore seasonal culinary offerings, chef tasting menus, and artisanal cocktail creations designed for each address."
      />

      <section className="py-16 md:py-24">
        <Container>
          {/* Venue Selector */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-[#38141d] pb-8">
            <div>
              <p className="eyebrow text-[#dfc18a]">Choose Venue</p>
              <h2 className="font-luxury mt-1 text-2xl sm:text-3xl font-normal text-[#faf5ee]">{activeVenue} Menu</h2>
            </div>

            <div className="flex flex-wrap gap-2 rounded-full border border-[#38141d] bg-[#14060a] p-1.5 backdrop-blur-md">
              {VENUES.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setActiveVenue(v)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer ${
                    activeVenue === v
                      ? "border border-[#dfc18a] bg-[#dfc18a] text-black font-bold shadow-sm"
                      : "text-[#baa89f] hover:bg-[#240813] hover:text-[#faf5ee]"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer ${
                activeCategory === "All"
                  ? "border border-[#dfc18a] bg-[#dfc18a] text-black font-bold"
                  : "border border-[#38141d] bg-[#120408] text-[#dfc18a]/80 hover:text-white hover:border-[#dfc18a]/50"
              }`}
            >
              All Offerings
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "border border-[#dfc18a] bg-[#dfc18a] text-black font-bold"
                    : "border border-[#38141d] bg-[#120408] text-[#dfc18a]/80 hover:text-white hover:border-[#dfc18a]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Plated Menu Grid */}
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {currentItems.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col justify-between rounded-[2rem] border border-[#38141d] bg-[#14060a] p-6 sm:p-7 transition-all duration-500 hover:border-[#dfc18a]/60"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-luxury text-xl font-normal text-[#faf5ee] transition-colors group-hover:text-[#dfc18a]">
                      {item.name}
                    </h3>
                    <span className="font-luxury text-base font-semibold text-[#dfc18a] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  {item.badge && (
                    <span className="mt-2 inline-block rounded-full border border-[#dfc18a]/40 bg-[#250812] px-3 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-[#dfc18a]">
                      {item.badge}
                    </span>
                  )}

                  <p className="mt-3 text-xs leading-relaxed text-[#baa89f] font-light">{item.description}</p>
                </div>

                <div className="mt-6 border-t border-[#38141d] pt-3 text-[0.68rem] font-semibold uppercase tracking-wider text-[#78656b]">
                  {item.category}
                </div>
              </div>
            ))}
          </RevealGroup>

          {/* Download & Custom Menu Request */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-[#38141d] bg-[#14060a] p-8 sm:p-10 sm:flex-row shadow-2xl">
            <div>
              <h4 className="font-luxury text-2xl font-normal text-[#faf5ee]">Download Complete PDF Menu</h4>
              <p className="mt-1 text-xs text-[#baa89f] font-light">
                Wine lists, dietary menus, and full tasting itineraries available upon request.
              </p>
            </div>
            <a
              href="/reservations"
              className="rounded-full border border-[#dfc18a] bg-[#dfc18a] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black transition-all hover:bg-[#faf5ec] hover:scale-[1.02]"
            >
              Request Full Menu PDF →
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

