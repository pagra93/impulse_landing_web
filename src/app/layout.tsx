import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// One family for the whole site. Variable, so the full 300–900 range ships in a
// single file — hierarchy comes from the type scale in globals.css, not from
// juggling separate families.
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Impulse",
      url: "https://impulsecontrolapp.com",
      logo: "https://impulsecontrolapp.com/impulse.png",
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      name: "Impulse",
      description:
        "Focus control tool that blocks distracting apps and websites. Features strict mode, scheduled blocking, usage statistics, and cross-platform support on iOS and Chrome.",
      url: "https://impulsecontrolapp.com",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "iOS, Chrome, Safari",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "500",
        bestRating: "5",
      },
      featureList: [
        "App and website blocking",
        "Strict mode (unbypassable)",
        "Physical unlock with NFC (Impulse Disc or any NFC tag)",
        "Scheduled focus sessions",
        "Quick focus mode",
        "Multiple strictness levels (easy, medium, hard, physical)",
        "Emergency access button",
        "Independent desktop blocking (Chrome & Safari extension)",
        "Cross-platform (iOS, Chrome, Safari)",
        "Focus Groups",
        "Daily usage statistics",
        "Custom blocklists",
      ],
    },
    {
      "@type": "WebSite",
      name: "Impulse",
      url: "https://impulsecontrolapp.com",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Impulse free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — the core blocker is 100% free on iOS and Chrome, with no account and no credit card. Impulse Pro adds unlimited rules, strict mode and Focus Groups, but you can take back hours every day without paying a cent.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to buy a device for physical unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Physical unlock works free with any NFC sticker you own — even a $1 tag. The designed Impulse Disc is optional and ships free with an annual plan (coming soon), so there's never a separate gadget to buy.",
          },
        },
        {
          "@type": "Question",
          name: "What if I have a real emergency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Impulse is strict, not cruel. Emergency unlocks let you reach what you genuinely need — but they're intentionally inconvenient, and blocks reactivate automatically afterwards.",
          },
        },
        {
          "@type": "Question",
          name: "Is my data private?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Completely. Your usage stats and block lists stay on your device — not on our servers. No tracking, no ads, no analytics, no selling your data to anyone.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* No hand-written <link rel="canonical"> here. One used to live at this
            spot alongside metadata.alternates.canonical, so every subpage
            emitted two contradictory canonicals — /privacy and /delete-account
            were both claiming to be the site root. App Router owns canonicals
            through the metadata API; each page declares its own. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        {children}
      </body>
    </html>
  );
}
