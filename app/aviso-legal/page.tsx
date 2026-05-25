import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso Legal de NEURATEK. Información sobre la titularidad del sitio web y condiciones de uso.',
}

export default async function AvisoLegalPage() {
  const cookieStore = await cookies()
  const locale = cookieStore.get('locale')?.value || 'es'
  const dict = await getDictionary(locale)

  return (
    <main className="min-h-screen bg-neuratek-dark">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuratek-primary/[0.07] via-neuratek-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-neuratek-primary/60" />
            <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">{dict.avisoLegal.label}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="w-10 h-10 text-neuratek-primary" />
            {dict.avisoLegal.title}
          </h1>

          <div className="space-y-8 text-white/80 leading-relaxed">
            {dict.avisoLegal.sections.map((section, index) => (
              <section key={index} className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-sm">{section.content}</p>
                {section.items && (
                  <ul className="space-y-2 text-sm">
                    {section.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
