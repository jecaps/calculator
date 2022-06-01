module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      screen: "rgba(0, 0, 0, .75)",
      white: "#f2f7f2c5",
      "white-pure": "#FFF",
      button: "#F4F4F4",
      "white-trans": "rgba(255, 255, 255, .75)",
      "white-hover": "rgba(255, 255, 255, .9)",
      "dark-blue": "#011627",
    },
    fontSize: {
      1.5: "1.5rem",
      2: "2rem",
      2.5: "2.5rem",
    },
    extend: {
      gridTemplateRows: {
        7: "minmax(7rem, auto) repeat(6, 4rem)",
      },
      gridTemplateColumns: {
        4: "repeat(4, 6rem)",
      },
    },
  },
  plugins: [],
};
