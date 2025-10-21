// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NÃO PRECISA IMPORTAR NADA RELACIONADO AO TAILWIND AQUI

export default defineConfig({
  // Mantenha a base para o deploy:
  base: "./", 
  
  plugins: [
    react() // Apenas o plugin React
  ],
})