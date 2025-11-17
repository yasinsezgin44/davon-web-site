import Link from "next/link";
import { Container } from "@/app/components/layout/Container";

export function FinalCTASection() {
  return (
    <section
      id="demo"
      className="border-b border-slate-800 bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-slate-950 py-16"
    >
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-emerald-400/40 bg-slate-950/80 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              See Davon in action.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              In 30 minutes we&apos;ll map Davon to your current systems, walk
              through live inventory scenarios, and quantify potential impact on
              cost and care.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:bg-emerald-300"
            >
              Book a live demo
            </Link>
            <Link
              href="#top"
              className="text-xs font-semibold text-emerald-200 hover:text-emerald-100"
            >
              Or explore the product overview
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


