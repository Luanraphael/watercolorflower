import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "100 Step-by-Step Watercolor Flower Course",
  description:
    "Learn how to paint 100 watercolor flowers from scratch, even if you've never painted before, with a simple, illustrated step-by-step course.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2f8068",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
        <link rel="preload" as="image" href="/assets/wc/paper.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
