import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Paintbrush, Palette, Sparkles } from 'lucide-react'
import { getDictionary } from '@/lib/i18n/dictionaries'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Nuestra Marca',
  description: 'Identidad visual de NEURATEK — conoce nuestra paleta de colores, logotipos y cartel corporativo.',
  openGraph: {
    title: 'Nuestra Marca | NEURATEK',
    description: 'Identidad visual de NEURATEK — conoce nuestra paleta de colores, logotipos y cartel corporativo.',
  },
}

const brandColors = [
  { name: 'Fondo principal', hex: '#14202C', text: '#C7D1D8' },
  { name: 'Gris oscuro', hex: '#2F3E4A', text: '#C7D1D8' },
  { name: 'Gris medio', hex: '#6B7C8A', text: '#FFFFFF' },
  { name: 'Gris claro', hex: '#C7D1D8', text: '#14202C' },
  { name: 'Turquesa oscuro', hex: '#2A8E9E', text: '#FFFFFF' },
  { name: 'Principal', hex: '#3CADBE', text: '#FFFFFF' },
  { name: 'Turquesa claro', hex: '#6FC9D6', text: '#14202C' },
  { name: 'Blanco', hex: '#FFFFFF', text: '#14202C', border: true },
]

const gradientColors = ['#14202C', '#2F3E4A', '#2A8E9E', '#3CADBE', '#6FC9D6', '#C7D1D8', '#FFFFFF']

const combinations = [
  {
    title: 'Dark hero',
    subtitle: 'fondo + principal',
    accent: '#3CADBE',
    headerBg: '#14202C',
    headerColor: '#3CADBE',
    headerLabel: '#6B7C8A',
    bodyBg: '#14202C',
    bodyColor: '#C7D1D8',
    label: 'Texto principal marca',
    desc: 'Descripción en gris claro.',
    btn1: { bg: '#3CADBE', text: '#14202C', label: 'Botón CTA' },
    btn2: { border: '#3CADBE', text: '#3CADBE', label: 'Secundario' },
    tag: { bg: '#2F3E4A', text: '#6FC9D6', label: 'tag' },
  },
  {
    title: 'Card dark',
    subtitle: 'gris oscuro',
    accent: '#6FC9D6',
    headerBg: '#2F3E4A',
    headerColor: '#FFFFFF',
    headerLabel: '#6B7C8A',
    bodyBg: '#2F3E4A',
    bodyColor: '#C7D1D8',
    label: 'Tarjeta de contenido',
    desc: 'Título destacado',
    desc2: 'Texto secundario en gris neutro.',
    btn1: { bg: '#3CADBE', text: '#14202C', label: 'Acción' },
  },
  {
    title: 'Acento principal',
    subtitle: 'turquesa',
    accent: '#2A8E9E',
    headerBg: '#3CADBE',
    headerColor: '#14202C',
    headerLabel: '#2A8E9E',
    bodyBg: '#FFFFFF',
    bodyColor: '#14202C',
    label: 'Hero invertido',
    desc: 'Fondo blanco con acento turquesa.',
    btn1: { bg: '#14202C', text: '#FFFFFF', label: 'Botón oscuro' },
    tag: { bg: '#6FC9D6', text: '#14202C', label: 'highlight' },
  },
  {
    title: 'Light mode',
    subtitle: 'modo claro',
    accent: '#C7D1D8',
    headerBg: '#FFFFFF',
    headerColor: '#14202C',
    headerLabel: '#6B7C8A',
    bodyBg: '#FFFFFF',
    bodyColor: '#14202C',
    label: 'Interfaz sobre blanco',
    desc: 'Texto secundario neutro.',
    btn1: { bg: '#3CADBE', text: '#FFFFFF', label: 'Principal' },
    btn2: { border: '#2A8E9E', text: '#2A8E9E', label: 'Hover' },
    tag: { bg: '#C7D1D8', text: '#2F3E4A', label: 'categoría' },
  },
]

