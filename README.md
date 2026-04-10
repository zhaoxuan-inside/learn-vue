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

# 其他配置

安装 prettier ，如果不安装则会出现 "Prettier could not be loaded. See previous logs for more information." 报错

```bash
npm install --save-dev prettier
```

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

# VUE 指令

说明：当动参数中的表达式应该是一个字符串，或是 `null`；`null` 说明显示解除绑定；其他非字符串的值会出发警告；

## v-html

## v-bind

## v-if

### 语法

<[label] v-if="[expression]">[content]</[label]>

### 范例

<p v-if="check">Check success<p>
判断 check 表达式的值   
- 结果为`真` ： 渲染插入标签/组建  
- 结果为`假` ： 移除标签/组建

## v-on

### 语法

<[label] v-on:[dom-event]="[work]">[compnent]</[label]

### 范例

<a v-on:click="click_component"></a>
当 `a` 标签被点击时，则调用 vue 的 clieck_component 组件

## 修饰符 Modifiers

modifiers 是修饰符，以 `.` 开头的特殊后缀，表明指令需要以一些特殊的方式被绑定;

### 语法

<[label] v-on:submit.[modifiers-name]="[compnent]"></[label]>

### 范例

<a v-on:submit.prevent="submit_component">Bing</a>

### modifiers 以及 对应的 DOM 标准事件的方法

#### 事件修饰符 (v-on / @)

| 修饰符   | DOM                                    | 作用说明                                                                                   |
| -------- | -------------------------------------- | ------------------------------------------------------------------------------------------ |
| .stop    | event.stopPropagation()                | 调用此方法，阻止事件继续向上冒泡到父元素。                                                 |
| .prevent | event.preventDefault()                 | 调用此方法，阻止事件的默认行为，例如阻止 \<a\> 链接的跳转或表单的提交刷新。                |
| .capture | addEventListener 的 capture: true 选项 | 将事件监听器添加到捕获阶段，使得父级元素的事件先于目标元素触发                             |
| .self    | 检查 event.target === this             | 只有当事件是从该元素本身（而非其子元素）触发时，才会执行处理函数                           |
| .once    | addEventListener 的 once: true 选项    | 事件处理函数最多只会被触发一次。触发后，监听器会自动移除                                   |
| .passive | addEventListener 的 passive: true 选项 | 用于提升滚动性能，特别在移动端。它向浏览器表明你不会在事件处理函数中调用 .preventDefault() |
