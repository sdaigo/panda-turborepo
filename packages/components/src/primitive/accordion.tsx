"use client";
import type { AccordionRootProviderBaseProps, Assign } from "@ark-ui/react";
import { Accordion } from "@ark-ui/react/accordion";
import {
  type AccordionVariantProps,
  accordion,
} from "@six-org/styled-system/recipes";
import type {
  ComponentProps,
  HTMLStyledProps,
} from "@six-org/styled-system/types";
import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(accordion);

interface ExtendedProps
  extends HTMLStyledProps<"div">,
    AccordionRootProviderBaseProps,
    AccordionVariantProps {
  className?: string;
}

export const RootProvider = withProvider<HTMLDivElement, ExtendedProps>(
  Accordion.RootProvider,
  "root",
);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
// export const RootProvider = withProvider<
//   HTMLDivElement,
//   Assign<
//     Assign<HTMLStyledProps<"div">, Accordion.RootProviderBaseProps>,
//     AccordionVariantProps
//   >
// >(Accordion.RootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
// export const Root = withProvider<
//   HTMLDivElement,
//   Assign<
//     Assign<HTMLStyledProps<"div">, Accordion.RootBaseProps>,
//     AccordionVariantProps
//   >
// >(Accordion.Root, "root");
export const Root = withProvider<HTMLDivElement, ExtendedProps>(
  Accordion.Root,
  "root",
);

export const ItemContent = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, Accordion.ItemContentProps>
>(Accordion.ItemContent, "itemContent");

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, Accordion.ItemIndicatorProps>
>(Accordion.ItemIndicator, "itemIndicator");

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, Accordion.ItemProps>
>(Accordion.Item, "item");

export const ItemTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, Accordion.ItemTriggerProps>
>(Accordion.ItemTrigger, "itemTrigger");

export {
  AccordionContext as Context,
  AccordionItemContext as ItemContext,
} from "@ark-ui/react/accordion";

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from "@ark-ui/react/accordion";
