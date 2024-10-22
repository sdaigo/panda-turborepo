import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        tsconfigPaths({
          root: "./",
        }),
      ],
    });
  },
};

export default config;
