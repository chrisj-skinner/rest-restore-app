/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        skyblue: '#42b9e8',
        whitegray: '#eeeeee',
        lightgray: '#c8c8c81a',
        gray: '#666666',
      },
      fontFamily: {
        sans: ['Helvetica Neue, Helvetica, Arial, sans-serif, Sans-serif'],
      },
      fontSize: {
        sm: ['0.875rem', '1.5625'],
        md: ['1.3125rem'],
        lg: ['2.2rem', '2.4rem'],
        xl: ['1.375rem', '1.8rem'],
      },

      // screens: {
      //   'tablet': '640px',
      //   // => @media (min-width: 640px) { ... }

      //   'laptop': '1024px',
      //   // => @media (min-width: 1024px) { ... }

      //   'desktop': '1280px',
      //   // => @media (min-width: 1280px) { ... }
      // },
    },
  },
  plugins: [],
};
