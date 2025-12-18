/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'serviceseguros': {
          'blue': '#003366', // Adjust these colors based on traditional insurance/security branding or common "ServiceSeguros" palettes
          'light-blue': '#0055a4',
          'accent': '#00a8e8',
        },
        'souzaborges': {
          'gold': '#c5a059',
          'dark': '#1a1a1a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
