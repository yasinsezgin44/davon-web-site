export default function ExcellenceSection() {
  const excellenceItems = [
    "Enhance patient safety with meticulously tracked medical equipment.",
    "Increase equipment uptime through real-time monitoring and alerts.",
    "Boost technical team productivity with streamlined maintenance workflows.",
    "Control maintenance costs via optimized inventory and preventive plans.",
  ];

  return (
    <section id="rd" className="section-muted">
      <div className="container-narrow section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-balance mb-6">
                Step into Operational Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Managing complex hospital operations doesn't have to be
                  overwhelming. Our integrated platform simplifies asset
                  management, work order processing, and maintenance
                  coordination to ensure maximum uptime for critical equipment.
                </p>
                <p>
                  With powerful analytics and risk-based prioritization, you can
                  make data-driven decisions that continuously improve
                  performance and patient safety across all your facilities.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {excellenceItems.map((item, index) => (
              <div key={item} className="card p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
