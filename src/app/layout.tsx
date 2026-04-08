import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fjordreise",
  description: "Search and select ferry departures in a minimal booking app built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
