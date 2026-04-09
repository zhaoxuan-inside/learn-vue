---
文档阅读说明
[] 中括号框起来的内容表示是一个变量，需要通过相应的内容替换
例如：cd [project_path]，表示切换目录到项目路径下
---

# 初始化 VUE 项目

创建 vue 项目

```bash
cd [project_path]
npm create vue@latest
```

## 功能选择

- [ ] JSX 支持
- [x] Router
- [ ] Pinia
- [ ] Vitest
- [ ] 端到端测试
- [x] Linter
- [x] Prettier

# 项目编译

```bash
npm install --verbose
```

# 项目启动

```bash
npm run dev
```

# 名词解释

## JSX

jsx 语法，允许在 js 中编写类似 html 代码，本质上是 `h` 渲染函数的一种语法糖；
`h` 函数，用于创建虚拟 DOM 节点

## Pinia
pinia 是 vue 的官方状态管理库，用来在多个组建之间共享`响应式状态`,让状态变化可以被追踪、调试

## Vitest
vitest 是由 vite 驱动的急速单元测试框架

## Linter
linter 静态分析公司，用来自动扫描代码，找出潜在的错误、风格不一致、代码异味、安全漏洞，并通常能自动修复部分问题

## Prettier
prettier 代码格式话工具，通过解析代码并重新打印，来保证整个项目代码风格一致且美观

## 组合式API
