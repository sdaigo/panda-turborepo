import { defineConfig } from "@pandacss/dev";
import { preset, config } from "@six-org/foundation";
import pandaPreset from "@pandacss/preset-panda";

export default defineConfig({
  ...config,

  presets: [pandaPreset, preset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  exclude: [],

  staticCss: {
    recipes: "*",
  },
});
