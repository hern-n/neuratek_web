"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/contacto', label: 'Contáctanos' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neuratek-dark/95 backdrop-blur-sm border-b border-neuratek-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-all duration-200">
            <Image
              src="/logo.webp"
              alt="NEURATEK"
              width={140}
              height={39}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  pathname === link.href
                    ? 'text-neuratek-primary hover:text-neuratek-light'
                    : 'text-neuratek-gray-light hover:text-neuratek-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] ${
                  pathname === link.href
                    ? 'text-neuratek-primary hover:text-neuratek-light'
                    : 'text-neuratek-gray-light hover:text-neuratek-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
