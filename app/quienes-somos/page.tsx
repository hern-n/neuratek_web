import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Users, Target, Lightbulb } from 'lucide-react'
import Image from 'next/image'

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
    role: 'CEO & Co-Fundador',
    image: '/CV_Hernan.png',
  },
  {
    name: 'Julio',
    role: 'CTO & Co-Fundador',
    image: '/CV_Julio.png',
  },
]

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-neuratek-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Quiénes <span className="text-neuratek-primary">Somos</span>
          </h1>
          <p className="max-w-3xl mx-auto text-neuratek-gray-light text-lg leading-relaxed text-pretty">
            NEURATEK es una empresa de inteligencia artificial y desarrollo de software a medida, especializada en automatización de procesos empresariales para pequeñas y medianas empresas.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neuratek-gray-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-neuratek-gray-light leading-relaxed">
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
            <div className="relative h-80 rounded-2xl overflow-hidden bg-neuratek-gray-dark border border-neuratek-gray-dark hover:border-neuratek-primary/50 hover:scale-[1.01] transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-neuratek-primary/10 flex items-center justify-center mx-auto mb-4 glow-primary">
                    <span className="text-4xl font-bold text-neuratek-primary">N</span>
                  </div>
                  <p className="text-neuratek-gray-medium text-sm">Innovación desde el día uno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestros Pilares
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-neuratek-gray-dark rounded-xl border border-neuratek-gray-dark hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-neuratek-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-neuratek-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-neuratek-gray-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neuratek-gray-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-neuratek-gray-medium max-w-2xl mx-auto">
              Los profesionales detrás de NEURATEK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-neuratek-gray-dark rounded-xl border border-neuratek-gray-dark overflow-hidden hover:border-neuratek-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                {/* CV Image */}
                <div className="aspect-[3/4] bg-neuratek-dark relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`CV de ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Member Info */}
                <div className="p-6 text-center">
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
