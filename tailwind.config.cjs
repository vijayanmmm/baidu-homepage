/** @type {import('tailwindcss').Config} */
// '"Microsoft YaHei"','"Helvetica Neue"','Helvetica'
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'http://home.baidu.com',
  ],
  theme: {
    fontFamily:{
      "sans":['Arial','sans-serif'],
      "baidu":['Microsoft YaHei']
    },
    extend: {
      boxShadow:{
        "wholeBoxsm":'5px 5px 5px 5px rgba(0, 0, 0, 0.1)',
        "wholeBoxmd":'10px 10px 10px 10px rgba(0, 0, 0, 0.1)',
        "wholeBoxlg":'15px 15px 15px 15px rgba(0, 0, 0, 0.1)',
        "wholeBoxxl":'25px 25px 25px 25px rgba(0, 0, 0, 0.1)',
        "wholeBox2xl":'35px 35px 35px 35px rgba(0, 0, 0, 0.1)',
      },
      screens:{
        "3xl":'2000px',
        "4xl":'2500px',
      },
      fontSize: {
        '13': '13px',
        '15': '13px',
        '17': '17px',
      },
      colors:{
        "baiduTextWhite":"#fffffd",
        "baiduFooter":"#bbbbbb",
        "baiduBackgroud":"#4e6ef2",
        "baiduHotBackground":"#f60"
      }
    },
  },
  plugins: [],
}
