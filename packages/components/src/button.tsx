"use client";

import { forwardRef, type ReactNode } from "react";
import { Center } from "@six-org/styled-system/jsx";
import {
  Button as StyledButton,
  type ButtonProps as StyledButtonProps,
} from "./primitive/button";
import { css } from "@six-org/styled-system/css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  appName: string;
} & StyledButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, appName, ...buttonProps }, ref) => {
    return (
      <StyledButton
        onClick={() => alert(`Hello from your ${appName} app!`)}
        type="button"
        ref={ref}
        {...buttonProps}
      >
        <Center gap="2">
          <span className={css({ color: "yellow.500" })}>styled</span>{" "}
          {children}
        </Center>
      </StyledButton>
    );
  },
);

Button.displayName = "Button";
