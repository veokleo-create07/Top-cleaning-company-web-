import type { Metadata } from "next";
import { sharedMetadata } from "@/lib/seo";
import "@fontsource-variable/inter";
import "../globals.css";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "TopClean Building Services | Commercial Cleaning in Lübeck",
  description:
    "Professional cleaning for businesses, medical practices and properties in Lübeck and the surrounding area.",
  alternates: { canonical: "/en" },
  openGraph: {
    title: "TopClean Building Services | Commercial Cleaning in Lübeck",
    description:
      "Professional cleaning for businesses, medical practices and properties in Lübeck and the surrounding area.",
    type: "website",
    locale: "en_US",
    siteName: "TopClean Gebäudeservice",
    url: "/en",
  },
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
