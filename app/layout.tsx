import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "TopClean Gebäudeservice | Gebäudereinigung in Lübeck",
  description:
    "Professionelle Reinigung für Unternehmen, Praxen und Immobilien in Lübeck und Umgebung.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
