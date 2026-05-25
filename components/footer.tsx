"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Globe, Linkedin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export function Footer() {
  const { locale } = useLanguage()
  const t = locale === 'en' ? en : es

  return (
    <footer className="bg-neuratek-gray-dark border-t border-neuratek-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
              src="/brain-circuit.svg"
              alt="NEURATEK"
              width={48}
              height={48}
              className="h-10 w-auto"
              />
            </Link>
            <p className="text-neuratek-gray-medium text-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">{t.linksTitle}</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                {t.home}
              </Link>
              <Link href="/quienes-somos" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                {t.quienesSomos}
              </Link>
              <Link href="/nuestra-marca" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                {t.nuestraMarca}
              </Link>
              <Link href="/contacto" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                {t.contactanos}
              </Link>
            </nav>
            <nav className="flex flex-col gap-2 pt-2 border-t border-neuratek-gray-medium/20">
              <Link href="/aviso-legal" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                {t.avisoLegal}
              </Link>
              <Link href="/politica-privacidad" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                {t.politicaPrivacidad}
              </Link>
              <Link href="/politica-cookies" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                {t.politicaCookies}
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">{t.contactTitle}</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contacto@neuratek-web.vercel.app" 
                className="flex items-center gap-2 text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors"
              >
                <Mail size={16} />
                contacto@neuratek-web.vercel.app
              </a>
              <a 
                href="https://neuratek-web.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors"
              >
                <Globe size={16} />
                neuratek-web.vercel.app
              </a>
              <a 
                href="https://www.linkedin.com/company/neuratek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neuratek-gray-medium/20">
          <p className="text-center text-neuratek-gray-medium text-sm">
            &copy; {new Date().getFullYear()} NEURATEK. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

const es = {
  description: 'Inteligencia Artificial para Empresas. Automatizamos procesos, optimizamos empresas y llevamos tu negocio al futuro.',
  linksTitle: 'Enlaces',
  home: 'Home',
  quienesSomos: 'Quiénes Somos',
  nuestraMarca: 'Nuestra Marca',
  contactanos: 'Contáctanos',
  avisoLegal: 'Aviso Legal',
  politicaPrivacidad: 'Política de Privacidad',
  politicaCookies: 'Política de Cookies',
  contactTitle: 'Contacto',
  copyright: 'Todos los derechos reservados.',
}

const en = {
  description: 'Artificial Intelligence for Businesses. We automate processes, optimize companies, and take your business into the future.',
  linksTitle: 'Links',
  home: 'Home',
  quienesSomos: 'About Us',
  nuestraMarca: 'Our Brand',
  contactanos: 'Contact Us',
  avisoLegal: 'Legal Notice',
  politicaPrivacidad: 'Privacy Policy',
  politicaCookies: 'Cookie Policy',
  contactTitle: 'Contact',
  copyright: 'All rights reserved.',
}
