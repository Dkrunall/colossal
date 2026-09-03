"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Expanded Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed inset-x-3 sm:inset-x-4 bottom-20 sm:bottom-24 z-50 max-h-[calc(100dvh-7rem)] overflow-y-auto custom-scrollbar rounded-[2rem] sm:rounded-[2.2rem] border border-[#dfc18a]/60 bg-[#380a16]/98 p-4 sm:p-6 backdrop-blur-3xl shadow-2xl transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
            isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {primaryNav.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  style={{ transitionDelay: `${isOpen ? idx * 30 : 0}ms` }}
                  className={`flex items-center justify-between rounded-full border px-3.5 sm:px-5 py-2.5 sm:py-3 text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] transition-all duration-300 ${
                    isActive
                      ? "border-[#dfc18a] bg-[#dfc18a] text-black font-extrabold"
                      : "border-[#72182e] bg-[#4d0f20] text-[#f4e0b5] hover:border-[#dfc18a] hover:bg-[#66152b] hover:text-white"
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  {isActive && <span className="text-base leading-none">•</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Floating Bottom Pill Dock Navbar - Sleek Rich Velvet Maroon Capsule */}
      <header className="fixed inset-x-0 bottom-4 sm:bottom-8 z-50 px-3 sm:px-4 flex justify-center pointer-events-none transition-all duration-500">
        <div className="pointer-events-auto flex items-center justify-between md:justify-center gap-2 sm:gap-2.5 rounded-full border border-[#dfc18a]/70 bg-[#420d1a]/95 p-2 sm:py-2.5 sm:px-3 backdrop-blur-3xl shadow-2xl w-[calc(100vw-1.5rem)] max-w-[460px] md:w-auto md:max-w-full transition-all duration-500 hover:border-[#dfc18a]">
          
          {/* Leftmost Logo Box (C. / COLOSSAL style) */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center justify-center rounded-full border border-[#dfc18a]/60 bg-[#5a1224] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold tracking-[0.16em] text-[#dfc18a] font-luxury transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#70162d] hover:text-[#fff5dc] flex-shrink-0"
          >
            <span>C.</span>
          </Link>

          {/* Desktop Nav Items (hidden on mobile, visible md:) */}
          <nav className="hidden md:flex items-center gap-1.5 flex-shrink-0">
            {primaryNav.slice(0, 6).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full border px-4 sm:px-4.5 py-2.5 sm:py-3 text-[0.74rem] sm:text-[0.78rem] font-bold uppercase tracking-[0.14em] transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? "border-[#dfc18a] bg-[#dfc18a] text-black font-extrabold"
                      : "border-[#72182e] bg-[#541223]/90 text-[#f4e0b5] hover:border-[#dfc18a] hover:bg-[#6c172e] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Book Table Button (Visible in main mobile dock & desktop dock) */}
          <Link
            href="/reservations"
            onClick={closeMenu}
            className="flex flex-1 md:flex-none items-center justify-center rounded-full border border-[#dfc18a] bg-[#dfc18a] px-4 sm:px-6 py-2.5 sm:py-3 text-[0.74rem] sm:text-xs font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-black transition-all duration-300 hover:bg-[#faf5ec] hover:scale-[1.02] flex-shrink-0 font-luxury whitespace-nowrap text-center"
          >
            <span>Book Table</span>
          </Link>

          {/* Mobile Hamburger Toggle Button (Animated lines on mobile) */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex md:hidden items-center justify-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#5a1224] px-4 sm:px-4.5 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-[#dfc18a] transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#70162d] hover:text-white cursor-pointer flex-shrink-0"
          >
            <span className="text-[0.68rem] tracking-[0.16em] font-extrabold">{isOpen ? "CLOSE" : "MENU"}</span>
            <div className="flex flex-col justify-center items-center w-4 h-3.5 gap-1">
              <span className={`h-0.5 w-4 bg-[#dfc18a] rounded-full transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-0.5 w-4 bg-[#dfc18a] rounded-full transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-0.5 w-4 bg-[#dfc18a] rounded-full transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>

        </div>
      </header>
    </>
  );
}












