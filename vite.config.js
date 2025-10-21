import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua "usuario" e "repositorio" pelos seus reais
export default defineConfig({
  plugins: [react()],
  base: '/MachinePay.github.io/', 
})
