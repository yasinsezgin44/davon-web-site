import Image from "next/image";

export default function ReferenceLogos() {
  const logos = [
    "Acıbadem_Grup_logo.svg.png",
    "Amerikan_Hastanesi_Logo.png",
    "anadolu_hopkins_logo.png",
    "anadolu-hastanesi-logo.png",
    "koc-universitesi-logo.png",
    "medipol-logo.svg",
    "Siemens-logo.png",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-600 uppercase tracking-wide">
            Trusted by Leading Healthcare Institutions
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo}
              className="relative h-12 w-24 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={`/reference-logos/${logo}`}
                alt={logo.replace(/[-_]/g, " ").replace(".png", "")}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
