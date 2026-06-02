// tailwind.config.js
// ─────────────────────────────────────────────────────────
// Extend konfigurasi Tailwind sesuai Design System agency.
// Letakkan file ini di root project Next.js Anda.
// ─────────────────────────────────────────────────────────

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      // ─── Font Family ───────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },

      // ─── Brand Colors ──────────────────────────────────
      colors: {
        brand: {
          // Background & Surface
          bg:       '#0F1423',   // Main background
          card:     '#1A1F3A',   // Card / Panel surface
          'card-hover': '#212847',

          // Primary (Royal Blue)
          900:      '#0A0E27',
          800:      '#1A1F3A',
          700:      '#2D3561',
          600:      '#4052D4',   // Main primary / button

          // Accent Cyan (speed / AI)
          cyan:     '#00D9FF',
          'cyan-dim':  '#00A8CC',
          'cyan-soft': '#26E3FF',

          // Accent Purple (premium / tech)
          purple:   '#A855F7',
          'purple-dim': '#7E22CE',
          'purple-soft': '#D8B4FE',

          // Accent Lime (growth / impact)
          lime:     '#CCFF00',

          // Text Scale
          'text-primary':   '#F5F7FA',
          'text-secondary': '#B4BFCC',
          'text-muted':     '#6B7582',

          // Semantic
          success: '#10B981',
          warning: '#F59E0B',
          error:   '#EF4444',
        },
      },

      // ─── Custom Animations ─────────────────────────────
      animation: {
        'float-slow':  'float-slow 5s ease-in-out infinite',
        'float-mid':   'float-mid 4s ease-in-out infinite 0.5s',
        'float-fast':  'float-fast 3.5s ease-in-out infinite 1s',
        'gradient':    'gradient-shift 5s ease infinite',
        'scroll':      'scroll-bounce 1.6s ease-in-out infinite',
        'glow-pulse':  'glow-pulse 2.5s ease-in-out infinite',
      },

      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'float-mid': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'gradient-shift': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%':      { transform: 'translateY(6px)', opacity: '0.4' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(0, 217, 255, 0.3)' },
          '50%':      { boxShadow: '0 0 28px rgba(0, 217, 255, 0.7)' },
        },
      },

      // ─── Border Radius ─────────────────────────────────
      borderRadius: {
        '2xl': '1rem',    // 16px — card default
        '3xl': '1.5rem',  // 24px — hero card, large panels
        pill:  '9999px',  // Pill buttons
      },

      // ─── Container Max Widths ──────────────────────────
      maxWidth: {
        container: '1280px',
      },

      // ─── Backdrop Blur ─────────────────────────────────
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        DEFAULT: '12px',
        lg: '20px',
      },

      // ─── Box Shadow (glow effects) ─────────────────────
      boxShadow: {
        'glow-cyan':   '0 0 24px rgba(0, 217, 255, 0.3)',
        'glow-purple': '0 0 24px rgba(168, 85, 247, 0.3)',
        'glow-brand':  '0 0 32px rgba(64, 82, 212, 0.4)',
        'card':        '0 8px 24px rgba(0, 0, 0, 0.3)',
        'card-hover':  '0 12px 40px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};

module.exports = config;
