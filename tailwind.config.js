// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Inclui todos os arquivos JavaScript e TypeScript na pasta app
    "./components/**/*.{js,ts,jsx,tsx}", // Inclui todos os arquivos nas pastas de componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
