import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/page-transition";
import { NavigationTransition } from "@/components/navigation-transition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Dancing_Script, Caveat } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Davon | Hospital CMMS & EAM Solutions",
  description:
    "Davon empowers hospital operations with cutting-edge CMMS and EAM solutions, enhancing patient safety and operational efficiency.",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[var(--davon-bg)] text-[var(--davon-text)] antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-page">
        <div className="flex items-center justify-between h-16 gap-6">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative h-10 w-10 rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo-white.webp"
                alt="Davon"
                fill
                className="object-contain p-1.5"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-900">Davon</span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                Healthcare CMMS & EAM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium">
            <a
              href="#about"
              className="nav-link"
            >
              Solutions
            </a>
            <a
              href="#why"
              className="nav-link"
            >
              Why Davon
            </a>
            <a
              href="#features"
              className="nav-link"
            >
              Product
            </a>
            <a
              href="#benefits"
              className="nav-link"
            >
              Benefits
            </a>
            <a
              href="#roi"
              className="nav-link"
            >
              ROI
            </a>
            <a
              href="#contact"
              className="nav-link"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact sales
            </a>
            <a href="#hero" className="btn-primary whitespace-nowrap">
              Start now – it&apos;s free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container-page section-padding">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo-white.webp"
                  alt="Davon"
                  fill
                  className="object-contain p-2"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold">Davon</span>
                <span className="text-sm text-gray-400 uppercase tracking-wide">
                  Healthcare CMMS & EAM
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Davon enhances patient safety, improves institutional efficiency,
              and drives operational excellence with industry-leading CMMS and
              EAM software tailored for healthcare institutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Davon
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-white transition-colors">
                  Why Choose Us?
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-white transition-colors"
                >
                  Key Benefits
                </a>
              </li>
              <li>
                <a href="#rd" className="hover:text-white transition-colors">
                  R&amp;D
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6">Contact Us</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                İzmir Teknoloji Geliştirme Bölgesi
                <br />
                A3 Binası No:16/A İYTE Kampüsü
                <br />
                Gülbahçe, Urla/İzmir
              </p>
              <p>
                <a
                  href="tel:+902327659030"
                  className="hover:text-white transition-colors"
                >
                  +90 (232) 765 90 30
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@davon.com.tr"
                  className="hover:text-white transition-colors underline"
                >
                  info@davon.com.tr
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Davon. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
