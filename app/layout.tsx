import type { Metadata } from "next";
import { Playfair_Display, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Misitas — Curated jewelry & small objects",
  description: "Misitas verzamelt kleine objecten via mensen onderweg. Sieraden en items gekozen op vorm, materiaal en gevoel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable} ${bebas.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
