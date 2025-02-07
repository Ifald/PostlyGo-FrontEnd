/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Подключение всех файлов в папке src
    './app/**/*.{js,ts,jsx,tsx}', // Подключение всех файлов в папке app (если используется)
    './pages/**/*.{js,ts,jsx,tsx}', // Если у вас есть папка pages
    './components/**/*.{js,ts,jsx,tsx}', // Если вы используете отдельные компоненты
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
