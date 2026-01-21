import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bobbyrobertson.dev"),
  title: {
    template: "%s | Bobby Robertson",
    default: "Bobby Robertson - Product Lead in FinTech",
  },
  description:
    "Product leader with expertise in FinTech, building user-centric financial products that serve millions of users.",
  keywords: [
    "Product Lead",
    "FinTech",
    "Product Management",
    "Financial Technology",
    "Product Strategy",
  ],
  authors: [{ name: "Bobby Robertson" }],
  creator: "Bobby Robertson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bobbyrobertson.dev",
    siteName: "Bobby Robertson",
    title: "Bobby Robertson - Product Lead in FinTech",
    description: "Product leader with expertise in FinTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bobby Robertson - Product Lead",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
