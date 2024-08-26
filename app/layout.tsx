import type { Metadata } from "next";
import "./globals.css";

import { instrument_sans } from "@/app/ui/fonts"
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";
import SplashScreenManager from "./ui/splashscreen/splashscreenmanager";

export const metadata: Metadata = {
  title: "Kind Hearts Services LLC",
  description: "---",
  openGraph: {
    title: "Kind Hearts Services LLC",
    description: "Compassionate care for you and your loved ones.",
    url: "https://kindhs.vercel.app",
    siteName: "Kind Hearts Services LLC",
    images: [
      {
        url: "/og.png",
        alt: "Kind Hearts Services LLC",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kind Hearts Services LLC",
    description: "Compassionate care for you and your loved ones.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrument_sans.className}>
        <SplashScreenManager>
          <Navbar  />
          <main className="relative">{children}</main>
          <Footer />
        </SplashScreenManager>
      </body>
    </html>
  );
}
