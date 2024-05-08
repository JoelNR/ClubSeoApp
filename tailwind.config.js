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
            DEFAULT: '#f9a45e',
            '100':'#ff7700',
            '80': '#fabb86',
            '60': '#fcd1ae',
            '40': '#fde8d6',
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
            '100': '#F45C5C',
            '80': '#FF8C8C',
            '60': '#FFC9C9',
            '50': '#FFE4E4',
            'green': '#ECFFB5',
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
