import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { IosSection } from "@/components/landing/IosSection";
import { ChromeSection } from "@/components/landing/ChromeSection";
import { Calculator } from "@/components/landing/Calculator";
import { Testimonials } from "@/components/landing/Testimonials";
import { Mission } from "@/components/landing/Mission";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <IosSection />
        <ChromeSection />
        <Calculator />
        <Testimonials />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
