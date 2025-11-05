import {
  CornerCTA,
  Header,
  Hero,
  About,
  WhyChooseUs,
  Features,
  Benefits,
  Stats,
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
      <Hero />
      <About />
      <WhyChooseUs />
      <Features />
      <Benefits />
      <Stats />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
