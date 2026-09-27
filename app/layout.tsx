import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Press_Start_2P, VT323, Share_Tech_Mono } from 'next/font/google'
import './globals.css'
import { SiteShell } from '@/components/site-shell'

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

export const metadata: Metadata = {
  title: {
    default: 'Solvix Core — Digital Engineering Studio',
    template: '%s — Solvix Core',
  },
  description:
    'Solvix Core designs and engineers websites, software, AI systems and automation that help ambitious businesses operate better and grow faster.',
  keywords: [
    'digital engineering',
    'web development',
    'SaaS development',
    'AI automation',
    'n8n',
    'custom software',
    'Canada technology company',
  ],
  openGraph: {
    title: 'Solvix Core — Digital Engineering Studio',
    description:
      'We build digital systems that move business. Websites, software, AI systems and automation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f6f2',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="antialiased font-sans">
        <SiteShell>{children}</SiteShell>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
