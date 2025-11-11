import { CornerCTA, Header, Hero } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-100)] font-inter text-[var(--text-100)] transition-all duration-1000">
      <CornerCTA />
      <Header />
      <Hero />
    </div>
  );
}
