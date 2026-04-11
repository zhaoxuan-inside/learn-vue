# 选项式 API（Options API）
选项式 API 是 Vue2 及 Vue3 中保留的一种基于`配置对象`的组件编写方式。要求开发者将组件的不同部分（数据、方法、计算属性、侦听器、生命周期钩子等）分别写入`预定义的选项`（options） `对象属性`中（如 data、methods、computed、watch、mounted 等），Vue 内部将这些选项合并并实例化组件

## 核心特征
### 结构化分类
强制将组件逻辑按照类型（状态、方法、计算、生命周期）拆分到不同区域，形成清晰但分散的结构

### 隐式响应式
在 data() 中返回的对象会自动被 Vue 包装为`响应式代理`（基于 defineProperty 或 Proxy），且在 methods、computed 中通过 this 访问时自动追踪依赖

### 约定优于配置
遵循固定的选项名称（如 props、data、mounted），开发者只需填充内容，框架负责调用时机

### 内置 mixin 机制
通过 mixins 选项实现逻辑复用（但存在命名冲突和隐式依赖问题）