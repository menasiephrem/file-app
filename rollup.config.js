import postcss from "rollup-plugin-postcss";
import typescript from '@rollup/plugin-typescript';
const config = {
    input: "./src/build.js",
    output: {
      file: "./dist/output.js",
      format: "esm",
    },
    external: ["react", "react-dom", "react-simple-tree-menu"],
    plugins: [
        postcss({
          config: {
            path: "./postcss.config.js",
          },
          extensions: [".css"],
          minimize: true,
          inject: {
            insertAt: "top",
          },
        }),
        typescript()
      ],
  };

export default config;  