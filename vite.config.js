import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  base: '/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'src/index.html'),
        darbi: resolve(import.meta.dirname, 'src/darbi/index.html')
      }
    }
  },
  server: {
    strictPort: false,
  }
})
