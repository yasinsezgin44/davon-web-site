export default function About() {
  return (
    <section id="about" className="py-24 bg-white transition-all">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          About Davon
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <div className="md:columns-2 gap-12 mb-16 text-left">
          <p className="text-lg mb-6 text-black leading-relaxed">
            Davon enhances the operational efficiency of healthcare
            institutions and contributes to their success through the strength
            of its references and proven track record.
          </p>
          <p className="text-lg text-black leading-relaxed">
            Our commitment to innovation and excellence has made us a trusted
            partner for hospitals worldwide, delivering solutions that save
            time, reduce costs, and improve patient outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-red-50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 min-h-[140px] flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-3 text-red-600">
              Innovation
            </h3>
            <p className="text-black">
              Cutting-edge technology solutions tailored for healthcare.
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 min-h-[140px] flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-3 text-red-600">
              Reliability
            </h3>
            <p className="text-black">
              20+ years of proven expertise in healthcare operations.
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 min-h-[140px] flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-3 text-red-600">
              Partnership
            </h3>
            <p className="text-black">
              Dedicated support and ongoing relationship building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
