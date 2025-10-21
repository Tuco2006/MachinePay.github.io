// postcss.config.js (Formato de Array para plugins)

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // Chama o plugin como função
    autoprefixer(), // Chama o plugin como função
  ],
}