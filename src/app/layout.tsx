import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astron - onlayn repetitor",
  description:
    "ASTRON -  abiturientlar, o'quvchilar, repetitorlar va o'qituvchilar uchun mo'ljallangan mobil ilova.",
  openGraph: {
    type: "website",
    url: "https://astron-website.vercel.app/",
    title: "Astron - onlayn repetitor",
    description:
      "ASTRON -  abiturientlar, o'quvchilar, repetitorlar va o'qituvchilar uchun mo'ljallangan mobil ilova.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "astron app logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
