import Link from "next/link";
import Image from "next/image";
import { Container } from "@/app/components/layout/Container";

const navItems = [
  { href: "#product", label: "Product" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#resources", label: "Resources" },
  { href: "#company", label: "Company" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-white.webp"
              alt="Davon Health"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-base font-semibold tracking-tight">
              Davon Health
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#login"
            className="hidden text-sm font-medium text-slate-200 hover:text-emerald-300 md:inline-block"
          >
            Log in
          </Link>
          <Link
            href="#demo"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:bg-emerald-300"
          >
            Book a demo
          </Link>
        </div>
      </Container>
    </header>
  );
}


