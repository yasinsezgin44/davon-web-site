import type React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { PageTransition } from "@/components/page-transition";
import { NavigationTransition } from "@/components/navigation-transition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Dancing_Script, Caveat } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Davon.Health - AI-Powered Healthcare Equipment Monitoring & Predictive Maintenance",
  description:
    "Transform healthcare operations with Davon's AI-powered predictive maintenance platform. Monitor medical equipment, reduce downtime, and ensure patient safety across hospitals with real-time analytics.",
  keywords: [
    "healthcare equipment monitoring",
    "predictive maintenance",
    "medical device management",
    "hospital asset management",
    "AI healthcare",
    "CMMS healthcare",
  ],
  authors: [{ name: "Davon.Health" }],
  creator: "Davon.Health",
  publisher: "Davon.Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://davon.health"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Davon.Health - AI-Powered Healthcare Equipment Monitoring",
    description:
      "Transform healthcare operations with Davon's AI-powered predictive maintenance platform. Monitor medical equipment across hospitals with real-time analytics.",
    url: "https://davon.health",
    siteName: "Davon.Health",
    images: [
      {
        url: "/home-circle.png",
        width: 1200,
        height: 630,
        alt: "Davon.Health - AI-Powered Healthcare Equipment Monitoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davon.Health - AI-Powered Healthcare Equipment Monitoring",
    description:
      "Transform healthcare operations with Davon's AI-powered predictive maintenance platform.",
    images: ["/home-circle.png"],
    creator: "@davonhealth",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}
      >
        <Suspense fallback={null}>
          <NavigationTransition />
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
