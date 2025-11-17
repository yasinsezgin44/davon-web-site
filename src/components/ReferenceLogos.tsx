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
    <section className="section-muted border-y border-gray-200/60">
      <div className="container-page section-padding">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
          <div className="space-y-3 max-w-md">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
              Trusted by leading healthcare institutions
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Join hospitals that already manage their assets with Davon.
            </h2>
            <p className="text-sm text-gray-600">
              From university hospitals to private groups, Davon supports
              thousands of technical users managing hundreds of thousands of
              medical assets every day.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="px-4 py-2 rounded-full border border-gray-200 bg-white">
              20+ years in healthcare
            </div>
            <div className="px-4 py-2 rounded-full border border-gray-200 bg-white">
              1000+ technical users
            </div>
            <div className="px-4 py-2 rounded-full border border-gray-200 bg-white">
              400K+ assets
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo}
              className="relative h-10 md:h-12 w-24 md:w-28 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
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
