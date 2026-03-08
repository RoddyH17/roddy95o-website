import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roddy Huang | 9\u26605\u2666",
  description:
    "Quantitative researcher, philosopher, poker player. Finding alpha where others see noise.",
  metadataBase: new URL("https://roddy95o.com"),
  openGraph: {
    title: "Roddy Huang | 9\u26605\u2666",
    description:
      "Quantitative researcher, philosopher, poker player. Finding alpha where others see noise.",
    url: "https://roddy95o.com",
    siteName: "Roddy Huang",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roddy Huang | 9\u26605\u2666",
    description:
      "Quantitative researcher, philosopher, poker player. Finding alpha where others see noise.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
