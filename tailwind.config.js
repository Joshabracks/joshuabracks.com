/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '25%': "24.5%",
        '50%': "48%",
        '75%': "75%"
      },
      minWidth: {
        '25%': "24.5%",
        '50%': "48%",
        '75%': "75%",
        '750': "750px"
      },
      minHeight: {
        full: '100%',
      }
    },
    fontFamily: {
      'sans': ['sans-serif'],
      'big-noodle': ['big-noodle']
    },
    fontSize: {
      'lg': 'max(3vw, 20px)',
      'sm': 'max(2vw, 15px)'
    },
    colors: {
      black: "black",
      white: "white",
      "0": '#e8c547',
      "1": '#30323d',
      "2": '#4d5061',
      "3": '#5c80bc',
      "4": '#cdd1c4',
    },
  },
  plugins: [
  ],
}

