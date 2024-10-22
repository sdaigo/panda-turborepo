"use client";
// import from internal package
import { Button, Accordion } from "@six-org/components";
import { Box, Flex } from "@six-org/styled-system/jsx";
import { css } from "@six-org/styled-system/css";
import { ark } from "@ark-ui/react";

export function Card() {
  return (
    <Box className={css({ bg: "gray.300" })}>
      <Flex direction="column">
        <Accordion.Root defaultValue={["React"]}>
          {["React", "Solid", "Vue"].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>➡️</Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                {item} is a JavaScript library for building user interfaces.
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <ark.a href="https://google.com">Composed components</ark.a>

        <Button variant="secondary" size="sm">
          Click Me !
        </Button>
      </Flex>
    </Box>
  );
}
