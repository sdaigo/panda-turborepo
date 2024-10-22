import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  // external: ["@six-org/styled-system"],
  ...opts,
}));
