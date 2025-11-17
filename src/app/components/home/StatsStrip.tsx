import { Container } from "../layout/Container";

const stats = [
  {
    label: "Faster work order completion",
    value: "42%",
    caption: "Average improvement across Davon customers",
  },
  {
    label: "Preventive maintenance coverage",
    value: "1.8x",
    caption: "Increase in planned vs. reactive tasks",
  },
  {
    label: "Time to go live",
    value: "6 weeks",
    caption: "Typical rollout compared to 6–12 months for legacy CMMS",
  },
];

export function StatsStrip() {
  return (
    <section className="dv-section dv-section--tight border-b border-slate-800/80 bg-slate-950/80">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-sm space-y-2 text-sm">
            <div className="dv-section-heading">
              Measurable impact for healthcare providers
            </div>
            <p className="text-slate-300">
              Replace spreadsheets and fragmented tools with a CMMS designed for
              clinical environments – and see results in days, not years.
            </p>
          </div>
          <div className="grid flex-1 gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="dv-kpi-label">{stat.label}</div>
                <div className="dv-kpi-value text-sky-400">{stat.value}</div>
                <div className="dv-kpi-caption">{stat.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


