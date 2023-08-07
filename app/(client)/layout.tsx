import Header from "@/components/Header";
import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Flaifl Blog",
  description: "Medical translation Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={`max-w-7xl mx-auto`}>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
