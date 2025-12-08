import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { VideoCTA } from "@/components/video-cta"
import Aurora from "@/components/Aurora"
import { CheckCircle, Award, Users, Lightbulb, Settings } from "lucide-react"
import Image from "next/image"

const reasons = [
  {
    icon: Award,
    title: "Experience and Expertise in the Healthcare Sector",
    description:
      "CMMS/EAM solutions in general are different from those specifically designed for healthcare facilities. Davon offers solutions tailored to the needs of healthcare institutions, drawing on years of experience and a team of experts in the healthcare field.",
    image: "/images/experience-expertise.png",
  },
  {
    icon: Lightbulb,
    title: "Innovation and Technology",
    description:
      "Davon continuously enhances the competitive edge of healthcare institutions with its innovative technologies and solutions. We stay ahead of industry trends to deliver cutting-edge features that transform hospital operations.",
    image: "/images/innovation-technology.png",
  },
  {
    icon: Users,
    title: "Customer Satisfaction Focused Service",
    description:
      "Davon not only provides a software solution but also actively participates in your business development processes, helping your technical teams improve and achieve success. Prioritizing customer satisfaction, Davon meets and supports the needs of healthcare institutions.",
    image: "/images/customer-satisfaction.png",
  },
  {
    icon: Settings,
    title: "Comprehensive and Flexible Solutions",
    description:
      "Davon offers a product that ensures compliance with standards while improving hospital operations. It has the flexibility to be tailored to the specific needs of your institution. The functions provided for healthcare facilities, combined with integration capabilities, meet the unique requirements of healthcare institutions.",
    image: "/images/comprehensive-flexible.png",
  },
]

const benefits = [
  "Reduce equipment downtime by up to 40%",
  "Extend asset lifespan through preventive maintenance",
  "Ensure compliance with healthcare regulations",
  "Streamline work order management",
  "Track maintenance costs in real-time",
  "Access comprehensive analytics and reports",
  "Mobile-first approach for on-the-go management",
  "24/7 technical support from healthcare experts",
]

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/80"
              style={{ transform: "translateY(calc(var(--scroll-y, 0px) * 0.3))" }}
            />
            <div className="container mx-auto relative z-10 text-center">
              <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-medium mb-6">
                Journey to Success with Davon
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose <span className="text-red-500">Us?</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Transform Your Institution with Davon, and Step Confidently Towards Success!
              </p>
            </div>
          </section>

          {/* Reasons Section */}
          <section className="py-20 px-4" data-white-section="true">
            <div className="bg-white rounded-[3rem] py-20 px-8">
              <div className="container mx-auto">
                <div className="space-y-24">
                  {reasons.map((reason, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
                    >
                      <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                          <Image
                            src={reason.image || "/placeholder.svg"}
                            alt={reason.title}
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                            <reason.icon className="w-6 h-6 text-red-600" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{reason.title}</h3>
                        </div>
                        <p className="text-lg text-slate-600 leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Benefits of Choosing <span className="text-red-500">Davon</span>
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  Experience the advantages that set us apart from other CMMS providers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4" data-white-section="true">
            <div className="bg-white rounded-[3rem] py-20 px-8">
              <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">20+</div>
                    <p className="text-slate-600">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">1000+</div>
                    <p className="text-slate-600">Active Users</p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">15K+</div>
                    <p className="text-slate-600">Hospital Beds</p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">400K+</div>
                    <p className="text-slate-600">Assets Managed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Video CTA Section */}
          <VideoCTA />

          <Footer />
        </div>

        {/* Aurora background */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
          <Aurora colorStops={["#7f1d1d", "#dc2626", "#450a0a"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
      </main>
    </div>
  )
}
