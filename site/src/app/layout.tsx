import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Indrio | Real Food. Real Farmers. Real Difference.",
  description: "Connecting people to superior flavor and nutrition while preserving farmland in the USA. Direct from American farmers, ranchers, and growers.",
  keywords: ["American farmers", "direct to consumer", "premium citrus", "grass-fed beef", "farm to table", "quality food"],
  openGraph: {
    title: "Indrio | Real Food. Real Farmers. Real Difference.",
    description: "Connecting people to superior flavor and nutrition while preserving farmland in the USA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
