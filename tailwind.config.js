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
      3.5: "3.5rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
    },
    extend: {
      gridTemplateRows: {
        7: "minmax(10rem, auto) repeat(6, 8rem)",
      },
      gridTemplateColumns: {
        4: "repeat(4, 22%)",
      },
    },
  },
  plugins: [],
};
