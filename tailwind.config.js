/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Añade Syne aquí para que las clases font-['Syne'] funcionen
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
