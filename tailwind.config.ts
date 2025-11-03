import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f1f8ff',
          100: '#dbefff',
          200: '#badeff',
          300: '#88c5ff',
          400: '#4fa0ff',
          500: '#1f7fff',
          600: '#0b60e3',
          700: '#0a4bb6',
          800: '#0d3f8f',
          900: '#10376f',
        },
        coral: {
          50: '#fff0f0',
          100: '#ffd9d9',
          200: '#ffbdbd',
          300: '#ff8d8d',
          400: '#ff4f4f',
          500: '#ef233c',
          600: '#d1122a',
          700: '#a80e21',
          800: '#800b1b',
          900: '#5d0714',
        },
        deep: '#0a1b2b',
      },
      fontFamily: {
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(180deg, rgba(6, 20, 34, 0.85) 0%, rgba(6, 20, 34, 0.45) 40%, rgba(6, 20, 34, 0.85) 100%)',
      },
      boxShadow: {
        elevated: '0 35px 60px -15px rgba(10, 27, 43, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
