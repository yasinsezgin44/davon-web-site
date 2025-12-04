import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { DollarSign, Clock, FileCheck, Wrench, Database, BookOpen, Zap, Settings, TrendingUp } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: DollarSign,
    title: "Take Control of Your Budget",
    description:
      "Monitor the costs of failures, maintenance, calibrations and other tasks. Get complete visibility into your operational expenses.",
  },
  {
    icon: Clock,
    title: "Track Downtime",
    description:
      "Monitor and reduce the operational downtime of your equipment, making healthcare services more accessible for your patients.",
  },
  {
    icon: FileCheck,
    title: "Comply with Regulations",
    description:
      "Transparently provide the required documentation, maintenance, and calibration certificates, as well as necessary metrics during audits.",
  },
  {
    icon: Wrench,
    title: "Extend Equipment Life",
    description:
      "Easily track maintenance and calibration schedules through effective inventory management, thereby extending the lifespan of your equipment.",
  },
  {
    icon: Database,
    title: "Prevent Information Redundancy",
    description:
      "Ensure departments share information electronically and maintain a unified body of knowledge within the institution.",
  },
  {
    icon: BookOpen,
    title: "Facilitate Access to Information",
    description:
      "Allow employees to access manuals, guides, images, and device technical specifications from anywhere.",
  },
  {
    icon: Zap,
    title: "Speed Up Tasks",
    description:
      "Accelerate access to desired screens with a single-page web application interface and enable multi-screen work simultaneously.",
  },
  {
    icon: Settings,
    title: "Manage with Procedures",
    description:
      "Ensure controlled execution of tasks and compliance with procedural steps, leading to process improvements.",
  },
  {
    icon: TrendingUp,
    title: "Optimize Your Processes",
    description: "Easily access analyses related to maintenance and calibration processes for optimization.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black">
      <GlassmorphismNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/80" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Asset Operations Management System <span className="text-red-500">Tailored for Your Hospital</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Davon is an innovative maintenance management system specifically developed for technical teams in the
                Healthcare sector. It provides tailored solutions by supporting all processes related to your assets in
                the hospital environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
                >
                  Request Demo
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Why Choose Us?
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="/images/calm-mri.png"
                  alt="Davon CMMS Dashboard"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" data-white-section="true">
        <div className="bg-white rounded-[3rem] py-20 px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {"It's a Comprehensive Solution For Your"} <span className="text-red-600">Healthcare Facilities</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Everything you need to manage your hospital assets efficiently and maintain compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-slate-100 hover:border-red-200"
                >
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <feature.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hospital Operations?
          </h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Join leading healthcare institutions that trust Davon for their maintenance management needs.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
