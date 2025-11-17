import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "Use cases", href: "#use-cases" },
  { label: "R&D", href: "#rd" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 backdrop-blur-xl bg-slate-950/70">
      <Container>
        <div className="flex h-[var(--nav-height)] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-8 w-28 md:h-9 md:w-32">
              <Image
                src="/logo-white.webp"
                alt="Davon"
                fill
                sizes="128px"
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-slate-400 md:inline-flex">
              Healthcare Maintenance Intelligence
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-200 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-sky-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden rounded-full border border-slate-700/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-sky-300 sm:inline-flex"
            >
              Talk to us
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center rounded-full bg-sky-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-300"
            >
              Get a demo
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
