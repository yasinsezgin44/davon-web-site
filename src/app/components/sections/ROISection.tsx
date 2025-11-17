import { Container } from "@/app/components/layout/Container";

const roiMetrics = [
  {
    label: "Annual supply spend",
    before: "$25M",
    after: "$22M",
    change: "-12%",
  },
  {
    label: "Capital tied in inventory",
    before: "$9.5M",
    after: "$7.8M",
    change: "-18%",
  },
  {
    label: "Critical stockout events / month",
    before: "18",
    after: "6",
    change: "-67%",
  },
  {
    label: "Time from project kickoff to go-live",
    before: "7–12 months",
    after: "6 weeks",
    change: "4x faster",
  },
];

export function ROISection() {
  return (
    <section className="border-b border-slate-800 bg-slate-950/95 py-16">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            ROI
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            A supply chain upgrade that pays for itself.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            These are modeled outcomes based on hospitals similar to yours.
            Exact numbers will vary, but the pattern is consistent — less waste,
            fewer surprises, and more capacity to invest in care.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-slate-900/80 text-[11px] font-medium text-slate-300">
            <div className="px-4 py-3 text-left">Metric</div>
            <div className="px-4 py-3 text-right">Before Davon</div>
            <div className="px-4 py-3 text-right">With Davon</div>
            <div className="px-4 py-3 text-right">Change</div>
          </div>
          <div className="divide-y divide-slate-800 text-xs text-slate-200">
            {roiMetrics.map((metric) => (
              <div
                key={metric.label}
                className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-gradient-to-r from-slate-900/60 to-slate-900/40"
              >
                <div className="px-4 py-3 text-left">{metric.label}</div>
                <div className="px-4 py-3 text-right text-slate-300">
                  {metric.before}
                </div>
                <div className="px-4 py-3 text-right text-slate-50">
                  {metric.after}
                </div>
                <div className="px-4 py-3 text-right text-emerald-300">
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


