import { Container } from "../layout/Container";
import { SectionHeader } from "../layout/SectionHeader";

const featureGroups = [
  {
    title: "Maintenance Management",
    description:
      "Digitize every work order, schedule, and checklist in a CMMS tailored for healthcare environments.",
    points: [
      "Centralize work orders from biomedical, facilities, and IT",
      "Standardize preventive maintenance plans by asset category",
      "Track completion rates and SLA performance in real time",
    ],
  },
  {
    title: "Compliance & Audit Readiness",
    description:
      "Be inspection-ready every day with a complete history of work performed on critical equipment.",
    points: [
      "Maintain a full digital audit trail by asset and location",
      "Attach test results, manuals, and certificates in one place",
      "Export documentation for regulators in a few clicks",
    ],
  },
  {
    title: "Asset Intelligence",
    description:
      "See the true health and cost of your equipment to inform replacement, rental, and service decisions.",
    points: [
      "Monitor downtime and availability by asset class",
      "Analyze maintenance cost vs. asset value over time",
      "Identify high-risk equipment before it impacts patients",
    ],
  },
];

const detailBlocks = [
  {
    id: "features",
    eyebrow: "Designed for clinical reality",
    title: "From ad-hoc tickets to orchestrated maintenance workflows.",
    body: "Most CMMS tools were built for factories, not hospitals. Davon connects biomedical engineering, facilities, and clinical teams in a shared workflow – aligning work orders, priorities, and documentation around the patient journey.",
    highlights: [
      "Configurable workflows for planned and corrective maintenance",
      "Role-based views for technicians, supervisors, and leadership",
      "Fine-grained permissions and audit logs across every action",
    ],
  },
  {
    id: "rd",
    eyebrow: "Built with healthcare R&D partners",
    title: "Co-developed with leading hospitals and technology providers.",
    body: "Davon’s roadmap is shaped alongside healthcare innovators, bringing together biomedical expertise, software engineering, and regulatory know-how into a single product.",
    highlights: [
      "Joint R&D initiatives with healthcare and medtech partners",
      "Continuous delivery of new features without disruptive upgrades",
      "API-first architecture to integrate with your existing stack",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section className="dv-section">
      <Container>
        <div className="space-y-12">
          <div
            id="about"
            className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,1fr)]"
          >
            <div id="features">
              <SectionHeader
                eyebrow="Platform overview"
                title="Everything your maintenance teams need in one platform."
                lead="Replace siloed spreadsheets and legacy tools with a cloud-based CMMS built specifically for hospitals and healthcare systems."
              />
            </div>

            <div className="dv-grid md:dv-grid--3">
              {featureGroups.map((group) => (
                <article
                  key={group.title}
                  className="space-y-3 rounded-2xl border border-slate-800/70 bg-slate-950/50 p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-50">
                    {group.title}
                  </h3>
                  <p className="text-xs text-slate-300">{group.description}</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {group.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[0.35rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {detailBlocks.map((block) => (
              <div
                key={block.id}
                id={block.id}
                className="grid items-start gap-8 rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:p-8"
              >
                <div className="space-y-4">
                  <div className="dv-section-heading">{block.eyebrow}</div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                    {block.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {block.body}
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {block.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/80 p-3 text-xs"
                    >
                      <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


