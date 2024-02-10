/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        'Ops': ['Black Ops One'],
        'Press': ['Press Start 2P'],
        'Protest': ['Protest Guerrilla'],
        'Yeseva': ['Yeseva One']
      },
    },
  },
  plugins: [require("daisyui")]
}

