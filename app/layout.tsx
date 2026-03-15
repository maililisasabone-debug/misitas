import type { Metadata } from "next";
import { Fraunces, Nunito, Caveat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { CustomerProvider } from "@/context/CustomerContext";
import CartDrawer from "@/components/CartDrawer";

// Speelse serif voor headings (karaktervol, warm, modern)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

// Rounded clean sans-serif voor body (zoals Avenir Next)
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

// Handgeschreven voor accenten (zoals Themysion)
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500", "600", "700"],
});

// Bold display voor drop titels
const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
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
    <html lang="nl" className={`${fraunces.variable} ${nunito.variable} ${caveat.variable} ${bebas.variable}`}>
      <body>
        <CustomerProvider>
          <CartProvider>
            <Navbar />
            <CartDrawer />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </CustomerProvider>
      </body>
    </html>
  );
}
