import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import NavBar from "@/components/Navbar/NavBar";
import { ThemeProvider } from "@/hooks/ThemeProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 SEO-Optimized Metadata
export const metadata: Metadata = {
  title: {
    default: "Gausul Wara – Creative Developer",
    template: "%s | Gausul Wara",
  },
  description:
    "Portfolio of Gausul Wara — a creative but lazy developer who builds clean, performant web experiences using Next.js, React, and modern UI tools.",

  keywords: [
    "Gausul Wara",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Creative Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
  ],

  authors: [{ name: "Gausul Wara" }],
  creator: "Gausul Wara",

  openGraph: {
    title: "Gausul Wara – Creative Developer",
    description:
      "Creative but lazy developer crafting modern web apps with Next.js, React, and clean UI.",
    url: "https://your-domain.com", // 🔁 replace when deployed
    siteName: "Gausul Portfolio",
    images: [
      {
        url: "/Logo.png", // from public folder
        width: 1200,
        height: 630,
        alt: "Gausul Wara Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gausul Wara – Creative Developer",
    description:
      "Creative but lazy developer building modern web experiences with Next.js.",
    images: ["/Logo.png"],
  },

  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },

  metadataBase: new URL("https://your-domain.com"), // 🔁 replace later
};

// Script to prevent flash of incorrect theme
const themeInitScript = `
  (function() {
    try {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
