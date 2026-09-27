/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F5F3EE',
          alt: '#EDE9DE',
          raised: '#FBFAF6',
        },
        ink: {
          DEFAULT: '#15140F',
          muted: '#635D4E',
          faint: '#948D78',
        },
        line: {
          DEFAULT: '#E1DCCC',
          strong: '#CBC3AC',
        },
        accent: {
          DEFAULT: '#3A54E4',
          dark: '#2A3EAE',
          soft: '#E7EAFB',
        },
        success: {
          DEFAULT: '#1F8F5F',
          soft: '#E2F2E9',
        },
        warning: {
          DEFAULT: '#B87423',
          soft: '#F8EEDD',
        },
        danger: {
          DEFAULT: '#C6453C',
          soft: '#FAEAE7',
        },
        code: {
          bg: '#1B1912',
          line: '#2C2A20',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '42rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
