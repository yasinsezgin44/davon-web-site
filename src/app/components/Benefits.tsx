import { CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section className="py-24 bg-black text-white transition-all">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Benefits</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 text-red-200">
              01 Etkin Varlık Yönetimi
            </h3>
            <p className="text-gray-200">
              Optimize asset tracking and maintenance for peak efficiency.
            </p>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 text-red-200">
              02 Operasyonel Verimlilik
            </h3>
            <p className="text-gray-200">
              Streamline work orders, stock, and supplier management.
            </p>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3 text-red-200">
              03 Analitik ve Raporlama
            </h3>
            <p className="text-gray-200">
              Analyze data for informed decisions and continuous improvement.
            </p>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
            <CheckCircle className="w-8 h-8 mb-3 text-red-300" />
            <span className="text-white font-semibold">
              Enhance Patient Safety
            </span>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
            <CheckCircle className="w-8 h-8 mb-3 text-red-300" />
            <span className="text-white font-semibold">
              Increase Equipment Uptime
            </span>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
            <CheckCircle className="w-8 h-8 mb-3 text-red-300" />
            <span className="text-white font-semibold">
              Boost Organization Productivity
            </span>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
            <CheckCircle className="w-8 h-8 mb-3 text-red-300" />
            <span className="text-white font-semibold">
              Decrease Maintenance Costs
            </span>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
            <CheckCircle className="w-8 h-8 mb-3 text-red-300" />
            <span className="text-white font-semibold">
              Plan Your Preventive Maintenance
            </span>
          </div>
          <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
            <CheckCircle className="w-8 h-8 mb-3 text-red-300" />
            <span className="text-white font-semibold">
              Make Decisions Based on Your Data
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
