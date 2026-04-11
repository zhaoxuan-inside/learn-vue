1. 自动导入 src/components/base 目录下的所有 Vue 组件（无需手动 import 和注册）
2. 生成组件类型声明文件（components.d.ts），提升 IDE 智能提示
3. 对包含 BaseComponent4 的模块单独拆包（base4.js），优化首屏加载

```javascript

// defineConfig 是 Vite 提供的一个辅助函数，用于定义 Vite 配置文件（vite.config.js 或 vite.config.ts）的配置对象。
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    
    // 在 Vite 配置中，vue() 是对 `@vitejs/plugin-vue` 插件的调用，返回一个 Vite 插件对象，用于处理 .vue 文件
    vue(),

    // 1. 指定组件解析的扩展名和深层扫描
    // 默认 unplugin-vue-components 会递归扫描 `dirs` 下的所有 .vue 文件，但如果你需要支持 .jsx、.tsx 或自定义深层目录，可以补充
    Components({
      // 扫描 base 目录下的所有 .vue 文件
      dirs: ['src/components/base'],
      // 生成类型声明文件，增强 IDE 提示（不参与打包）
      dts: true,
      // 生产环境无需额外配置，默认按需同步加载
    }),
  ],
  build: {
    // 生产环境建议开启代码分割
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 将高频但首屏未用的组件可单独拆包（可选）
          if (id.includes('BaseComponent4')) return 'base4'
        }
      }
    }
  }
})
```

# Vite
## defineConfig
1. 提供 TypeScript 类型推断  
当用 defineConfig 包裹配置对象时，Vite 会自动为配置项提供完整的`类型提示`和`校验`（即使是在 .js 文件中，只要编辑器支持 JSDoc 或 TS 服务）。
2. 增强 IDE 智能提示  
在编写配置时，能得到`属性名`、`选项值`、`函数参数`的`自动补全`，减少拼写错误。
3. 更好的配置合并  
Vite 内部会使用 defineConfig 返回的结果进行默认`配置合并`，但直接导出对象也能工作，只是少了类型支持。

## @vitejs/plugin-vue
@vitejs/plugin-vue 是官方开发的 Vue 3 `专用插件`  
简单来说，它是一个`编译引擎`，负责把浏览器无法识别的 `.vue 文件`，编译成浏览器能直接执行的 `JavaScript` 代码

### 核心功能
1. 处理 `.vue` 文件：作为 Vite 的官方插件，它最重要的任务就是`解析`和`转换` `template`、`script` 和 `style` 这三个模块的内容  
2. 处理 `CSS` 与资源：支持 \<style\> 标签内的 `scoped` 私有化样式，也能将 \<img\> 等标签里的`本地路径`转换成可直接使用的模块导入
3. 支持 `HMR` 热更新：与 Vite 深度集成，修改代码后能实现毫秒级的快速热替换，开发体验非常顺畅
4. 提供 `TypeScript` 支持：完美支持在 \<script\> 中写 `TypeScript`，提升代码健壮性