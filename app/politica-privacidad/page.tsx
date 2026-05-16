import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de NEURATEK. Información sobre el tratamiento de tus datos personales.',
}

export default function PoliticaPrivacidadPage() {
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
            <Shield className="w-10 h-10 text-neuratek-primary" />
            Política de Privacidad
          </h1>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">1. Responsable del Tratamiento</h2>
              <p className="text-sm">
                NEURATEK, con domicilio en Passeig de Gràcia, 08007 Barcelona, es el responsable del tratamiento de los datos personales facilitados a través de este sitio web.
              </p>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">2. Finalidad del Tratamiento</h2>
              <p className="text-sm">
                Los datos recogidos a través del formulario de contacto se utilizan exclusivamente para gestionar consultas comerciales y ofrecer información sobre nuestros servicios. No se utilizan para la toma de decisiones automatizadas.
              </p>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">3. Legitimación</h2>
              <p className="text-sm">
                La base legal para el tratamiento de tus datos es el consentimiento prestado mediante la aceptación de esta política de privacidad.
              </p>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">4. Derechos</h2>
              <p className="text-sm">
                Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a contacto@neuratek.ai.
              </p>
            </section>

            <section className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">5. Conservación</h2>
              <p className="text-sm">
                Tus datos se conservarán durante el tiempo necesario para atender tu consulta y, en su caso, durante los plazos legales establecidos.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
