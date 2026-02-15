import { Metadata } from "next";

import AboutMe from "@/components/AboutMe/AboutMe";
import Achievments from "@/components/Achievments/Achievments";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import GitHub from "@/components/GitHub/GitHub";
import Hero from "@/components/HeroSection/Hero";
import Projects from "@/components/Projects/Projects";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  title: "Gausul Wara | Backend-Focused Software Developer",
  description:
    "Portfolio of Gausul Wara — Backend-focused Software Developer specializing in Java 17, Spring Boot, Node.js, real-time analytics systems, and performance-driven backend architectures.",

  keywords: [
    "Gausul Wara",
    "Backend Developer",
    "Java Developer",
    "Spring Boot",
    "Node.js",
    "MySQL",
    "Kafka",
    "Docker",
    "AWS",
    "System Design",
    "Real-time Analytics",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Gausul Wara" }],
  creator: "Gausul Wara",

  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Gausul Wara | Backend-Focused Software Developer",
    description:
      "Backend engineer building high-performance analytics systems, scalable REST APIs, and containerized applications using Java, Spring Boot, MySQL, Docker, and AWS.",
    siteName: "Gausul Wara Portfolio",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Gausul Wara Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gausul Wara | Backend-Focused Software Developer",
    description:
      "Backend-focused engineer specializing in scalable architectures, real-time processing, and performance optimization.",
    images: ["/Logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="px-8 md:mx-auto md:max-w-[720px]">
      <Hero />
      <Experience />
      <Projects />
      <AboutMe />
      <GitHub />
      {/* <Achievments /> */}
      <Footer />
    </div>
  );
};

export default Page;
