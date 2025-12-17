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
  title: "Indrio Fields | The Guide to Farm-to-Table Food Quality",
  description: "The system between farm and table is broken. We measure what labels only promise. Learn about food quality, verify claims with data, and discover farms that meet the standard.",
  keywords: ["food quality", "brix measurement", "grass-fed beef", "omega ratios", "farm to table", "food labels", "nutrition", "quality verification"],
  openGraph: {
    title: "Indrio Fields | The Guide to Farm-to-Table Food Quality",
    description: "The system between farm and table is broken. We measure what labels only promise.",
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
