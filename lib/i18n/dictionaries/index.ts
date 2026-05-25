import { es } from './es'

export type Dictionary = typeof es

const dictionaries: Record<string, Dictionary> = {
  es,
  en: {} as Dictionary,
}

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (locale === 'en') {
    const { en } = await import('./en')
    return en
  }
  return es
}
