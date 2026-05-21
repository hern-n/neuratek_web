import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { BrandsMarquee } from '@/components/brands-marquee'
import { Brain, Cog, Code, BarChart3, ArrowRight, CheckCircle, Search, Rocket, Presentation, GraduationCap, ChevronDown, Star, MessageCircle } from 'lucide-react'
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

const methodology = [
  {
    icon: Search,
    title: 'Analizamos',
    description: 'Estudiamos tu empresa, procesos y necesidades para identificar oportunidades de mejora con IA.',
  },
  {
    icon: Rocket,
    title: 'Desarrollamos',
    description: 'Creamos la solución a medida utilizando las tecnologías más avanzadas del mercado.',
  },
  {
    icon: Presentation,
    title: 'Implementamos',
    description: 'Integramos la solución en tu empresa con un acompañamiento continuo.',
  },
  {
    icon: GraduationCap,
    title: 'Formamos',
    description: 'Capacitamos a tu equipo para que aprovechen al máximo la nueva tecnología.',
  },
]

const testimonials = [
  {
    name: 'Cliente Satisfecho',
    role: 'CEO, Empresa Tecnológica',
    content: 'NEURATEK transformó nuestros procesos con IA. La implementación fue impecable y los resultados superaron nuestras expectativas.',
    rating: 5,
  },
  {
    name: 'Cliente Satisfecho',
    role: 'Director de Operaciones',
    content: 'El equipo de NEURATEK entendió nuestras necesidades desde el primer día. La automatización nos ha ahorrado horas de trabajo cada semana.',
    rating: 5,
  },
  {
    name: 'Cliente Satisfecho',
    role: 'Gerente PYME',
    content: 'Creía que la IA solo era para grandes empresas. NEURATEK nos demostró que no es así. Ahora competimos en otro nivel.',
    rating: 5,
  },
]

