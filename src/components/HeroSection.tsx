import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="container-narrow py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="pill">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              <span>Empowering Hospital Operations</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-balance">
                All Your Hospital Operations on{" "}
                <span className="text-red-600">One Platform</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Davon brings together CMMS and EAM solutions tailored for
                healthcare institutions. Streamline maintenance, track assets,
                and ensure patient safety with our comprehensive platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Start Free Trial
              </a>
              <a href="#features" className="btn-outline">
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">400K+</div>
                <div className="text-sm text-gray-600 mt-1">Assets Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">15K+</div>
                <div className="text-sm text-gray-600 mt-1">Hospital Beds</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src="/hero-background-base.png"
                  alt="Hospital operations dashboard"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />

              {/* Content Overlay */}
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-sm font-medium">
                        Live Dashboard
                      </span>
                    </div>
                    <span className="text-sm opacity-80">Davon CMMS</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                      <div className="text-2xl font-bold">99.3%</div>
                      <div className="text-sm opacity-90">Asset Uptime</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                      <div className="text-2xl font-bold">+32%</div>
                      <div className="text-sm opacity-90">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-gray-900">
                  All Systems Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