export default async function NuestraMarcaPage() {
  const cookieStore = await cookies()
  const locale = cookieStore.get('locale')?.value || 'es'
  const dict = await getDictionary(locale)
  return (
    <main className="min-h-screen bg-neuratek-dark">
      <Navbar />

      {/* ========== HERO ========== */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuratek-primary/[0.08] via-neuratek-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-2 h-2 rounded-full bg-neuratek-light/60 animate-pulse shadow-lg shadow-neuratek-light/30" />
        <div className="absolute top-60 right-1/4 w-1.5 h-1.5 rounded-full bg-neuratek-deep/60 animate-pulse delay-500 shadow-lg shadow-neuratek-deep/30" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 rounded-full bg-neuratek-gray-light/50 animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 rounded-full bg-neuratek-primary/50 animate-pulse delay-700" />
        <div className="absolute top-1/3 right-[15%] w-1 h-1 rounded-full bg-neuratek-light/40 animate-pulse delay-300" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-neuratek-primary" />
            <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">{dict.nuestraMarca.hero.label}</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-neuratek-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {locale === 'es' ? 'Nuestra' : 'Our'}
              <span className="text-neuratek-light [text-shadow:_0_0_20px_rgba(60,173,190,0.3)]">
                {locale === 'es' ? 'Marca' : ' Brand'}
              </span>
          </h1>
          <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed text-pretty">
              {dict.nuestraMarca.hero.description}
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-light/30 to-transparent mx-auto max-w-5xl" />

      {/* ========== HISTORIA ========== */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neuratek-deep/[0.06] via-neuratek-dark via-[#1A2D3A] to-neuratek-primary/[0.04] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-neuratek-light/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-neuratek-deep/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 grid grid-cols-3 gap-3 pointer-events-none opacity-40">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: i % 3 === 0 ? '#3CADBE' : i % 3 === 1 ? '#6FC9D6' : '#2A8E9E' }} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="rounded-2xl border border-neuratek-primary/20 bg-gradient-to-br from-neuratek-primary/[0.03] to-neuratek-deep/[0.03] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-neuratek-primary to-neuratek-light" />
                    <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">{dict.nuestraMarca.history.label}</span>
                </div>
                        <h2 className="text-3xl font-bold text-white">
                          {dict.nuestraMarca.history.title}
                        </h2>
                <div className="space-y-4 text-white/80 leading-relaxed">
                      <p>
                        {dict.nuestraMarca.history.intro}
                      </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-neuratek-primary/[0.06] border border-neuratek-primary/10">
                      <span className="text-neuratek-light font-bold shrink-0">Neura:</span>
                      <span>{dict.nuestraMarca.history.neura}</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-neuratek-deep/[0.06] border border-neuratek-deep/10">
                      <span className="text-neuratek-light font-bold shrink-0">Tek:</span>
                      <span>{dict.nuestraMarca.history.tek}</span>
                    </li>
                  </ul>
                  <p className="text-[15px] leading-relaxed">
                      {dict.nuestraMarca.history.conclusion}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="relative w-72 h-52 rounded-2xl overflow-hidden bg-neuratek-dark border border-neuratek-primary/30 hover:border-neuratek-light hover:scale-[1.02] transition-all duration-300 flex items-center justify-center p-6 glow-primary-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-neuratek-primary/[0.03] to-transparent pointer-events-none" />
                  <Image
                    src="/logo_blanco_sobre_negro.png"
                    alt="Logo NEURATEK blanco sobre negro"
                    width={280}
                    height={80}
                    className="object-contain w-full h-auto relative z-10"
                  />
                </div>
                <div className="relative w-72 h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-neuratek-gray-light border border-neuratek-gray-light/50 hover:border-neuratek-primary hover:scale-[1.02] transition-all duration-300 flex items-center justify-center p-6 shadow-lg shadow-neuratek-primary/10">
                  <Image
                    src="/logo_negro_sobre_blanco.png"
                    alt="Logo NEURATEK negro sobre blanco"
                    width={280}
                    height={80}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-deep/30 to-transparent mx-auto max-w-5xl" />

      {/* ========== CARTEL CORPORATIVO ========== */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuratek-primary/[0.05] via-neuratek-dark to-neuratek-deep/[0.04] pointer-events-none" />
        <div className="absolute -top-20 left-1/3 w-80 h-80 rounded-full bg-neuratek-light/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full bg-neuratek-deep/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-neuratek-light/40 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-1.5 h-1.5 rounded-full bg-neuratek-deep/50 animate-pulse delay-500" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-neuratek-deep" />
              <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">{dict.nuestraMarca.cartel.label}</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-neuratek-deep" />
            </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {locale === 'es' ? 'Cartel' : 'Corporate'}
                <span className="text-neuratek-light">
                  {locale === 'es' ? 'Corporativo' : ' Poster'}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-white/70">
                {dict.nuestraMarca.cartel.description}
              </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-[#14202C] border border-neuratek-primary/30 hover:border-neuratek-light/50 hover:scale-[1.01] transition-all duration-300 relative glow-primary-lg">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(60,173,190,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(60,173,190,0.04) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(60,173,190,0.12) 0%, transparent 70%)',
                  top: '-80px',
                  right: '-60px',
                }}
              />
              <div
                className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(42,142,158,0.10) 0%, transparent 70%)',
                  bottom: '100px',
                  left: '-60px',
                }}
              />

              <div className="relative z-10 p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-neuratek-primary/50 flex items-center justify-center flex-shrink-0 relative">
                      <div className="absolute inset-[-3px] rounded-full border border-neuratek-primary/20" />
                      <Paintbrush className="w-5 h-5 text-neuratek-primary" />
                    </div>
                    <span className="text-xs font-light tracking-widest text-neuratek-gray-medium uppercase">
                      {locale === 'es' ? 'Inteligencia artificial' : 'Artificial Intelligence'}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-neuratek-primary bg-neuratek-primary/[0.08] border border-neuratek-primary/25 px-3 py-1.5 rounded">
                    neuratek.ai
                  </span>
                </div>

                {/* Hero */}
                <div className="text-center mb-8">
                    <p className="font-mono text-[10px] tracking-[0.25em] text-neuratek-primary/80 uppercase mb-4">
                      {dict.nuestraMarca.cartel.subtitle}
                    </p>
                  <h3 className="text-5xl sm:text-6xl font-black tracking-[0.08em] text-white uppercase leading-none mb-1" style={{ textShadow: '0 0 60px rgba(60,173,190,0.15)' }}>
                    NEURA<span className="text-neuratek-primary">TEK</span>
                  </h3>
                    <span className="block text-xs font-light tracking-[0.25em] text-neuratek-gray-medium uppercase mb-5">
                      {dict.nuestraMarca.cartel.tagline}
                    </span>
                  <div className="w-14 h-px mx-auto bg-gradient-to-r from-transparent via-neuratek-primary to-transparent mb-5" />
                    <p className="text-sm text-neuratek-gray-light font-light max-w-sm mx-auto leading-relaxed">
                      {dict.nuestraMarca.cartel.descriptionText}
                    </p>
                </div>

                {/* Services grid preview */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {dict.nuestraMarca.cartel.services.map((s, i) => (
                    <div key={i} className="bg-neuratek-gray-dark/50 border border-neuratek-primary/15 rounded-lg p-3 relative overflow-hidden group/card hover:border-neuratek-light/40 transition-colors">
                      <div className="absolute top-0 left-0 w-[2px] h-full" style={{ backgroundColor: i % 2 === 0 ? '#3CADBE' : '#6FC9D6' }} />
                      <p className="font-mono text-[9px] tracking-widest mb-1" style={{ color: i % 2 === 0 ? '#2A8E9E' : '#3CADBE' }}>
                        {(i + 1).toString().padStart(2, '0')}
                      </p>
                      <p className="text-[11px] font-semibold text-white leading-tight">{s}</p>
                      <div className="absolute bottom-2 right-2.5 w-1 h-1 rounded-full" style={{ backgroundColor: i % 2 === 0 ? '#3CADBE' : '#6FC9D6' }} />
                    </div>
                  ))}
                </div>

                {/* Pricing preview */}
                <div className="bg-neuratek-gray-dark/30 border border-neuratek-primary/20 rounded-lg p-5 flex items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-neuratek-gray-medium uppercase mb-2">{dict.nuestraMarca.cartel.pricingTitle}</p>
                    <p className="text-xs font-semibold text-neuratek-gray-light mb-3">{dict.nuestraMarca.cartel.pricingSubtitle}</p>
                    <div className="space-y-1">
                      {dict.nuestraMarca.cartel.pricingItems.map(
                        (item, i) => (
                          <p key={i} className="text-[11px] text-neuratek-gray-medium flex items-center gap-1.5">
                            <span className="text-neuratek-primary">›</span>
                            {item}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  <div className="text-center bg-neuratek-primary/[0.08] border border-neuratek-primary/30 rounded-lg px-5 py-4 min-w-[100px]">
                    <p className="text-2xl font-bold text-neuratek-primary leading-none mb-1">18K€</p>
                    <p className="font-mono text-[9px] text-neuratek-deep tracking-widest">{dict.nuestraMarca.cartel.pricingFrom}</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex gap-2">
                      {[
                        { label: dict.nuestraMarca.cartel.contactLabel, text: 'contacto@neuratek-web.vercel.app' },
                        { label: dict.nuestraMarca.cartel.webLabel, text: 'neuratek-web.vercel.app' },
                      ].map((c, i) => (
                    <div key={i} className="flex-1 bg-neuratek-gray-dark/40 border border-neuratek-primary/15 rounded-lg p-3 flex items-center gap-3 hover:border-neuratek-light/30 transition-colors">
                      <div className="w-7 h-7 rounded-full bg-neuratek-primary/10 border border-neuratek-primary/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: i === 0 ? '#3CADBE' : '#6FC9D6' }} />
                      </div>
                      <div>
                        <p className="text-[9px] text-neuratek-gray-medium mb-0.5">{c.label}</p>
                        <p className="font-mono text-[10px] text-neuratek-gray-light">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-light/30 to-transparent mx-auto max-w-5xl" />

      {/* ========== PALETA DE COLORES ========== */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuratek-light/[0.04] via-neuratek-dark to-neuratek-primary/[0.05] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuratek-light/40 to-transparent pointer-events-none" />

        {/* Floating color blobs */}
        <div className="absolute top-20 right-[10%] w-40 h-40 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(60,173,190,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-20 left-[10%] w-40 h-40 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(42,142,158,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(111,201,214,0.05) 0%, transparent 70%)' }} />

        {/* Colorful dots */}
        <div className="absolute top-32 left-[20%] w-1.5 h-1.5 rounded-full bg-neuratek-light/50 animate-pulse" />
        <div className="absolute top-64 right-[25%] w-1 h-1 rounded-full bg-neuratek-deep/60 animate-pulse delay-300" />
        <div className="absolute bottom-40 left-[30%] w-1 h-1 rounded-full bg-neuratek-primary/50 animate-pulse delay-700" />
        <div className="absolute bottom-20 right-[15%] w-1.5 h-1.5 rounded-full bg-neuratek-gray-light/40 animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-neuratek-light" />
                    <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      {dict.nuestraMarca.colors.label}
                    </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-neuratek-light" />
            </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {locale === 'es' ? 'Paleta de' : 'Color'}
                <span className="text-neuratek-light">
                  {locale === 'es' ? 'Colores' : ' Palette'}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-white/70">
                {dict.nuestraMarca.colors.description}
              </p>
          </div>

          {/* Swatches */}
          <div className="max-w-4xl mx-auto space-y-2 mb-10">
            <p className="text-[11px] font-medium tracking-widest uppercase text-neuratek-gray-medium mb-4 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-neuratek-primary" />
              {dict.nuestraMarca.colors.paletteLabel}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {brandColors.map((color, index) => (
                <div
                  key={color.hex}
                  className="rounded-xl flex flex-col justify-end p-4 min-h-[100px] sm:min-h-[120px] hover:scale-[1.03] transition-transform duration-200"
                  style={{
                    backgroundColor: color.hex,
                    color: color.text,
                    border: color.border ? '0.5px solid #C7D1D8' : 'none',
                    boxShadow: color.hex === '#3CADBE' ? '0 0 20px rgba(60,173,190,0.3)' : 'none',
                  }}
                >
                    <p className="text-xs font-medium opacity-85">{dict.nuestraMarca.colors.swatches[index]}</p>
                  <p className="text-[11px] opacity-65 font-normal">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient strip */}
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] font-medium tracking-widest uppercase text-neuratek-gray-medium mb-4 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-neuratek-deep" />
              {dict.nuestraMarca.colors.gradientLabel}
            </p>
            <div className="h-12 rounded-xl overflow-hidden flex shadow-lg shadow-black/20">
              {gradientColors.map((c, i) => (
                <div key={i} className="flex-1 h-full relative group" style={{ backgroundColor: c }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neuratek-deep/30 to-transparent mx-auto max-w-5xl" />

      {/* ========== COMBINACIONES ========== */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuratek-deep/[0.05] via-neuratek-dark to-neuratek-light/[0.03] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-neuratek-light/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-neuratek-deep" />
              <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">{dict.nuestraMarca.combinations.label}</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-neuratek-deep" />
            </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {locale === 'es' ? 'Combinaciones' : 'Recommended'}
                <span className="text-neuratek-light">
                  {locale === 'es' ? 'Recomendadas' : ' Combinations'}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-white/70">
                {dict.nuestraMarca.combinations.description}
              </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {combinations.map((combo, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 relative"
                style={{ borderColor: combo.accent + '40' }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ backgroundColor: combo.accent }} />

                <div
                  className="px-4 py-3"
                  style={{ backgroundColor: combo.headerBg, color: combo.headerColor }}
                >
                  <p className="text-[10px] font-normal mb-0.5 flex items-center gap-2" style={{ color: combo.headerLabel }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: combo.accent }} />
                    {dict.nuestraMarca.combinations.items[index].title}
                    <span className="opacity-60">·</span>
                    {dict.nuestraMarca.combinations.items[index].subtitle}
                  </p>
                  <p className="text-xs font-medium">{combo.label}</p>
                </div>
                <div
                  className="px-4 py-3 space-y-2"
                  style={{ backgroundColor: combo.bodyBg, color: combo.bodyColor }}
                >
                  <p className="text-[11px]">{combo.desc}</p>
                  {combo.desc2 && <p className="text-[11px]">{combo.desc2}</p>}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-block px-2.5 py-1 rounded text-[10px] font-medium"
                      style={{ backgroundColor: combo.btn1.bg, color: combo.btn1.text }}
                    >
                      {combo.btn1.label}
                    </span>
                    {combo.btn2 && (
                      <span
                        className="inline-block px-2.5 py-1 rounded text-[10px] font-medium"
                        style={{
                          border: `1px solid ${combo.btn2.border}`,
                          color: combo.btn2.text,
                        }}
                      >
                        {combo.btn2.label}
                      </span>
                    )}
                    {combo.tag && (
                      <span
                        className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium"
                        style={{ backgroundColor: combo.tag.bg, color: combo.tag.text }}
                      >
                        {combo.tag.label}
                      </span>
                    )}
                  </div>
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
