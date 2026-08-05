"use client";

import Link from "next/link";
import { footerNav, socialLinks, brands } from "@/lib/site-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 px-4 pb-8 md:px-8 pt-12">
      {/* Floating Glass Dock Footer Card */}
      <div className="mx-auto max-w-[1560px] overflow-hidden rounded-[2.5rem] border border-line bg-bg-raised/90 p-8 md:p-14 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-gold-soft">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-6">
          
          {/* Brand Info & Socials */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2 font-display text-2xl tracking-[0.06em] text-ink">
              <span className="h-2.5 w-2.5 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150" />
              <span className="font-semibold">COLOSSAL</span>
              <span className="italic font-normal text-gold">Hospitality</span>
            </Link>
            
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-ink-muted">
              A portfolio of distinct, design-led destinations across dining, cocktail lounges, and live music stages in Mumbai &amp; Pune.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span>Mumbai &amp; Pune Outlets Open</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-line bg-bg-sunken/60 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink-muted transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white hover:shadow-sm"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold">{heading}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-ink-muted transition-colors hover:text-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Venues Column */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold">Our Venues</p>
            <ul className="mt-4 space-y-2.5">
              {brands.map((b) => (
                <li key={b.slug}>
                  <Link href={`/brands/${b.slug}`} className="text-sm font-medium text-ink-muted transition-colors hover:text-gold">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back-To-Top Bar */}
        <div className="mt-14 flex flex-col gap-6 border-t border-line/60 pt-8 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Colossal Hospitality Group. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms of Use
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-full border border-line bg-bg-sunken px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white hover:shadow-md"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}


