import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webtizen — High-Converting & Aesthetically Crafted Websites",
  description:
    "Jasa pembuatan website estetik, ultra-responsif, performa tinggi, dan berkonversi tinggi untuk brand modern. Ditenagai oleh Next.js 15+ dan desain Purply-inspired.",
  keywords: [
    "Webtizen",
    "Jasa Pembuatan Website",
    "Website Modern",
    "Landing Page Konversi Tinggi",
    "UI/UX Design",
    "Next.js Agensi Web",
  ],
  authors: [{ name: "Webtizen", url: "https://webtizen.id" }],
  creator: "Webtizen",
  publisher: "Webtizen",
  metadataBase: new URL("https://webtizen.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webtizen — High-Converting & Aesthetically Crafted Websites",
    description:
      "Jasa pembuatan website estetik, ultra-responsif, performa tinggi, dan berkonversi tinggi untuk brand modern.",
    url: "https://webtizen.id",
    siteName: "Webtizen",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Webtizen Digital Studio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webtizen — High-Converting & Aesthetically Crafted Websites",
    description:
      "Jasa pembuatan website estetik, ultra-responsif, performa tinggi, dan berkonversi tinggi untuk brand modern.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-webtizen-bg text-webtizen-text font-sans flex flex-col selection:bg-webtizen-accent selection:text-webtizen-text">
        {children}
      </body>
    </html>
  );
}
