import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "pokedex/",
  server: {
    host: "0.0.0.0",
  }
})
