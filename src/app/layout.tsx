import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Velora",
  description: "Discover products you love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-black text-white antialiased",
          geist.variable,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
