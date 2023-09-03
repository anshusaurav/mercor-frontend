/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-grey": "#B6B6B6",
      },
      keyframes: {
        woggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      fontFamily: {
        agrandirbold: ["AGRANDIRBOLD", "cursive"],
        agrandirlight: ["AGRANDIRLIGHT", "cursive"],
      },
      backgroundImage: {
        "hero-pattern": "url('../public/assets/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      letterSpacing: {
        tightest: "-0.5em",
        tighter: "-.1em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".1em",
        widest: ".5em",
      },
      fontSize: {
        xxxs: "0.4rem",
        xxs: "0.625rem",
        "12xl": "12.25rem",
      },
      borderRadius: {
        DEFAULT: "7px",
      },
      maxHeight: {
        half: "50%",
      },
      translate: {
        double: "200%",
      },
    },
  },
  plugins: [],
};
