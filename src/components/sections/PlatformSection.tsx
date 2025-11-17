const pillars = [
  {
    title: "Exceptional usability",
    description:
      "Designed with healthcare teams in mind with a clean, modern UI that speeds adoption across clinical engineering, operations, and finance.",
    bullets: [
      "Role-based workspaces and dashboards",
      "Guided workflows for maintenance and compliance",
      "Anywhere access from any device",
    ],
  },
  {
    title: "A true cloud platform",
    description:
      "Unify device data, work orders, and financial impact into a single source of truth so every stakeholder sees the same picture.",
    bullets: [
      "Real-time insights on availability and risk",
      "Cross-hospital visibility for groups and chains",
      "Secure, scalable cloud architecture",
    ],
  },
  {
    title: "Built for healthcare",
    description:
      "Davon is purpose-built for biomedical and clinical environments, supporting the regulations, processes, and standards you live with daily.",
    bullets: [
      "Support for medical equipment lifecycle",
      "Compliance-focused tracking and reporting",
      "Flexible integrations with your ecosystem",
    ],
  },
];

export function PlatformSection() {
  return (
    <section
      id="platform"
      className="border-t border-slate-800 bg-slate-950/95 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Why Davon cloud platform?
          </h2>
          <p className="mt-3 text-balance text-2xl font-semibold text-white md:text-3xl">
            See, connect, and control every facet of your biomedical operations
            in the cloud.
          </p>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Break down silos between maintenance, inventory, and finance. Davon
            helps you orchestrate critical healthcare assets from one intuitive
            platform, improving safety, availability, and cost efficiency.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-5"
            >
              <h3 className="text-sm font-semibold text-sky-100 md:text-base">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-300 md:text-sm">
                {pillar.description}
              </p>
              <ul className="mt-1 space-y-1.5 text-xs text-slate-300/90 md:text-sm">
                {pillar.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


