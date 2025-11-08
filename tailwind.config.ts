import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#0b1f33',
          100: '#0f2b47',
          200: '#13385e',
          300: '#184a7c',
          400: '#1f61a4',
          500: '#0a84ff',
          600: '#0060df',
          700: '#0040a0',
          800: '#002d72',
          900: '#001a45',
        },
        coral: {
          50: '#e6f7ff',
          100: '#cdeeff',
          200: '#a4e1ff',
          300: '#7ad0ff',
          400: '#64d2ff',
          500: '#46c3ff',
          600: '#2aa3e6',
          700: '#1c7cbc',
          800: '#155f92',
          900: '#0f4569',
        },
        deep: '#050914',
      },
      fontFamily: {
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(180deg, rgba(5, 11, 23, 0.85) 0%, rgba(5, 11, 23, 0.55) 40%, rgba(5, 11, 23, 0.92) 100%)',
      },
      boxShadow: {
        elevated: '0 45px 90px -30px rgba(10, 132, 255, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
