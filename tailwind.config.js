/** @type {import('tailwindcss').Config} */
export default { // MUDANÇA: de module.exports para export default
  content: [
    "./index.html",
    // Esta linha estava com aspas simples nos arquivos que você mandou; 
    // Garanta que o caminho de busca esteja correto:
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