const faqs = [
  {
    question: '¿Qué tipo de empresas pueden beneficiarse de vuestros servicios?',
    answer: 'Trabajamos con PYMEs de todos los sectores. Nuestras soluciones se adaptan al tamaño y necesidades específicas de cada negocio, desde startups hasta empresas consolidadas.',
  },
  {
    question: '¿Cuánto tiempo lleva implementar una solución de IA?',
    answer: 'Depende de la complejidad del proyecto. Un análisis inicial nos permite darte un cronograma preciso, pero la mayoría de los proyectos se completan en 4-8 semanas.',
  },
  {
    question: '¿Necesito conocimientos técnicos para usar vuestras soluciones?',
    answer: 'No. Diseñamos todas nuestras soluciones pensando en usuarios sin formación técnica. Además, incluimos formación básica para tu equipo.',
  },
  {
    question: '¿Ofrecéis soporte después de la implementación?',
    answer: 'Sí. Todos nuestros planes incluyen mantenimiento mensual con soporte técnico, actualizaciones y mejoras continuas.',
  },
  {
    question: '¿Cómo empezamos a trabajar juntos?',
    answer: 'El primer paso es una reunión sin compromiso para analizar las necesidades de tu empresa. Contáctanos y te propondremos la mejor solución.',
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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuratek-primary/[0.07] via-neuratek-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-2 h-2 rounded-full bg-neuratek-light/60 animate-pulse shadow-lg shadow-neuratek-light/30" />
        <div className="absolute top-60 right-1/4 w-1.5 h-1.5 rounded-full bg-neuratek-deep/60 animate-pulse delay-500 shadow-lg shadow-neuratek-deep/30" />
        <div className="absolute bottom-20 left-1/3 w-1 h-1 rounded-full bg-neuratek-light/50 animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-neuratek-primary/15 flex items-center justify-center glow-primary-lg">
                  <img src="/brain-circuit.svg" alt="NEURATEK" className="w-12 h-12" />
                </div>
                <div className="absolute -top-4 -right-4 w-2 h-8 bg-gradient-to-b from-neuratek-light/0 via-neuratek-light/40 to-neuratek-light/0 rounded-full rotate-45 pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-2 h-8 bg-gradient-to-b from-neuratek-deep/0 via-neuratek-deep/40 to-neuratek-deep/0 rounded-full -rotate-45 pointer-events-none" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-neuratek-light animate-pulse shadow-lg shadow-neuratek-light/50" />
                <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-neuratek-deep animate-pulse delay-300 shadow-lg shadow-neuratek-deep/40" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              NEURA<span className="text-neuratek-light">TEK</span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-neuratek-primary/60" />
              <p className="text-xl sm:text-2xl text-neuratek-light font-medium [text-shadow:_0_0_20px_rgba(60,173,190,0.3)]">
                Inteligencia Artificial para Empresas
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-neuratek-primary/60" />
            </div>
            <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed text-pretty">
              Automatizamos procesos, optimizamos empresas y llevamos tu negocio al futuro con inteligencia artificial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neuratek-primary text-white font-semibold rounded-lg hover:bg-neuratek-light hover:text-neuratek-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 glow-primary-lg shadow-lg shadow-neuratek-primary/20"
              >
                Solicitar Información
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/quienes-somos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/80 font-semibold rounded-lg hover:border-neuratek-primary hover:text-neuratek-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* Founders Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neuratek-primary/[0.03] via-transparent to-neuratek-primary/[0.02] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-neuratek-deep/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-neuratek-primary/[0.05] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-neuratek-primary/60" />
                <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Equipo</span>
                <div className="h-px w-8 bg-neuratek-primary/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Nuestros <span className="text-neuratek-primary">fundadores</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Detrás de NEURATEK hay un equipo con el equilibrio perfecto entre <strong className="text-white">tecnología</strong> y <strong className="text-white">negocio</strong>.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <ScrollReveal>
              <div className="relative p-6 bg-gradient-to-br from-neuratek-primary/[0.06] to-neuratek-dark rounded-xl border border-neuratek-primary/20 hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-neuratek-primary/[0.08] group-hover:bg-neuratek-primary/[0.12] transition-colors pointer-events-none" />
                <div className="flex items-center gap-4 mb-4 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neuratek-primary to-neuratek-deep flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-neuratek-primary/30">
                    H
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Hernán Olmeda</h3>
                    <p className="text-neuratek-light text-sm font-medium">CTO & Co-Fundador</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-white/80 leading-relaxed relative">
                  <p>Estudiante de informática, programador autodidacta con enfoque en <strong className="text-white">Python</strong> y resolución de problemas técnicos.</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2.5 py-1 bg-gradient-to-r from-neuratek-primary/20 to-neuratek-deep/20 text-neuratek-light text-xs rounded-full border border-neuratek-primary/20">Python</span>
                    <span className="px-2.5 py-1 bg-gradient-to-r from-neuratek-primary/20 to-neuratek-deep/20 text-neuratek-light text-xs rounded-full border border-neuratek-primary/20">Programación</span>
                    <span className="px-2.5 py-1 bg-gradient-to-r from-neuratek-primary/20 to-neuratek-deep/20 text-neuratek-light text-xs rounded-full border border-neuratek-primary/20">Inglés B2</span>
                    <span className="px-2.5 py-1 bg-gradient-to-r from-neuratek-primary/20 to-neuratek-deep/20 text-neuratek-light text-xs rounded-full border border-neuratek-primary/20">Autodidacta</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative p-6 bg-gradient-to-br from-neuratek-deep/[0.06] to-neuratek-dark rounded-xl border border-neuratek-primary/20 hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-neuratek-deep/[0.08] group-hover:bg-neuratek-deep/[0.12] transition-colors pointer-events-none" />
                <div className="flex items-center gap-4 mb-4 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neuratek-primary to-neuratek-deep flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-neuratek-primary/30">
                    J
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Julio Á. Robles</h3>
                    <p className="text-neuratek-light text-sm font-medium">CEO & Co-Fundador</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-white/80 leading-relaxed relative">
                  <p>Experto en <strong className="text-white">gestión empresarial</strong> e implantación de IA. Formado en CC. Empresariales y máster en Business &amp; Analytics.</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2.5 py-1 bg-gradient-to-r from-neuratek-primary/20 to-neuratek-deep/20 text-neuratek-light text-xs rounded-full border border-neuratek-primary/20">Business & Analytics</span>
                    <span className="px-2.5 py-1 bg-gradient-to-r from-neuratek-primary/20 to-neuratek-deep/20 text-neuratek-light text-xs rounded-full border border-neuratek-primary/20">Gestión</span>
                    <span className="px-2.5 py-1 bg-gradient-to-r from-neuratek-primary/20 to-neuratek-deep/20 text-neuratek-light text-xs rounded-full border border-neuratek-primary/20">IA Empresarial</span>
                    <span className="px-2.5 py-1 bg-gradient-to-r from-neuratek-primary/20 to-neuratek-deep/20 text-neuratek-light text-xs rounded-full border border-neuratek-primary/20">Inversión</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Link
                href="/quienes-somos#equipo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neuratek-primary text-neuratek-primary font-semibold rounded-lg hover:bg-neuratek-primary hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Ver currículums completos
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      <BrandsMarquee />

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neuratek-primary/[0.04] via-neuratek-dark to-neuratek-primary/[0.02] overflow-hidden">
        <div className="absolute top-10 right-10 grid grid-cols-3 gap-3 pointer-events-none opacity-40">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-neuratek-primary" />
          ))}
        </div>
        <div className="absolute bottom-10 left-10 grid grid-cols-3 gap-3 pointer-events-none opacity-30">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-neuratek-deep" />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-neuratek-primary/60" />
                <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Servicios</span>
                <div className="h-px w-8 bg-neuratek-primary/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Soluciones de inteligencia artificial diseñadas para transformar tu empresa
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index}>
                <div className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-neuratek-primary to-transparent group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neuratek-primary/25 to-neuratek-deep/25 flex items-center justify-center mb-4 group-hover:from-neuratek-primary/40 group-hover:to-neuratek-deep/40 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-neuratek-light" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* Methodology Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-neuratek-deep/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-1.5 h-1.5 rounded-full bg-neuratek-light/40 animate-pulse" />
        <div className="absolute bottom-40 right-1/3 w-1 h-1 rounded-full bg-neuratek-primary/40 animate-pulse delay-700" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-neuratek-primary/60" />
                <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Metodología</span>
                <div className="h-px w-8 bg-neuratek-primary/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Cómo <span className="text-neuratek-primary">trabajamos</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Un proceso probado que garantiza resultados desde el primer día
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-px h-[70%] bg-gradient-to-b from-neuratek-primary/40 via-neuratek-primary/20 to-transparent hidden lg:block" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {methodology.map((step, index) => (
                <ScrollReveal key={index}>
                  <div className="relative text-center group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neuratek-primary to-neuratek-deep flex items-center justify-center mx-auto mb-6 shadow-lg shadow-neuratek-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* Pricing Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neuratek-primary/[0.03] via-neuratek-dark to-neuratek-primary/[0.02] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuratek-primary/40 to-transparent pointer-events-none" />
        <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-neuratek-deep/[0.04] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-neuratek-primary/60" />
                <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Inversión</span>
                <div className="h-px w-8 bg-neuratek-primary/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Modelo de Precios
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Inversión transparente para la transformación digital de tu empresa
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ScrollReveal>
              <div className="relative p-8 bg-gradient-to-br from-neuratek-primary/[0.06] to-neuratek-dark rounded-2xl border border-neuratek-primary/30 hover:border-neuratek-primary/60 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 glow-primary-lg overflow-hidden h-full">
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-neuratek-primary/[0.06] pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-neuratek-deep/[0.06] pointer-events-none" />
                <div className="mb-6 relative">
                  <span className="inline-block px-3 py-1 bg-neuratek-primary/20 text-neuratek-light text-xs font-medium uppercase tracking-wider rounded-full border border-neuratek-primary/30 mb-3">
                    Recomendado
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">18.000€</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 relative">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <div className="w-5 h-5 rounded-full bg-neuratek-primary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-neuratek-light" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className="relative block text-center px-6 py-3 bg-neuratek-primary text-white font-semibold rounded-lg hover:bg-neuratek-light hover:text-neuratek-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-neuratek-primary/30"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-4">
              <ScrollReveal>
                <div className="relative p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-neuratek-primary/[0.06] group-hover:bg-neuratek-primary/[0.1] transition-colors pointer-events-none" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <h4 className="text-white font-semibold">Consultoría Inicial</h4>
                      <p className="text-white/60 text-sm mt-1">
                        Análisis de necesidades y propuesta personalizada
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-neuratek-light">2.500€</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-neuratek-primary/[0.06] group-hover:bg-neuratek-primary/[0.1] transition-colors pointer-events-none" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <h4 className="text-white font-semibold">Mantenimiento Mensual</h4>
                      <p className="text-white/60 text-sm mt-1">
                        Soporte técnico y actualizaciones
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-neuratek-light">600€/mes</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-neuratek-deep/[0.06] group-hover:bg-neuratek-deep/[0.1] transition-colors pointer-events-none" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <h4 className="text-white font-semibold">Visitas Técnicas</h4>
                      <p className="text-white/60 text-sm mt-1">
                        Asistencia presencial + transporte
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-neuratek-light">1.500€</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-neuratek-primary/[0.06] group-hover:bg-neuratek-primary/[0.1] transition-colors pointer-events-none" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <h4 className="text-white font-semibold">Mejoras y Ampliaciones</h4>
                      <p className="text-white/60 text-sm mt-1">
                        Según necesidades del proyecto
                      </p>
                    </div>
                    <span className="text-lg font-bold text-neuratek-light">A consultar</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neuratek-primary/[0.02] via-neuratek-dark to-neuratek-primary/[0.03] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuratek-primary/40 to-transparent pointer-events-none" />
        <div className="absolute -top-20 left-10 w-80 h-80 rounded-full bg-neuratek-deep/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-neuratek-primary/60" />
                <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Testimonios</span>
                <div className="h-px w-8 bg-neuratek-primary/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Lo que dicen <span className="text-neuratek-primary">nuestros clientes</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                La satisfacción de nuestros clientes es nuestra mejor carta de presentación
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index}>
                <div className="p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group relative">
                  <div className="absolute -top-3 -right-3 text-neuratek-primary/20 group-hover:text-neuratek-primary/40 transition-colors">
                    <MessageCircle size={48} />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neuratek-primary text-neuratek-primary" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-neuratek-gray-medium text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neuratek-primary/[0.02] via-transparent to-neuratek-primary/[0.02] overflow-hidden">
        <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-neuratek-deep/[0.04] blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-neuratek-primary/60" />
                <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">FAQ</span>
                <div className="h-px w-8 bg-neuratek-primary/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Preguntas <span className="text-neuratek-primary">Frecuentes</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Resolvemos tus dudas sobre nuestros servicios de inteligencia artificial
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index}>
                <details className="group p-6 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 hover:border-neuratek-primary/50 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-white font-semibold pr-4">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-neuratek-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-neuratek-primary/[0.05] to-neuratek-dark overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuratek-primary/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-neuratek-light/50 animate-pulse shadow-lg shadow-neuratek-light/20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-neuratek-deep/50 animate-pulse delay-500 shadow-lg shadow-neuratek-deep/20 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 rounded-full bg-neuratek-primary/50 animate-pulse delay-1000 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-neuratek-primary/60" />
              <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Contacto</span>
              <div className="h-px w-8 bg-neuratek-primary/60" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
              ¿Listo para transformar tu empresa con IA?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Contáctanos hoy y descubre cómo NEURATEK puede llevar tu negocio al siguiente nivel con soluciones de inteligencia artificial.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neuratek-primary text-white font-semibold rounded-lg hover:bg-neuratek-light hover:text-neuratek-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 glow-primary-lg shadow-lg shadow-neuratek-primary/20"
            >
              Contactar Ahora
              <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
