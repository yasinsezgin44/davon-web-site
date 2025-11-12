"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Header() {
  const [isDavonDropdownOpen, setIsDavonDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const openDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDavonDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsDavonDropdownOpen(false);
    }, 250); // small delay to allow cursor to move from button to menu
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 pointer-events-none">
      <nav className="pointer-events-auto mx-auto flex items-center justify-between gap-2 rounded-full border border-white/10 bg-[rgba(0,0,0,0.55)] backdrop-blur-md shadow-lg px-4 sm:px-5 md:px-6 py-2 md:py-2.5 max-w-6xl">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-white.webp"
              alt="Davon Information Technologies"
              width={120}
              height={40}
              className="h-7 md:h-8 w-auto hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-white/90 hover:text-[var(--accent-100)] transition-colors py-2 px-3 rounded-full hover:bg-white/5"
              title="Go to homepage"
            >
              Home
            </Link>
          </li>
          <li className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleCloseDropdown}>
            <button
              className="text-white/90 hover:text-[var(--accent-100)] transition-colors py-2 px-3 rounded-full hover:bg-white/5 flex items-center gap-1"
            >
              Davon
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDavonDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-[rgba(0,0,0,0.8)] backdrop-blur-md border border-white/10 rounded-xl shadow-xl py-1 min-w-[180px] z-50"
              >
                {/* Invisible hover bridge to remove the gap between button and dropdown */}
                <span className="absolute -top-2 left-0 right-0 h-2" aria-hidden="true" />
                <a
                  href="#about"
                  className="block text-white/90 hover:text-[var(--accent-100)] hover:bg-white/5 py-2 px-3 transition-colors rounded-lg"
                >
                  About Davon
                </a>
                <a
                  href="#why-choose"
                  className="block text-white/90 hover:text-[var(--accent-100)] hover:bg-white/5 py-2 px-3 transition-colors rounded-lg"
                >
                  Why Choose Us
                </a>
              </div>
            )}
          </li>
          <li>
            <a
              href="#features"
              className="text-white/90 hover:text-[var(--accent-100)] transition-colors py-2 px-3 rounded-full hover:bg-white/5"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#rd"
              className="text-white/90 hover:text-[var(--accent-100)] transition-colors py-2 px-3 rounded-full hover:bg-white/5"
            >
              R&amp;D
            </a>
          </li>
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-white/10 text-white/90 hover:text-white hover:bg-white/20 transition-colors px-4 py-2 text-sm border border-white/10"
          >
            Contact
          </a>
          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-white/90 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="pointer-events-auto mx-auto max-w-6xl px-4 mt-2">
          <div className="rounded-2xl border border-white/10 bg-[rgba(0,0,0,0.7)] backdrop-blur-md shadow-xl p-2">
            <ul className="flex flex-col">
              <li>
                <Link
                  href="/"
                  className="block text-white/90 hover:text-[var(--accent-100)] hover:bg-white/5 rounded-xl px-4 py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="w-full text-left text-white/90 hover:text-[var(--accent-100)] hover:bg-white/5 rounded-xl px-4 py-2 transition-colors flex items-center justify-between"
                  onClick={() => setIsDavonDropdownOpen((v) => !v)}
                >
                  <span>Davon</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDavonDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {isDavonDropdownOpen && (
                  <div className="pl-2">
                    <a
                      href="#about"
                      className="block text-white/90 hover:text-[var(--accent-100)] hover:bg-white/5 rounded-xl px-4 py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Davon
                    </a>
                    <a
                      href="#why-choose"
                      className="block text-white/90 hover:text-[var(--accent-100)] hover:bg-white/5 rounded-xl px-4 py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Why Choose Us
                    </a>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="#features"
                  className="block text-white/90 hover:text-[var(--accent-100)] hover:bg-white/5 rounded-xl px-4 py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#rd"
                  className="block text-white/90 hover:text-[var(--accent-100)] hover:bg-white/5 rounded-xl px-4 py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  R&amp;D
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-white/90 hover:text-white hover:bg-white/10 rounded-xl px-4 py-2 transition-colors border border-white/10 mt-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
