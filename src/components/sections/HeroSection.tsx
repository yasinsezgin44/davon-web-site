import Image from "next/image";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Hospitals & clinics", value: "120+" },
  { label: "Devices monitored", value: "85k" },
  { label: "Average ROI in", value: "9 months" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/hero-background-base.png"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
        />
        <Image
          src="/hero-background-glow.png"
          alt=""
          fill
          priority
          className="object-cover mix-blend-screen opacity-70"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-20 md:flex-row md:items-center md:gap-16 md:px-8 md:pb-24 md:pt-24">
        <div className="max-w-xl">
          <p className="mb-4 inline-flex rounded-full border border-sky-400/40 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200/90">
            Cloud platform for healthcare operations
          </p>
          <h1 className="text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
            An intuitive cloud platform{" "}
            <span className="text-sky-300">to power your healthcare</span>
          </h1>
          <p className="mt-4 text-sm text-slate-200/90 md:text-base">
            Davon connects biomedical assets, maintenance processes, and
            operational data into a single cloud platform. Gain real-time
            visibility, streamline compliance, and keep critical equipment
            available when patients need it most.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="px-7">
              Schedule a demo
            </Button>
            <Button variant="outline" size="lg">
              Watch overview
            </Button>
          </div>

          <div className="mt-8 grid gap-4 text-xs text-slate-100/80 md:grid-cols-3 md:text-sm">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-sky-900/60 bg-slate-950/70 px-4 py-3 backdrop-blur"
              >
                <div className="text-xs uppercase tracking-wide text-sky-200/80">
                  {item.label}
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-72 w-full max-w-md md:h-80">
          <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-slate-900/80 blur-3xl" />
          <div className="relative flex h-full items-center justify-center rounded-[36px] border border-sky-400/40 bg-slate-950/80 p-6 backdrop-blur-xl">
            <div className="relative h-full w-full">
              <Image
                src="/home-circle.png"
                alt="Davon cloud operations visualization"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


