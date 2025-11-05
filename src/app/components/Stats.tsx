export default function Stats() {
  return (
    <section className="py-24 bg-white text-center transition-all">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Globally Reliable Solutions
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center transform hover:scale-110 transition-all">
            <div className="text-6xl font-bold text-red-600 mb-2">20+</div>
            <p className="text-black font-semibold">Years Experience</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-all">
            <div className="text-6xl font-bold text-red-600 mb-2">1000</div>
            <p className="text-black font-semibold">Technical Users</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-all">
            <div className="text-6xl font-bold text-red-600 mb-2">15K+</div>
            <p className="text-black font-semibold">Beds</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-all">
            <div className="text-6xl font-bold text-red-600 mb-2">400K+</div>
            <p className="text-black font-semibold">Assets</p>
          </div>
        </div>
      </div>
    </section>
  );
}
