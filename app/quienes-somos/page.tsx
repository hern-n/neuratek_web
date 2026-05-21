import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Users, Target, Lightbulb } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'NEURATEK es una empresa de inteligencia artificial y desarrollo de software a medida para PYMEs. Conoce a nuestro equipo y nuestra filosofía.',
  openGraph: {
    title: 'Quiénes Somos | NEURATEK',
    description: 'NEURATEK es una empresa de inteligencia artificial y desarrollo de software a medida para PYMEs.',
  },
}

const values = [
  {
    icon: Target,
    title: 'Misión',
    description: 'Transformar empresas mediante soluciones de inteligencia artificial que optimizan procesos y potencian el crecimiento sostenible.',
  },
  {
    icon: Lightbulb,
    title: 'Visión',
    description: 'Ser el referente en IA empresarial para PYMEs, haciendo accesible la tecnología más avanzada a cualquier negocio.',
  },
  {
    icon: Users,
    title: 'Valores',
    description: 'Innovación constante, compromiso con el cliente, transparencia en cada proyecto y excelencia técnica en todas nuestras soluciones.',
  },
]

const team = [
  {
    name: 'Hernán',
    role: 'CTO & Co-Fundador',
    image: '/CV_Hernan.png',
  },
  {
    name: 'Julio',
    role: 'CEO & Co-Fundador',
    image: '/CV_Julio.png',
  },
]

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-neuratek-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuratek-primary/[0.07] via-neuratek-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-neuratek-primary/60" />
            <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Sobre nosotros</span>
            <div className="h-px w-8 bg-neuratek-primary/60" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Quiénes <span className="text-neuratek-primary">Somos</span>
          </h1>
          <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed text-pretty">
            NEURATEK es una empresa de inteligencia artificial y desarrollo de software a medida, especializada en automatización de procesos empresariales para pequeñas y medianas empresas.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* About Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neuratek-primary/[0.03] via-neuratek-dark to-neuratek-primary/[0.02] overflow-hidden">
        <div className="absolute top-10 right-10 grid grid-cols-3 gap-3 pointer-events-none opacity-40">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-neuratek-primary" />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="h-px w-8 bg-neuratek-primary/60" />
                <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Historia</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  El nombre NEURATEK se compone de dos elementos que definen nuestra esencia:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-neuratek-primary font-semibold">Neura:</span>
                    <span>Inteligencia artificial basada en redes neuronales y razonamiento avanzado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neuratek-primary font-semibold">Tek:</span>
                    <span>Tecnología moderna, software avanzado y enfoque innovador.</span>
                  </li>
                </ul>
                <p>
                  Nacimos con el objetivo de hacer accesible la inteligencia artificial a empresas de todos los tamaños, transformando procesos complejos en soluciones eficientes y escalables.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-neuratek-primary/[0.08] to-neuratek-dark border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.01] transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neuratek-primary/25 to-neuratek-deep/25 flex items-center justify-center mx-auto mb-4 glow-primary-lg">
                    <span className="text-4xl font-bold text-neuratek-light">N</span>
                  </div>
                  <p className="text-white/50 text-sm">Innovación desde el día uno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* Values Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neuratek-primary/[0.02] via-transparent to-neuratek-primary/[0.03] overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-neuratek-deep/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-neuratek-primary/[0.05] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-neuratek-primary/60" />
              <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Filosofía</span>
              <div className="h-px w-8 bg-neuratek-primary/60" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestros Pilares
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-center group overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-neuratek-primary to-transparent group-hover:w-1/2 transition-all duration-300 rounded-full" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neuratek-primary/20 to-neuratek-deep/20 flex items-center justify-center mx-auto mb-6 group-hover:from-neuratek-primary/35 group-hover:to-neuratek-deep/35 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-neuratek-light" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-primary/30 to-transparent mx-auto max-w-5xl" />

      {/* Team Section */}
      <section id="equipo" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neuratek-primary/[0.03] via-neuratek-dark to-neuratek-primary/[0.02] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuratek-primary/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-10 left-10 grid grid-cols-3 gap-3 pointer-events-none opacity-30">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-neuratek-deep" />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-neuratek-primary/60" />
              <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">Equipo</span>
              <div className="h-px w-8 bg-neuratek-primary/60" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Los profesionales detrás de NEURATEK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-neuratek-gray-dark/80 to-neuratek-dark/90 rounded-xl border border-white/10 overflow-hidden hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[3/4] bg-neuratek-dark relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`CV de ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-neuratek-primary to-transparent rounded-full" />
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-neuratek-primary text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
