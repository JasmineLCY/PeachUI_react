
import esbuild from "rollup-plugin-esbuild";
import scss from "rollup-plugin-scss";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import dartSass from "sass";
import rollupTypescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel'

// Babel配置
const babelOptions = {
  presets: [["@babel/preset-react", {
    "runtime": "automatic"
  }]],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  exclude: "**/node_modules/**"
}

export default {
  input: "src/lib/index.ts",
  external: ["react", "react-dom"],
  output: [
    {
      globals: {
        react: "React",
        "react-dom": "reactDom",
      },
      name: "PeachUI-react",
      file: "dist/lib/peatch.js",
      format: "umd",
      plugins: [terser()],
    },
    {
      name: "PeachUI-react",
      file: "dist/lib/peatch.esm.js",
      format: "es",
      plugins: [terser()],
    },
  ],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    resolve(),
    commonjs(),
    rollupTypescript(),
    esbuild({
      include: /\.[jt]sx?$/,
      minify: process.env.NODE_ENV === "production",
      target: "es2015",
      jsxDev: true,
      jsx: 'automatic',
    }),
    babel(babelOptions)
  ],
};
