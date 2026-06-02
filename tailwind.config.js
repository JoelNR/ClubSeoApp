/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      maxWidth: {
        '290': '1160px',
      },
        
      colors: {
        clear: {
            DEFAULT: '#ecf1f5',
            'bg' : '#bcc0c4'
        },
        gold : {
            DEFAULT: '#b5a964',
        },
        orange: {
            DEFAULT: 'var(--orange)',
            '100':'var(--orange-100)',
            '80': 'var(--orange-80)',
            '60': 'var(--orange-60)',
            '40': 'var(--orange-40)',
        },
        nightblue: {
            DEFAULT: '#15224f',
            '100': '#15224f',
            '90': '#030014',
            '80': '#414c71',
            '60': '#69718e',
            '50': '#abafbf',
            '20': '#d9dce3',
            '10': '#f6f6f8'
        },
        alert: {
            '100': 'var(--alert-100)',
            '80': 'var(--alert-80)',
            '60': 'var(--alert-60)',
            '50': 'var(--alert-50)',
            'green': 'var(--alert-green)',
        },
        skyblue: {
            DEFAULT: '#DEF0F4',
            '100': '#DEF0F4',
        }
    },

    },
  },
  plugins: [
   
  ],
}
