import { terser } from 'rollup-plugin-terser';

export default {
  input: 'dist/index.js',
  output: [
    {
      format: 'umd',
      file: 'build/build.js',
      indent: '\t',
      name: 'Cortinarious',
    },
    {
      format: 'umd',
      file: 'build/build.min.js',
      name: 'Cortinarious',
      plugins: [
        terser(),
      ],
      sourcemap: true,
    },
  ],
  watch: {
    include: './dist/**/*.js',
  },
};