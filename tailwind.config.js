/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        danger :
        { 
          500 :"rgb(100,232,3)" ,
          300 : "rgb(100,32,200)" 
        },
      },
      fontFamily:{ 
       nunito :  ['Nunito']}
    },
  },
  plugins: [],
}


