import Image from "next/image";
import { Container } from "@/app/components/layout/Container";

const logos = [
  {
    src: "/reference-logos/Acıbadem_Grup_logo.svg.png",
    alt: "Acıbadem",
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
    alt: "Koç University",
  },
  {
    src: "/reference-logos/medipol-logo.svg",
    alt: "Medipol",
  },
  {
    src: "/reference-logos/Siemens-logo.png",
    alt: "Siemens Healthineers",
  },
];

export function LogosStrip() {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <Container className="py-8">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Trusted by leading healthcare organizations
        </div>
        <div className="mt-4 grid grid-cols-2 items-center gap-6 sm:grid-cols-4 md:grid-cols-7">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="max-h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


