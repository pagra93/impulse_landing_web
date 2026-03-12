import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impulse - Control your focus, block distractions",
  description:
    "Stop scrolling and start living. Impulse blocks distracting apps and websites so you can focus on what matters. Available on iOS and Chrome.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulse - Less scrolling, more living",
    description:
      "Block distracting apps and websites to regain your focus. Save 2+ hours per day.",
  },
  alternates: {
    canonical: "https://impulsecontrolapp.com",
  },
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
      </head>
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "antialiased font-sans bg-white text-slate-900"
        )}
      >
        {children}
      </body>
    </html>
  );
}
