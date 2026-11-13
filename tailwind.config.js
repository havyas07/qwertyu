/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        havyas: {
          navy: {
            DEFAULT: '#12345A', // Primary Deep Navy Blue
            light: '#1e4875',
            dark: '#0c223c',
            50: '#F2F6FA',
            100: '#E1EAF2',
            200: '#C2D5E6',
            300: '#94B6D5',
            400: '#5F92BF',
            500: '#3A72A4',
            600: '#2A5A87',
            700: '#1F456A',
            800: '#173654',
            900: '#12345A',
            950: '#0B1E34',
          },
          teal: {
            DEFAULT: '#16A6A1', // Secondary Medical Teal
            light: '#2cd5ce',
            dark: '#10807c',
            50: '#F0FDFB',
            100: '#CCFBF4',
            200: '#99F6E8',
            300: '#5EEAD9',
            400: '#2DD4C0',
            500: '#16A6A1',
            600: '#128B87',
            700: '#0E6E6B',
            800: '#105856',
            900: '#124A48',
          },
          softBlue: '#F2F7FA', // Secondary background
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 52, 90, 0.08)',
        'premium': '0 12px 36px -4px rgba(18, 52, 90, 0.12)',
        'elevated': '0 20px 48px -8px rgba(18, 52, 90, 0.16)',
      }
    },
  },
  plugins: [],
}
