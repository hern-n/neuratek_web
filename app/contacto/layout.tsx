import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para transformar tu empresa con inteligencia artificial. Estamos en Barcelona y ofrecemos soluciones personalizadas de IA.',
  openGraph: {
    title: 'Contacto | NEURATEK',
    description: 'Contáctanos para transformar tu empresa con inteligencia artificial.',
  },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}
