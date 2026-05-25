"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type LanguageContextType = {
  locale: string
  setLocale: (locale: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'es',
  setLocale: () => {},
})

export function LanguageProvider({
  children,
  initialLocale = 'es',
}: {
  children: ReactNode
  initialLocale?: string
}) {
  const [locale, setLocaleState] = useState(initialLocale)

  const setLocale = useCallback((newLocale: string) => {
    setLocaleState(newLocale)
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
    window.location.reload()
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
