import { Search, Smartphone, BarChart3, CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-red-50">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          How It Works: 4 Simple Steps to Operational Excellence
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
          Our platform transforms chaotic maintenance processes into streamlined,
          efficient operations that protect patients and optimize your hospital's performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Step 1: Identify & Track */}
          <div className="relative">
            <div className="bg-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow min-h-[320px] flex flex-col">
              <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-4">1</div>
              <h3 className="text-xl font-bold mb-4 text-black">
                Identify & Track
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Tag every asset with QR codes or RFID. Know exactly where your equipment is at all times.
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg border-2 border-red-200">
                <div className="text-sm text-gray-500 mb-2">Example:</div>
                <div className="text-red-600 font-semibold">Infusion Pump #IP-247</div>
                <div className="text-sm text-gray-600">Location: Room 312 • Status: Available</div>
              </div>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-red-600" />
            </div>
          </div>

          {/* Step 2: Automate Maintenance */}
          <div className="relative">
            <div className="bg-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow min-h-[320px] flex flex-col">
              <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-4">2</div>
              <h3 className="text-xl font-bold mb-4 text-black">
                Automate Maintenance
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Schedule preventive maintenance automatically. Work orders appear instantly on technician tablets.
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg border-2 border-green-200">
                <div className="text-sm text-gray-500 mb-2">Work Order Generated:</div>
                <div className="text-green-600 font-semibold">MRI Maintenance Due</div>
                <div className="text-sm text-gray-600">Assigned to: Tech Team • Priority: High</div>
              </div>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-green-600" />
            </div>
          </div>

          {/* Step 3: Analyze & Optimize */}
          <div className="relative">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow min-h-[320px] flex flex-col">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-600 mb-4">3</div>
              <h3 className="text-xl font-bold mb-4 text-black">
                Analyze & Optimize
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Get real-time insights on asset performance, costs, and utilization to make data-driven decisions.
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg border-2 border-gray-200">
                <div className="text-sm text-gray-500 mb-2">Dashboard Insights:</div>
                <div className="text-gray-600 font-semibold">$127K Annual Savings</div>
                <div className="text-sm text-gray-600">98.7% Equipment Uptime • ROI: 340%</div>
              </div>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-gray-600" />
            </div>
          </div>

          {/* Step 4: Prove Compliance */}
          <div className="relative">
            <div className="bg-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow min-h-[320px] flex flex-col">
              <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-4">4</div>
              <h3 className="text-xl font-bold mb-4 text-black">
                Prove Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Generate instant audit reports with complete maintenance history and compliance documentation.
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg border-2 border-red-200">
                <div className="text-sm text-gray-500 mb-2">Audit Report:</div>
                <div className="text-red-600 font-semibold flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  TJC Compliance: PASSED
                </div>
                <div className="text-sm text-gray-600">All 247 assets compliant • 0 violations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-red-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Hospital Operations?
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Join hundreds of hospitals already using our platform to eliminate chaos,
            ensure compliance, and focus on what matters most: patient care.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all"
          >
            Get Your Demo Today
          </a>
        </div>
      </div>
    </section>
  );
}
