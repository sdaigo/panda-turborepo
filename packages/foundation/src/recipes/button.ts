import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
  },
  variants: {
    variant: {
      primary: {
        bg: "red.800",
        color: "red.200",
      },
      secondary: {
        bg: "blue.800",
        color: "blue.200",
      },
      tertiary: {
        bg: "green.800",
        color: "green.200",
      },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "6", fontSize: "16px" },
      xl: { padding: "8", fontSize: "18px" },
    },
    shape: {
      square: { borderRadius: "0" },
      circle: { borderRadius: "full" },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    shape: "circle",
  },
});
