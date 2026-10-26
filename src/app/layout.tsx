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
  title: "Webtizen - Jasa Pembuatan Website Modern & Estetik",
  description:
    "Jasa pembuatan website estetik, ultra-responsif, performa tinggi, dan berkonversi tinggi untuk brand modern.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen bg-webtizen-bg text-webtizen-text font-sans flex flex-col selection:bg-webtizen-accent selection:text-webtizen-text">
        {children}
      </body>
    </html>
  );
}
