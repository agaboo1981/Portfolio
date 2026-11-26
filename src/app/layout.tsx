import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://www.agaboo.me";
const title = "Joshua Adesina — Full-Stack & AI Engineer";
const description =
  "Full-stack and AI engineer in Lagos. I build web applications, APIs, and AI tooling in JavaScript, TypeScript, and Python.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Joshua Adesina",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joshua Adesina",
  url: `${siteUrl}/`,
  email: "giganticjosha@gmail.com",
  jobTitle: "Full-Stack & AI Engineer",
  image: `${siteUrl}/assets/joshua.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Olabisi Onabanjo University",
  },
  sameAs: [
    "https://github.com/agaboo1981",
    "https://linkedin.com/in/joshua-adesina",
    "https://x.com/Agabo07",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
