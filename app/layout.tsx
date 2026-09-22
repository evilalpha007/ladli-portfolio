import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"]
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ladligaur.com"),
  title: "Ladli Gaur | Social Media Marketing Specialist & Content Creator",
  description: "Dubai-based Social Media Marketing Specialist & Content Creator with 4+ years of experience scaling communities, producing viral luxury real estate reels, and executing data-driven brand campaigns.",
  keywords: [
    "Ladli Gaur",
    "Social Media Marketing Specialist Dubai",
    "Content Creator Dubai",
    "Dubai Real Estate Reels",
    "Instagram Marketing Dubai",
    "Silver Oak Properties Marketing",
    "TikTok Creator UAE",
    "On Camera Host Dubai",
    "Luxury Real Estate Video"
  ],
  authors: [{ name: "Ladli Gaur" }],
  creator: "Ladli Gaur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ladligaur.com",
    title: "Ladli Gaur | Social Media Marketing Specialist & Content Creator",
    description: "Turning brands into stories, and stories into followers. Dubai-based social strategist, luxury real estate content creator, and on-camera presenter.",
    siteName: "Ladli Gaur Portfolio",
    images: [
      {
        url: "/images/main-hero-image.png",
        width: 1200,
        height: 630,
        alt: "Ladli Gaur - Social Media Marketing Specialist & Content Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ladli Gaur | Social Media Marketing Specialist & Content Creator",
    description: "Dubai-based social strategist and content creator with 35K+ community and proven luxury real estate marketing growth.",
    images: ["/images/main-hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakartaSans.variable} font-sans-clean antialiased selection:bg-[#C87548] selection:text-white`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#121214] flex flex-col relative">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 w-full overflow-hidden">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
