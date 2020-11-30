module.exports = {
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        waffle: "#fcc14c",
        darkGrey: "#212121",
        lightGrey: "#313131",
      },
      borderRadius: {
        snippet: "15px",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
