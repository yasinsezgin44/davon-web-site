import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import { Footer } from "@/components/footer";
import Aurora from "@/components/Aurora";
import "@/components/Aurora.css";

// Generate comprehensive structured data for About page
const generateStructuredData = () => {
  return [
    // AboutPage Schema
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Davon.Health - Healthcare Technology Innovation",
      description:
        "Learn about Davon.Health&apos;s mission to revolutionize healthcare operations through AI-powered predictive maintenance and equipment monitoring solutions.",
      url: "https://davon.health/about-davon",
      mainEntity: {
        "@type": "Organization",
        name: "Davon.Health",
        description:
          "AI-powered healthcare equipment monitoring and predictive maintenance platform for hospitals and healthcare facilities.",
        foundingDate: "2024",
        industry: "Healthcare Technology",
        url: "https://davon.health",
        logo: "https://davon.health/logo-white.webp",
      },
      datePublished: "2025-11-24",
      dateModified: "2025-11-24",
      publisher: {
        "@type": "Organization",
        name: "Davon.Health",
      },
    },
  ];
};

export const metadata = {
  title: "About Davon.Health - 20+ Years Healthcare Technology Excellence",
  description:
    "Discover Davon.Health&apos;s mission to transform healthcare operations with AI-powered predictive maintenance. Learn about our 20+ years of experience in healthcare-specific solutions.",
  keywords: [
    "about Davon.Health",
    "healthcare technology company",
    "predictive maintenance healthcare",
    "medical equipment monitoring",
    "healthcare innovation",
  ],
  openGraph: {
    title: "About Davon.Health - Healthcare Technology Excellence",
    description:
      "Learn about our mission to revolutionize healthcare operations through AI-powered predictive maintenance.",
    url: "https://davon.health/about-davon",
    siteName: "Davon.Health",
    images: [
      {
        url: "/logo-white.webp",
        width: 1200,
        height: 630,
        alt: "Davon.Health - About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Davon.Health - Healthcare Technology Excellence",
    description:
      "Learn about our mission to revolutionize healthcare operations through AI-powered predictive maintenance.",
    images: ["/logo-white.webp"],
  },
  alternates: {
    canonical: "/about-davon",
  },
};

export default function AboutPage() {
  const structuredData = generateStructuredData();

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={data["@type"] + index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}

      <main className="min-h-screen relative overflow-hidden">
        {/* Aurora background effect */}
        <div className="fixed inset-0 w-full h-full z-10 pointer-events-none">
          <Aurora
            colorStops={["#DC2626", "#B91C1C", "#7F1D1D"]}
            amplitude={1.2}
            blend={0.6}
            speed={0.8}
          />
        </div>

        {/* Page content above aurora */}
        <div className="relative z-20">
          <GlassmorphismNav />

          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
            {/* Background Image Placeholder - Replace with AI generated image */}
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full bg-black/50"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                About Davon.Health
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
                <span className="text-white">20+ Years of</span>
                <br />
                <span className="text-white">Healthcare Excellence</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-xl md:text-2xl text-white/80 text-balance max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 font-light">
                We are here to support you for better healthcare services. With our experience and innovative approach, we develop, improve, and carry your institution into the future.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16 sm:py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
                  We Prioritize Patient Safety
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                  Davon provides innovative solutions to shape the future of healthcare institutions, ensuring they deliver operational excellence to their patients.
                </p>
              </div>

              {/* Image Placeholder 1 - Hero/Team Image */}
              <div className="mb-16 sm:mb-24">
                <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <div className="text-4xl mb-4">🖼️</div>
                      <p className="text-lg">AI Generated Image Placeholder</p>
                      <p className="text-sm">Team/Innovation/Technology Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Principles Section */}
          <section className="py-16 sm:py-24 px-4 relative z-10 bg-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
                  Our Core Principles
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                  The foundation of our commitment to healthcare excellence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Technology */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technology</h3>
                  <p className="text-white/70 leading-relaxed">
                    Our commitment to innovation and technology ensures that healthcare institutions are prepared for the future.
                  </p>
                </div>

                {/* Healthcare Focus */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Healthcare Focus</h3>
                  <p className="text-white/70 leading-relaxed">
                    We emphasize understanding our customers&apos; needs and delivering value to them through healthcare-specific solutions.
                  </p>
                </div>

                {/* Reliability */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Reliability</h3>
                  <p className="text-white/70 leading-relaxed">
                    Davon earns and maintains customer trust by providing reliable solutions and services.
                  </p>
                </div>

                {/* Global Impact */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Global Impact</h3>
                  <p className="text-white/70 leading-relaxed">
                    Davon&apos;s global presence enables healthcare institutions to achieve operational excellence everywhere.
                  </p>
                </div>

                {/* Expertise */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Expertise</h3>
                  <p className="text-white/70 leading-relaxed">
                    With over 20 years of experience, our expert team delivers tailored solutions for healthcare institutions&apos; needs.
                  </p>
                </div>

                {/* Sustainability */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Sustainability</h3>
                  <p className="text-white/70 leading-relaxed">
                    Davon supports the long-term success of both healthcare institutions and the environment through sustainable business practices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Image Placeholder 2 - Innovation/Technology Image */}
          <section className="py-16 sm:py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-white/10 mb-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/60">
                    <div className="text-4xl mb-4">🚀</div>
                    <p className="text-lg">AI Generated Image Placeholder</p>
                    <p className="text-sm">Innovation/Technology/AI Solutions Image</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="py-16 sm:py-24 px-4 relative z-10 bg-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
                  Our Roadmap
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                  Technological and innovative solutions to transform the future
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Vision */}
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white/70 leading-relaxed">
                    As Davon, we adopt a visionary approach to provide innovative solutions that ensure uninterrupted access to healthcare services for patients, shape the future of healthcare institutions, and support their sustainable success.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/70 leading-relaxed">
                    Our mission is to always prioritize customer satisfaction by understanding the needs of healthcare institutions and providing the best solutions. We work diligently to support the success of our clients and strive to achieve operational excellence.
                  </p>
                </div>

                {/* Values */}
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                  <p className="text-white/70 leading-relaxed">
                    Our core values include reliability, continuous innovation, and customer focus. At Davon, we aim to contribute to the success of institutions by providing reliable solutions and building long-term relationships.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Image Placeholder 3 - Healthcare/Global Impact Image */}
          <section className="py-16 sm:py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-white/10 mb-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/60">
                    <div className="text-4xl mb-4">🌍</div>
                    <p className="text-lg">AI Generated Image Placeholder</p>
                    <p className="text-sm">Global Healthcare/Global Impact Image</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 sm:py-24 px-4 relative z-10 bg-white/5">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
                Stay Connected
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-8 sm:mb-12">
                Subscribe to our email newsletter to stay updated with the latest news and exclusive offers about healthcare technology innovations.
              </p>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}
