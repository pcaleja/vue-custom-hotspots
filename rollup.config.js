import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import autoprefixer from "autoprefixer";

export default {
  external: ["vue", "core-js"],
  input: "src/base.js",
  output: {
    file: "package/base.esm.js",
    format: "es",
    banner: "/* eslint-disable */"
  },
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
      style: {
        postcssPlugins: [autoprefixer]
      }
    })
  ]
};
