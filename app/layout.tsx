import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReduxProvider from './provider/ReduxProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Omi Article Summarizer',
  description: 'A Web App That Summarizes articles through AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReduxProvider>{children}</ReduxProvider>
        
      </body>
    </html>
  )
}
