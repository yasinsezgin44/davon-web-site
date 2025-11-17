import Image from "next/image";

const customers = [
  { name: "Acıbadem", logo: "/reference-logos/Acıbadem_Grup_logo.svg.png" },
  {
    name: "Amerikan Hastanesi",
    logo: "/reference-logos/Amerikan_Hastanesi_Logo.png",
  },
  {
    name: "Anadolu Sağlık Merkezi",
    logo: "/reference-logos/anadolu-hastanesi-logo.png",
  },
  {
    name: "Anadolu Hopkins",
    logo: "/reference-logos/anadolu_hopkins_logo.png",
  },
  { name: "Koç Üniversitesi", logo: "/reference-logos/koc-universitesi-logo.png" },
  { name: "Medipol", logo: "/reference-logos/medipol-logo.svg" },
  { name: "Siemens", logo: "/reference-logos/Siemens-logo.png" },
];

export function CustomersSection() {
  return (
    <section
      id="customers"
      className="border-t border-slate-800 bg-slate-950/95 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Customers
            </h2>
            <p className="mt-3 text-balance text-lg font-semibold text-white md:text-2xl">
              Trusted by leading healthcare providers and technology partners.
            </p>
            <p className="mt-3 max-w-md text-xs text-slate-300 md:text-sm">
              Davon has been the choice of hospital groups, university
              hospitals, and global technology leaders seeking reliable,
              healthcare-focused operational excellence.
            </p>
          </div>
          <p className="max-w-xs text-xs text-slate-400 md:text-sm">
            The reason Davon continues to grow—our customers, who push us to
            innovate and deepen our impact across the healthcare ecosystem.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3"
            >
              <div className="relative h-8 w-28 md:h-9 md:w-32">
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


