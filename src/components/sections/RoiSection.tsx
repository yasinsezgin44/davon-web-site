export function RoiSection() {
  return (
    <section className="border-t border-slate-800 bg-slate-950/95 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              ROI & impact
            </h2>
            <p className="mt-3 text-balance text-2xl font-semibold text-white md:text-3xl">
              See what&apos;s possible with Davon.
            </p>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Organizations using Davon commonly report fewer equipment-related
              disruptions, faster resolution times, and measurable savings in
              maintenance and capital expenditure. Use the sample scenario to
              imagine impact in your own environment.
            </p>

            <dl className="mt-6 grid gap-4 text-xs text-slate-100/90 md:grid-cols-3 md:text-sm">
              <div className="rounded-2xl border border-sky-900/60 bg-slate-950/80 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-sky-300">
                  Potential 3-year ROI
                </dt>
                <dd className="mt-1 text-lg font-semibold text-white">178%</dd>
              </div>
              <div className="rounded-2xl border border-sky-900/60 bg-slate-950/80 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-sky-300">
                  Maintenance cost reduction
                </dt>
                <dd className="mt-1 text-lg font-semibold text-white">24%</dd>
              </div>
              <div className="rounded-2xl border border-sky-900/60 bg-slate-950/80 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-sky-300">
                  Faster response times
                </dt>
                <dd className="mt-1 text-lg font-semibold text-white">
                  32% faster
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-sky-900/60 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950/95 p-5 shadow-[0_18px_40px_rgba(8,47,73,0.8)]">
            <h3 className="text-sm font-semibold text-sky-50 md:text-base">
              Sample ROI scenario
            </h3>
            <p className="mt-2 text-xs text-slate-300 md:text-sm">
              A 500-bed hospital group modernizing biomedical maintenance and
              asset management with Davon.
            </p>

            <div className="mt-4 space-y-4 text-xs text-slate-200/90 md:text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                <div className="flex items-center justify-between">
                  <span>Annual maintenance spend</span>
                  <span className="font-semibold">$2.4M</span>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                <div className="flex items-center justify-between">
                  <span>Davon subscription & services</span>
                  <span className="font-semibold">$640K</span>
                </div>
              </div>
              <div className="rounded-2xl border border-sky-800 bg-sky-900/40 px-4 py-3">
                <div className="flex items-center justify-between">
                  <span>Estimated 3-year net benefit</span>
                  <span className="font-semibold text-sky-200">$1.7M</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Figures are illustrative and will vary by organization. Request
                a personalized ROI assessment based on your devices, processes,
                and spend profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


