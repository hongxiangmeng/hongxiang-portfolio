import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hongxiang Meng | Clinical Pharmacology, HEOR & RWE",
  description: "Portfolio of Hongxiang Meng, a Clinical Pharmacology MSc with interests in HEOR, real-world evidence, evidence synthesis and healthcare data analytics.",
  keywords: [
    "Hongxiang Meng",
    "Clinical Pharmacology",
    "HEOR",
    "Real-World Evidence",
    "RWE",
    "Evidence Synthesis",
    "Meta-analysis",
    "Health Economics",
    "Healthcare Data Analytics",
    "Clinical Research",
  ],
  openGraph: {
    title: "Hongxiang Meng | Clinical Pharmacology, HEOR & RWE",
    description: "Portfolio of Hongxiang Meng, a Clinical Pharmacology MSc with interests in HEOR, real-world evidence, evidence synthesis and healthcare data analytics.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
