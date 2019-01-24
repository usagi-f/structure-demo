import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: './src/index.ts',
  output: {
    file: pkg.main,
    format: 'esm',
    exports: 'named',
  },
  external: [
    ...Object.keys(pkg.dependencies),
  ],
  plugins: [
    nodeResolve(),
    typescript(),
    babel({
      exclude: 'node_modules/**',
    }),
  ]
};
