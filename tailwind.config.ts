import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#7E44F8",
        secondaryLightGray: "#C9D2DE",
        primaryBg: "#F3F4F8",
        colorDark: "#181E25",
        colorNeutral: "#7B828A",
        neutralText: "#434346",
        colorRed: "#FF4242",
      },
    },
  },
  plugins: [],
};

export default config;
