import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impulse - Control your focus, block distractions",
  description:
    "Stop scrolling and start living. Impulse blocks distracting apps and websites so you can focus on what matters. Save 2+ hours per day. Available on iOS and Chrome.",
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
  ],
  authors: [{ name: "Impulse" }],
  metadataBase: new URL("https://impulsecontrolapp.com"),
  openGraph: {
    title: "Impulse - Less scrolling, more living",
    description:
      "Block distracting apps and websites to regain your focus. Save 2+ hours per day. Free on iOS and Chrome.",
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
        "Scheduled focus sessions",
        "Quick focus mode",
        "Multiple strictness levels",
        "Emergency access button",
        "Cross-platform (iOS, Chrome, Safari)",
        "Daily usage statistics",
        "Custom blocklists",
      ],
    },
    {
      "@type": "WebSite",
      name: "Impulse",
      url: "https://impulsecontrolapp.com",
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
        <link rel="canonical" href="https://impulsecontrolapp.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          "antialiased font-sans bg-bg-primary text-text-primary"
        )}
      >
        {children}
      </body>
    </html>
  );
}
