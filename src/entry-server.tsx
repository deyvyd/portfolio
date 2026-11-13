import { renderToString } from 'react-dom/server'
import App from './App'

// Usado só no build (scripts/prerender.mjs): gera o HTML de cada idioma sem navegador.
export function render(lang: 'en' | 'pt') {
  return renderToString(<App lang={lang} />)
}
