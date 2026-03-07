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
  metadataBase: new URL("https://vauntedlabsllc.com"),
  title: {
    default: "Vaunted Labs — Custom Software Solutions",
    template: "%s | Vaunted Labs",
  },
  description:
    "Vaunted Labs LLC is a Delaware-based software studio specializing in custom computer programming services. We design, develop, and deploy intelligent digital solutions.",
  keywords: [
    "custom software development",
    "programming services",
    "software studio",
    "digital solutions",
    "web development",
    "app development",
    "Vaunted Labs",
  ],
  authors: [{ name: "Vaunted Labs LLC" }],
  creator: "Vaunted Labs LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vauntedlabsllc.com",
    siteName: "Vaunted Labs",
    title: "Vaunted Labs — Custom Software Solutions",
    description:
      "Specialized software studio designing, developing, and deploying custom digital solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaunted Labs — Custom Software Solutions",
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
              name: "Vaunted Labs LLC",
              url: "https://vauntedlabsllc.com",
              email: "admin@vauntedlabsllc.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "254 Chapman Rd, Ste 208 #26689",
                addressLocality: "Newark",
                addressRegion: "DE",
                postalCode: "19702",
                addressCountry: "US",
              },
              description:
                "Custom computer programming services. A Delaware-based software studio specializing in bespoke digital solutions.",
              foundingDate: "2026-01-28",
              naics: "541511",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0a0f] text-gray-200`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
