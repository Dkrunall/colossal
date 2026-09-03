"use client";

import Link from "next/link";
import { footerNav, socialLinks, brands } from "@/lib/site-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 px-3 sm:px-6 md:px-8 pb-8 pt-12">
      {/* Floating Glass Dock Footer Card - Rich Velvet Maroon */}
      <div className="mx-auto max-w-[1560px] overflow-hidden rounded-[1.8rem] sm:rounded-[2.5rem] border border-[#781d34] bg-gradient-to-b from-[#480e1e] via-[#320814] to-[#1c040b] p-6 sm:p-10 md:p-14 backdrop-blur-2xl transition-all duration-500 hover:border-[#dfc18a]/70 relative">
        
        {/* Ambient velvet maroon glow overlay */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(178,32,68,0.5)_0%,_transparent_75%)] pointer-events-none"
          aria-hidden
        />

        {/* Main Grid Content */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">

          {/* Brand Info & Socials */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2 font-luxury text-2xl tracking-[0.06em] text-[#faf5ee]">
              <span className="h-2 w-2 rounded-full bg-[#dfc18a] transition-transform duration-300 group-hover:scale-150" />
              <span className="font-semibold">COLOSSAL</span>
              <span className="italic font-normal text-[#dfc18a]">Hospitality</span>
            </Link>

            <p className="mt-4 max-w-[34ch] text-xs sm:text-sm leading-relaxed text-[#e2d5ce] font-light">
              A portfolio of distinct, design-led destinations across dining, cocktail lounges, and cloud kitchens in Mumbai &amp; Pune.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#5a1224] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-[#dfc18a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#dfc18a] animate-pulse" />
              <span>Mumbai &amp; Pune Outlets Open</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-[#781d34] bg-[#5a1224] px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#f4e0b5] transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[0.68rem] sm:text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#dfc18a]">{heading}</p>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs sm:text-sm font-light text-[#f4e0b5]/85 transition-colors hover:text-[#dfc18a]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Venues Column */}
          <div>
            <p className="text-[0.68rem] sm:text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#dfc18a]">Our Venues</p>
            <ul className="mt-4 space-y-2">
              {brands.map((b) => (
                <li key={b.slug}>
                  <Link href={`/brands/${b.slug}`} className="text-xs sm:text-sm font-light text-[#f4e0b5]/85 transition-colors hover:text-[#dfc18a]">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back-To-Top Bar */}
        <div className="relative z-10 mt-12 flex flex-col gap-5 border-t border-[#6b162a] pt-6 text-xs text-[#baa89f] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Colossal Hospitality Group. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-[#dfc18a]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[#dfc18a]">
              Terms of Use
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="rounded-full border border-[#781d34] bg-[#5a1224] px-4 py-1.5 text-xs text-[#f4e0b5] transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black cursor-pointer"
            >
              ↑ Back to top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
