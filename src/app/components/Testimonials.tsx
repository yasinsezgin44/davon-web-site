export default function Testimonials() {
  return (
    <section className="py-24 bg-white transition-all">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-black italic mb-4 text-lg">
              &ldquo;Davon&apos;s solutions have transformed our hospital&apos;s maintenance
              efficiency.&rdquo;
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-red-600 font-semibold text-base">
                Dr. Sarah Smith
              </p>
              <p className="text-gray-600 text-sm">
                Hospital Director, City General Hospital
              </p>
              <p className="text-gray-500 text-xs mt-1">March 2024</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-black italic mb-4 text-lg">
              &ldquo;Reliable and innovative technology for healthcare operations.&rdquo;
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-red-600 font-semibold text-base">
                Michael Chen
              </p>
              <p className="text-gray-600 text-sm">
                IT Manager, Regional Medical Center
              </p>
              <p className="text-gray-500 text-xs mt-1">January 2024</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-black italic mb-4 text-lg">
              &ldquo;Exceptional support and cutting-edge CMMS systems.&rdquo;
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-red-600 font-semibold text-base">
                Emily Rodriguez
              </p>
              <p className="text-gray-600 text-sm">
                Operations Lead, University Hospital
              </p>
              <p className="text-gray-500 text-xs mt-1">February 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
