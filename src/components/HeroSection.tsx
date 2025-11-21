import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="container-page py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - left column */}
          <div className="space-y-8 lg:space-y-10">
            {/* Pill */}
            <div className="pill inline-flex">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              <span>All your hospital operations on one platform</span>
            </div>

            {/* Main copy */}
            <div className="space-y-6">
              <h1 className="text-balance max-w-2xl">
                Simple, efficient, yet{" "}
                <span className="text-red-600">made for hospitals</span>
              </h1>

              <div className="space-y-3 max-w-xl">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Davon unifies CMMS, EAM, and asset tracking in a single,
                  integrated platform built specifically for healthcare
                  institutions.
                </p>
                <p className="text-base text-gray-500">
                  **No complexity, no scattered tools** – just one place to
                  manage assets, maintenance, and compliance across all your
                  hospitals.
                </p>
              </div>

              {/* Pricing-style tagline */}
              <div className="inline-flex flex-wrap items-baseline gap-2 rounded-full bg-red-50 px-4 py-2 text-sm text-red-700 border border-red-100">
                <span className="font-semibold">
                  One platform, all modules included.
                </span>
                <span className="text-gray-500">
                  Transparent pricing tailored for healthcare networks.
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Start now – it&apos;s free
              </a>
              <a href="#features" className="btn-outline">
                Book a live demo
              </a>
            </div>

            {/* Trust + stats row */}
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span>Instant access, no credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span>Built for clinical engineering &amp; facility teams</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600 mt-1">
                  Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">400K+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Assets Managed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">15K+</div>
                  <div className="text-sm text-gray-600 mt-1">Hospital Beds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual - right column */}
          <div className="relative">
            {/* Main device-style mockup */}
            <div className="relative h-[420px] lg:h-[480px] rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(15,23,42,0.35)] bg-gray-900">
              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src="/hero-background-base.png"
                  alt="Davon hospital operations dashboard"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/40 to-transparent" />

              {/* Content overlay */}
              <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between text-white">
                {/* Top bar */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-xs font-medium tracking-wide uppercase">
                      Live hospital overview
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm opacity-80">
                    Davon CMMS • EAM • Asset Tracking
                  </span>
                </div>

                {/* Dashboard widgets */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 sm:p-4">
                      <div className="text-xs uppercase tracking-wide text-gray-200 mb-1">
                        Asset uptime
                      </div>
                      <div className="text-2xl sm:text-3xl font-semibold">
                        99.3%
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        across 400K+ assets
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 sm:p-4">
                      <div className="text-xs uppercase tracking-wide text-gray-200 mb-1">
                        Work orders
                      </div>
                      <div className="text-2xl sm:text-3xl font-semibold">
                        +32%
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        faster response time
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[11px] uppercase tracking-wide text-gray-300 mb-1">
                        Preventive
                      </div>
                      <div className="text-lg font-semibold">87%</div>
                      <div className="text-[11px] text-gray-300">
                        on-time completion
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[11px] uppercase tracking-wide text-gray-300 mb-1">
                        Compliance
                      </div>
                      <div className="text-lg font-semibold">100%</div>
                      <div className="text-[11px] text-gray-300">
                        critical devices
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[11px] uppercase tracking-wide text-gray-300 mb-1">
                        Sites
                      </div>
                      <div className="text-lg font-semibold">12</div>
                      <div className="text-[11px] text-gray-300">
                        hospitals network
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="flex items-center justify-between pt-2 text-xs text-gray-300">
                  <span>Global view • Real-time alerts • Analytics</span>
                  <span className="hidden sm:inline">
                    Sample dashboard for illustration purposes
                  </span>
                </div>
              </div>
            </div>

            {/* Floating app-style chips */}
            <div className="hidden lg:flex flex-wrap gap-3 mt-6 justify-end">
              <div className="bg-white rounded-full px-4 py-2 shadow-md text-sm text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>CMMS</span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-md text-sm text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>EAM</span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-md text-sm text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>Asset Tracking</span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-md text-sm text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
