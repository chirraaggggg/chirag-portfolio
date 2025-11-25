import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { ThemeProvider } from "../components/theme-provider"
import { ThemeChangeEffects } from "../components/theme-change-effects"
import { ParallaxBackground } from "../components/parallax-background"
import { SmoothScrollProvider } from "../components/smooth-scroll-provider"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  // metadataBase: new URL("https://www.nexxel.dev"),
  title: {
    default: "Chirag Sharma",
    template: "%s | Chirag Sharma",
  },
  description: "Developer, cardist and maker of things.",
  openGraph: {
    title: "Chirag Sharma",
    description: "Developer, cardist and maker of things.",
    // url: "https://www.nexxel.dev",
    siteName: "Chirag Sharma",
    locale: "en_US",
    type: "website",
    // images: ["https://www.nexxel.dev/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Chirag Sharma",
    card: "summary_large_image",
    creator: "@nexxeln",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased min-h-screen font-mono bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <ThemeChangeEffects />
            <ParallaxBackground />
            <div id="page-wrapper" className="min-h-screen bg-background text-foreground relative">
              <Navbar />
              <main className="max-w-4xl mx-auto px-4 py-8 pt-28">
                {children}
              </main>
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
