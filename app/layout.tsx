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
  title: "Karl Camaro - Frontend Developer & Community Manager",
  description:
    "Frontend Developer and Community Manager from Peru to Italy. Specialized in React, Next.js, TypeScript, and content moderation. Building modern web experiences.",
  keywords: [
    "Karl Camaro",
    "Frontend Developer",
    "Community Manager",
    "Content Moderator",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Italy",
  ],
  authors: [{ name: "Karl Hervin Camaro Porta" }],
  creator: "Karl Hervin Camaro Porta",
  publisher: "Karl Camaro",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karl-camaro-portfolio.vercel.app",
    title: "Karl Camaro - Frontend Developer & Community Manager",
    description:
      "Frontend Developer and Community Manager from Peru to Italy. Building modern web experiences with React, Next.js, and TypeScript.",
    siteName: "Karl Camaro Portfolio",
    images: [
      {
        url: "/images/karl-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Karl Camaro - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karl Camaro - Frontend Developer & Community Manager",
    description:
      "Frontend Developer and Community Manager. Building modern web experiences.",
    images: ["/images/karl-photo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-primary transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
