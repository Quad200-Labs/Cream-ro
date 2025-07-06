import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/organisms/footer";
import Navbar from "./components/organisms/navbar/navbar";
import ClarityProvider from "./context/calirity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CreamRo - Delightful Ice Cream",
  description:
    "Experience the magic of CreamRo – where every scoop is a masterpiece of rich, creamy delight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClarityProvider />
        <Navbar />
        <div className="pt-16 md:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
