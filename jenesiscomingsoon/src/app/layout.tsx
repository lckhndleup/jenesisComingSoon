import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jenesis - Buhar Jenaratörü | Buhar Kazanı | Verimli Buhar Üretimi",
  description:
    "1984'ten bu yana endüstriyel buhar çözümlerinde güvenilir ortağınız. Jenesis ile enerji tasarruflu buhar jeneratörleri ve kesintisiz üretim garantisi.",
  openGraph: {
    title: "Jenesis - Buhar Jenaratörü | Buhar Kazanı | Verimli Buhar Üretimi",
    description:
      "1984'ten bu yana endüstriyel buhar çözümlerinde güvenilir ortağınız. Jenesis ile enerji tasarruflu buhar jeneratörleri ve kesintisiz üretim garantisi.",
    url: "https://www.jenesis.com.tr",
    siteName: "Jenesis",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.jenesis.com.tr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jenesis Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenesis - Buhar Jenaratörü | Buhar Kazanı | Verimli Buhar Üretimi",
    description:
      "1984'ten bu yana endüstriyel buhar çözümlerinde güvenilir ortağınız. Jenesis ile enerji tasarruflu buhar jeneratörleri ve kesintisiz üretim garantisi.",
    images: ["https://www.jenesis.com.tr/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
