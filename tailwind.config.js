/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
          dark: '#141414',
        },
        wood: {
          DEFAULT: '#A67C52',
          light: '#B8956A',
          dark: '#8B6540',
        },
        cream: {
          DEFAULT: '#F5F5DC',
          light: '#FAFAF0',
          dark: '#E8E8D0',
        },
      },
      
      // Custom Fonts
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      // Custom Animation
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'parallax': 'parallax 10s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      // Custom Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        parallax: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      
      // Custom Box Shadow
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 20px -3px rgba(0, 0, 0, 0.1), 0 10px 30px -2px rgba(0, 0, 0, 0.08)',
        'large': '0 10px 40px -5px rgba(0, 0, 0, 0.15), 0 15px 50px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(166, 124, 82, 0.3)',
        'glow-lg': '0 0 40px rgba(166, 124, 82, 0.4)',
      },
      
      // Custom Border Radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      
      // Custom Max Width
      maxWidth: {
        'xs': '20rem',
        'xl': '36rem',
        '7xl': '80rem',
      },
      
      // Custom Spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      
      // Custom Background Image
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'coffee-pattern': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 40 40\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'8\' fill=\'%23A67C52\' opacity=\'0.15\'/%3E%3Cellipse cx=\'20\' cy=\'20\' rx=\'3\' ry=\'8\' fill=\'%231A1A1A\' opacity=\'0.1\'/%3E%3C/svg%3E")',
      },
      
      // Custom Transition
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  
  // Plugins
  plugins: [
    // Add plugins if needed
  ],
}