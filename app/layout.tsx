import type { Metadata } from "next";
import "./globals.css";

import { instrument_sans } from "@/app/ui/fonts"
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";

export const metadata: Metadata = {
  title: "Kind Hearts Services LLC",
  description: "---",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrument_sans.className}>
        <Navbar  />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
