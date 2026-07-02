/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#182232', // Deep Navy from logo
        cream: '#FDFBF7',
        'cream-dark': '#FAF5EE',
        tan: '#EBE2D5',
        gold: {
          DEFAULT: '#B1945D', // Bronze/Gold from logo
          hover: '#9A7F4B', 
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        button: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
