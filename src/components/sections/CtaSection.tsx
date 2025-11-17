import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 py-14 md:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
          See Davon in action
        </h2>
        <p className="mt-3 text-balance text-2xl font-semibold text-white md:text-3xl">
          Discover how Davon can support your healthcare operations.
        </p>
        <p className="mt-3 text-sm text-slate-300 md:text-base">
          Share your current challenges and systems, and we&apos;ll prepare a
          tailored walkthrough of Davon built around your devices, teams, and
          processes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" className="px-7">
            Schedule a demo
          </Button>
          <Button variant="outline" size="lg">
            Talk to an expert
          </Button>
        </div>
      </div>
    </section>
  );
}


