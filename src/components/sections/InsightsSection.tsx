const insights = [
  {
    title: "Building a connected biomedical operations stack",
    category: "Guide",
    blurb:
      "How leading hospitals consolidate maintenance, asset, and compliance data into a single, actionable platform.",
  },
  {
    title: "From spreadsheets to real-time insights in under 90 days",
    category: "Customer story",
    blurb:
      "See how a multi-site healthcare provider standardized processes and unlocked new savings with Davon.",
  },
  {
    title: "Designing healthcare platforms around people, not systems",
    category: "Perspective",
    blurb:
      "Why usability and collaboration matter more than ever for biomedical and clinical engineering teams.",
  },
];

export function InsightsSection() {
  return (
    <section
      id="insights"
      className="border-t border-slate-800 bg-slate-950 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Industry insights
            </h2>
            <p className="mt-3 text-balance text-2xl font-semibold text-white md:text-3xl">
              Learn what&apos;s next for healthcare operations.
            </p>
          </div>
          <p className="max-w-xs text-xs text-slate-400 md:text-sm">
            Explore perspectives, guides, and customer stories from the Davon
            ecosystem—designed to help you plan the next phase of your digital
            journey.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                {item.category}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-sky-50 md:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                {item.blurb}
              </p>
              <button className="mt-4 inline-flex text-xs font-semibold text-sky-300 hover:text-sky-200">
                Read more
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


