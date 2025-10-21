import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MachinePay.github.io/', // 👈 coloque exatamente o nome do seu repositório aqui
})
