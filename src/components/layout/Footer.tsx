"use client";

import Link from "next/link";
import { footerNav, socialLinks, brands } from "@/lib/site-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 px-3 sm:px-6 md:px-8 pb-8 pt-12">
      {/* Floating Glass Dock Footer Card */}
      <div className="mx-auto max-w-[1560px] overflow-hidden rounded-[1.8rem] sm:rounded-[2.5rem] border border-[#26221c] bg-[#11100f]/95 p-6 sm:p-10 md:p-14 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-[#dfc18a]/40">

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">

          {/* Brand Info & Socials */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2 font-luxury text-2xl tracking-[0.06em] text-[#f7f3eb]">
              <span className="h-2 w-2 rounded-full bg-[#dfc18a] transition-transform duration-300 group-hover:scale-150" />
              <span className="font-semibold">COLOSSAL</span>
              <span className="italic font-normal text-[#dfc18a]">Hospitality</span>
            </Link>

            <p className="mt-4 max-w-[34ch] text-xs sm:text-sm leading-relaxed text-[#b0a89d] font-light">
              A portfolio of distinct, design-led destinations across dining, cocktail lounges, and live music stages in Mumbai &amp; Pune.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/30 bg-[#dfc18a]/10 px-3.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-[#dfc18a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#dfc18a] animate-pulse" />
              <span>Mumbai &amp; Pune Outlets Open</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-[#38332c] bg-[#171513] px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#b0a89d] transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black hover:shadow-sm"
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
                    <Link href={link.href} className="text-xs sm:text-sm font-light text-[#b0a89d] transition-colors hover:text-[#dfc18a]">
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
                  <Link href={`/brands/${b.slug}`} className="text-xs sm:text-sm font-light text-[#b0a89d] transition-colors hover:text-[#dfc18a]">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back-To-Top Bar */}
        <div className="mt-12 flex flex-col gap-5 border-t border-[#26221c] pt-6 text-xs text-[#736b60] sm:flex-row sm:items-center sm:justify-between">
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
              className="flex items-center gap-1.5 rounded-full border border-[#38332c] bg-[#171513] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-[#f7f3eb] transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black cursor-pointer"
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


