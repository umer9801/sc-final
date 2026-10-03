import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Press_Start_2P, VT323, Share_Tech_Mono } from 'next/font/google'
import './globals.css'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { createMetadata } from '@/lib/metadata'
import { OrganizationStructuredData, WebSiteStructuredData, LocalBusinessStructuredData } from '@/components/structured-data'

/* pixel body — VT323 is large and very readable at body sizes */
const inter = VT323({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400'],
})

/* pixel display — Press Start 2P for headlines */
const display = Press_Start_2P({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400'],
})

/* pixel mono — Share Tech Mono for eyebrows / tags / code */
const mono = Share_Tech_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400'],
})

export const metadata = createMetadata()

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f7f6f2',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <OrganizationStructuredData />
        <WebSiteStructuredData />
        <LocalBusinessStructuredData />
      </head>
      <body className="antialiased font-sans">
        <LayoutWrapper>{children}</LayoutWrapper>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
