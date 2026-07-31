import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rangga Pradipta — Frontend Developer",
  description:
    "Portofolio frontend developer. Membangun antarmuka web modern, cepat, dan berkarakter dengan React, Next.js, dan Tailwind CSS.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Portofolio",
    "Freelance",
  ],
  authors: [{ name: "Rangga Pradipta" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Rangga Pradipta — Frontend Developer",
    description:
      "Membangun antarmuka web modern, cepat, dan berkarakter dengan React, Next.js, dan Tailwind CSS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-white text-slate-900 font-body`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
