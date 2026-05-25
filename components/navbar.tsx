"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { LanguageToggle } from '@/components/language-toggle'
import { useLanguage } from '@/lib/i18n/language-context'

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale } = useLanguage()
  const t = (locale === 'en' ? enDict : esDict).navbar

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neuratek-dark/95 backdrop-blur-sm border-b border-neuratek-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Language Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-all duration-200">
              <Image
                src="/brain-circuit.svg"
                alt="NEURATEK"
                width={40}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <LanguageToggle />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                pathname === '/'
                  ? 'text-neuratek-primary hover:text-neuratek-light'
                  : 'text-neuratek-gray-light hover:text-neuratek-light'
              }`}
            >
              {t.home}
            </Link>
            <Link
              href="/quienes-somos"
              className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                pathname === '/quienes-somos'
                  ? 'text-neuratek-primary hover:text-neuratek-light'
                  : 'text-neuratek-gray-light hover:text-neuratek-light'
              }`}
            >
              {t.quienesSomos}
            </Link>
            <Link
              href="/nuestra-marca"
              className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                pathname === '/nuestra-marca'
                  ? 'text-neuratek-primary hover:text-neuratek-light'
                  : 'text-neuratek-gray-light hover:text-neuratek-light'
              }`}
            >
              {t.nuestraMarca}
            </Link>
            <Link
              href="/contacto"
              className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                pathname === '/contacto'
                  ? 'text-neuratek-primary hover:text-neuratek-light'
                  : 'text-neuratek-gray-light hover:text-neuratek-light'
              }`}
            >
              {t.contactanos}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neuratek-gray-light hover:text-neuratek-primary hover:scale-110 active:scale-90 transition-all duration-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neuratek-dark border-t border-neuratek-gray-dark">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                pathname === '/'
                  ? 'text-neuratek-primary hover:text-neuratek-light'
                  : 'text-neuratek-gray-light hover:text-neuratek-light'
              }`}
            >
              {t.home}
            </Link>
            <Link
              href="/quienes-somos"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                pathname === '/quienes-somos'
                  ? 'text-neuratek-primary hover:text-neuratek-light'
                  : 'text-neuratek-gray-light hover:text-neuratek-light'
              }`}
            >
              {t.quienesSomos}
            </Link>
            <Link
              href="/nuestra-marca"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                pathname === '/nuestra-marca'
                  ? 'text-neuratek-primary hover:text-neuratek-light'
                  : 'text-neuratek-gray-light hover:text-neuratek-light'
              }`}
            >
              {t.nuestraMarca}
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                pathname === '/contacto'
                  ? 'text-neuratek-primary hover:text-neuratek-light'
                  : 'text-neuratek-gray-light hover:text-neuratek-light'
              }`}
            >
              {t.contactanos}
            </Link>
            <div className="pt-2 border-t border-neuratek-gray-dark">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

const esDict = {
  navbar: {
    home: 'Home',
    quienesSomos: 'Quiénes Somos',
    nuestraMarca: 'Nuestra Marca',
    contactanos: 'Contáctanos',
  },
}

const enDict = {
  navbar: {
    home: 'Home',
    quienesSomos: 'About Us',
    nuestraMarca: 'Our Brand',
    contactanos: 'Contact Us',
  },
}
