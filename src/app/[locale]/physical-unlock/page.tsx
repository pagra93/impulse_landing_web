import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { PhysicalHero } from "@/components/disc/PhysicalHero";
import { StrictnessLadder } from "@/components/disc/StrictnessLadder";
import { PhysicalHowItWorks } from "@/components/disc/PhysicalHowItWorks";
import { ComparisonTable } from "@/components/disc/ComparisonTable";
import { GetTheDisc } from "@/components/disc/GetTheDisc";
import { SITE_URL } from "@/lib/links";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const HREF = "/physical-unlock" as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.disc" });

  const url = (l: (typeof routing.locales)[number]) =>
    `${SITE_URL}${getPathname({ href: HREF, locale: l })}`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url(locale as (typeof routing.locales)[number]),
      languages: {
        en: url("en"),
        es: url("es"),
        "x-default": url(routing.defaultLocale),
      },
    },
  };
}

/**
 * The physical-unlock chapter, moved off the home page.
 *
 * It used to be five components and roughly 3,500px on the landing — the single
 * largest block on the site — promoting an accessory marked "coming soon" with
 * a waiting list. Nothing was thrown away: it lives here in full, and the
 * friction section on the home page links across.
 */
export default async function PhysicalUnlockPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <PhysicalHero />
        <StrictnessLadder />
        <PhysicalHowItWorks />
        <ComparisonTable />
        <GetTheDisc />
      </main>
      <Footer />
    </div>
  );
}
