import { Container } from "../layout/Container";

export function CTASection() {
  return (
    <section
      id="demo"
      className="dv-section bg-gradient-to-br from-sky-500/20 via-slate-950 to-slate-950"
    >
      <Container>
        <div className="dv-card relative overflow-hidden px-6 py-7 sm:px-8 sm:py-8">
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-sky-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="dv-section-heading">Let&apos;s get started</div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                See how Davon could work across your hospitals and clinics.
              </h2>
              <p className="max-w-xl text-sm text-slate-200">
                Share your current tools and maintenance challenges, and our
                team will tailor a demo to your environment – from asset
                onboarding to reporting and ROI.
              </p>
            </div>

            <div
              id="contact"
              className="w-full max-w-sm space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-xs text-slate-200"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold">Request a conversation</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[0.7rem] font-medium text-emerald-300">
                  30–45 minutes
                </span>
              </div>
              <p className="text-[0.75rem] text-slate-300">
                We&apos;ll follow up with a short questionnaire to understand
                your maintenance landscape before the session.
              </p>

              <div className="space-y-2">
                <div className="grid grid-cols-[1.1fr_1.2fr] gap-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-8 rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 text-[0.75rem] text-slate-100 placeholder:text-slate-500 focus:border-sky-400/70 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    className="h-8 rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 text-[0.75rem] text-slate-100 placeholder:text-slate-500 focus:border-sky-400/70 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Hospital or organization"
                  className="h-8 w-full rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 text-[0.75rem] text-slate-100 placeholder:text-slate-500 focus:border-sky-400/70 focus:outline-none"
                />
                <textarea
                  rows={2}
                  placeholder="What challenges are you looking to solve?"
                  className="w-full rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 py-1.5 text-[0.75rem] text-slate-100 placeholder:text-slate-500 focus:border-sky-400/70 focus:outline-none"
                />
              </div>

              <button className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-300">
                Submit request
              </button>
              <p className="text-[0.65rem] text-slate-500">
                By submitting, you agree to be contacted about Davon products
                and services. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


