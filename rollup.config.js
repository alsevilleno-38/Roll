import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const config = {
  input: 'src/js/index.js',
  output: {
    dir: 'build',
    format: 'esm'
  },
  plugins: [commonjs(), babel({ babelHelpers: 'bundled' })]
};

export default config;