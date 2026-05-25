import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cookie } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de NEURATEK. Información sobre el uso de cookies en nuestro sitio web.',
}

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-neuratek-dark">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuratek-primary/[0.07] via-neuratek-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-neuratek-primary/60" />
            <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 flex items-center gap-3">
            <Cookie className="w-10 h-10 text-neuratek-primary" />
            Política de Cookies
          </h1>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="text-sm">
                Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Permiten mejorar la experiencia de navegación y recoger información estadística.
              </p>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">2. Tipos de Cookies Utilizadas</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-white">Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web. No requieren consentimiento.
                </li>
                <li>
                  <strong className="text-white">Cookies de análisis:</strong> Utilizamos Vercel Analytics para recopilar datos anónimos sobre el uso del sitio (páginas visitadas, tiempo de navegación). No almacenan información personal.
                </li>
              </ul>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">3. Gestión de Cookies</h2>
              <p className="text-sm">
                Puedes configurar tu navegador para rechazar o eliminar cookies. A continuación, los enlaces a la configuración de los navegadores más comunes:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-neuratek-primary">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:text-neuratek-light transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="hover:text-neuratek-light transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:text-neuratek-light transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="hover:text-neuratek-light transition-colors">Microsoft Edge</a></li>
              </ul>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">4. Contacto</h2>
              <p className="text-sm">
                Para cualquier duda sobre nuestra política de cookies, puedes escribirnos a contacto@neuratek-web.vercel.app.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
