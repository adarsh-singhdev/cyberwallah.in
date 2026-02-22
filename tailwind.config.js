/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['JetBrains Mono', 'monospace'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        bg: '#f4f3ef',
        surface: '#ffffff',
        ink: '#0e0e0e',
        'ink-soft': '#5a5a5a',
        accent: '#0057ff',
        'accent-light': '#e8eeff',
        accent2: '#ff3b1f',
      },
      animation: {
        'float-1': 'float1 12s ease-in-out infinite',
        'float-2': 'float2 15s ease-in-out infinite',
        'scroll-track': 'scrollTrack 30s linear infinite',
        'pulse-dot': 'pulseDot 2s ease infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-30px, 40px) scale(1.05)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px, -30px)' },
        },
        scrollTrack: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
