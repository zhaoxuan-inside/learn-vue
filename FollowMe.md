# 环境准备

使用 npm 安装最新版的 pnpm

```bash
npm install pnpm latest -g
```

创建 vue 项目，前端构建工具使用 vite ， 使用 vue + TypeScript 的预设模板初始化项目

```bash
# pnpm create [build_toos] [path] --tempalte [tempalte]
pnpm create vite basic --template vue-ts
```

安装代码格式管理插件

```bash
pnpm install --save-dev prettier
```

## 插件推荐

1. Version lens
2. Total TypeScript
3. Volar

## 组建说明

###

# 常用命令

## 依赖安装

根据 `package.json` 这个文件中声明的直接依赖，决定需要安装那些包及其兼容版本；
如果存在 `pnpm-lock.yaml` 锁定文件，这个文件记录了项目依赖的精确版本，下载地址，完整性哈希值，以此进行依赖安装，优先使用 `pnpn-lock.yaml`;

```bash
pnpm install
```

注意：安装的依赖存放在`全局存储（store）`中， `node_modules` 中存放这些依赖的连接

## 打包

根据 `package.json` 中的 `build` 脚本，将 `vue` 源码进行编译、压缩、打包成纯静态文件（html、js、css）

```bash
pnpm build
```

注意：打包的结果放在 `dist` 目录下

## 启动前端服务

根据 `package.json` 文件脚本中的 `dev` 脚本名执行对应的命令，一般都是用来启动 web 服务器

```bash
pnpm run dev
```

注意：启动的 web 服务器是一个专为开发环境设计的 HTTP 服务器，已经具备以下功能：

1. 提供静态文件访问
2. 热模块替换（HMR）
3. 路径重写（如 Vue Router 的 history 模式 fallback）
4. 代理 API 请求等

## 服务预览

```bash
pnpm preview
```

与 `pnpm run dev` 不同的是， `pnpm preview` 启动的服务会经过完整的打包过程，对浏览器的响应会快很多

# Node.js 常用命令

## 执行 ts 文件

```bash
# node --experimental-strip-types [script_file_name]
node --experimental-strip-types _003_type_protect.ts
```
