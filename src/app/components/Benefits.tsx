import { Heart, DollarSign, CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Measurable Benefits for Your Hospital
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
        <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
          Our platform delivers tangible outcomes across two critical areas that matter most to hospital leadership.
        </p>

        {/* Two Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Pillar 1: Patient Safety & Compliance */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-black">
              Patient Safety & Compliance
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Protect patients and ensure regulatory compliance with advanced asset management technology.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2">Locate Critical Equipment in Seconds</h4>
                  <p className="text-gray-600">Find ventilators, infusion pumps, and defibrillators instantly during emergencies, preventing life-threatening delays.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2">Guarantee Equipment Compliance</h4>
                  <p className="text-gray-600">Ensure life-saving equipment like MRIs and sterilizers are always compliant and ready for patient use.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2">Create Defensible Audit Trails</h4>
                  <p className="text-gray-600">Generate instant, comprehensive reports for TJC/CMS auditors with complete maintenance history.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Financial & Operational Efficiency */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-black">
              Financial & Operational Efficiency
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Maximize ROI and operational performance with data-driven asset management insights.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2">Stop Losing Millions in Mobile Assets</h4>
                  <p className="text-gray-600">Eliminate the $2.8M average annual loss from missing wheelchairs, IV poles, and medical equipment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2">Cut Unplanned Equipment Downtime</h4>
                  <p className="text-gray-600">Reduce emergency repairs and maintenance costs with predictive maintenance scheduling.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2">Make Data-Driven Capital Decisions</h4>
                  <p className="text-gray-600">Identify your most costly and unreliable assets to optimize capital budgeting and ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-red-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">
            Proven Results Across Hospitals Nationwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$2.8M</div>
              <div className="text-red-100">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98.7%</div>
              <div className="text-red-100">Equipment Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-red-100">Reduction in Lost Assets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25hrs</div>
              <div className="text-red-100">Weekly Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
