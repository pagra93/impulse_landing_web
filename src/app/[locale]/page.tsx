import { setRequestLocale } from "next-intl/server";
import { homeSchema } from "@/lib/schema";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Manifesto } from "@/components/landing/Manifesto";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Bridge } from "@/components/landing/Bridge";
import { Platforms } from "@/components/landing/Platforms";
import { Strictness } from "@/components/landing/Strictness";
import { Calculator } from "@/components/landing/Calculator";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

/**
 * Chapter rhythm: a dark opening, six light chapters alternating bone and
 * white with one dark island in the middle, then a yellow close. Deliberately
 * not a dark/light zigzag on every section — that is what makes long landing
 * pages feel exhausting.
 */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // SoftwareApplication + FAQPage live here, not in the layout: /privacy has no
  // business advertising a FAQ it does not contain.
  const schema = await homeSchema(locale);

  // The header is a floating pill over a transparent wrapper, so the page needs
  // a dark ground of its own: otherwise the body's white shows through above and
  // beside the pill until the hero starts. Every section paints its own
  // background, so this only ever shows behind the header.
  return (
    <div className="min-h-screen bg-void font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Manifesto />
        <HowItWorks />
        <Features />
        <Bridge />
        <Platforms />
        <Strictness />
        <Calculator />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
