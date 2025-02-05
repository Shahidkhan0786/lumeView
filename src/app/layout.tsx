import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/web/Navbar";
import Hero from "@/components/web/Hero";
import Footer from "@/components/web/Footer";
import ScrollToTop from "@/components/web/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumeview-Manufacture",
  description: "A electronic company",
  icons: {
    icon: "/favicon.ico", // Path to your favicon in public folder
  },
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
        {/* {children} */}
        <Navbar />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
