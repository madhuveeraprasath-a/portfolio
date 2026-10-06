import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Madhuveeraprasath Anguraj — Senior Frontend Engineer",
  description: "Senior Frontend Engineer | React · Next.js · React Native | AI Agent Builder | 5+ Years in SaaS & EdTech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
