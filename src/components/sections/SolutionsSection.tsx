const solutions = [
  {
    name: "Maintenance Management",
    summary:
      "Davon's Maintenance Management System (CMMS) offers a comprehensive solution for managing maintenance processes that are critically important in the healthcare sector.",
    details: [
      "Plan and track corrective and preventive work orders",
      "Standardize procedures and response times across sites",
      "Analyze downtime impact and maintenance costs",
    ],
  },
  {
    name: "Asset & Inventory",
    summary:
      "Gain a complete view of biomedical equipment and spare parts to avoid stock-outs and ensure readiness.",
    details: [
      "Centralized asset registry with full lifecycle history",
      "Barcode and RFID support for fast identification",
      "Smart thresholds and re-order recommendations",
    ],
  },
  {
    name: "Compliance & Quality",
    summary:
      "Support regulatory requirements with auditable data and configurable documentation workflows.",
    details: [
      "Digitized inspection and calibration records",
      "Audit-ready logs and evidence for regulators",
      "Automated reminders for critical checks",
    ],
  },
  {
    name: "Analytics & Reporting",
    summary:
      "Turn raw operational data into insights that inform investment, staffing, and policy decisions.",
    details: [
      "Interactive dashboards for utilization and risk",
      "Executive summaries and drill-down views",
      "Exportable reports for leadership and auditors",
    ],
  },
  {
    name: "Clinical Engineering",
    summary:
      "Equip biomedical and clinical engineering teams with the tools they need to manage complex device fleets.",
    details: [
      "Engineer-friendly workspaces and queues",
      "Team performance and workload analytics",
      "Mobile-friendly tooling for work in the field",
    ],
  },
  {
    name: "Integrations & IoT",
    summary:
      "Connect Davon with your existing ecosystem for a continuous flow of operational data.",
    details: [
      "APIs for HIS, ERP, and procurement systems",
      "Connectivity for IoT-enabled devices",
      "Secure data exchange and identity control",
    ],
  },
];

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="border-t border-slate-800 bg-slate-950 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              All-in-one healthcare operations platform
            </h2>
            <p className="mt-3 text-balance text-2xl font-semibold text-white md:text-3xl">
              Best-in-class modules that work together out of the box.
            </p>
            <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
              Start with what you need today and expand as your organization
              grows. Each Davon module is powerful alone—but even better
              together.
            </p>
          </div>
          <p className="max-w-xs text-xs text-slate-400 md:text-sm">
            From single hospitals to multi-entity healthcare groups, Davon
            scales with your operations, your teams, and your ambitions.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.name}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.65)]"
            >
              <h3 className="text-sm font-semibold text-sky-100 md:text-base">
                {solution.name}
              </h3>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                {solution.summary}
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300/90 md:text-sm">
                {solution.details.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


