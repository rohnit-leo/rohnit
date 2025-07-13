import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Infarise Technology Pvt. Ltd. – Scalable IT Manpower & Tech Solutions",
  description:
    "Infarise Technology is a trusted IT manpower outsourcing and technical support provider helping businesses grow with reliable talent and expert tech services since 2020.",
  keywords:
    "IT services, manpower outsourcing, technical support, cloud solutions, DevOps, IT consulting, AMC, New Delhi",
  authors: [{ name: "Infarise Technology Pvt. Ltd." }],
  openGraph: {
    title: "Infarise Technology Pvt. Ltd. – Scalable IT Manpower & Tech Solutions",
    description:
      "Trusted IT manpower outsourcing and technical support provider helping businesses grow with reliable talent and expert tech services since 2020.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
