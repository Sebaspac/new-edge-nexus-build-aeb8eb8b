import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Check if dist folder exists
if (!fs.existsSync(toAbsolute('dist'))) {
  console.error('❌ dist folder not found. Run build:client first.')
  process.exit(1)
}

// Check if server folder exists
if (!fs.existsSync(toAbsolute('dist/server'))) {
  console.error('❌ dist/server folder not found. Run build:server first.')
  process.exit(1)
}

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

try {
  const { render } = await import('./dist/server/entry-server.js')
  
  // Get all routes from pages folder
  const routesToPrerender = fs
    .readdirSync(toAbsolute('src/pages'))
    .map((file) => {
      const name = file.replace(/\.tsx$/, '').toLowerCase()
      return name === 'index' ? '/' : `/${name}`
    })

  console.log('📄 Routes to prerender:', routesToPrerender)

  // Prerender each route
  for (const url of routesToPrerender) {
    console.log(`🔄 Prerendering: ${url}`)
    
    const appHtml = render(url);
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log(`✅ Generated: ${filePath}`)
    
    // Check if content was actually rendered
    if (html.includes('<h1') || html.includes('<h2') || html.includes('<h3')) {
      console.log(`✅ SEO content found in ${filePath}`)
    } else {
      console.warn(`⚠️  No heading tags found in ${filePath}`)
    }
  }
  
  console.log('🎉 Prerendering completed successfully!')
  
} catch (error) {
  console.error('❌ Prerender failed:', error)
  process.exit(1)
}