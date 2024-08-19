import '@styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { Inter as FontSans } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loft Dashboard',
  description: 'User Dashboard for Loft Customers',
}

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>        
          {children}
      </body>
    </html>
  )
}
