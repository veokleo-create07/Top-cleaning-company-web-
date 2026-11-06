import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "../globals.css";

export const metadata: Metadata = {
  title: "TopClean Building Services | Commercial Cleaning in Lübeck",
  description:
    "Professional cleaning for businesses, medical practices and properties in Lübeck and the surrounding area.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
