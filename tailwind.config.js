/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
        screens: {
      1200: '1200px',    
      920: '920px',
      600: '600px',
      500: '500px'
    },
    backgroundImage: {
      landingPage: 'url("assets/bg.jpg")',
      card: 'url("assets/bg-card-3.jpg")'
    },
fontFamily: {
  FjallaOne: 'Fjalla One',
  Courgette: 'Courgette',
},
fontWeight: {
  normal: '400',
  bold: '700',
},
},
  },
  plugins: [],
}