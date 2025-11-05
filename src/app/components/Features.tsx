import { Wrench, BarChart3, Search, Lightbulb } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-white transition-all relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-50 to-transparent"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Our Features
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          Discover the comprehensive capabilities that make Davon the leading
          choice for healthcare facility management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group min-h-[280px] flex flex-col">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors">
                Maintenance Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Davon&apos;s CMMS offers comprehensive solutions for
                healthcare maintenance processes with advanced automation.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group min-h-[280px] flex flex-col">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors">
                Enterprise Asset Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize asset tracking and planning with efficient data
                management and predictive analytics.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group min-h-[280px] flex flex-col">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors">
                Asset Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Simplify inventory and reduce losses in dynamic hospital
                environments with real-time tracking.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group min-h-[280px] flex flex-col">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors">
                Technology Consultancy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance for implementing optimal technology solutions
                tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
