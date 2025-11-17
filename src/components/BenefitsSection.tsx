export default function BenefitsSection() {
  const benefits = [
    {
      number: "01",
      title: "Effective Asset Management",
      description:
        "Track assets across your facilities with ease, optimize maintenance schedules, and increase overall equipment effectiveness through intelligent lifecycle management.",
    },
    {
      number: "02",
      title: "Operational Efficiency",
      description:
        "Streamline work orders, inventory management, and supplier relationships to boost operational efficiency and reduce administrative overhead.",
    },
    {
      number: "03",
      title: "Analytics & Reporting",
      description:
        "Transform operational data into actionable insights with comprehensive analytics and reporting capabilities that drive informed decision-making.",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-6">
            Simplify Hospital Management with Davon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform complex hospital operations into streamlined, efficient
            processes. Our comprehensive solutions help healthcare institutions
            achieve operational excellence while maintaining the highest
            standards of patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="card card-hover p-8 text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-red-600">
                  {benefit.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
