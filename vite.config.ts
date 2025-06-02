import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ravi-test-react/',
  build: {
    lib: {
      entry: "index.html",
      name: "ravi-test-react",
      fileName: (format) => `ravi-test-react.${format}.js`,
    },
    target: "esnext",
  },
})
