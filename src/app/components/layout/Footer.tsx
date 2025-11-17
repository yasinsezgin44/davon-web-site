import Link from "next/link";
import { Container } from "@/app/components/layout/Container";

const productLinks = [
  { label: "Inventory visibility", href: "#product" },
  { label: "Clinician experience", href: "#product" },
  { label: "Analytics", href: "#product" },
];

const companyLinks = [
  { label: "About", href: "#company" },
  { label: "Careers", href: "#company" },
  { label: "Contact", href: "#company" },
];

const resourceLinks = [
  { label: "Case studies", href: "#resources" },
  { label: "Blog", href: "#resources" },
  { label: "Guides", href: "#resources" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="text-lg font-semibold">Davon Health</div>
            <p className="text-sm text-slate-400">
              Real-time inventory visibility for hospitals and clinics, so care
              teams never run out of what matters.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-200">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-emerald-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-200">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-emerald-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-200">Resources</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-emerald-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Davon Health. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#terms" className="hover:text-emerald-300">
              Terms of Service
            </Link>
            <Link href="#privacy" className="hover:text-emerald-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


