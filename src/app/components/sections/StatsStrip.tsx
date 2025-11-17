import { Container } from "@/app/components/layout/Container";

const stats = [
  {
    label: "Lower supply spend on average",
    value: "18%",
  },
  {
    label: "Inventory accuracy across locations",
    value: "99.5%",
  },
  {
    label: "Go-live in weeks not months",
    value: "5 weeks",
  },
];

export function StatsStrip() {
  return (
    <section className="border-b border-slate-800 bg-slate-950/80">
      <Container className="flex flex-col items-start gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-sm text-sm text-slate-200">
          Hospitals using Davon see measurable impact on availability, waste, and
          working capital — without replacing their core systems.
        </div>
        <dl className="grid w-full gap-6 text-sm text-slate-200 sm:w-auto sm:grid-flow-col sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs text-slate-400">{stat.label}</dt>
              <dd className="mt-1 text-lg font-semibold text-emerald-300">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}


