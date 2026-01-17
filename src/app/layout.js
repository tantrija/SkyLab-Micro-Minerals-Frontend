import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://example.com"; // TODO: replace with your live domain

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Skylab Microminerals | Calcium Carbonate & Dolomite Powder Manufacturer",
    template: "%s | Skylab Microminerals",
  },

  description:
    "Skylab Microminerals is an Indian manufacturer and supplier of high-performance Uncoated & Coated Calcium Carbonate (CaCO₃) and Dolomite powders. Serving plastics & masterbatch, paints & coatings, paper & printing, rubber, ceramics, detergents, and aquaculture with in-house particle size testing, consistent quality, and reliable logistics.",

  keywords: [
    "Skylab Microminerals",
    "calcium carbonate powder",
    "CaCO3 manufacturer",
    "coated calcium carbonate",
    "uncoated calcium carbonate",
    "dolomite powder",
    "industrial minerals",
    "functional fillers",
    "plastic masterbatch filler",
    "paints and coatings filler",
    "paper coating pigment",
    "rubber filler",
    "ceramics raw material",
    "India mineral manufacturer",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Skylab Microminerals",
    title:
      "Skylab Microminerals | Precision Calcium Carbonate & Dolomite Solutions",
    description:
      "Premium coated & uncoated CaCO₃ and dolomite powders for plastics, paints, paper, rubber, ceramics, detergents, and aquaculture—backed by in-house testing and 25+ years of expertise.",
    images: [
      {
        url: "/SkylabLogo.png", // TODO: create this image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Skylab Microminerals - Precision & Quality",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Skylab Microminerals | Calcium Carbonate & Dolomite Powder Manufacturer",
    description:
      "High-performance coated & uncoated CaCO₃ and dolomite powders with consistent quality, in-house testing, and reliable logistics.",
    images: ["/SkylabLogo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/SkylabLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
