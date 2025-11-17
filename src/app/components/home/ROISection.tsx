import { Container } from "../layout/Container";
import { SectionHeader } from "../layout/SectionHeader";

const roiMetrics = [
  {
    label: "Avoided equipment rentals",
    value: "$180k",
    caption: "Annual savings by improving availability of critical assets.",
  },
  {
    label: "Reduced reactive work",
    value: "35%",
    caption: "Fewer urgent breakdowns after standardizing PM plans.",
  },
  {
    label: "Technician time saved",
    value: "8 hrs/week",
    caption: "Per supervisor through better prioritization and reporting.",
  },
];

const exampleInputs = [
  {
    label: "Number of beds",
    value: "350",
  },
  {
    label: "Avg. monthly work orders",
    value: "2,400",
  },
  {
    label: "Unplanned downtime today",
    value: "9.2%",
  },
];

export function ROISection() {
  return (
    <section id="roi" className="dv-section bg-slate-950/70">
      <Container>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <SectionHeader
              eyebrow="ROI & outcomes"
              title="See the financial impact of reliable maintenance."
              lead="Davon makes it easy to quantify the cost of downtime, aging equipment, and inefficient workflows – and to demonstrate the value of investing in maintenance."
            />

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {roiMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3"
                >
                  <div className="dv-kpi-label">{metric.label}</div>
                  <div className="dv-kpi-value text-sky-400">
                    {metric.value}
                  </div>
                  <div className="dv-kpi-caption">{metric.caption}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Example scenario
                </div>
                <p className="text-xs text-slate-300">
                  Adjust the assumptions with our team to model ROI for your
                  hospital or network.
                </p>
              </div>
              <span className="rounded-full bg-sky-500/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-sky-300">
                Estimated impact
              </span>
            </div>

            <div className="grid gap-3 text-xs text-slate-200">
              {exampleInputs.map((input) => (
                <div
                  key={input.label}
                  className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-2"
                >
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">
                      {input.label}
                    </span>
                    <span>{input.value}</span>
                  </div>
                  <span className="text-[0.7rem] text-slate-400">
                    Example input
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-1 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-3 text-xs text-slate-50">
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium">
                  Potential annual impact with Davon
                </span>
                <span className="text-sm font-semibold text-emerald-300">
                  $420k+
                </span>
              </div>
              <p className="text-[0.7rem] text-slate-200/80">
                Combined from avoided rentals, reduced overtime, and fewer
                cancelled procedures due to equipment issues.
              </p>
            </div>

            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full border border-sky-400/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300 transition hover:border-sky-300"
            >
              Calculate ROI for your hospital
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}


