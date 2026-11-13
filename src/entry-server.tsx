import { renderToString } from 'react-dom/server'
import App from './App'

// Usado só no build (scripts/prerender.mjs): gera o HTML da página sem navegador.
export function render() {
  return renderToString(<App />)
}
