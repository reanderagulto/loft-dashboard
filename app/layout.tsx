import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import CustomLayout from './components/CustomLayout/CustomLayout';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loft Dashboard',
  description: 'User Dashboard for Loft Customers',
}

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
