import { AlertTriangle, DollarSign, FileX, Clock } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-red-50">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          The Hidden Crisis in Hospital Operations
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
          Every day, hospitals face critical operational challenges that threaten patient safety,
          drain budgets, and create compliance nightmares.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">
              Equipment Failures Risk Patient Safety
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Critical medical equipment like ventilators, infusion pumps, and defibrillators fail
              during emergency procedures. Unplanned downtime during code situations can be life-threatening.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">
              Millions in Lost Mobile Assets
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Wheelchairs, IV poles, and mobile equipment vanish from hospital floors daily.
              Replacing lost assets costs hospitals millions annually while creating safety hazards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
              <FileX className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">
              Failed Compliance Audits
            </h3>
            <p className="text-gray-600 leading-relaxed">
              TJC and CMS auditors demand detailed maintenance records and asset tracking.
              Chaotic paper-based systems make compliance nearly impossible to prove.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">
              Chaotic Maintenance Processes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Facility teams waste hours searching for equipment, chasing paperwork, and managing
              reactive repairs instead of focusing on patient care.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-red-600 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            Sound Familiar?
          </h3>
          <p className="text-lg leading-relaxed">
            These aren't just operational inefficiencies—they're patient safety risks,
            financial drains, and compliance liabilities that keep hospital leaders up at night.
          </p>
        </div>
      </div>
    </section>
  );
}
