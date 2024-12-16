/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        poltawsky: ['Poltawsky Nowy', 'serif'],
        playwrite: ["Playwrite US Modern", "sans-serif"],
      },
      colors: {
        madrasaPurple: '#6D2DD3',
      },
    },
  },
  plugins: [],
};
