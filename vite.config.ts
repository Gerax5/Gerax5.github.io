import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * GitHub Pages sirve los repos normales bajo `/<repo>/`, pero el repo especial
 * `<usuario>.github.io` se sirve en la raíz. Si `base` no coincide, los assets
 * dan 404 y la página sale en blanco.
 *
 * En vez de fijarlo a mano lo deducimos de GITHUB_REPOSITORY ("owner/nombre"),
 * que Actions define solo. Así el repo puede llamarse como sea.
 * En local la variable no existe y usamos "/".
 */
function resolveBase(): string {
  const slug = process.env.GITHUB_REPOSITORY
  if (!slug) return '/'

  const [owner, name] = slug.split('/')
  if (!owner || !name) return '/'

  return name.toLowerCase() === `${owner.toLowerCase()}.github.io` ? '/' : `/${name}/`
}

export default defineConfig({
  base: resolveBase(),
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5174,
  },
})
