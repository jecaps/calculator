module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      screen: "rgba(0, 0, 0, .75)",
      white: "#f2f7f2c5",
      whiter: "#FFF",
      button: "#F4F4F4",
    },
    extend: {
      gridTemplateRows: {
        layout: "minmax(7rem, auto) repeat(6, 6rem)",
      },
      gridTemplateColumns: {
        layout: "repeat(4, 6rem)",
      },
    },
  },
  plugins: [],
};
