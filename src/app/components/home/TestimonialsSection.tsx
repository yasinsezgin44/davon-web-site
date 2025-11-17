import { Container } from "../layout/Container";
import { SectionHeader } from "../layout/SectionHeader";

const testimonials = [
  {
    quote:
      "With Davon we finally see the full picture of our equipment – what is available, what is in service, and where we are at risk. It has transformed how our teams collaborate.",
    name: "Head of Biomedical Engineering",
    org: "University Teaching Hospital",
    stat: "38% fewer high‑priority breakdowns in year one",
  },
  {
    quote:
      "Regulatory audits used to mean weeks of chasing paper. Now every inspection report, certificate, and work order is a few clicks away.",
    name: "Quality & Compliance Director",
    org: "Regional Hospital Network",
    stat: "100% of maintenance documentation in one system of record",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="dv-section border-y border-slate-800/80 bg-slate-950/70"
    >
      <Container>
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Customer stories"
            title="Hospitals that treat maintenance as mission-critical choose Davon."
            lead="From single hospitals to multi-site networks, Davon becomes the operating system for maintenance, compliance, and asset intelligence."
            align="center"
          />

          <div className="dv-grid md:dv-grid--2">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5"
              >
                <p className="text-sm leading-relaxed text-slate-50">
                  “{item.quote}”
                </p>
                <figcaption className="space-y-1 text-xs text-slate-300">
                  <div className="font-semibold text-slate-100">
                    {item.name}
                  </div>
                  <div className="text-slate-400">{item.org}</div>
                  <div className="text-[0.7rem] text-sky-300">{item.stat}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


