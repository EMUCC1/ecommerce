import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

import Navbar from "@/components/Navbar";

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Carrito Calazns",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={` ${geistMono.variable} antialiased`}>
        <Navbar />

        <main className="h-screen flex  flex-col p-8">
          <h1 className="text-5xl font-semibold font-[family-name:var(--font-geist-mono)]">
            Carrito
          </h1>

          {children}
        </main>
      </body>
    </html>
  );
}
