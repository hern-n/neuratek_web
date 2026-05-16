"use client"

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Mail, Globe, MapPin, Phone, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Introduce un email válido'),
  empresa: z.string().optional(),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  consentimiento: z.literal(true, { errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }) }),
})

type ContactForm = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@neuratek.ai',
    href: 'mailto:contacto@neuratek.ai',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+34 93 123 45 67',
    href: 'tel:+34931234567',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Passeig de Gràcia, 08007 Barcelona',
    href: '#',
  },
  {
    icon: Globe,
    label: 'Web',
    value: 'www.neuratek.ai',
    href: 'https://www.neuratek.ai',
  },
]

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = () => {
    console.log('Form submitted')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-neuratek-dark">
        <Navbar />
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neuratek-primary/[0.07] via-neuratek-primary/[0.02] to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10 text-center py-20">
            <div className="w-16 h-16 rounded-full bg-neuratek-primary/15 flex items-center justify-center mx-auto mb-4 glow-primary-lg">
              <Send className="w-8 h-8 text-neuratek-light" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">¡Mensaje enviado!</h1>
            <p className="text-white/60">Nos pondremos en contacto contigo lo antes posible.</p>
          </div>
        </section>
        <Footer />
        <WhatsAppButton />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-neuratek-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuratek-primary/[0.07] via-neuratek-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-neuratek-primary/60" />
            <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Contacto</span>
            <div className="h-px w-8 bg-neuratek-primary/60" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contácta<span className="text-neuratek-primary">nos</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed text-pretty">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a transformar tu empresa con inteligencia artificial.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* Contact Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neuratek-primary/[0.03] via-transparent to-neuratek-primary/[0.02] overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-neuratek-deep/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-2xl p-8 border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envíanos un mensaje
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-white/80 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      autoComplete="name"
                      {...register('nombre')}
                      className="w-full px-4 py-3 bg-neuratek-dark/80 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neuratek-primary transition-colors"
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && <p className="mt-1 text-sm text-red-400">{errors.nombre.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      {...register('email')}
                      className="w-full px-4 py-3 bg-neuratek-dark/80 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neuratek-primary transition-colors"
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-white/80 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      autoComplete="organization"
                      {...register('empresa')}
                      className="w-full px-4 py-3 bg-neuratek-dark/80 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neuratek-primary transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-white/80 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      rows={5}
                      autoComplete="off"
                      {...register('mensaje')}
                      className="w-full px-4 py-3 bg-neuratek-dark/80 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neuratek-primary transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                    {errors.mensaje && <p className="mt-1 text-sm text-red-400">{errors.mensaje.message}</p>}
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consentimiento"
                      {...register('consentimiento')}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-neuratek-dark/80 text-neuratek-primary focus:ring-neuratek-primary"
                    />
                    <label htmlFor="consentimiento" className="text-sm text-white/60">
                      He leído y acepto la{' '}
                      <Link href="/politica-privacidad" className="text-neuratek-primary hover:text-neuratek-light underline">
                        Política de Privacidad
                      </Link>{' '}
                      y consiento el tratamiento de mis datos para recibir información sobre los servicios de NEURATEK.
                    </label>
                  </div>
                  {errors.consentimiento && <p className="text-sm text-red-400">{errors.consentimiento.message}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-neuratek-primary text-white font-semibold rounded-lg hover:bg-neuratek-light hover:text-neuratek-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 glow-primary-lg shadow-lg shadow-neuratek-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Enviar Mensaje
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Información de contacto
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-8">
                    Estamos disponibles para resolver cualquier duda sobre nuestros servicios de inteligencia artificial y desarrollo de software a medida.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neuratek-primary/20 to-neuratek-deep/20 flex items-center justify-center group-hover:from-neuratek-primary/35 group-hover:to-neuratek-deep/35 transition-all duration-300">
                        <info.icon className="w-6 h-6 text-neuratek-light" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Additional Info Card */}
                <div className="p-6 bg-gradient-to-br from-neuratek-primary/[0.06] to-neuratek-dark rounded-xl border border-neuratek-primary/30 hover:border-neuratek-primary/60 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 glow-primary-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    ¿Necesitas una consulta inicial?
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Ofrecemos una primera reunión sin compromiso para analizar las necesidades de tu empresa y proponer soluciones personalizadas de IA.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
