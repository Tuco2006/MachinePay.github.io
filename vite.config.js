import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Corrigido a importação do tailwindcss

// https://vitejs.dev/config/
export default defineConfig({
  // ADICIONE ESTA LINHA: O nome do seu repositório deve ser a base.
  base: "/MachinePay.github.io/", 
  
  plugins: [react(), tailwindcss()],
})