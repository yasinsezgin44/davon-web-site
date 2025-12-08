import { Button } from "@/components/ui/button";
import RotatingText from "./RotatingText";
import Image from "next/image";
import Link from "next/link";
import Aurora from "./Aurora";

const logos = [
  { src: "/reference-logos/Siemens-logo.png", alt: "Siemens Healthineers" },
  {
    src: "/reference-logos/medipol-logo.svg",
    alt: "Medipol University Hospital",
  },
  {
    src: "/reference-logos/Acıbadem_Grup_logo.svg.png",
    alt: "Acıbadem Healthcare Group",
  },
  {
    src: "/reference-logos/anadolu-hastanesi-logo.png",
    alt: "Anadolu Medical Center",
  },
  {
    src: "/reference-logos/anadolu_hopkins_logo.png",
    alt: "Anadolu Johns Hopkins",
  },
  {
    src: "/reference-logos/koc-universitesi-logo.png",
    alt: "Koç University Hospital",
  },
  {
    src: "/reference-logos/Amerikan_Hastanesi_Logo.png",
    alt: "American Hospital",
  },
];

const loopedLogos = [...logos, ...logos];

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Play = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
);

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Aurora
          colorStops={["#7f1d1d", "#dc2626", "#450a0a"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>

      <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none">
        <Image
          src="/images/davon-girl-mri-fix.png"
          alt="Healthcare professional with MRI equipment"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability since image is mostly white */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-4xl lg:max-w-5xl w-full mx-auto lg:mx-0 lg:ml-8 xl:ml-12 text-center lg:text-left relative z-10 animate-fade-in-hero flex flex-col items-center lg:items-start">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          CMMS & EAM Solutions for Healthcare
        </div>

        {/* Main Heading - Updated text colors for visibility on white background */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">
          <span className="text-white drop-shadow-lg">Empowering Hospital</span>
          <br />
          <span className="inline-flex items-center justify-center lg:justify-start flex-wrap gap-2 mt-4 sm:mt-6 md:mt-8">
            <span className="text-white drop-shadow-lg">Operations with</span>
            <RotatingText
              texts={["CMMS", "EAM", "Safety", "Efficiency", "Innovation"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-red-600 text-white overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </h1>

        {/* Subheading - White text with shadow for visibility */}
        <p className="text-base sm:text-xl md:text-2xl text-white drop-shadow-lg text-balance max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          At Davon, we specialize in creating robust Computerized Maintenance
          Management Systems and Enterprise Asset Management software tailored
          specifically for hospitals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-red-600 text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg group cursor-pointer relative overflow-hidden"
            >
              Request a Demo
              <ArrowRight />
            </Button>
          </Link>

          <Link href="/about-davon">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-4 text-lg font-medium border-white/50 text-white hover:bg-white/20 transition-all duration-200 hover:scale-105 group bg-black/30 backdrop-blur-sm cursor-pointer"
            >
              <Play />
              About Us
            </Button>
          </Link>
        </div>

        {/* Trust Indicators - logos of trusted institutions */}
        <div className="text-center px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white drop-shadow-lg mb-6">
            Trusted by leading healthcare institutions
          </p>
          <div className="relative overflow-hidden w-full max-w-4xl mx-auto bg-black/10 backdrop-blur-sm rounded-xl py-4 px-6">
            <div className="flex items-center gap-12 opacity-90 animate-slide-left whitespace-nowrap w-max">
              {loopedLogos.map((logo, idx) => (
                <div
                  key={`${idx}-${logo.alt}`}
                  className="h-12 flex items-center opacity-80 grayscale hover:grayscale-0 hover:opacity-100 drop-shadow-sm transition-all duration-300 shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={60}
                    className="h-10 sm:h-11 w-auto min-w-[130px] max-w-[220px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-8 sm:hidden overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white drop-shadow-lg mb-6">
            Trusted by leading healthcare institutions
          </p>
          <div className="relative overflow-hidden w-full max-w-sm mx-auto bg-black/10 backdrop-blur-sm rounded-xl py-3 px-4">
            <div className="flex items-center gap-10 opacity-90 animate-slide-left-mobile whitespace-nowrap w-max">
              {loopedLogos.map((logo, idx) => (
                <div
                  key={`${idx}-${logo.alt}-mobile`}
                  className="h-10 flex items-center opacity-80 grayscale hover:grayscale-0 hover:opacity-100 drop-shadow-sm transition-all duration-300 shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={46}
                    className="h-9 w-auto min-w-[110px] max-w-[180px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
