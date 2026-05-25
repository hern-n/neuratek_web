import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso Legal de NEURATEK. Información sobre la titularidad del sitio web y condiciones de uso.',
}

export default function AvisoLegalPage() {
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
            <Scale className="w-10 h-10 text-neuratek-primary" />
            Aviso Legal
          </h1>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">1. Datos Identificativos</h2>
              <ul className="space-y-2 text-sm">
                <li><strong className="text-white">Denominación social:</strong> NEURATEK</li>
                <li><strong className="text-white">Dirección:</strong> Passeig de Gràcia, 08007 Barcelona</li>
                <li><strong className="text-white">Email:</strong> contacto@neuratek-web.vercel.app</li>
                <li><strong className="text-white">Web:</strong> neuratek-web.vercel.app</li>
              </ul>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">2. Propiedad Intelectual</h2>
              <p className="text-sm">
                Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño, etc.) son propiedad de NEURATEK o de sus legítimos titulares. Queda prohibida la reproducción, distribución o modificación sin autorización expresa.
              </p>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">3. Exención de Responsabilidad</h2>
              <p className="text-sm">
                NEURATEK no se hace responsable de los daños o perjuicios derivados del uso del sitio web ni de los contenidos enlazados a sitios de terceros.
              </p>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">4. Legislación Aplicable</h2>
              <p className="text-sm">
                Las presentes condiciones se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales de Barcelona.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
