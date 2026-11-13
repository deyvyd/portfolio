import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Pré-renderiza o React para HTML dentro do dist/index.html, sem navegador.
// Antes: `vite build --ssr src/entry-server.tsx --outDir dist-ssr` gera o bundle de servidor.
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

const templatePath = resolve('dist/index.html')
const template = readFileSync(templatePath, 'utf8')
const marker = '<div id="root"></div>'

if (!template.includes(marker)) {
  throw new Error(`Prerender: "${marker}" não encontrado em dist/index.html`)
}

const html = template.replace(marker, () => `<div id="root">${render()}</div>`)
writeFileSync(templatePath, html)
console.log('Prerendered dist/index.html')
