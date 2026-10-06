import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        panel: '#111214',
        soft: '#17181b',
        border: 'rgba(255,255,255,0.08)',
        muted: '#a1a1aa',
        accent: '#f5f5f5',
        accent2: '#d4d4d8',
      },
      boxShadow: {
        glow: '0 0 30px rgba(255,255,255,0.18)',
        card: '0 20px 60px rgba(0,0,0,0.38)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 48%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
