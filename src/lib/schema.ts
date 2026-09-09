import { getTranslations } from "next-intl/server";
import { LINKS, SITE_URL } from "@/lib/links";
import type { FaqItem } from "@/components/landing/FAQ";

/**
 * Structured data, split by where it actually belongs.
 *
 * The previous version injected one @graph into every page, so /privacy
 * advertised a FAQPage it does not contain. Organization and WebSite are
 * site-wide; SoftwareApplication and FAQPage belong to the home page only.
 */

export function siteSchema(locale: string) {
  const home = locale === "es" ? SITE_URL : `${SITE_URL}/${locale}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Impulse",
        url: SITE_URL,
        logo: `${SITE_URL}/impulse.png`,
        email: LINKS.supportEmail,
        sameAs: [],
      },
      {
        "@type": "WebSite",
        name: "Impulse",
        url: home,
        inLanguage: locale,
      },
    ],
  };
}

/**
 * The FAQ questions come from the same array that renders the accordion, so the
 * two cannot drift. They already had: the hand-maintained copy in this graph and
 * the copy in the FAQ component had diverged.
 */
export async function homeSchema(locale: string) {
  const tMeta = await getTranslations({ locale, namespace: "meta.home" });
  const tFaq = await getTranslations({ locale, namespace: "faq" });
  const items = tFaq.raw("items") as FaqItem[];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Impulse",
        description: tMeta("description"),
        url: locale === "es" ? SITE_URL : `${SITE_URL}/${locale}`,
        applicationCategory: "ProductivityApplication",
        // Android was missing entirely, on a site that also had no link to it.
        operatingSystem: "iOS, Android, Chrome, Safari",
        installUrl: [LINKS.ios, LINKS.play, LINKS.chrome],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        // NOTE: no aggregateRating here. Declaring one without marked-up,
        // verifiable reviews on the page is a self-serving review under
        // Google's structured data policies and risks a manual action on the
        // rich result. The visible testimonials are a separate decision; this
        // is about what we assert to search engines.
        featureList: [
          "App and website blocking",
          "Strict mode (unbypassable)",
          "Time limits and daily opening limits",
          "Physical unlock with NFC (Impulse Disc or any NFC tag)",
          "Scheduled focus sessions",
          "Quick focus mode",
          "Multiple strictness levels (easy, medium, hard, physical)",
          "Emergency access button",
          "Independent desktop blocking (Chrome & Safari extension)",
          "Cross-platform (iOS, Android, Chrome, Safari)",
          "Focus Groups",
          "Daily usage statistics",
          "Custom blocklists",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
