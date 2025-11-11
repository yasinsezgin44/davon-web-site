"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isDavonDropdownOpen, setIsDavonDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--primary-100)] shadow-md transition-all">
      <nav className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-white.webp"
            alt="Davon Information Technologies"
            width={120}
            height={40}
            className="h-8 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>
        <ul className="flex items-center space-x-4 text-sm relative">
          <li>
            <Link
              href="/"
              className="text-[var(--bg-100)] hover:text-[var(--accent-100)] transition-all py-2 px-3 rounded-md hover:bg-[rgba(255,0,0,0.15)]"
              title="Go to homepage"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              onMouseEnter={() => setIsDavonDropdownOpen(true)}
              onMouseLeave={() => setIsDavonDropdownOpen(false)}
              className="text-[var(--bg-100)] hover:text-[var(--accent-100)] transition-all py-2 px-3 rounded-md hover:bg-[rgba(255,0,0,0.15)] flex items-center gap-1"
            >
              Davon
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDavonDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-[var(--primary-100)] border border-[var(--primary-300)] rounded-md shadow-lg py-1 min-w-[160px] z-50"
                onMouseEnter={() => setIsDavonDropdownOpen(true)}
                onMouseLeave={() => setIsDavonDropdownOpen(false)}
              >
                <a
                  href="#about"
                  className="block text-[var(--bg-100)] hover:text-[var(--accent-100)] hover:bg-[rgba(255,0,0,0.15)] py-2 px-3 transition-all"
                >
                  About Davon
                </a>
                <a
                  href="#why-choose"
                  className="block text-[var(--bg-100)] hover:text-[var(--accent-100)] hover:bg-[rgba(255,0,0,0.15)] py-2 px-3 transition-all"
                >
                  Why Choose Us
                </a>
              </div>
            )}
          </li>
          <li>
            <a
              href="#features"
              className="text-[var(--bg-100)] hover:text-[var(--accent-100)] transition-all py-2 px-3 rounded-md hover:bg-[rgba(255,0,0,0.15)]"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#rd"
              className="text-[var(--bg-100)] hover:text-[var(--accent-100)] transition-all py-2 px-3 rounded-md hover:bg-[rgba(255,0,0,0.15)]"
            >
              R&amp;D
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[var(--bg-100)] hover:text-[var(--accent-100)] transition-all py-2 px-3 rounded-md hover:bg-[rgba(255,0,0,0.15)]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
