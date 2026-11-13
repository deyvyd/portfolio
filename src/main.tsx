import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// O idioma vem da URL: /pt/ é português, qualquer outra rota é inglês.
const lang = window.location.pathname.startsWith('/pt') ? 'pt' : 'en'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App lang={lang} />
  </StrictMode>,
)
