import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['src/XlsFormFiller/index.ts'],  // use your library entry point
  format: ['esm', 'cjs'],       // output both ESM and CommonJS
  dts: true,                    // generate .d.ts files
  tsconfig: 'tsconfig.app.json',  // point tsup to correct tsconfig
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'], // don't bundle peer deps
})