module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ul': {
              '> li': {
                '&::before': {
                  'background-color': '#6b7280',
                },
              },
            },
            tbody: {
              tr: {
                'border-bottom-color': '#6b7280',
              },
            },
            thead: {
              'border-bottom-color': '#111827',
            },
          },
        },
      }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'iceberg': '#bdd8d8',
      'scooter': '#2fa3a3',
      'gulf-stream': '#7fb5b5',
      'turquoise': '#57e2b1',
    },
    boxShadow: {
      '2xl-trl': '0px -10px 24px -5px rgba(0, 0, 0, 0.25)',
      '2xl-lrb': '0px 10px 11px 4px rgba(0, 0, 0, 0.25)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
