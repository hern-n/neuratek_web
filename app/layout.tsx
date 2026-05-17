import type { Metadata } from 'next'
import { Exo_2, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const exo2 = Exo_2({ 
  subsets: ["latin"],
  variable: '--font-exo2',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.neuratek.ai'),
  title: {
    default: 'NEURATEK - Inteligencia Artificial para Empresas',
    template: '%s | NEURATEK',
  },
  description: 'Automatizamos procesos, optimizamos empresas y llevamos tu negocio al futuro con inteligencia artificial.',
  keywords: ['inteligencia artificial', 'IA', 'automatización', 'software empresarial', 'desarrollo a medida'],
  authors: [{ name: 'NEURATEK' }],
  creator: 'NEURATEK',
  publisher: 'NEURATEK',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'NEURATEK',
    title: 'NEURATEK - Inteligencia Artificial para Empresas',
    description: 'Automatizamos procesos, optimizamos empresas y llevamos tu negocio al futuro con inteligencia artificial.',
    url: 'https://www.neuratek.ai',
    images: [{ url: '/logo.webp', width: 140, height: 39, alt: 'NEURATEK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEURATEK - Inteligencia Artificial para Empresas',
    description: 'Automatizamos procesos, optimizamos empresas y llevamos tu negocio al futuro con inteligencia artificial.',
    images: ['/logo.webp'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-[#14202C]">
      <body className={`${exo2.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
