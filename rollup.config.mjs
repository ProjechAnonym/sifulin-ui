import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import nodeExternals from "rollup-plugin-node-externals";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import analyzer from "rollup-plugin-analyzer";
import path from "path";
import pkg from "./package.json" assert { type: "json" };
export default [
  {
    treeshake: true,
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
    external: [
      "react",
      "react-dom",
      "typescript",
      "react-aria",
      "@emotion/react",
      "@emotion/styled",
    ],
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
        outDir: "dist/esm",
        declaration: true,
        declarationDir: "dist/esm",
      }),
      terser(),
      analyzer({
        // 可选配置项，例如：
        summaryOnly: true, // 只显示总览，不显示每个模块的详细信息
        limit: 10, // 限制显示的模块数量
        showExports: true, // 显示导出的信息
      }),
    ],
  },
];
