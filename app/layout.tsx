import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tirtha Jain - Graphic Designer & Creative Visionary",
  description:
    "Portfolio website of Tirtha Jain, a passionate graphic designer specializing in brand identity, Print Design, and creative visual solutions.",
  keywords: "graphic design, brand identity, logo design, Print Design, Ad Design, creative design, portfolio",
  authors: [{ name: "Tirtha Jain" }],
  openGraph: {
    title: "Tirtha Jain - Graphic Designer & Creative Visionary",
    description: "Portfolio website showcasing creative design solutions and brand identity work.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
