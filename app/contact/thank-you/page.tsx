import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock3, Mail, Phone, ArrowRight } from "lucide-react";

import Aurora from "@/components/Aurora";
import { Footer } from "@/components/footer";
import { GlassmorphismNav } from "@/components/glassmorphism-nav";

export const metadata: Metadata = {
  title: "Thank You | Davon Health",
  description:
    "Thanks for contacting Davon Health. Our team received your message and will follow up shortly.",
};

export default function ContactThankYouPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="relative z-10">
          <GlassmorphismNav />

          <section className="relative pt-32 pb-16 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/80" />
            <div className="absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(239, 68, 68, 0.3) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            <div className="container mx-auto max-w-4xl relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm mb-6">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Message received
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Thank you for contacting Davon Health
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                We appreciate you reaching out. Our team has your message and
                will respond as soon as possible, typically within one business
                day. If your request is urgent, please call or email us
                directly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-white/90 transition-colors"
                >
                  Return to Home
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Back to Contact
                </Link>
              </div>
            </div>
          </section>

          <section className="py-16 px-4">
            <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Clock3 className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      What happens next?
                    </h3>
                    <ul className="text-white/70 space-y-2 list-disc list-inside text-left">
                      <li>
                        We review your message and route it to the right team.
                      </li>
                      <li>Expect a response within one business day.</li>
                      <li>
                        We may reach out for additional details if needed.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Prefer email?
                    </h3>
                    <p className="text-white/70">
                      You can always reach us directly at{" "}
                      <span className="text-white font-semibold">
                        info@davon.com.tr
                      </span>
                      . We monitor this inbox closely.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Need something urgent?
                    </h3>
                    <p className="text-white/70">
                      Call us at{" "}
                      <span className="text-white font-semibold">
                        +90 (232) 765 90 30
                      </span>{" "}
                      for immediate assistance with your request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>

        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
          <Aurora
            colorStops={["#7f1d1d", "#dc2626", "#450a0a"]}
            amplitude={1.2}
            blend={0.6}
            speed={0.8}
          />
        </div>
      </main>
    </div>
  );
}
