import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://nagaara.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NAGAARA | 40 Years of Trust. One New Generation.",
    template: "%s | NAGAARA",
  },
  description:
    "NAGAARA is a performance marketing agency continuing a 40-year legacy of helping businesses get heard. Meta Ads, Google Ads, Landing Pages, Lead Generation, and Performance Marketing.",
  keywords: [
    "digital marketing agency",
    "performance marketing",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Google Ads",
    "lead generation",
    "landing pages",
    "marketing agency India",
    "Nagaara",
    "local business marketing",
    "CRM automation",
    "conversion tracking",
    "marketing analytics",
  ],
  authors: [{ name: "NAGAARA" }],
  creator: "NAGAARA",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "NAGAARA",
    title: "NAGAARA | 40 Years of Trust. One New Generation.",
    description:
      "From loudspeakers to algorithms. Continuing a 40-year legacy of helping businesses get heard through Meta Ads, Google Ads, and Performance Marketing.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "NAGAARA - Performance Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAGAARA | 40 Years of Trust. One New Generation.",
    description:
      "From loudspeakers to algorithms. Performance marketing built on 40 years of legacy.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/Favicon.png",
  },
  other: {
    "copyright": "© 2026 NAGAARA. All rights reserved. Founded by Pavan Kalyan.",
    "author": "Pavan Kalyan",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NAGAARA",
  description:
    "Performance marketing agency continuing a 40-year legacy of helping businesses get heard.",
  url: siteUrl,
  founder: {
    "@type": "Person",
    name: "Pavan Kalyan",
  },
  serviceType: [
    "Meta Ads Management",
    "Google Ads Management",
    "Landing Page Design",
    "Performance Marketing",
    "Lead Generation",
    "CRM Automation",
    "Conversion Tracking",
    "Marketing Analytics",
    "Local Business Marketing",
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  email: "nagaara14@gmail.com",
  sameAs: [],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NAGAARA",
  description:
    "Performance marketing agency helping businesses grow through Meta Ads, Google Ads, Landing Pages, and Lead Generation.",
  url: siteUrl,
  email: "nagaara14@gmail.com",
  priceRange: "$$",
  areaServed: "India",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Generation" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLd, localBusinessJsonLd]),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#05070C] text-white">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('contextmenu',function(e){if(e.target.closest('.site-wrapper'))e.preventDefault();});`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
