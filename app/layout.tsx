import type { Metadata } from "next";
import { League_Spartan, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NCDE — Nationaal Collectief Duurzame Energie",
  description:
    "Samen werken aan duurzame energie. NCDE helpt u stap voor stap naar een energiezuinige woning — met onafhankelijk advies, praktische oplossingen en betrouwbare uitvoerders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${leagueSpartan.variable} ${inter.variable}`}
    >
      <body className="bg-white text-gray-900 antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
