import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";

const mazzardSans = localFont({
  src: [
    {
      path: "../../public/fonts/MazzardL-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardL-ExtraLight.otf", 
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardL-Light.otf",
      weight: "300", 
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardL-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardL-SemiBold.otf", 
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardL-Bold.otf",
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
      path: "../../public/fonts/MazzardH-Light.otf", 
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardH-Regular.otf",
      weight: "400", 
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardH-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardH-SemiBold.otf",
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
