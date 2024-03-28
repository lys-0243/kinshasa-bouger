import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#c71a0c",
      bleu: "#152c45",
      bleulight: "#1f354e",
      text: "#2b2b2b",
      orange: "#e45c16",
      white: "#fff",
      grayHard: "#212121",
      grayLight: "#bcbcbc",
      grayLight2: "#f1f1f1",
    },
    fontFamily: {
      PExtra: ["Poppins-ExtraBold", "sans-serif"],
      PBlack: ["Poppins-Black", "sans-serif"],
      PBold: ["Poppins-Bold", "sans-serif"],
      PMedium: ["Poppins-Medium", "sans-serif"],
      PRegular: ["Poppins-Regular", "sans-serif"],
      PLight: ["Poppins-Light", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
