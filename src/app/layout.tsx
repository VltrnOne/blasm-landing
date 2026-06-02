import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLASM — Logistics, R&D, Agentic Solutions",
  description:
    "BLASM is a consulting agency delivering measurable outcomes in logistics, research & development, and agentic AI solutions. Three years of cross-domain execution.",
  openGraph: {
    title: "BLASM — Logistics, R&D, Agentic Solutions",
    description:
      "Cross-domain consulting. Logistics. R&D. Agentic AI. Three years of measurable outcomes.",
    url: "https://blasm.us",
    siteName: "BLASM",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
