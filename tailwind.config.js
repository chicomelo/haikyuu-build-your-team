/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        court: {
          sand: '#EDC07D',
          sea: '#1fb5c3',
        },
      },
    },
  },
  plugins: [],
}

