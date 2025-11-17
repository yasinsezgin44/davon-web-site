export default function StatsAndRoiSection() {
  const roiItems = [
    {
      label: "Maintenance cost reduction",
      value: "18%",
    },
    {
      label: "Unplanned downtime saved / year",
      value: "240h",
    },
    {
      label: "Work order response faster",
      value: "30%",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <div className="pill mb-6">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            <span>ROI Calculator</span>
          </div>
          <h2 className="text-balance mb-6">
            Measure Your Return on Smarter Maintenance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Digitizing maintenance and asset management with Davon delivers
            measurable improvements in efficiency, cost savings, and equipment
            reliability. Calculate your potential ROI using these industry
            benchmarks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ROI Metrics */}
          <div>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {roiItems.map((item, index) => (
                <div key={item.label} className="card p-6 text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {item.value}
                  </div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                *Based on average improvements across Davon healthcare clients
              </p>
            </div>
          </div>

          {/* ROI Calculator Card */}
          <div className="card p-8 bg-gradient-to-br from-red-50 to-white border-red-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Sample Annual Impact for a 300-Bed Hospital
            </h3>

            <div className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">
                  Estimated maintenance budget
                </span>
                <span className="font-bold text-gray-900">€750,000</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-red-200">
                <span className="text-red-700 font-medium">
                  Potential savings with Davon
                </span>
                <span className="font-bold text-red-600">€135,000/year</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">
                  Reduced unplanned downtime
                </span>
                <span className="font-bold text-gray-900">240 hours/year</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">ROI timeframe</span>
                <span className="font-bold text-gray-900">12-18 months</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-100 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Note:</strong> These calculations are based on industry
                averages. Davon provides custom ROI analysis for each
                institution based on your specific operational data and
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
