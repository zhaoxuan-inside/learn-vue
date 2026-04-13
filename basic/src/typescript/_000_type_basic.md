# 基本数据类型

String
Number
Boolean
Null
undefined
BigInt
Symbol

## Symbol

创建全局唯一标识符（Unique Identifier）的工具  
与普通字符串最大的不同在于：Symbol() 的每次调用都保证会生成一个`独一无二`的值，且这些值作为属性键时是“隐藏”的，不会出现在常规的遍历中

### 常见应用

1. 依赖注入  
   这是开发者最直观能接触到的场景。provide 和 inject 函数使用 Symbol 作为 Key，可以彻底避免跨模块的命名冲突

2. 内部标记 (Internal Flags) 与魔法值消除  
   2.1. **消除"魔法字符串"**：在 Vue 内部，`VNode` 的类型（如文本、注释节点）使用 Symbol 而非字符串来标识。这不仅使代码更健壮，也方便了源码调试  
   2.2. **创建内部标记**：Vue 3 使用 Symbol 定义了一组内部静态符号常量，如 ReactiveFlags.IS_REACTIVE 和 ReactiveFlags.RAW。其好处在于：
    1. **防止属性名冲突**：开发者几乎不可能意外地创建一个与内部 Symbol 同名的字符串属性，保证了框架内部逻辑的绝对安全。
    2. **隐藏内部细节**：这些 Symbol 属性不会被常规方法遍历，不会“污染”用户层面的对象结构，实现了更好的封装。

3. 其他场景  
   3.1. **元编程 (Metaprogramming)**：Vue 底层利用了 Symbol.iterator 等内置 Symbol 来让对象支持原生迭代协议。  
   3.2. **自定义常量**：在开发复杂组件或状态管理时，用 Symbol 定义 Mutation 或 Event 的类型常量，能有效避免拼写错误

### 注意

Symbol 类型的值无法被 JSON.stringify() `序列化`

```TypeScript
const sym = Symbol('secret');
const name = new String('trueName');
const data = {[name]: 'John', [sym]: 'hiden-value'};
console.log(JSON.stringify(data));
```

# 引用数据类型

Object
Array
Function
Date
RegExp
Error
