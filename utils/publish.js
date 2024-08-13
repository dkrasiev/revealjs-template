import * as vite from 'vite'
import ghpages from 'gh-pages'

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const packageJsonPath = path.resolve(__dirname, '../package.json')
const root = path.resolve(__dirname, '..')
const dist = path.resolve(__dirname, '../dist')

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

async function main() {
  console.log('🕒 Building...')
  await vite.build({
    root,
    base: `/${packageJson.name}/`,
  })
  console.log('✅ Builded successfuly')

  console.log('🕒 Publishing...')
  await ghpages.publish(dist)
  console.log('✅ Published successfuly')
}

main()
