import { TrendingUp, Users, Award } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-red-50">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Real Results from Real Hospitals
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
          See how our platform has transformed hospital operations across the country,
          delivering measurable improvements in patient safety, compliance, and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1: Facility Manager */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-6">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-black italic mb-6 text-lg leading-relaxed">
              &ldquo;Since implementing Davon&apos;s platform, our technical team has reduced critical
              work orders by 30% and passed our last two compliance audits with zero citations.
              The peace of mind this gives our patients and staff is invaluable.&rdquo;
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-red-600 font-semibold text-lg">
                Marcus Johnson
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Director of Facilities & Maintenance
              </p>
              <p className="text-gray-500 text-sm">
                St. Michael's Medical Center, Chicago
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-green-600">
              <span className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                30% fewer critical issues
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                100% audit compliance
              </span>
            </div>
          </div>

          {/* Testimonial 2: CFO */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-6">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-black italic mb-6 text-lg leading-relaxed">
              &ldquo;The ROI has been incredible. We&apos;ve eliminated $1.2 million in annual asset
              losses and reduced our maintenance budget by 25%. For the first time, we have complete
              visibility into our $50M equipment portfolio.&rdquo;
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-red-600 font-semibold text-lg">
                Dr. Jennifer Walsh
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Chief Financial Officer
              </p>
              <p className="text-gray-500 text-sm">
                Valley Regional Hospital, Phoenix
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-green-600">
              <span className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                $1.2M annual savings
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                25% cost reduction
              </span>
            </div>
          </div>

          {/* Testimonial 3: CIO */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-6">
              <Award className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-black italic mb-6 text-lg leading-relaxed">
              &ldquo;The integration was seamless, and the HIPAA compliance features give us complete
              confidence. Our nurses can now locate equipment instantly during codes, and our audit
              preparation time has dropped from 3 weeks to 3 hours.&rdquo;
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-red-600 font-semibold text-lg">
                Robert Martinez
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Chief Information Officer
              </p>
              <p className="text-gray-500 text-sm">
                University Medical Center, Boston
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-green-600">
              <span className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                90% faster audits
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                HIPAA compliant
              </span>
            </div>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Featured Case Study: Metro Health System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">The Challenge</h4>
                <p className="text-gray-600 mb-4">
                  Metro Health was losing $800K annually in missing equipment and failing
                  40% of their preventive maintenance schedules, risking patient safety.
                </p>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">The Solution</h4>
                <p className="text-gray-600">
                  Implemented Davon EAM platform across 1,200 medical devices and 15 departments.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">The Results</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Asset Loss Reduction:</span>
                    <span className="font-bold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Maintenance Compliance:</span>
                    <span className="font-bold text-green-600">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time to Equipment Location:</span>
                    <span className="font-bold text-green-600">&lt;30 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-bold text-green-600">340%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
