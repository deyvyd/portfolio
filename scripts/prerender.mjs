import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Pré-renderiza o React para HTML, sem navegador, uma página por idioma:
//   dist/index.html     -> inglês  (https://www.deyvyd.com/)
//   dist/pt/index.html  -> português (https://www.deyvyd.com/pt/)
// Antes: `vite build --ssr src/entry-server.tsx --outDir dist-ssr` gera o bundle de servidor.
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

const template = readFileSync(resolve('dist/index.html'), 'utf8')
const marker = '<div id="root"></div>'

if (!template.includes(marker)) {
  throw new Error(`Prerender: "${marker}" não encontrado em dist/index.html`)
}

// Textos do <head> da versão em português. O inglês é o próprio index.html.
const PT = {
  url: 'https://www.deyvyd.com/pt/',
  title: 'Deyvyd Moura · Engenheiro Full-Stack e de IA Aplicada',
  description:
    'Deyvyd Moura — Engenheiro de Software Full-Stack e de IA Aplicada em São Paulo. ~5 anos criando produtos para grandes clientes corporativos.',
  imageAlt: 'Deyvyd Moura, Engenheiro Full-Stack e de IA Aplicada',
  personDescription:
    'Engenheiro de Software Full-Stack e de IA Aplicada com cerca de 5 anos de experiência criando produtos para grandes clientes corporativos.',
}

// Troca um trecho do HTML e falha o build se ele não existir (evita o PT ficar com texto em inglês sem aviso).
function swap(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`Prerender: não achei "${label}" no index.html`)
  return html.replace(pattern, () => replacement)
}

const meta = (attr, name) => new RegExp(`<meta ${attr}="${name}" content="[^"]*" />`)

function toPortuguese(html) {
  let out = html
  out = swap(out, /<html lang="en">/, '<html lang="pt-BR">', 'html lang')
  out = swap(out, /<title>[^<]*<\/title>/, `<title>${PT.title}</title>`, 'title')
  out = swap(out, meta('name', 'description'), `<meta name="description" content="${PT.description}" />`, 'description')
  out = swap(out, meta('property', 'og:title'), `<meta property="og:title" content="${PT.title}" />`, 'og:title')
  out = swap(out, meta('property', 'og:description'), `<meta property="og:description" content="${PT.description}" />`, 'og:description')
  out = swap(out, meta('property', 'og:image:alt'), `<meta property="og:image:alt" content="${PT.imageAlt}" />`, 'og:image:alt')
  out = swap(out, meta('property', 'og:url'), `<meta property="og:url" content="${PT.url}" />`, 'og:url')
  out = swap(out, meta('property', 'og:locale'), '<meta property="og:locale" content="pt_BR" />', 'og:locale')
  out = swap(out, meta('property', 'og:locale:alternate'), '<meta property="og:locale:alternate" content="en_US" />', 'og:locale:alternate')
  out = swap(out, meta('name', 'twitter:title'), `<meta name="twitter:title" content="${PT.title}" />`, 'twitter:title')
  out = swap(out, meta('name', 'twitter:description'), `<meta name="twitter:description" content="${PT.description}" />`, 'twitter:description')
  out = swap(out, meta('name', 'twitter:image:alt'), `<meta name="twitter:image:alt" content="${PT.imageAlt}" />`, 'twitter:image:alt')
  out = swap(out, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${PT.url}" />`, 'canonical')
  out = swap(out, /"description": "Full-Stack Software Engineer[^"]*"/, `"description": "${PT.personDescription}"`, 'JSON-LD description')
  return out
}

function write(file, html) {
  const path = resolve(file)
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, html)
  console.log(`Prerendered ${file}`)
}

const withContent = (html, lang) => html.replace(marker, () => `<div id="root">${render(lang)}</div>`)

write('dist/index.html', withContent(template, 'en'))
write('dist/pt/index.html', withContent(toPortuguese(template), 'pt'))
