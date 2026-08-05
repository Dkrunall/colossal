"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/site-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 md:px-8 md:py-4">
      <div
        className={`mx-auto flex w-full max-w-[1560px] items-center justify-between transition-all duration-500 rounded-full px-6 py-3.5 ${
          scrolled || open
            ? "border border-line/80 bg-bg/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "border border-line/50 bg-bg/85 backdrop-blur-md shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 font-display text-base tracking-[0.08em] text-ink md:text-lg">
          <span className="h-2 w-2 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150" />
          <span className="font-semibold">COLOSSAL</span>
          <span className="italic font-normal text-gold">Hospitality</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {primaryNav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 text-[0.76rem] font-medium uppercase tracking-[0.1em] transition-all duration-300 ${
                  isActive
                    ? "bg-gold/10 text-gold font-semibold"
                    : "text-ink-muted hover:bg-line/40 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/reservations"
            className="group hidden rounded-full bg-gold px-5 py-2 text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-gold-soft hover:shadow-md sm:flex sm:items-center sm:gap-2"
          >
            <span>Reservations</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg-raised text-ink transition-colors hover:border-gold lg:hidden"
          >
            <div className="flex h-4 w-4 flex-col items-center justify-center gap-1.5">
              <span
                className={`h-0.5 w-4 bg-ink transition-all duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-4 bg-ink transition-all duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          open ? "max-h-[32rem] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="mx-auto max-w-[1360px] rounded-3xl border border-line bg-bg-raised/95 px-6 py-6 backdrop-blur-xl shadow-xl">
          <div className="flex flex-col gap-1.5">
            {primaryNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                    isActive ? "bg-gold/10 text-gold" : "text-ink-muted hover:bg-line/30 hover:text-ink"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-line">
              <Link
                href="/reservations"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md"
              >
                <span>Book a Reservation</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}



