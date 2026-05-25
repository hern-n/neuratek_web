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
  metadataBase: new URL('https://neuratek-web.vercel.app'),
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
    url: 'https://neuratek-web.vercel.app',
    images: [{ url: '/brain-circuit.svg', width: 256, height: 256, alt: 'NEURATEK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEURATEK - Inteligencia Artificial para Empresas',
    description: 'Automatizamos procesos, optimizamos empresas y llevamos tu negocio al futuro con inteligencia artificial.',
    images: ['/brain-circuit.svg'],
  },
  icons: {
    icon: [
      { url: '/brain-circuit-dark.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: light)' },
      { url: '/brain-circuit.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: dark)' },
    ],
    apple: { url: '/brain-circuit.svg', sizes: '256x256', type: 'image/svg+xml' },
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
