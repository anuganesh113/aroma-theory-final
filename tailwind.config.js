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
      fontSize: {
        'display-hero': ['clamp(3rem, 7vw + 1rem, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-section': ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-card': ['clamp(1.5rem, 3vw + 0.5rem, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-quote': ['clamp(1.75rem, 4vw + 1rem, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'eyebrow': ['0.875rem', { lineHeight: '1.2', letterSpacing: '0.3em', fontWeight: '600' }],
        'lead': ['clamp(1.125rem, 1.5vw + 0.5rem, 1.375rem)', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.65' }],
        'caption': ['0.8125rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}
