import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixel = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Andres Corrales — Portfolio",
    template: "%s | Andres Corrales",
  },
  description: "Personal portfolio showcasing coding projects, research, and experiments.",
  metadataBase: new URL("https://andres‑corrales.dev"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          pixel.variable, 
          "antialiased bg-black text-white",
        ].join(" ")}
      >
        <Header />
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
