import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Providers", href: "#providers" },
  { label: "Customers", href: "#customers" },
  { label: "Resources", href: "#insights" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-900/40 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-32 md:h-9 md:w-36">
            <Image
              src="/logo-white.webp"
              alt="Davon"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-100/80 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-xs font-semibold text-slate-100/80 md:inline-flex"
          >
            Log in
          </Button>
          <Button size="sm" className="text-xs md:text-sm">
            Schedule a demo
          </Button>
        </div>
      </div>
    </header>
  );
}


