function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="card card-hover p-8">
      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A complete suite of healthcare-specific solutions designed to
            streamline maintenance, optimize asset management, and ensure
            operational excellence across your entire institution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            title="Maintenance Management (CMMS)"
            description="Complete maintenance management system designed specifically for healthcare, improving equipment reliability, response times, and compliance with medical standards."
            icon="🔧"
          />
          <FeatureCard
            title="Enterprise Asset Management (EAM)"
            description="Optimize asset lifecycles with comprehensive EAM solutions. Track all assets efficiently and get critical data for maintenance planning and strategic decisions."
            icon="📊"
          />
          <FeatureCard
            title="Asset Tracking"
            description="Real-time tracking of mobile medical equipment. Simplify inventory management, reduce losses, and ensure critical devices are always available when needed."
            icon="📍"
          />
          <FeatureCard
            title="Technology Consultancy"
            description="Expert consulting services to navigate complex healthcare technology needs. We help identify and implement solutions for sustainable operational excellence."
            icon="💡"
          />
        </div>
      </div>
    </section>
  );
}
