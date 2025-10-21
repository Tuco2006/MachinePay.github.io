  /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        // CRUCIAL: Deve incluir todos os arquivos de componente na sua pasta src
        "./src/**/*.{js,ts,jsx,tsx}", 
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    