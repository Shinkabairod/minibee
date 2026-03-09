import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minibee.pro"),
  title: {
    default: "Minibee — Custom Software Solutions",
    template: "%s | Minibee",
  },
  description:
    "MINIBEE LLC is a Delaware-based software studio specializing in custom computer programming services. We design, develop, and deploy intelligent digital solutions.",
  keywords: [
    "custom software development",
    "programming services",
    "software studio",
    "digital solutions",
    "web development",
    "app development",
    "Minibee",
  ],
  authors: [{ name: "MINIBEE LLC" }],
  creator: "MINIBEE LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minibee.pro",
    siteName: "Minibee",
    title: "Minibee — Custom Software Solutions",
    description:
      "Specialized software studio designing, developing, and deploying custom digital solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minibee — Custom Software Solutions",
    description:
      "Specialized software studio designing, developing, and deploying custom digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MINIBEE LLC",
              url: "https://minibee.pro",
              email: "contact@minibee.pro",
              address: {
                "@type": "PostalAddress",
                streetAddress: "254 Chapman Road, Ste 208 #23664",
                addressLocality: "Newark",
                addressRegion: "DE",
                postalCode: "19702",
                addressCountry: "US",
              },
              description:
                "Custom computer programming services. A Delaware-based software studio specializing in bespoke digital solutions.",
              foundingDate: "2026-01-28",
              naics: "541511",
              duns: "14-493-4757",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-gray-800`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
