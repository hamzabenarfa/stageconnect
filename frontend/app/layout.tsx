import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastProvider } from '@/components/providers/toaster-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stage Connect',
  description: 'Stage connect made for students to find internships',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning>
           <ToastProvider />

           {children}
        </body>
      </html>    
  )
}
