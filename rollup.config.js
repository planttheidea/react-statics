import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {uglify} from 'rollup-plugin-uglify';

export default [
  {
    external: ['react', 'react-dom'],
    input: 'src/index.js',
    output: {
      exports: 'named',
      file: 'dist/statics.js',
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      name: 'statics',
      sourcemap: true,
    },
    plugins: [
      commonjs({
        include: 'node_modules/**',
      }),
      resolve({
        main: true,
        module: true,
      }),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
  {
    external: ['react', 'react-dom'],
    input: 'src/index.js',
    output: {
      exports: 'named',
      file: 'dist/statics.min.js',
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      name: 'statics',
    },
    plugins: [
      commonjs({
        include: 'node_modules/**',
      }),
      resolve({
        main: true,
        module: true,
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      uglify(),
    ],
  },
];
