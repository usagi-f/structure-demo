import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: './components/index.ts',
  output: {
    file: './static/modules.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    typescript()
  ]
};