import { Container } from "@/app/components/layout/Container";

const resources = [
  {
    label: "From stockouts to stability",
    type: "Guide",
    description:
      "A practical playbook for bringing real-time visibility to hospital inventory.",
  },
  {
    label: "The state of healthcare supply chains",
    type: "Report",
    description:
      "What leading systems are doing differently to manage volatility and rising costs.",
  },
  {
    label: "Davon + your existing systems",
    type: "Article",
    description:
      "How Davon layers on top of your ERP, EHR, and materials management tools.",
  },
];

export function ResourcesSection() {
  return (
    <section
      id="resources"
      className="border-b border-slate-800 bg-slate-950 py-16"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Resources
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Learn how leading systems modernize supply chains.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Explore guides, reports, and case studies that show how data-driven
              inventory transforms care delivery and margins.
            </p>
          </div>
          <div className="grid flex-1 gap-4 md:max-w-md">
            {resources.map((resource) => (
              <article
                key={resource.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <div className="text-[11px] font-medium text-emerald-300">
                  {resource.type}
                </div>
                <h3 className="mt-1 text-sm font-semibold text-slate-50">
                  {resource.label}
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  {resource.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


