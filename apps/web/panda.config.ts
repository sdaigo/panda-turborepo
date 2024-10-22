import { defineConfig } from "@pandacss/dev";
import { preset } from "@six-org/foundation";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  presets: ["@pandacss/preset-panda", preset],

  // Where to look for your css declarations
  include: [
    "./node_modules/@six-org/components/src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@six-org/objects/src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  outdir: "styled-system",
  importMap: "@six-org/styled-system",
});
