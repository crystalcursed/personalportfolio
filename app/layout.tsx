import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nandan Tandel - Software Engineer Portfolio",
  description:
    "Aspiring Software Engineer | Innovator in Tech - Portfolio showcasing projects, skills, and experience in full-stack development and machine learning.",
  keywords: "software engineer, full-stack developer, machine learning, portfolio, computer engineering",
  authors: [{ name: "Nandan Tandel" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
