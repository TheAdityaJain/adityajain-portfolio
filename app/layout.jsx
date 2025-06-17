import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aditya Jain - Full-Stack Developer Portfolio",
  description:
    "Full-Stack Developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch for collaboration.",
  keywords: "full-stack developer, react, next.js, web development, portfolio",
  authors: [{ name: "Aditya Jain" }],
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Aditya Jain - Full-Stack Developer Portfolio",
    description: "Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
