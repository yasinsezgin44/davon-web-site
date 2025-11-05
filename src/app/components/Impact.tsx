import { TrendingDown, AlertTriangle, DollarSign, Clock } from "lucide-react";

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The Real Cost of Operational Chaos
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          These operational challenges don't just create headaches—they represent millions in lost revenue,
          patient safety risks, and compliance liabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-red-600">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-red-400">
              $2.8M
            </h3>
            <h4 className="text-xl font-semibold mb-4">
              Average Annual Asset Loss Per Hospital
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Mobile medical equipment disappears from hospital floors, requiring expensive replacements
              while creating immediate safety hazards for patients.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-red-600">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-red-400">
              40%
            </h3>
            <h4 className="text-xl font-semibold mb-4">
              Critical Equipment Downtime Reduction Needed
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Failed preventive maintenance leads to critical equipment breakdowns during
              emergency procedures, putting patient lives at risk.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-red-600">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mx-auto mb-6">
              <TrendingDown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-red-400">
              $500K+
            </h3>
            <h4 className="text-xl font-semibold mb-4">
              Cost of Failed Compliance Audits
            </h4>
            <p className="text-gray-300 leading-relaxed">
              TJC and CMS audit failures result in fines, remediation costs, and reputational damage
              that can exceed half a million dollars per incident.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-red-600">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-red-400">
              25 Hours
            </h3>
            <h4 className="text-xl font-semibold mb-4">
              Weekly Administrative Burden Per Facility Manager
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Staff spend an entire workday each week on paperwork, manual tracking, and
              reactive maintenance instead of patient care.
            </p>
          </div>
        </div>

        <div className="bg-red-600 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            The Hidden Multiplier Effect
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            These costs compound: lost equipment creates safety risks, failed audits trigger fines,
            and administrative burden reduces staff effectiveness. The result? A vicious cycle
            that drains hospital budgets and jeopardizes patient care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">↓ 30%</div>
              <div className="text-sm">Staff Productivity</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">↑ 45%</div>
              <div className="text-sm">Patient Safety Incidents</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">↑ 60%</div>
              <div className="text-sm">Compliance Audit Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
