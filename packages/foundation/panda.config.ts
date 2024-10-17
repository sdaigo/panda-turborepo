import { defineConfig } from "@pandacss/dev";
import preset from "./src/preset";

export default defineConfig({
  presets: ["@pandacss/preset-panda", preset],

  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  staticCss: {
    recipes: "*",
  },
});
