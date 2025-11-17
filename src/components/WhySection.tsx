export default function WhySection() {
  return (
    <section id="why" className="section-muted">
      <div className="container-narrow section-padding">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-6">
            Why Healthcare Institutions Choose Davon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine deep healthcare expertise with innovative technology to
            deliver solutions that prioritize patient safety while maximizing
            operational efficiency. From specialized CMMS capabilities to
            comprehensive asset management, we provide everything clinical
            engineering teams need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card card-hover p-8">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-red-600 rounded-md"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Patient Safety First
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our solutions ensure equipment reliability and compliance with
              healthcare standards. Every feature is designed with patient
              safety as the top priority, helping institutions maintain the
              highest standards of care.
            </p>
          </div>

          <div className="card card-hover p-8">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-red-600 rounded-md"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Operational Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Streamline maintenance processes, enable data-driven decisions,
              and simplify compliance with healthcare regulations. Our platform
              standardizes operations while providing the flexibility needed in
              healthcare environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
