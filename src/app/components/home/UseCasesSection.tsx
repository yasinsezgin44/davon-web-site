import { Container } from "../layout/Container";
import { SectionHeader } from "../layout/SectionHeader";

const useCases = [
  {
    role: "Biomedical engineering",
    summary: "Stay ahead of critical equipment failures.",
    details: [
      "Visualize upcoming preventive tasks by risk and location",
      "Capture test results and service reports on any device",
      "Automate escalations for overdue high‑risk work orders",
    ],
  },
  {
    role: "Facilities & operations",
    summary: "Coordinate maintenance without disrupting care.",
    details: [
      "Align work orders with operating room and clinic schedules",
      "Track vendor performance and service-level agreements",
      "Connect facilities and biomedical maintenance in one queue",
    ],
  },
  {
    role: "Executive & quality teams",
    summary: "Turn maintenance data into strategic decisions.",
    details: [
      "Monitor key KPIs like downtime, backlog, and coverage",
      "Quantify the cost of aging equipment and rentals",
      "Prove compliance with always-on audit dashboards",
    ],
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="dv-section border-y border-slate-800/80">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Use cases"
            title="Built for the teams that keep hospitals running."
            lead="Davon brings together everyone responsible for keeping equipment safe, compliant, and available – from technicians on the floor to leadership reviewing performance."
          />

          <div className="dv-grid md:dv-grid--3">
            {useCases.map((useCase) => (
              <article
                key={useCase.role}
                className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4"
              >
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {useCase.role}
                  </h3>
                  <p className="text-xs text-slate-300">{useCase.summary}</p>
                </div>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  {useCase.details.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[0.3rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


