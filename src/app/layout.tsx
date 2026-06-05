import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "KOL Tracking · Roddy Huang",
  description:
    "Crypto KOL leaderboard — KOL Index + sentiment + style aggregation across 市场影响力 traders & analysts.",
  metadataBase: new URL("https://roddy95o.com"),
  openGraph: {
    title: "KOL Tracking · Roddy Huang",
    description:
      "Crypto KOL leaderboard — KOL Index + sentiment + style aggregation.",
    url: "https://roddy95o.com",
    siteName: "KOL Tracking",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOL Tracking · Roddy Huang",
    description:
      "Crypto KOL leaderboard — KOL Index + sentiment + style aggregation.",
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
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
