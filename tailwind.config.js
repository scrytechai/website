/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // ScrytechAI Brand Colors
        'brand': {
          'navy':      '#0E2841',
          'navy-deep': '#071628',
          'navy-mid':  '#0A1F35',
          'blue':      '#2253D2',
          'blue-light':'#4B7BF5',
          'orange':    '#F09C24',
          'orange-light': '#FFBE5C',
          'gold':      '#D1B320',
          'gold-light':'#F0D060',
          'gray':      '#E8E8E8',
          'gray-mid':  '#A0A8B8',
          'dark':      '#000000',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['Inter', 'SF Pro Display', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #071628 0%, #0E2841 35%, #0A1F35 65%, #071628 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        'blue-glow': 'radial-gradient(ellipse at center, rgba(34,83,210,0.3) 0%, transparent 70%)',
        'orange-glow': 'radial-gradient(ellipse at center, rgba(240,156,36,0.25) 0%, transparent 70%)',
        'brand-gradient': 'linear-gradient(135deg, #2253D2 0%, #F09C24 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'wave': 'wave 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'particle': 'particle 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.05)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) translateX(50px)', opacity: '0' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-blue': '0 8px 32px rgba(34,83,210,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-orange': '0 8px 32px rgba(240,156,36,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
        'neon-blue': '0 0 20px rgba(34,83,210,0.5), 0 0 60px rgba(34,83,210,0.2)',
        'neon-orange': '0 0 20px rgba(240,156,36,0.5), 0 0 60px rgba(240,156,36,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
        'card-hover': '0 12px 48px rgba(34,83,210,0.3)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
