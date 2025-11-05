import Image from "next/image"; // Retained existing import; use if needed for logos/images

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter text-black animate-fadeIn">
      {/* Sticky CTA Bar - Tip 29 */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 z-40 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-sm font-semibold">
            Ready to streamline your hospital operations?
          </span>
          <a
            href="#contact"
            className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-red-50 transition-all"
          >
            Get Started Today
          </a>
        </div>
      </div>

      {/* Header - Black background, white text, red accents */}
      <header className="sticky top-8 z-50 bg-black shadow-md transition-all">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold text-white">Davon</div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-white hover:text-red-400 transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-red-400 transition-all"
              >
                About Davon
              </a>
            </li>
            <li>
              <a
                href="#why-choose"
                className="text-white hover:text-red-400 transition-all"
              >
                Why Choose Us?
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-white hover:text-red-400 transition-all"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#rd"
                className="text-white hover:text-red-400 transition-all"
              >
                R&amp;D
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-red-400 transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section - White background, black text, red CTA */}
      <section className="relative bg-white py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-red-100 opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-black">
            Empowering Hospital Operations with Cutting-Edge CMMS and EAM
            Solutions
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-black">
            At Davon Information Technologies, we specialize in robust solutions
            that streamline operations, boost efficiency, and elevate patient
            care standards.
          </p>
          <a
            href="#contact"
            className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* About Section - White background, black text, red accents */}
      <section id="about" className="py-24 bg-white transition-all">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-black">About Davon</h2>
          <p className="text-lg mb-12 max-w-2xl text-black">
            Davon enhances the operational efficiency of healthcare institutions
            and contributes to their success through the strength of its
            references.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                Brand Name
              </h3>
              <p className="text-black">Brand Short Description Type Here.</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                Brand Name
              </h3>
              <p className="text-black">Brand Short Description Type Here.</p>
            </div>
            {/* Add more as needed */}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Black background, white text */}
      <section
        id="why-choose"
        className="py-24 bg-black text-white transition-all"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Why Choose Us?</h2>
          <h3 className="text-3xl font-semibold mb-6">
            Güvenlikte Lider Çözümler
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Davon is always by your side for equipment efficiency and patient
            safety in healthcare institutions.
          </p>
          <p className="text-lg mb-12">
            We prepare your institution for the future, with over 20 years of
            experience in the healthcare industry.
          </p>
          <div className="flex justify-center space-x-8 text-red-400 text-6xl">
            🛡️ 🏥 ⚙️
          </div>
        </div>
      </section>

      {/* Features Section - White background, black text, red icons */}
      <section id="features" className="py-24 bg-white transition-all">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-black">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-red-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4 text-red-600">🛠️</div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Maintenance Management
              </h3>
              <p className="text-black">
                Davon's CMMS offers comprehensive solutions for healthcare
                maintenance processes.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4 text-red-600">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Enterprise Asset Management
              </h3>
              <p className="text-black">
                Optimize asset tracking and planning with efficient data
                management.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4 text-red-600">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Asset Tracking
              </h3>
              <p className="text-black">
                Simplify inventory and reduce losses in dynamic hospital
                environments.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4 text-red-600">💡</div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Technology Consultancy
              </h3>
              <p className="text-black">
                Expert guidance for implementing optimal technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Black background, white text */}
      <section className="py-24 bg-black text-white transition-all">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-red-900 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-3">
                01 Etkin Varlık Yönetimi
              </h3>
              <p>
                Optimize asset tracking and maintenance for peak efficiency.
              </p>
            </div>
            <div className="p-6 bg-red-900 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-3">
                02 Operasyonel Verimlilik
              </h3>
              <p>Streamline work orders, stock, and supplier management.</p>
            </div>
            <div className="p-6 bg-red-900 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-3">
                03 Analitik ve Raporlama
              </h3>
              <p>
                Analyze data for informed decisions and continuous improvement.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition">
              Enhance Patient Safety
            </div>
            <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition">
              Increase Equipment Uptime
            </div>
            <div className="bg-red-900 p-6 rounded-xl shadow hover:scale-105 transition">
              Boost Organization Productivity
            </div>
            {/* Add more */}
          </div>
        </div>
      </section>

      {/* Stats Section - White background, black text, red numbers */}
      <section className="py-24 bg-white text-center transition-all">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-black">
            Globally Reliable Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="transform hover:scale-110 transition">
              <div className="text-5xl font-bold text-red-600">20+</div>
              <p className="text-black">Years Experience</p>
            </div>
            <div className="transform hover:scale-110 transition">
              <div className="text-5xl font-bold text-red-600">1000</div>
              <p className="text-black">Technical Users</p>
            </div>
            <div className="transform hover:scale-110 transition">
              <div className="text-5xl font-bold text-red-600">15K+</div>
              <p className="text-black">Beds</p>
            </div>
            <div className="transform hover:scale-110 transition">
              <div className="text-5xl font-bold text-red-600">400K+</div>
              <p className="text-black">Assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Black background, white text, red button */}
      <section className="py-24 bg-black text-white text-center transition-all">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Sign Up for Our Newsletter!
          </h2>
          <p className="text-lg mb-10">
            Stay updated with the latest news and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-4 rounded-l-full border border-white bg-transparent text-white"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-4 rounded-r-full font-semibold hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer - Black background, white text */}
      <footer id="contact" className="bg-black text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Davon</h3>
            <p>
              Davon aims to enhance patient safety, improve efficiency, and
              achieve operational excellence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-400 transition-all">
                  Home Page
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-all">
                  About Davon
                </a>
              </li>
              {/* Add more */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="hover:text-red-400 transition-all"
                >
                  Davon CMMS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>
              İzmir Teknoloji Geliştirme Bölgesi A3 Binası No:16/A İYTE Kampüsü
              Gülbahçe, Urla/İzmir
            </p>
            <p>+90 (232) 765 90 30</p>
            <p>info@davon.com.tr</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          © Copyright Davon. All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
