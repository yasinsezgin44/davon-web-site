import { Shield, Zap, BarChart3, CheckCircle } from "lucide-react";

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-red-50">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          The Complete Solution: Enterprise Asset Management
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
          Our Enterprise Asset Management platform gives you the power to connect, track, and maintain
          every asset in your hospital—from procurement and maintenance to financial planning and disposal.
        </p>

        {/* CMMS vs EAM Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
              <Zap className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">
              CMMS: The Maintenance Engine
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A powerful system to manage all your maintenance tasks, work orders, and spare parts inventory.
            </p>
            <p className="text-red-600 font-semibold">
              Keeps your critical equipment (like MRIs and sterilizers) running and compliant.
            </p>
          </div>

          <div className="bg-red-600 p-8 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-6">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              EAM: The Hospital Command Center
            </h3>
            <p className="text-red-100 mb-4 leading-relaxed">
              A total solution to manage the entire lifecycle of all your hospital assets, from purchase and maintenance to financial planning and disposal.
            </p>
            <p className="text-white font-bold">
              Gives you a complete financial and operational view of your assets to maximize patient safety and ROI.
            </p>
          </div>
        </div>

        {/* How it solves the problems */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-3xl font-bold mb-8 text-black">
            How Our EAM Platform Solves Your Biggest Challenges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-lg mb-2">Eliminates Lost Assets</h4>
                <p className="text-gray-600">Real-time tracking prevents equipment disappearance and enables instant location during emergencies.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-lg mb-2">Prevents Equipment Failures</h4>
                <p className="text-gray-600">Predictive maintenance ensures critical equipment is always ready when patients need it most.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-lg mb-2">Guarantees Compliance</h4>
                <p className="text-gray-600">Automated documentation and audit trails make TJC/CMS compliance effortless and provable.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-lg mb-2">Reduces Administrative Burden</h4>
                <p className="text-gray-600">Digital workflows eliminate paperwork and give your team time back for patient care.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition to How It Works */}
        <div className="bg-red-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            Ready to See How It Works?
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Our platform transforms chaotic maintenance processes into streamlined, efficient operations
            that protect patients and optimize your hospital's performance.
          </p>
          <a
            href="#how-it-works"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all"
          >
            Explore How It Works →
          </a>
        </div>
      </div>
    </section>
  );
}
