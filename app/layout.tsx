import type { Metadata } from 'next'
import { Exo_2, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'NEURATEK - Inteligencia Artificial para Empresas',
  description: 'Automatizamos procesos, optimizamos empresas y llevamos tu negocio al futuro con inteligencia artificial.',
  keywords: ['inteligencia artificial', 'IA', 'automatización', 'software empresarial', 'desarrollo a medida'],
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
