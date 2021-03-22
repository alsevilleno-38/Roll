<<<<<<< HEAD
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
=======
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/js/index.js',
  output: {
    file: 'public/js/index.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),

    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
      exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
      // these values can also be regular expressions
      // include: /node_modules/

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false,  // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: true,  // Default: true

      // explicitly specify unresolvable named exports
      // (see below for more details)
      namedExports: { 'react': ['createElement', 'Component' ] },  // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      ignore: [ 'conditional-runtime-dependency' ]
    })
  ]
};

// import cjs from "rollup-plugin-cjs-es";
 
// export default {
//   input: "src/js/index.js",
//   output: {
//     dir: "public/js",
//     format: "cjs"
//   },
//   plugins: [
//     cjs({
//       include: 'node_modules/**',  // Default: undefined
//     })
//   ]
// };
>>>>>>> a2175b4684a6c2749ded74b4cf08d21e053149d7
