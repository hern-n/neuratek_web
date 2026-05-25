"use client"

import { useLanguage } from '@/lib/i18n/language-context'
import { Globe } from 'lucide-react'

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  const toggle = () => {
    setLocale(locale === 'es' ? 'en' : 'es')
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-neuratek-gray-light hover:text-neuratek-primary hover:scale-105 active:scale-95 transition-all duration-200 rounded-lg border border-neuratek-gray-dark hover:border-neuratek-primary/50"
      aria-label={locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
    >
      <Globe size={14} className="shrink-0" />
      <span>{locale === 'es' ? 'ES' : 'EN'}</span>
    </button>
  )
}
