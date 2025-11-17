import { Container } from "@/app/components/layout/Container";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization: string;
  metric: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "With Davon we finally see the same inventory truth from the ward to the boardroom. It has changed how we make decisions about supply and capacity.",
    name: "Dr. Selin A.",
    role: "Chief Medical Officer",
    organization: "Acıbadem Health System",
    metric: "30% fewer critical stockouts in periop",
  },
  {
    quote:
      "Our nurses no longer spend their breaks tracking down missing items. Davon gives them confidence that the supplies they need will be there.",
    name: "Mehmet K.",
    role: "Director of Nursing",
    organization: "Koç University Hospital",
    metric: "6 hours of nursing time saved per unit weekly",
  },
  {
    quote:
      "Davon let us unlock inventory sitting on shelves and redirect that capital into new services for patients.",
    name: "Elif D.",
    role: "VP Supply Chain",
    organization: "Regional Hospital Group",
    metric: "$1.2M in inventory value released in year one",
  },
];

export function SocialProofSection() {
  return (
    <section className="border-b border-slate-800 bg-slate-950 py-16">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Results
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Proven impact across complex healthcare environments.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            From academic centers to private groups, Davon helps operations,
            clinical, and finance teams align on a single source of truth.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <blockquote className="text-xs text-slate-200">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs text-slate-300">
                <div className="font-semibold text-slate-50">
                  {testimonial.name}
                </div>
                <div>
                  {testimonial.role}, {testimonial.organization}
                </div>
                <div className="mt-2 text-emerald-300">{testimonial.metric}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}


