/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
   
    colors: {
      "blue-dark" :"#101820",
      "text-white":"#F2F2F2",
      "text-black": "#001011",
      "destacado":"#D9A648 ",
      "blue-light":"rgba(28, 31, 42, 0.67)",
      "color-hover": "#D9A648 ",
     "grad-1": "#D7C187 ",
       "grad-2": "#8C7741 ",
       "grad-3": "#877140 75.65%",
       "grad-4": "#DDCA8E 114.36%",
       "grad-5":"rgba(21,22,24,0.24) 0%"
    },
    extend: {

    fontFamily :{
      "principal":['Audiowide', 'sans-serif'],
      "secundario":['DM Serif Display', 'serif']
    }
    },
  },
  plugins: [],
}
