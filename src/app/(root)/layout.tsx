import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* {children} */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
