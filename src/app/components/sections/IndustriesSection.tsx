import { Container } from "@/app/components/layout/Container";

const industries = [
  "Academic medical centers",
  "Private hospital groups",
  "Day surgery centers",
  "Specialty clinics",
  "Diagnostic & imaging centers",
  "Integrated delivery networks",
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="border-b border-slate-800 bg-slate-950/90 py-16"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Industries
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Designed for modern healthcare networks.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Whether you&apos;re optimizing a single hospital or coordinating
              inventory across a regional network, Davon scales with your
              operations and data complexity.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4 md:max-w-md">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-xs font-medium text-slate-50"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


