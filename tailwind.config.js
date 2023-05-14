module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        intro: 'url("../images/Background.png")',
      },
      colors: {
        text_content: "#383838",
        text_button: "#ADAEAE",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "headering-h1": "55px",
      },
      lineHeight: {
        "headering-h1": "83px",
        "headering-h1-mobile": "54px",
      },
      maxWidth: {
        1140: "1140px",
        608: "608px",
        612: "612px",
        690: "690px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
