import { CornerCTA, Header, Hero } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter text-black transition-all duration-1000">
      <CornerCTA />
      <Header />
      <Hero />
    </div>
  );
}
