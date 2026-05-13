import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NCDE | Nationaal Collectief Duurzame Energie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
