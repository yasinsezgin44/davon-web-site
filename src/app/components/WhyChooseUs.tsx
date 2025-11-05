import { Shield, Hospital, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="py-24 bg-black text-white transition-all"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose Us?
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-300 uppercase tracking-wide">
          Güvenlikte Lider Çözümler
        </h3>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
          Davon is always by your side for equipment efficiency and patient
          safety in healthcare institutions.
        </p>
        <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          We prepare your institution for the future, with over 20 years of
          experience in the healthcare industry.
        </p>
        <div className="flex justify-center space-x-8 text-red-600">
          <Shield size={64} />
          <Hospital size={64} />
          <Wrench size={64} />
        </div>
      </div>
    </section>
  );
}
