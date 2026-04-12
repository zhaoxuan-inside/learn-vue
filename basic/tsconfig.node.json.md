# tsconfig.node.json 在项目中的作用
1. 为 vite 配置文件提供类型支持；即通过 `tsconfig.node.json` 文件指导 Node.js 对 `vite.config.ts` 的编译
2. 分离环境配置
3. 避免冲突

# 分离环境配置
`前提`，`vue` 使用 `pnpm` 进行包管理， `pnpm` 依赖 `node.js` 作为 `运行时` 执行 `js`，但是 `node.js` 对 `js` 的支持和`浏览器`对 `js` 的支持不一样  
因此需要对 `node.js` 进行单独的配置管理  