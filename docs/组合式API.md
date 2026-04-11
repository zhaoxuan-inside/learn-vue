> `响应式编程`（Reactive Programming）是一种声明式的编程范式，专注于`数据流`（data streams） 和 `变化传播`（propagation of change）
> 核心思想：程序中的各个组件或变量之间建立`自动的`、`动态`的`依赖关系`，当某个数据源（生产者）的状态发生变化时，所有依赖该数据源的计算或行为（消费者）会被`自动触发并更新`，无需开发者手动编写事件通知或回调链

# 组合式 API（Composition API）
组合式 API 是 Vue3 引入的一种基于`函数的`、`逻辑组合优先`的组件编写方式。允许开发者使用一组`低耦合`、`高可复用`的`响应式 API`（如 ref、reactive、computed、watch、onMounted 等）来按`关注点`（feature）而`非选项类型`来组织组件的逻辑（状态、计算属性、侦听器、生命周期钩子）。

## 核心特征
### 函数式封装
所有响应式状态和逻辑都定义在 `setup() 函数`（或 \<script setup\> 语法糖）内部，通过显式返回暴露给模板。

### 按逻辑关注点聚合
同一个业务功能（如“用户表单”、“实时数据订阅”）涉及的所有`状态`、`计算属性`、`方法`、`生命周期钩子`可以写在相邻位置，而不是分散在 data、methods、mounted 等不同选项中。

### 更灵活的复用机制
可以将一段包含`响应式状态`和`逻辑`的代码抽取为`可组合函数`（Composables），像普通函数一样在多个组件中调用，实现逻辑共享。

### 显式的依赖追踪
响应式依赖（如 ref、computed）的创建和读取在代码层面是显式的（通过 .value 或自动解包），便于 TypeScript 类型`推导`和`调试`。

### 与选项式 API 完全兼容
可以在同一个组件中混合使用两种 API，但推荐保持一致。

# 组合式 API
## ref
### 语法
通过 ref 声明一个指定初始值的对象，对象内容的访问通过`.value`的方式来获取
```vue
// 对象创建
[var_type] [var_name] = ref([init_value])
// 对象访问
[var_name].value
```

### 范例
#### 暴露给本组件
```vue
import { ref } from 'vue'

export default {
  // `setup` 是一个特殊的钩子，专门用于组合式 API。
  setup() {
    const count = ref(0)

    // 将 ref 暴露给模板
    return {
      count
    }
  }
}
```
#### 父子组件通信
`父组件`向`子组件`传递数据：通过 props 把 count 传给子组件
子组件修改父组件的 count：子组件触发一个事件（如 @update:count），父组件监听并修改自己的 count

- Child.vue
```vue
<script setup>
  // 声明 props 和 emits
  const props = defineProps({
    initialValue: {
      type: Number,
      default: 0
    }
  })

  const emit = defineEmits(['update:value'])

  // 内部临时状态（基于 prop 初始化）
  const internalCount = ref(props.initialValue)

  function increment() {
    internalCount.value++
    // 将新值同步给父组件
    emit('update:value', internalCount.value)
  }
</script>

<template>
  <button @click="increment">
    子组件计数: {{ internalCount }}
  </button>
</template>

```

- Parent.vue
```vue
<script setup>
  import { ref } from 'vue'
  import Child from './Child.vue'

  const parentCount = ref(10)

  function handleCountUpdate(newVal) {
    parentCount.value = newVal
    console.log('父组件收到了新值：', newVal)
  }
</script>

<template>
  <Child 
    <!-- v-bind 的简写，表示将父组件中 parentCount 这个变量的值动态绑定到子组件的 initialValue 这个 prop 上。 -->
    <!-- 子组件通过 defineProps 接收到的 initialValue 将等于父组件中 parentCount 的值，并且当 parentCount 发生变化时，这个值会自动同步到子组件的 props.initialValue（单向数据流） -->
    :initialValue="parentCount" 
    <!-- v-on 的简写，表示监听子组件触发的名为 update:value 的自定义事件，当该事件发生时，执行父组件中的 handleCountUpdate 方法 -->
    <!-- 事件处理函数的名字。子组件触发事件时传递的参数，会作为实参传给这个函数。 -->
    @update:value="handleCountUpdate"
  />
  <p>父组件自己的计数：{{ parentCount }}</p>
</template>
```

- 整体协作流程
```text
父组件 parentCount (ref) 
    ↓ (通过 :initialValue 传递)
子组件 initialValue prop
    ↓ (子组件内部可能修改本地副本)
子组件调用 emit('update:value', 新值)
    ↓ (父组件通过 @update:value 监听)
父组件 handleCountUpdate 执行，更新 parentCount
    ↓ (由于 parentCount 变化，重新触发 :initialValue 更新)
子组件 initialValue 再次同步
```