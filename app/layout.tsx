import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { GlobalParallaxProvider } from "@/components/global-parallax-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

const siteUrl = "https://davon.health"

export const metadata: Metadata = {
  title: "Davon Health – AI-Powered Healthcare Equipment Monitoring & Predictive Maintenance",
  description:
    "Davon Health provides an AI-powered healthcare equipment monitoring and predictive maintenance platform that helps hospitals increase equipment uptime, improve patient safety, and optimize asset management.",
  generator: "v0.app",
  metadataBase: new URL(siteUrl),
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: "Davon Health",
  url: siteUrl,
  logo: `${siteUrl}/logo.webp`,
  description:
    "Davon Health provides an AI-powered healthcare equipment monitoring and predictive maintenance platform for hospitals and healthcare facilities.",
  sameAs: [
    "https://tr.linkedin.com/company/davon-health",
    "https://twitter.com/davonhealth",
    "https://davon.health",
  ],
  foundingDate: "2007",
  location: {
    "@type": "Place",
    name: "Urla, Turkey",
  },
}

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  url: siteUrl,
  name: "Davon Health",
  publisher: {
    "@id": `${siteUrl}#organization`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [organizationJsonLd, webSiteJsonLd]

  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GlobalParallaxProvider>
          <Suspense fallback={null}>
            <NavigationTransition />
            <PageTransition>{children}</PageTransition>
          </Suspense>
        </GlobalParallaxProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
