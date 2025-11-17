import Image from "next/image";
import { Container } from "../layout/Container";

export function HeroSection() {
  return (
    <section
      id="platform"
      className="dv-section dv-section--hero relative overflow-hidden"
    >
      <Container>
        <div className="relative grid items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="dv-pill">
              <span className="dv-pill__dot" />
              <span>Cloud-based CMMS for healthcare providers</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Keep critical hospital equipment ready for every patient, every
                time.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Davon connects biomedical engineering, facilities, and clinical
                teams on a single maintenance platform – so work orders,
                compliance, and asset health are always under control.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-lg shadow-sky-500/50 transition hover:bg-sky-300"
              >
                Get a personalized demo
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-slate-500 hover:text-sky-300"
              >
                Talk to our team
              </a>
              <span className="text-xs text-slate-400">
                Go live in as little as{" "}
                <span className="font-semibold text-slate-200">6 weeks</span>.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div>
                <div className="dv-kpi-label">Unplanned downtime</div>
                <div className="dv-kpi-value text-emerald-400">-38%</div>
                <div className="dv-kpi-caption">
                  Average reduction in reactive work orders
                </div>
              </div>
              <div>
                <div className="dv-kpi-label">Work order response time</div>
                <div className="dv-kpi-value text-sky-400">2.1x</div>
                <div className="dv-kpi-caption">Faster acknowledgement</div>
              </div>
              <div>
                <div className="dv-kpi-label">Regulatory audits</div>
                <div className="dv-kpi-value text-amber-300">100%</div>
                <div className="dv-kpi-caption">
                  Of documentation in one place
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-4 bottom-0 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="dv-gradient-border">
              <div className="dv-card relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_100%_0,rgba(56,189,248,0.14),transparent_60%)]" />
                <div className="relative flex flex-col gap-4 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                      <span>Live asset health overview</span>
                    </div>
                    <span className="rounded-full bg-slate-900/70 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                      Davon CMMS
                    </span>
                  </div>

                  <div className="grid gap-4 text-xs sm:grid-cols-[1.1fr_minmax(0,1fr)]">
                    <div className="space-y-3 rounded-xl bg-slate-900/60 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[0.7rem] uppercase tracking-[0.14em] text-slate-400">
                          Critical equipment
                        </span>
                        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-300">
                          92% available
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[0.75rem] text-slate-200">
                          <span>Infusion pumps</span>
                          <span className="text-emerald-300">Stable</span>
                        </div>
                        <div className="flex items-center justify-between text-[0.75rem] text-slate-200">
                          <span>Ventilators</span>
                          <span className="text-emerald-300">Stable</span>
                        </div>
                        <div className="flex items-center justify-between text-[0.75rem] text-slate-200">
                          <span>OR tables</span>
                          <span className="text-amber-300">Attention</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 rounded-xl bg-slate-900/60 p-3">
                      <div className="flex items-center justify-between gap-3 text-[0.75rem] text-slate-300">
                        <span>Upcoming preventive tasks</span>
                        <span className="text-slate-400">Next 30 days</span>
                      </div>
                      <div className="space-y-2 text-[0.75rem] text-slate-200">
                        <div className="flex items-center justify-between">
                          <span>Biomedical</span>
                          <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-sky-300">
                            127
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Facilities</span>
                          <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-slate-200">
                            54
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>High priority</span>
                          <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-rose-300">
                            11
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-3 text-[0.7rem] text-slate-400">
                    <span>
                      Automatically routes work orders to the right teams.
                    </span>
                    <span className="hidden rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.65rem] text-sky-300 sm:inline">
                      Powered by Davon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 bottom-4 hidden h-40 w-40 opacity-90 sm:block">
              <Image
                src="/home-circle.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />
    </section>
  );
}
