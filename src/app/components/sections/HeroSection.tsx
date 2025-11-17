import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/layout/Container";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-background-base.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <Image
          src="/hero-background-glow.png"
          alt=""
          fill
          priority
          className="object-cover mix-blend-screen opacity-70"
        />
      </div>
      <Container className="relative z-10 flex flex-col items-start gap-10 py-16 md:flex-row md:items-center md:py-24">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-slate-900/70 px-3 py-1 text-xs font-medium text-emerald-300">
            AI-powered inventory visibility for healthcare
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Simplify your supply chain and keep every care moment fully stocked.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Davon connects your clinical, warehouse, and purchasing data into a
            single real-time view. Prevent stockouts, reduce expired supplies,
            and give clinicians the confidence that what they need is always on
            hand.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#demo"
              className="rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:bg-emerald-300"
            >
              Get a demo
            </Link>
            <Link
              href="#product"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              See how Davon works
            </Link>
          </div>
          <p className="text-xs text-slate-300">
            Trusted by leading hospitals and health systems to protect margins
            while improving care quality.
          </p>
        </div>
        <div className="relative mx-auto mt-6 w-full max-w-md md:mt-0 md:max-w-sm">
          <div className="rounded-3xl border border-emerald-400/40 bg-slate-950/80 p-4 shadow-[0_0_80px_rgba(45,212,191,0.25)]">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>OR supply coverage</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
                +18% availability
              </span>
            </div>
            <div className="mt-4 space-y-3">
              <StatRow label="Critical items in stock" value="99.7%" trend="+4.3%" />
              <StatRow label="Expired items reduced" value="-42%" trend="vs. last year" />
              <StatRow label="Nursing time saved" value="6.5h" trend="/unit per week" />
            </div>
            <div className="mt-5 rounded-2xl bg-slate-900/80 p-3 text-[11px] text-slate-300">
              Davon analyzes live usage and purchasing patterns across locations to
              continuously balance stock — no manual spreadsheets or guesswork.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type StatRowProps = {
  label: string;
  value: string;
  trend: string;
};

function StatRow({ label, value, trend }: StatRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2.5">
      <div className="text-[11px] text-slate-300">{label}</div>
      <div className="text-right">
        <div className="text-sm font-semibold text-slate-50">{value}</div>
        <div className="text-[11px] text-emerald-300">{trend}</div>
      </div>
    </div>
  );
}


