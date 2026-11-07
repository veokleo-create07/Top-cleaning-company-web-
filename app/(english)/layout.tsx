import type { Metadata } from "next";
import { sharedMetadata } from "@/lib/seo";
import "@fontsource-variable/inter";
import "../globals.css";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "TopClean Gebäudeservice | Gebäudereinigung in Lübeck",
  description:
    "Professionelle Reinigung für Unternehmen, Praxen und Immobilien in Lübeck und Umgebung.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "TopClean Gebäudeservice | Gebäudereinigung in Lübeck",
    description:
      "Professionelle Reinigung für Unternehmen, Praxen und Immobilien in Lübeck und Umgebung.",
    type: "website",
    locale: "de_DE",
    siteName: "TopClean Gebäudeservice",
    url: "/",
  },
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
