module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00A08E",
          secondary: "#FFF7D6",
          accent: "#4CC086",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
