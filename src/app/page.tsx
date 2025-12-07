import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Calculator } from "@/components/landing/Calculator";
import { Features } from "@/components/landing/Features";
import { Mission } from "@/components/landing/Mission";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-slate-900 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Calculator />
        <Features />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
