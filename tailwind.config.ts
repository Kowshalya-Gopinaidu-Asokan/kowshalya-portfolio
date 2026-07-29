import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050508',
          900: '#0a0a0f',
          800: '#111118',
          700: '#1a1a24',
        },
        aurora: {
          violet: '#7c3aed',
          indigo: '#4f46e5',
          cyan: '#06b6d4',
          pink: '#ec4899',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 12s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        blink: 'blink 1s step-start infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-18px) translateX(6px)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'aurora-gradient':
          'linear-gradient(115deg, #4f46e5 0%, #7c3aed 25%, #ec4899 50%, #06b6d4 75%, #4f46e5 100%)',
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config
