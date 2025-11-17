import Image from "next/image";
import { Container } from "../layout/Container";

const logos = [
  {
    src: "/reference-logos/Acıbadem_Grup_logo.svg.png",
    alt: "Acıbadem Group",
  },
  {
    src: "/reference-logos/Amerikan_Hastanesi_Logo.png",
    alt: "American Hospital",
  },
  {
    src: "/reference-logos/anadolu_hopkins_logo.png",
    alt: "Anadolu Hopkins",
  },
  {
    src: "/reference-logos/anadolu-hastanesi-logo.png",
    alt: "Anadolu Hospital",
  },
  {
    src: "/reference-logos/koc-universitesi-logo.png",
    alt: "Koç University Hospital",
  },
  {
    src: "/reference-logos/medipol-logo.svg",
    alt: "Medipol",
  },
  {
    src: "/reference-logos/Siemens-logo.png",
    alt: "Siemens",
  },
];

export function LogosStrip() {
  return (
    <section className="dv-section dv-section--tight border-b border-slate-800/60 bg-slate-950/40">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 text-xs text-slate-400 md:flex-row md:items-center">
          <p className="max-w-xs">
            Trusted by engineering and facilities teams at leading healthcare
            organizations.
          </p>
          <div className="flex flex-wrap items-center gap-6 opacity-80 md:justify-end">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="relative h-6 w-20 grayscale transition hover:grayscale-0 md:h-7 md:w-24"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


