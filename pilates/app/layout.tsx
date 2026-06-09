import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})
const jost = Jost({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Pilataise — Private Pilates Club',
  description:
    'An invitation-only private Pilates studio. Strength. Poise. Balance. For women who lead.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
