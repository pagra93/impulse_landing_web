import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/links";
import { siteSchema } from "@/lib/schema";
import { Figtree } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

// One family for the whole site. Variable, so the full 300–900 range ships in a
// single file — hierarchy comes from the type scale in globals.css, not from
// juggling separate families.
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const BASE_METADATA = {
  title: "Impulse - Focus blocker with physical NFC unlock",
  description:
    "Stop scrolling and start living. Impulse blocks distracting apps and websites — with a physical unlock level that ends a session only when you tap the Impulse Disc or any NFC tag. Save 2+ hours per day on iOS, Chrome and Safari.",
  keywords: [
    "focus app",
    "block distractions",
    "screen time",
    "productivity",
    "app blocker",
    "website blocker",
    "digital wellbeing",
    "focus timer",
    "impulse control",
    "screen time blocker",
    "distraction blocker",
    "website blocker chrome extension",
    "app blocker ios",
    "physical unlock",
    "NFC app blocker",
    "NFC focus blocker",
    "Impulse Disc",
    "block apps with NFC",
    "strict mode app blocker",
    "desktop website blocker",
  ],
  authors: [{ name: "Impulse" }],
  metadataBase: new URL("https://impulsecontrolapp.com"),
  openGraph: {
    title: "Impulse - Less scrolling, more living",
    description:
      "Block distracting apps and websites — now with physical NFC unlock. Tap the Impulse Disc or any NFC tag to end a focus session. Free on iOS, Chrome and Safari.",
    url: "https://impulsecontrolapp.com",
    siteName: "Impulse",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/impulse.png",
        width: 1200,
        height: 630,
        alt: "Impulse - Focus Control & Distraction Blocker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulse - Less scrolling, more living",
    description:
      "Block distracting apps and websites to regain your focus. Save 2+ hours per day.",
    images: ["/impulse.png"],
  },
  alternates: {
    canonical: "https://impulsecontrolapp.com",
  },
  other: {
    "robots": "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
} satisfies Metadata;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });

  return {
    ...BASE_METADATA,
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? SITE_URL : `${SITE_URL}/en`,
      languages: {
        es: SITE_URL,
        en: `${SITE_URL}/en`,
        // x-default points at Spanish: it is the market with actual traction
        // and the URL that already holds the ranking.
        "x-default": SITE_URL,
      },
    },
    twitter: {
      ...BASE_METADATA.twitter,
      title: t("title"),
      description: t("description"),
    },
    openGraph: {
      ...BASE_METADATA.openGraph,
      title: t("title"),
      description: t("description"),
      url: locale === "es" ? SITE_URL : `${SITE_URL}/en`,
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_ES",
    },
  };
}


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Opts the tree into static rendering; without it every page under [locale]
  // is forced dynamic.
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* No hand-written <link rel="canonical"> here. One used to live at this
            spot alongside metadata.alternates.canonical, so every subpage
            emitted two contradictory canonicals — /privacy and /delete-account
            were both claiming to be the site root. App Router owns canonicals
            through the metadata API; each page declares its own. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema(locale)) }}
        />
        {/* Framer Motion serialises its `initial` state into the SSR markup, so
            every <Reveal> ships with opacity:0 inline. Without JS nothing ever
            animates it back to 1 and the page reads as empty. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[data-reveal]{opacity:1!important;transform:none!important}</style>`,
          }}
        />
      </head>
      <body
        className={cn(
          figtree.variable,
          "antialiased font-body bg-white text-body"
        )}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
