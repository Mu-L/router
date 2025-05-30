import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createTypeDocApp } from './typedoc-markdown.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

createTypeDocApp({
  name: 'API Documentation',
  tsconfig: path.resolve(__dirname, './typedoc.tsconfig.json'),
  categorizeByGroup: true,
  githubPages: false,
  disableSources: true, // some links are in node_modules and it's ugly
  plugin: ['typedoc-plugin-markdown'],
  entryPoints: [path.resolve(__dirname, '../router/src/index.ts')],
}).then(app => app.build())
