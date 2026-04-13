
# SFC
SFC，单文件组件（Single File Component，简称 SFC）是 Vue 生态中非常核心的一种开发模式。
使用 .vue 作为文件扩展名，允许我们将一个组件的模板、逻辑和样式都写在同一个文件中，从而实现`高内聚`、`可复用`的组件化开发

## 1. \<template\> 模板
- 定义组件的 HTML 结构和数据绑定  
- 必须包含一个根元素（Vue 2），Vue 3 支持多根节点（Fragment）  
- 支持插值表达式 {{ }}、指令 v-bind、v-on 等

## 2. \<script\> 脚本
- 导出组件配置对象（选项式 API）或使用 \<script setup\>（组合式 API）
- 可以导入其他组件、工具函数、样式等
- 定义数据、计算属性、方法、生命周期钩子等

## 3. \<style\> 样式
- 默认是全局样式，会影响整个应用
- 可以通过添加 scoped 属性实现样式隔离（只作用于当前组件） 
- 支持预处理器（如 \<style lang="scss"\>）

# SFC 的核心特性
## 1. Scoped CSS（样式隔离）
通过在 \<style\> 标签上添加 scoped 属性，Vue 会为当前组件的元素添加唯一的数据属性（如 data-v-xxx），并改写 CSS 选择器，使样式只作用于当前组件

```vue
<style scoped>
    /* 只影响当前组件的 .button */
    .button {
        background: green;
    }
    /* 深度选择器：影响子组件内部元素 */
    :deep(.child-class) {
        color: red;
    }
</style>
```

## 2. 支持预处理器
可以使用 lang 属性来启用 Sass、Less、Stylus：

```vue
<style lang="scss" scoped>
    .example {
        .title {
            font-size: 24px;
        }
    }
</style>
```

## 3. 组件复用与注册
`局部注册`：在 \<script setup\> 中直接导入组件，无需手动注册  
`全局注册`：在入口文件（如 main.js）中使用 app.component()

## 4. 热重载（HMR）
开发环境下，修改 `.vue` 文件会保持组件状态的`热更新`，极大提升开发体验

# SFC 的编译原理
`.vue` 文件不能直接在浏览器中运行，需要通过`构建工具`（如 Vite、Webpack + vue-loader）进行编译。

## 编译过程
1. 解析 .vue 文件，分离出 \<template\>、\<script\>、\<style\> 模块
2. 使用 `@vue/compiler-sfc` 将 `template` 编译为 `render 函数`
3. 将 \<script\> 提取为 JavaScript 模块
4. 处理 \<style\> 并注入到页面或生成 CSS 文件
5. 输出一个 Vue 组件对象



# Q&A
## ❓ scoped css 的作用域
在 Vue.js 中，\<style scoped\> 中的 CSS 默认只作用于`当前组件`。通过给组件内的 `DOM` 元素添加一个`唯一的属性`（如 data-v-xxxx），并将 `CSS 选择器`转换为带有该属性的形式来实现作用域隔离

需要注意的细节：  
1. 子组件的根元素：父组件的 scoped 样式会影响到`子组件`的根元素（因为子组件根节点在父组件模板中直接可见）
2. 子组件`内部其他元素`：不会受到影响，除非使用 [深度选择器](#深度选择器)（>>>、/deep/ 或 ::v-deep）强制穿透
3. 全局样式：不加 scoped 的 \<style\> 仍是全局的


# 名词解释
## 深度选择器
深度选择器（也叫样式穿透）不是 HTML 或 CSS 原生支持的选择器，而是 Vue、Angular 等前端框架在 scoped CSS 中提供的一种`编译时语法`，用来让父组件的样式`穿透`作用域限制，影响到子组件内部的元素

## 预处理器
`预处理器`是一个`编译时`的工具，是在代码真正`运行之前`，将一种`特定语法`（如 Sass、Pug、TypeScript）转换成`浏览器`或 `JavaScript 引擎`能直接理解的语言（CSS、HTML、JS）  
`处理时机`：构建阶段（运行 npm run build 或启动开发服务器时）  
`工作方式`：翻译/转换。它读入你写的 .scss 文件，输出标准的 .css 文件；读入 .ts 文件，输出 .js 文件  