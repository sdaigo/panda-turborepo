import { defineConfig, definePreset } from "@pandacss/dev";
import { buttonRecipe } from "./recipes/button";
import { accordionRecipe } from "./recipes/acrrodion";

export const preset = definePreset({
  name: "six-org-preset",
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    slotRecipes: {
      accordion: accordionRecipe,
    },
  },
});

export const config = defineConfig({
  preflight: true,

  jsxFramework: "react",

  outdir: "styled-system",
  importMap: "@six-org/styled-system",
});
