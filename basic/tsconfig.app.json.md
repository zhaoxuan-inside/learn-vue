# tsconfig.app.json
针对`浏览器`应用代码的 ts `编译`配置文件

## 核心作用
1. 运行在浏览器中的 TypeScript 代码提供正确的编译选项
2. 与 Node.js 环境配置分离
3. 配合 TypeScript 项目引用

# 参数支持
## extends
继承指定 `Vue` 官方提供的共享 TypeScript 配置包中的预设，避免在每个项目中重复编写这些基础配置  

## compilerOptions
编译器配置 
### tsBuildInfoFile
指定 TypeScript 增量编译的缓存文件存储文件  
当启用项目引用（composite: true）或使用 `tsc --build` 时，TS 会将编译状态信息写入该文件，下次编译时只重新编译变化的文件，大幅提升编译速度  

### types
显式引入 Vite 提供的客户端类型定义  
使 TypeScript 能够识别 Vite 特有的全局类型和功能  
可以用来进行代码检查和代码补全   
TypeScript 默认会包含所有在 node_modules/@types/ 下能找到的类型包，指明类型可以避免全局类型污染  

### noUnusedLocals
TypeScript 编译器的一个代码质量检查选项

### noUnusedParameters
TypeScript 编译器的代码质量检查选项，用于检测函数中声明了但从未使用过的参数  

### erasableSyntaxOnly
强制代码只使用那些在编译成 JavaScript 时可以被安全“擦除”的语法  
将 TypeScript 严格视为“带类型的 JavaScript”。开启后，TypeScript 的类型注解、接口等会被移除，而代码的逻辑保持不变；但如果使用了那些会生成额外运行时代码的特性，TypeScript 就会报错

### noFallthroughCasesInSwitch
TypeScript 的一个`代码质量检查`选项，用于防止 `switch` 语句中因忘记写 break 或 return 而导致的`意外穿透`（fallthrough）

## include
指定哪些文件应该被 TypeScript 编译器处理（即参与编译和类型检查）

# 名词解释
## 可擦除语法
指那些在编译成 JavaScript 时可以被完全移除，不产生任何额外运行时代码的语法，纯粹用于提供类型信息

## 不可擦除语法
指那些在编译成 JavaScript 时会生成额外运行时代码的语法，开启 erasableSyntaxOnly 后，使用它们会导致编译错误  