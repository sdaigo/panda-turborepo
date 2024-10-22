import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/preset-panda'
import { preset, config } from '@six-org/foundation'

export default defineConfig({
  ...config,

  presets: [pandaPreset, preset],

  exclude: [],
  outdir: "."
})