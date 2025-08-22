import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Futuristic Freelancer - Web Developer',
  description: 'Cutting-edge websites for bold brands. Freelance web developer specializing in modern, performant web experiences.',
  keywords: 'web developer, freelance, React, Next.js, TypeScript, modern websites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
