/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Loving Hands Brand Palette
        primary: {
          DEFAULT: '#7B1D1D',
          dark: '#5C1515',
          light: '#A63232',
        },
        secondary: {
          DEFAULT: '#C09070',
          light: '#D4B08A',
        },
        accent: '#F5EFE6',
        muted: '#6B6B6B',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paws-pattern': "url('/images/paws-bg.svg')",
      },
    },
  },
  plugins: [],
};
