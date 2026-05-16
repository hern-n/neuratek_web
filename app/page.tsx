import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Brain, Cog, Code, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Brain,
    title: 'Automatización con IA',
    description: 'Automatización de procesos empresariales con inteligencia artificial avanzada.',
  },
  {
    icon: Code,
    title: 'Software a Medida',
    description: 'Desarrollo de software inteligente adaptado a las necesidades de tu empresa.',
  },
  {
    icon: Cog,
    title: 'Integración de IA',
    description: 'Integración de inteligencia artificial en tus sistemas empresariales existentes.',
  },
  {
    icon: BarChart3,
    title: 'Optimización y Análisis',
    description: 'Optimización y análisis de procesos mediante IA para mejorar la eficiencia.',
  },
]

const features = [
  'Análisis completo de empresa',
  'Desarrollo de solución personalizada',
  'Implementación profesional',
  'Formación básica incluida',
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neuratek-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Neural network decoration */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-neuratek-primary/10 flex items-center justify-center glow-primary">
                  <Brain className="w-12 h-12 text-neuratek-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-neuratek-light animate-pulse" />
                <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-neuratek-deep animate-pulse delay-300" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              NEURA<span className="text-neuratek-primary">TEK</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neuratek-primary font-medium">
              Inteligencia Artificial para Empresas
            </p>
            <p className="max-w-2xl mx-auto text-neuratek-gray-light text-lg leading-relaxed text-pretty">
              Automatizamos procesos, optimizamos empresas y llevamos tu negocio al futuro con inteligencia artificial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neuratek-primary text-white font-semibold rounded-lg hover:bg-neuratek-light hover:text-neuratek-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 glow-primary"
              >
                Solicitar Información
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/quienes-somos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neuratek-gray-medium text-neuratek-gray-light font-semibold rounded-lg hover:border-neuratek-primary hover:text-neuratek-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neuratek-gray-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-neuratek-gray-medium max-w-2xl mx-auto">
              Soluciones de inteligencia artificial diseñadas para transformar tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-neuratek-gray-dark rounded-xl border border-neuratek-gray-dark hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-neuratek-primary/10 flex items-center justify-center mb-4 group-hover:bg-neuratek-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-neuratek-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-neuratek-gray-medium text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Modelo de Precios
            </h2>
            <p className="text-neuratek-gray-medium max-w-2xl mx-auto">
              Inversión transparente para la transformación digital de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Package */}
            <div className="p-8 bg-gradient-to-br from-neuratek-gray-dark to-neuratek-dark rounded-2xl border border-neuratek-primary/30 hover:border-neuratek-primary/60 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 glow-primary">
              <div className="mb-6">
                <span className="text-neuratek-primary text-sm font-medium uppercase tracking-wider">
                  Proyecto Estándar
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">18.000€</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-neuratek-gray-light">
                    <CheckCircle className="w-5 h-5 text-neuratek-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contacto"
                className="block text-center px-6 py-3 bg-neuratek-primary text-white font-semibold rounded-lg hover:bg-neuratek-light hover:text-neuratek-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Solicitar Presupuesto
              </Link>
            </div>

            {/* Additional Services */}
            <div className="space-y-4">
              <div className="p-6 bg-neuratek-gray-dark rounded-xl border border-neuratek-gray-dark hover:border-neuratek-primary/50 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-semibold">Mantenimiento Mensual</h4>
                    <p className="text-neuratek-gray-medium text-sm mt-1">
                      Soporte técnico y actualizaciones
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-neuratek-primary">600€/mes</span>
                </div>
              </div>

              <div className="p-6 bg-neuratek-gray-dark rounded-xl border border-neuratek-gray-dark hover:border-neuratek-primary/50 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-semibold">Visitas Técnicas</h4>
                    <p className="text-neuratek-gray-medium text-sm mt-1">
                      Asistencia presencial + transporte
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-neuratek-primary">1.500€</span>
                </div>
              </div>

              <div className="p-6 bg-neuratek-gray-dark rounded-xl border border-neuratek-gray-dark hover:border-neuratek-primary/50 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-semibold">Mejoras y Ampliaciones</h4>
                    <p className="text-neuratek-gray-medium text-sm mt-1">
                      Según necesidades del proyecto
                    </p>
                  </div>
                  <span className="text-lg font-bold text-neuratek-primary">A consultar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neuratek-gray-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
            ¿Listo para transformar tu empresa con IA?
          </h2>
          <p className="text-neuratek-gray-light text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Contáctanos hoy y descubre cómo NEURATEK puede llevar tu negocio al siguiente nivel con soluciones de inteligencia artificial.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neuratek-primary text-white font-semibold rounded-lg hover:bg-neuratek-light hover:text-neuratek-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 glow-primary"
          >
            Contactar Ahora
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
