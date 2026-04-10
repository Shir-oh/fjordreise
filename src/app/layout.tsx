import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fjordreise",
  description: "Søk etter og velg ferjeavganger i en enkel bookingapp bygget med Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
