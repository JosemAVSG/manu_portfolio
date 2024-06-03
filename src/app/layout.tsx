import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/font";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Manuel Blanco's Portfolio",
  description: "Personal Portfolio by Manuel Blanco",
  keywords:"Portfolio Website, Portfolio, Manuel Blanco, Manuel Blanco's Portfolio, Web Developer, Web Design, Next.js, React, Vercel, Javascript, HTML, CSS, Tailwind CSS ",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
