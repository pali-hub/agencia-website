import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";

const mazzardSans = localFont({
  src: [
    {
      path: "../fonts/mazzard/MazzardL-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/mazzard/MazzardL-ExtraLight.otf", 
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/mazzard/MazzardL-Light.otf",
      weight: "300", 
      style: "normal",
    },
    {
      path: "../fonts/mazzard/MazzardL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/mazzard/MazzardL-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/mazzard/MazzardL-SemiBold.otf", 
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/mazzard/MazzardL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mazzard-sans",
  display: "swap",
});

const mazzardMono = localFont({
  src: [
    {
      path: "../fonts/mazzard/MazzardH-Light.otf", 
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/mazzard/MazzardH-Regular.otf",
      weight: "400", 
      style: "normal",
    },
    {
      path: "../fonts/mazzard/MazzardH-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/mazzard/MazzardH-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mazzard-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agência Digital - Experiências digitais claras e bonitas",
  description: "Estratégia, design e desenvolvimento para marcas que querem modernidade sem complicação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${mazzardSans.variable} ${mazzardMono.variable} antialiased`}>
        <LenisProvider>
          <Header />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
