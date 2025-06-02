import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ravitestreact/',
  build: {
    lib: {
      entry: "index.html",
      name: "ravitestreact",
      fileName: (format) => `ravitestreact.${format}.js`,
    },
    target: "esnext",
  },
})
