import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      lime:{
        100:"#D8DB2F"
      },
      slate:{
        100:"#E4F4FD",
        300:"#9ABED5",
        500:"#6B94A8",
        700:"#4E6E7E",
        900:"#133041"
      },
      white:"#FFFFFF",
      red:"#D73328",
      black:'#000000'
    },
    fontFamily:{
      'jakarta':['Plus Jakarta Sans Variable', 'sans-serif']
    },
    spacing:{
      0:"0rem",
      500:"2.5rem",
      400:"2rem",
      300:"1.5rem",
      200:"1rem",
      150:"0.75rem",
      100:"0.5rem"
    },
    screens:{
      md:"768px",
      sm:"375px"
    },
    extend: {
      boxShadow:{
        "main":"0px 32px 64px 0px rgba(19, 48, 65, 0.10)"
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config , theme }) {
      // Add your custom styles here
      addUtilities({
        ".text-preset-1":{
          fontFamily: theme("fontFamily.jakarta"),
          fontSize: " 3.5rem",
          lineHeight:"4.375rem",
          fontStyle:"normal",
          fontWeight: 700,
          color:theme("colors.slate-900"),
          letterSpacing:"-0.0625rem",
        },
        ".text-preset-2":{
          fontFamily: theme("fontFamily.jakarta"),
          fontSize: "1.5rem",
          lineHeight:"1.875rem",
          fontStyle:"normal",
          fontWeight: 700,
          color:theme("colors.slate-900"),
          letterSpacing:"-0.0625rem",
        },
        ".text-preset-3":{
          fontFamily: theme("fontFamily.jakarta"),
          fontSize: "1.125rem",
          lineHeight:"1.40625rem",
          fontStyle:"normal",
          fontWeight: 700,
          color:theme("colors.slate-900"),
          letterSpacing:"-0.0625rem",
        },
        ".text-preset-4":{
          fontFamily: theme("fontFamily.jakarta"),
          fontSize: "1rem",
          lineHeight:"1.5rem",
          fontStyle:"normal",
          fontWeight: 500,
          color:theme("colors.slate-900"),
        },
        ".text-preset-5":{
          fontFamily: theme("fontFamily.jakarta"),
          fontSize: "0.875rem",
          lineHeight:"1.3125rem",
          fontStyle:"normal",
          fontWeight: 500,
          color:theme("colors.slate-900"),
        },
      })
    }),
  ],
}

