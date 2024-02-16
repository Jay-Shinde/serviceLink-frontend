import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/globals/Navbar'
import Footer from '@/components/globals/Footer'
import { ClerkProvider } from '@clerk/nextjs'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Client-App',
  description: 'Created by Krityam',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
