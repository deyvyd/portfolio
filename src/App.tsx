import { useState } from 'react'
import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Stack } from './components/Stack'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [lang, setLang] = useState<'en' | 'pt'>('en')
  const toggleLang = () => setLang(l => l === 'en' ? 'pt' : 'en')

  return (
    <>
      <Cursor />
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero lang={lang} />
        <Work lang={lang} />
        <Stack lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}

export default App
