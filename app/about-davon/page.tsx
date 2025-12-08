import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { VideoCTA } from "@/components/video-cta"
import { RotatingDisc } from "@/components/rotating-disc"
import { Target, Heart, Shield, Globe, Users, Leaf } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Technology",
    description:
      "Our commitment to innovation and technology ensures that healthcare institutions are prepared for the future.",
  },
  {
    icon: Heart,
    title: "Healthcare Focus",
    description: "We emphasize understanding our customers' needs and delivering value to them.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Davon earns and maintains customer trust by providing reliable solutions and services.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Davon's global presence enables healthcare institutions to achieve operational excellence everywhere.",
  },
  {
    icon: Users,
    title: "Expertise",
    description:
      "With over 20 years of experience, our expert team delivers tailored solutions for healthcare institutions' needs.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Davon supports the long-term success of both healthcare institutions and the environment through sustainable business practices.",
  },
]

export default function AboutDavonPage() {
  return (
    <div className="min-h-screen bg-black">
      <GlassmorphismNav />

      {/* Hero Section with parallax */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/80"
          style={{ transform: "translateY(calc(var(--scroll-y, 0px) * 0.3))" }}
        />
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            20+ Years Experience
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-red-500">Davon</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We Are Here to Support You For Better Healthcare Services. With our experience and innovative approach, we
            are here to develop, improve, and carry your institution into the future.
          </p>
        </div>
      </section>

      {/* Patient Safety Section with Rotating Disc - UPDATED */}
      <section className="py-20 px-4" data-white-section="true">
        <div className="bg-white rounded-[3rem] py-20 px-8">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  We Prioritize <span className="text-red-600">Patient Safety</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Davon provides innovative solutions to shape the future of healthcare institutions, ensuring they
                  deliver operational excellence to their patients. Our CMMS and EAM solutions are specifically designed
                  for the unique challenges of healthcare environments.
                </p>
              </div>
              <div className="lg:w-1/2 flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96">
                  <RotatingDisc
                    src="/images/circle2-1.webp"
                    alt="Davon rotating badge"
                    className="drop-shadow-2xl w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid with parallax */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
            style={{ transform: "translateY(calc(var(--scroll-y, 0px) * -0.1))" }}
          >
            Our Core <span className="text-red-500">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                style={{ transform: `translateY(calc(var(--scroll-y, 0px) * ${0.05 + index * 0.01}))` }}
              >
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <value.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 px-4" data-white-section="true">
        <div className="bg-white rounded-[3rem] py-20 px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                Our Road Map
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Technological and Innovative Solutions to Transform the Future
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-slate-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  We adopt a visionary approach to provide innovative solutions that ensure uninterrupted access to
                  healthcare services for patients, shape the future of healthcare institutions, and support their
                  sustainable success.
                </p>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  Our mission is to always prioritize customer satisfaction by understanding the needs of healthcare
                  institutions and providing the best solutions. We work diligently to support the success of our
                  clients.
                </p>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
                <p className="text-slate-600">
                  Our core values include reliability, continuous innovation, and customer focus. At Davon, we aim to
                  contribute to the success of institutions by providing reliable solutions and building long-term
                  relationships.
                </p>
              </div>
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
