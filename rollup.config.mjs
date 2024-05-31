import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import nodeExternals from "rollup-plugin-node-externals";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import path from "path";

import pkg from "./package.json" assert { type: "json" };
export default [
  {
    input: "./src/main.ts", // 入口文件
    output: [
      {
        // 出口文件
        dir: path.dirname(pkg.module),
        format: "esm", // es模块导出，支持按需加载
        name: pkg.name,
        exports: "named", // 指定导出模式（自动、默认、命名、无）
        preserveModules: true, // 保留模块结构
        preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
      },
    ],
    external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
    plugins: [
      // 自动将dependencies依赖声明为 externals
      nodeExternals({
        devDeps: true,
      }),
      // 处理外部依赖
      resolve(),
      // 支持基于 CommonJS 模块引入
      commonjs(),
      // 支持 typescript，并导出声明文件
      babel({
        exclude: "node_modules/**", // 排除node_modules目录，防止重复处理
        presets: ["@babel/preset-env", "@babel/preset-react"],
        babelHelpers: "runtime",
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
      }),
      typescript({
        outDir: "dist",
        declaration: true,
        declarationDir: "dist",
      }),
    ],
  },
];
