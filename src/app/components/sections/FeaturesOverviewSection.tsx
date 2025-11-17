import { Container } from "@/app/components/layout/Container";

type Feature = {
  title: string;
  description: string;
  items: string[];
};

const features: Feature[] = [
  {
    title: "Inventory management",
    description:
      "Get a live view of every item across wards, pharmacies, and central stores — without chasing spreadsheets.",
    items: [
      "Real-time stock across locations and cost centers",
      "Expiry and lot tracking for critical supplies",
      "Barcode-based transactions at point of use",
    ],
  },
  {
    title: "Demand-aware replenishment",
    description:
      "Align purchasing with clinical reality, not static par levels, so you buy exactly what you need.",
    items: [
      "Usage-based forecasts for high-variability items",
      "Smart reorder suggestions for each location",
      "Exception alerts before stockouts happen",
    ],
  },
  {
    title: "Clinical & financial visibility",
    description:
      "Connect supply chain to patient care and finance to uncover savings without compromising outcomes.",
    items: [
      "Line-of-sight from patient pathways to supply usage",
      "Margin impact by service line and procedure",
      "Self-service dashboards for operations leaders",
    ],
  },
];

export function FeaturesOverviewSection() {
  return (
    <section
      id="product"
      className="border-b border-slate-800 bg-slate-950/90 py-16"
    >
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Product
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Getting the right supplies to every care moment, without the chaos.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            Davon brings inventory, purchasing, and clinical demand into a single
            workspace so your teams can move from reactive firefighting to
            proactive planning.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                {feature.description}
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-200">
                {feature.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}


