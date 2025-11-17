import Link from "next/link";
import { Container } from "./Container";

const footerLinks = {
  Product: [
    { label: "Platform overview", href: "#platform" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#use-cases" },
  ],
  Company: [
    { label: "About Davon", href: "#about" },
    { label: "R&D", href: "#rd" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Case studies", href: "#testimonials" },
    { label: "ROI insights", href: "#roi" },
    { label: "Support", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/70">
      <Container>
        <div className="dv-section--tight flex flex-col gap-10 py-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3 text-sm text-slate-400">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Davon
            </div>
            <p>
              Davon helps hospitals and healthcare providers orchestrate critical
              maintenance workflows, so equipment is always ready when patients
              need it most.
            </p>
          </div>

          <div className="grid flex-1 gap-8 text-sm text-slate-300 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {group}
                </div>
                <ul className="space-y-1.5">
                  {links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-slate-300/90 transition-colors hover:text-sky-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 py-5 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Davon. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#privacy" className="hover:text-sky-300">
              Privacy
            </Link>
            <Link href="#terms" className="hover:text-sky-300">
              Terms
            </Link>
            <Link href="#cookies" className="hover:text-sky-300">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


