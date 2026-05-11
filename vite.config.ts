import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
base: "/rubin-sustainability-links/"
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
