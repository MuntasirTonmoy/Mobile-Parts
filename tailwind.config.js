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
          primary: "#82DBD8",
          secondary: "#f6d860",
          accent: "#3BACB6",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
