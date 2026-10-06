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
        panel: '#0D0D0F',
        soft: '#111114',
        border: 'rgba(255,255,255,0.08)',
        muted: '#a1a1aa',
        accent: '#7C3AED',
        accent2: '#A78BFA',
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 58, 237, 0.28)',
        card: '0 20px 60px rgba(0,0,0,0.38)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(124,58,237,0.24), transparent 48%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
