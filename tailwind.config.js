/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    // CORRIGIDO: Deve ser **/* para pegar todos os subdiretórios (componentes, pages, etc.)
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
