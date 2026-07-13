import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const server = await preview({ preview: { port: 4173, strictPort: false } })
const url = server.resolvedUrls.local[0]

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()
await page.goto(url, { waitUntil: 'networkidle0' })
await page.waitForSelector('footer')

const html = await page.content()

await browser.close()
await new Promise((res) => server.httpServer.close(res))

writeFileSync(resolve('dist/index.html'), html)
console.log('Prerendered dist/index.html')
