import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLASM — Strategic Consulting for Complex Operations",
  description:
    "BLASM is a consulting agency specializing in Logistics, Research & Development, and Agentic Solutions. Three years of delivering measurable outcomes for enterprises navigating operational complexity.",
  keywords: [
    "consulting",
    "logistics consulting",
    "R&D consulting",
    "agentic solutions",
    "AI consulting",
    "operational excellence",
    "BLASM",
  ],
  openGraph: {
    title: "BLASM — Strategic Consulting for Complex Operations",
    description:
      "Logistics. R&D. Agentic Solutions. Three years of delivering measurable outcomes.",
    url: "https://blasm.us",
    siteName: "BLASM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLASM — Strategic Consulting for Complex Operations",
    description:
      "Logistics. R&D. Agentic Solutions. Three years of delivering measurable outcomes.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="noise min-h-full font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
