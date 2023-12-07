/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xl: { max: '1919px' },
      lg: { max: '1279px' },
      md: { max: '719px' },
      sm: { max: '550px' },
      mb: { max: '450px' },
    },
    colors: {
      blue: '#2666FF',
      blue_dark: '#02309F',
      border_blue: '#005EFF',
      darkblue: 'rgba(38, 102, 255, 0.10)',
      darkblue3: 'rgba(38, 102, 255, 0.15)',
      darkblue4: 'rgba(38, 102, 255, 0.32)',
      darkblue2: 'rgba(38, 102, 255, 0.50)',
      darkBlueText: 'rgba(38, 102, 255, 0.60)',
      backgroundBlue: '#01142C',

      lightgray: 'rgba(255, 255, 255, 0.60)',
      white: '#FFF',

      gray:'#9BA4B3',

      pink: '#D34176',
      green: '#23AF91',
      newGreen: '#64CB8C',

      lightRed: 'rgba(211, 65, 118, 0.20)',
      lightGreen: 'rgba(56, 163, 165, 0.20)',
      errorTextRed: 'rgba(252, 3, 61, 1)',

      warning: '#F59B13',
      warningBackground: 'rgba(245, 155, 19, 0.10)',
    },
    fontFamily: {
      // sans: ['Roboto Slab', 'sans-serif'],
      // flex: ['Roboto Flex', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}