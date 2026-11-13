import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Stack } from './components/Stack'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

interface AppProps {
  lang: 'en' | 'pt'
}

function App({ lang }: AppProps) {
  return (
    <>
      <Cursor />
      <Navbar lang={lang} />
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
