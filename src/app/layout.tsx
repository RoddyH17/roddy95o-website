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
  title: "KOL Winrate · Roddy Huang",
  description:
    "Crypto KOL prediction accuracy tracker — Snowflake-decoded timestamps × CoinGecko historical prices.",
  metadataBase: new URL("https://roddy95o.com"),
  openGraph: {
    title: "KOL Winrate · Roddy Huang",
    description:
      "Crypto KOL prediction accuracy tracker — Snowflake-decoded timestamps × CoinGecko historical prices.",
    url: "https://roddy95o.com",
    siteName: "KOL Winrate",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOL Winrate · Roddy Huang",
    description:
      "Crypto KOL prediction accuracy tracker — Snowflake-decoded timestamps × CoinGecko historical prices.",
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
