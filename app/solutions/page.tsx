import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import { Footer } from "@/components/footer";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    title: "Experience and Expertise in the Healthcare Sector",
    description:
      "CMMS/EAM solutions in general are different from those specifically designed for healthcare facilities. Davon offers solutions tailored to the needs of healthcare institutions, drawing on years of experience and a team of experts in the healthcare field.",
    image: "/calm-mri.png",
  },
  {
    title: "Innovation and Technology",
    description:
      "Davon continuously enhances the competitive edge of healthcare institutions with its innovative technologies and solutions. We stay ahead of industry trends to deliver cutting-edge features.",
    image: "/davon-girl/davon-girl-mri-fix.png",
  },
  {
    title: "Customer Satisfaction Focused Service",
    description:
      "Davon not only provides a software solution but also actively participates in your business development processes, helping your technical teams improve and achieve success. Prioritizing customer satisfaction, Davon meets and supports the needs of healthcare institutions.",
    image: "/calm-mri.png",
  },
];

const benefits = [
  "Reduce equipment downtime by up to 40%",
  "Extend asset lifespan through preventive maintenance",
  "Ensure compliance with healthcare regulations",
  "Streamline work order management",
  "Track maintenance costs in real-time",
  "Access comprehensive analytics and reports",
  "Mobile-first approach for on-the-go management",
  "24/7 technical support from healthcare experts",
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <GlassmorphismNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/80" />
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-medium mb-6">
            Journey to Success with Davon
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-red-500">Us?</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform Your Institution with Davon, and Step Confidently Towards
            Success!
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
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={reason.image || "/placeholder.svg"}
                        alt={reason.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
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
              Experience the advantages that set us apart from other CMMS
              providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
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
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  20+
                </div>
                <p className="text-slate-600">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  1000+
                </div>
                <p className="text-slate-600">Active Users</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  15K+
                </div>
                <p className="text-slate-600">Hospital Beds</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  400K+
                </div>
                <p className="text-slate-600">Assets Managed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            {
              "Let's discuss how Davon can help transform your healthcare institution's maintenance operations."
            }
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
