import { ark } from "@ark-ui/react/factory";
import { styled } from "@six-org/styled-system/jsx";
import { button } from "@six-org/styled-system/recipes";
import type { ComponentProps } from "@six-org/styled-system/types";

export type ButtonProps = ComponentProps<typeof button>;
export const Button = styled(ark.button, button);
