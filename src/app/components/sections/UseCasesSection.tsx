import { Container } from "@/app/components/layout/Container";

type UseCase = {
  title: string;
  description: string;
  role: string;
};

const useCases: UseCase[] = [
  {
    title: "Perioperative services",
    description:
      "Guarantee implants, trays, and critical supplies are ready for every case, even when schedules change late.",
    role: "For OR & periop leaders",
  },
  {
    title: "Nursing & ward operations",
    description:
      "Give nurses back time by removing supply hunts and manual ordering from their day-to-day workflows.",
    role: "For nursing leadership",
  },
  {
    title: "Supply chain & finance",
    description:
      "Control working capital while protecting service levels, with a shared view of demand, stock, and spend.",
    role: "For supply chain & finance",
  },
];

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="border-b border-slate-800 bg-slate-950 py-16"
    >
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Use cases
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Built for the teams that keep hospitals running.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            Davon adapts to your existing systems and workflows, layering
            predictive intelligence on top of the tools you already use.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <div className="text-[11px] font-medium text-emerald-300">
                {useCase.role}
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                {useCase.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}


