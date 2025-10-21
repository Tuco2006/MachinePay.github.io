import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 1. CORREÇÃO DE CAMINHO PARA GITHUB PAGES
  base: "./", 
  
  plugins: [react()],
  
  // 2. CORREÇÃO DE BUILD: Força o Vite a usar PostCSS de forma estável, 
  // ignorando o erro de carregamento externo (desde que o postcss.config.cjs seja removido)
  css: {
    postcss: {}
  }
})