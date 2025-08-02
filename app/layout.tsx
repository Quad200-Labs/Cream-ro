import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClarityProvider from "./context/calirity";
import ConditionalLayout from "./components/organisms/conditional-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CreamRo - Coming Soon | Delightful Ice Cream",
  description:
    "Something sweet is coming soon! CreamRo is crafting the most delicious ice cream experience just for you. Stay tuned for our grand opening!",
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
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
