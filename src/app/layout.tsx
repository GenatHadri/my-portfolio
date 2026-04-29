import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalyticsGA4 } from "./tracking/google-analytics";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genathadri.com"),
  title: "Genat Hadri — Senior Frontend Developer in Prishtina, Kosovo",
  description:
    "Senior frontend developer based in Prishtina, Kosovo, specializing in React, Next.js, and TypeScript. Genat Hadri builds fast, accessible, and maintainable web apps for startups and product teams.",
  keywords: [
    "Genat Hadri",
    "senior frontend developer",
    "frontend engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Prishtina",
    "Kosovo",
    "web performance",
    "accessibility",
    "design systems",
    "portfolio",
  ],
  authors: [{ name: "Genat Hadri" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "Genat Hadri",
    title: "Genat Hadri — Senior Frontend Developer",
    description:
      "Senior frontend developer based in Prishtina, Kosovo. Building fast, accessible web apps with React, Next.js, and TypeScript.",
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Genat Hadri — Portfolio",
      },
    ],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Genat Hadri",
  jobTitle: "Senior Frontend Developer",
  url: "https://genathadri.com/",
  image: "https://genathadri.com/opengraph.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prishtina",
    addressRegion: "Prishtina",
    addressCountry: "XK",
  },
  email: "mailto:genathadrii@gmail.com",
  sameAs: [
    "https://github.com/GenatHadri",
    "https://www.linkedin.com/in/genat-hadri",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="font-sans">
        {children}
        <Script
          id="person-json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <GoogleAnalyticsGA4 />
      </body>
    </html>
  );
}
