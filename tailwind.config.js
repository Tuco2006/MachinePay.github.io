/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    // CORRIGIDO: Esta é a sintaxe correta para escanear subdiretórios
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}