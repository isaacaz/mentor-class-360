import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://mentorclass360.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mentor Class 360 — Clases de programación 100% online",
  description:
    "Aprende a programar de fundamentos a nivel avanzado, en clases 100% online y personalizadas. Desde 20 Bs la hora, con descuento por grupos.",
  keywords: [
    "clases de programación",
    "aprender a programar",
    "clases online Bolivia",
    "proyecto final de secundaria",
    "tutoría programación",
  ],
  openGraph: {
    title: "Mentor Class 360 — Aprende hoy, crea tu futuro",
    description:
      "Clases de programación 100% online, de fundamentos a nivel avanzado. Acompañamiento real desde 20 Bs la hora.",
    url: siteUrl,
    siteName: "Mentor Class 360",
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentor Class 360 — Clases de programación online",
    description:
      "Aprende a programar de fundamentos a nivel avanzado. 100% online, acompañamiento real.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f1a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
