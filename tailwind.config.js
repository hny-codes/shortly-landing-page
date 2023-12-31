const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'link-mobile': "url('/src/images/bg-shorten-mobile.svg')",
        'link-desktop': "url('/src/images/bg-shorten-desktop.svg')",
        'banner-mobile': "url('/src/images/bg-boost-mobile.svg')",
        'banner-desktop': "url('/src/images/bg-boost-desktop.svg')",
      },
      fontFamily: {
        Poppins: ['Poppins', 'Poppins-Bold', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        menuOpen: {
          from: { opacity: 0, transform: 'translateY(50px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        menuClose: {
          from: { opacity: 1, transform: 'translateY(0)' },
          to: { opacity: 0, transform: 'translateY(50px)' },
        },
      },
      animation: {
        'menu-open': 'menuOpen 0.3s ease',
        'menu-close': 'menuClose 0.3s ease',
      },
    },
  },
  plugins: [],
};
