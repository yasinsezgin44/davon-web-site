import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { VideoCTA } from "@/components/video-cta"
import { Microscope, Cpu, Database, Sparkles, BarChart3, Shield } from "lucide-react"
import Image from "next/image"

const researchAreas = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Leveraging artificial intelligence to predict maintenance needs, optimize asset lifecycles, and improve decision-making processes in healthcare facilities.",
  },
  {
    icon: Database,
    title: "IoT Integration",
    description:
      "Developing real-time monitoring systems that connect medical equipment to our CMMS platform for automated tracking and predictive maintenance.",
  },
  {
    icon: Sparkles,
    title: "Smart Analytics",
    description:
      "Advanced data analytics to provide actionable insights, reduce downtime, and enhance operational efficiency across hospital departments.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Ensuring the highest level of data protection and compliance with healthcare regulations through cutting-edge security research.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description:
      "Continuously improving system performance, scalability, and user experience through rigorous testing and innovation.",
  },
  {
    icon: Microscope,
    title: "Healthcare Innovation",
    description:
      "Collaborating with healthcare professionals to develop solutions that address real-world challenges in medical facility management.",
  },
]

const innovations = [
  {
    title: "Davon Count",
    description:
      "Revolutionary mobile app for medical equipment inventory management with QR code scanning, real-time tracking, and location-based counting.",
    image: "/images/count-app1.jpeg",
  },
  {
    title: "Predictive Maintenance AI",
    description:
      "Machine learning algorithms that analyze equipment usage patterns to predict failures before they occur, minimizing downtime.",
    image: "/ai-dashboard-with-graphs-and-predictions.jpg",
  },
  {
    title: "Cloud-Based Architecture",
    description:
      "Scalable, secure, and accessible from anywhere - our cloud infrastructure ensures your data is always available when you need it.",
    image: "/cloud-computing-network-diagram.jpg",
  },
]

export default function RnDPage() {
  return (
    <div className="min-h-screen bg-black">
      <GlassmorphismNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/80" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <Microscope className="w-4 h-4 mr-2" />
            Innovation & Development
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Research & <span className="text-red-500">Development</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of healthcare technology through continuous innovation, research, and development of
            cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* R&D Philosophy Section */}
      <section className="py-20 px-4" data-white-section="true">
        <div className="bg-white rounded-[3rem] py-20 px-8">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Innovation Driven by <span className="text-red-600">Healthcare Needs</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  At Davon, our R&D team works closely with healthcare professionals to understand their challenges and
                  develop solutions that make a real difference in patient care and operational efficiency.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We invest heavily in research and development to ensure our CMMS and EAM solutions remain at the
                  forefront of healthcare technology, incorporating the latest advances in AI, IoT, and cloud computing.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/modern-research-lab-with-computers-and-medical-tec.jpg"
                    alt="R&D Laboratory"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Research <span className="text-red-500">Focus Areas</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Exploring multiple domains to deliver comprehensive solutions for modern healthcare facilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <area.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-white/60">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-20 px-4" data-white-section="true">
        <div className="bg-white rounded-[3rem] py-20 px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                Recent Innovations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Products of Our <span className="text-red-600">Innovation</span>
              </h2>
            </div>

            <div className="space-y-20">
              {innovations.map((innovation, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{innovation.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{innovation.description}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={innovation.image || "/placeholder.svg"}
                        alt={innovation.title}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">20+</div>
              <div className="text-white/60">Years of Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-white/60">R&D Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-white/60">Patents & Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-white/60">Healthcare Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video CTA Section */}
      <VideoCTA />

      <Footer />
    </div>
  )
}
