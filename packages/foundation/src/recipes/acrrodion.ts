import { accordionAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const accordionRecipe = defineSlotRecipe({
  className: "accordion",
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      divideY: "1px",
      width: "full",
      borderTopWidth: "1px",
      borderBottomWidth: "1px",
    },
    itemTrigger: {
      alignItems: "center",
      color: "black",
      cursor: "pointer",
      display: "flex",
      fontWeight: "600",
      gap: "3",
      justifyContent: "space-between",
      textStyle: "lg",
      textAlign: "left",
      width: "full",
      _disabled: {
        color: "gray.200",
        cursor: "not-allowed",
      },
    },
    itemIndicator: {
      color: "fg.muted",
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(-180deg)",
      },
    },
    itemContent: {
      color: "gray.800",
      overflow: "hidden",
      transitionProperty: "padding-bottom",
      transitionDuration: "normal",
      transitionTimingFunction: "default",
      _open: {
        animation: "collapse-in",
      },
      _closed: {
        animation: "collapse-out",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      md: {
        itemTrigger: {
          py: "4",
        },
        itemContent: {
          pb: "6",
          pr: "8",
          _closed: {
            pb: "0",
          },
        },
      },
    },
  },
});
