import Link from 'next/link'
import Image from 'next/image'
import { Mail, Globe, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-neuratek-gray-dark border-t border-neuratek-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.webp"
                alt="NEURATEK"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-neuratek-gray-medium text-sm leading-relaxed">
              Inteligencia Artificial para Empresas. Automatizamos procesos, optimizamos empresas y llevamos tu negocio al futuro.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                Home
              </Link>
              <Link href="/quienes-somos" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                Quiénes Somos
              </Link>
              <Link href="/contacto" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                Contáctanos
              </Link>
            </nav>
            <nav className="flex flex-col gap-2 pt-2 border-t border-neuratek-gray-medium/20">
              <Link href="/aviso-legal" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                Aviso Legal
              </Link>
              <Link href="/politica-privacidad" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/politica-cookies" className="text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors">
                Política de Cookies
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contacto@neuratek.ai" 
                className="flex items-center gap-2 text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors"
              >
                <Mail size={16} />
                contacto@neuratek.ai
              </a>
              <a 
                href="https://www.neuratek.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neuratek-gray-medium hover:text-neuratek-primary text-sm transition-colors"
              >
                <Globe size={16} />
                www.neuratek.ai
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
            © {new Date().getFullYear()} NEURATEK. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
