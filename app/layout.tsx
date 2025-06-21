import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChainX - Soluciones Web3",
  description: "Soluciones de tokenización, marketplaces y wallets con cumplimiento regulatorio.",
  openGraph: {
    title: "ChainX - Soluciones Web3",
    description: "Soluciones de tokenización, marketplaces y wallets con cumplimiento regulatorio.",
    url: "https://chainx.ch",
    siteName: "ChainX",
    images: [
      {
        url: "https://chainx.ch/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChainX - Web3 para el futuro inmobiliario",
      },
    ],
    locale: "es_CH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="ChainX" />
        <link rel="canonical" href="https://chainx.ch" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
