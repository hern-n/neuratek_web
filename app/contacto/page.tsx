"use client"

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Globe, MapPin, Phone, Send } from 'lucide-react'
import { useState, FormEvent } from 'react'

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
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-neuratek-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contácta<span className="text-neuratek-primary">nos</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neuratek-gray-light text-lg leading-relaxed text-pretty">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a transformar tu empresa con inteligencia artificial.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-neuratek-gray-dark rounded-2xl p-8 border border-neuratek-gray-dark hover:border-neuratek-primary/50 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">
                Envíanos un mensaje
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-neuratek-primary/10 flex items-center justify-center mx-auto mb-4 glow-primary">
                    <Send className="w-8 h-8 text-neuratek-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-neuratek-gray-medium">
                    Nos pondremos en contacto contigo lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-neuratek-gray-light mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neuratek-dark border border-neuratek-gray-dark rounded-lg text-white placeholder-neuratek-gray-medium focus:outline-none focus:border-neuratek-primary transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neuratek-gray-light mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neuratek-dark border border-neuratek-gray-dark rounded-lg text-white placeholder-neuratek-gray-medium focus:outline-none focus:border-neuratek-primary transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-neuratek-gray-light mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neuratek-dark border border-neuratek-gray-dark rounded-lg text-white placeholder-neuratek-gray-medium focus:outline-none focus:border-neuratek-primary transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-neuratek-gray-light mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-neuratek-dark border border-neuratek-gray-dark rounded-lg text-white placeholder-neuratek-gray-medium focus:outline-none focus:border-neuratek-primary transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-neuratek-primary text-white font-semibold rounded-lg hover:bg-neuratek-light hover:text-neuratek-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 glow-primary"
                  >
                    Enviar Mensaje
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Información de contacto
                </h2>
                <p className="text-neuratek-gray-light leading-relaxed mb-8">
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
                    className="flex items-center gap-4 p-4 bg-neuratek-gray-dark rounded-xl border border-neuratek-gray-dark hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-neuratek-primary/10 flex items-center justify-center group-hover:bg-neuratek-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-neuratek-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-neuratek-gray-medium">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info Card */}
              <div className="p-6 bg-gradient-to-br from-neuratek-gray-dark to-neuratek-dark rounded-xl border border-neuratek-primary/30 hover:border-neuratek-primary/60 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 glow-primary">
                <h3 className="text-lg font-semibold text-white mb-3">
                  ¿Necesitas una consulta inicial?
                </h3>
                <p className="text-neuratek-gray-medium text-sm leading-relaxed">
                  Ofrecemos una primera reunión sin compromiso para analizar las necesidades de tu empresa y proponer soluciones personalizadas de IA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
