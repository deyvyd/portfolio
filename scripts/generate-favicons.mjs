import puppeteer from 'puppeteer'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const svg = readFileSync(resolve('public/favicon.svg'), 'utf-8')

const sizes = [
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-192.png', size: 192 },
  { name: 'favicon-512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
]

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()

for (const { name, size } of sizes) {
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 })
  await page.setContent(`
    <html><body style="margin:0;padding:0;">
      <div style="width:${size}px;height:${size}px;">${svg}</div>
    </body></html>
  `)
  await page.evaluate(() => {
    const svgEl = document.querySelector('svg')
    svgEl.setAttribute('width', '100%')
    svgEl.setAttribute('height', '100%')
  })
  const buffer = await page.screenshot({ type: 'png', omitBackground: false })
  writeFileSync(resolve('public', name), buffer)
  console.log(`Generated public/${name}`)
}

await browser.close()
