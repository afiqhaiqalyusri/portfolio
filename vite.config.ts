import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()], // ✅ THIS LINE IS CRITICAL
  base: "/portfolio/",
})