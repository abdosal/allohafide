/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          dark: '#0a0a0a'
        },
        accent: {
          DEFAULT: '#FF4444',
          light: '#FF6666',
          dark: '#CC0000',
          orange: '#FF8C00',
          yellow: '#FFC107'
        },
        fire: {
          red: '#FF4444',
          orange: '#FF8C00',
          yellow: '#FFC107'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3d': '0 10px 30px -10px rgba(255, 68, 68, 0.5)',
        '3d-hover': '0 20px 50px -10px rgba(255, 68, 68, 0.7)',
        'glow': '0 0 20px rgba(255, 68, 68, 0.6)',
        'glow-orange': '0 0 30px rgba(255, 140, 0, 0.5)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      backgroundImage: {
        'gradient-fire': 'linear-gradient(135deg, #FF4444 0%, #FF8C00 50%, #FFC107 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      }
    },
  },
  plugins: [],
}
