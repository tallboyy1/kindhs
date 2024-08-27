import type { Metadata } from "next";
import "./globals.css";

import { instrument_sans } from "@/app/ui/fonts"
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";

export const metadata: Metadata = {
  title: "Kind Hearts Service LLC",
  description: "Compassionate care for you and your loved ones.",
  keywords: "healthcare, adult residential program, community support, respite, home care services, nurse, kind health service, khs, kind health service llc",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Kind Hearts Service LLC",
    description: "Compassionate care for you and your loved ones.",
    url: "https://kindhs.vercel.app",
    siteName: "Kind Heart Service LLC",
    images: [
      {
        url: "/og.png",
        alt: "Kind Heart Service LLC",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kind Heart Service LLC",
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
      <head>
        <link rel="icon" href="/fav.jpg" />
      </head>
      <body className={instrument_sans.className}>
        <Navbar  />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}