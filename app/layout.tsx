import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#16060e" },
    { media: "(prefers-color-scheme: light)", color: "#faf5ee" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Muhammad Abdullah Jamil · Full Stack Developer",
  description:
    "Full stack developer from Karachi, Pakistan shipping real-time collaborative apps and AI-assisted engineering with production-grade standards.",
  keywords: [
    "Muhammad Abdullah Jamil",
    "Full Stack Developer",
    "Karachi",
    "Pakistan",
    "React",
    "Next.js",
    "TypeScript",
    "Yjs",
    "WebSockets",
    "Node.js",
    "Agentic AI",
    "Orbito",
  ],
  authors: [{ name: "Muhammad Abdullah Jamil" }],
  openGraph: {
    title: "Muhammad Abdullah Jamil · Full Stack Developer",
    description:
      "Full stack developer shipping real-time projects with AI agents. Open to internships and full-time roles.",
    url: "https://portfolio-abdullah.vercel.app",
    siteName: "Muhammad Abdullah Jamil Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-[#e8c98a] selection:text-[#16060e]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
