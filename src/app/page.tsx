import {
  CornerCTA,
  Header,
  Hero,
  TrustBar,
  Problem,
  Impact,
  Solution,
  HowItWorks,
  Benefits,
  Testimonials,
  Faq,
  Contact,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter text-black transition-all duration-1000">
      <CornerCTA />
      <Header />
      {/* Problem-Impact-Solution-Proof Narrative Flow */}
      <Hero />
      <TrustBar />
      <Problem />
      <Impact />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      {/* Persona Triage section will be added here */}
      {/* Integrations section will be added here */}
      <Faq />
      {/* Final CTA section will be added here */}
      <Contact />
      <Footer />
    </div>
  );
}
