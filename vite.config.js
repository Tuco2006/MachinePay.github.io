import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Outras configurações...
  plugins: [react()], 

  // ADICIONE ESTE BLOCO PARA TENTAR DESATIVAR O POSTCSS EXTERNO
  css: {
    postcss: null 
  }
})