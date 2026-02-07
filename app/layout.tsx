import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Sarthi - Healthcare Access for Every Village",
  description:
    "AI-powered telemedicine platform providing accessible healthcare through voice-based symptom analysis, multilingual support, and offline capabilities.",
}

export const viewport: Viewport = {
  themeColor: "#0B6E99",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
