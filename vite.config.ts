import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Set VITE_BASE_PATH during deployment (for example /MyPortfolio/ on GitHub Pages).
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
