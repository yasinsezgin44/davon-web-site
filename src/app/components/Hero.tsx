export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-red-50 to-white py-40 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-red-100 opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none text-black uppercase tracking-tight">
          EMPOWERING HOSPITAL
          <br />
          <span className="text-red-600">OPERATIONS</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-700">
          Cutting-Edge CMMS & EAM Solutions
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-12 max-w-4xl mx-auto text-gray-600 leading-relaxed">
          At Davon Information Technologies, we specialize in robust solutions
          that streamline operations, boost efficiency, and elevate patient
          care standards across healthcare institutions worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-red-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-red-700 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
          >
            Get Started Today
          </a>
          <span className="text-sm text-gray-500 italic">
            Won&apos;t take more than 2 minutes
          </span>
        </div>
      </div>
    </section>
  );
}
