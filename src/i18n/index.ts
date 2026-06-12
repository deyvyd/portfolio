import { en } from './en'
import { pt } from './pt'
import type { Translation } from './types'

export function useTranslation(lang: 'en' | 'pt'): Translation {
  return lang === 'en' ? en : pt
}

export type { Translation }
