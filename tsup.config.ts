import { defineConfig, type Options } from 'tsup'
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill'
import pkg from './package.json' assert { type: 'json' }

// Browser-targeted entries get Node's `stream` polyfilled to empty so the
// IIFE/ESM bundles can run in the browser without a stream implementation.
// Node-only plugins (SerialPortAdapter, DfuZip) need the REAL `node:stream`,
// so they get a separate config without the polyfill.
const browserBaseConfig: Options = {
  dts: true,
  env: { VERSION: pkg.version },
  format: ['cjs', 'esm', 'iife'],
  keepNames: true,
  publicDir: 'public',
  splitting: false,
  esbuildPlugins: [
    nodeModulesPolyfillPlugin({
      fallback: 'error',
      globals: {
        Buffer: false,
      },
      modules: {
        'stream/web': 'empty',
        stream: 'empty',
      },
    }),
  ],
}

const nodeBaseConfig: Options = {
  dts: true,
  env: { VERSION: pkg.version },
  format: ['cjs', 'esm', 'iife'],
  keepNames: true,
  publicDir: 'public',
  splitting: false,
  // No node-modules polyfill — these entries are Node-only and need real
  // `node:stream`, `serialport` etc. modules at runtime.
}

export default defineConfig((options): Options[] => [
  {
    ...browserBaseConfig,
    clean: !options.watch,
    minify: !options.watch,
    globalName: 'ChameleonUltraJS',
    entry: ['src/index.ts'],
  },
  {
    // Browser-safe plugins
    ...browserBaseConfig,
    minify: !options.watch,
    entry: [
      'src/Crypto1.ts',
      'src/plugin/Debug.ts',
      'src/plugin/WebbleAdapter.ts',
      'src/plugin/WebserialAdapter.ts',
    ],
  },
  {
    // Node-only plugins (need real `node:stream`).
    // outDir = dist/plugin to preserve the same import path as the original
    // shared-config build (`chameleon-ultra.js/plugin/SerialPortAdapter`).
    ...nodeBaseConfig,
    minify: !options.watch,
    outDir: 'dist/plugin',
    entry: [
      'src/plugin/DfuZip.ts',
      'src/plugin/SerialPortAdapter.ts',
    ],
  },
])
