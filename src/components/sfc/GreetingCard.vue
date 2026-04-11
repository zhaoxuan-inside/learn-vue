<template>
  <!-- 模板部分：使用传入的 prop 和自定义事件 -->
  <div class="greeting-card" @click="emitHello">
    <h1>{{ greeting }}, {{ name }}!</h1>
    <button @click.stop="updateCount">Clicked {{ count }} times</button>
  </div>
</template>

<!-- Vue 3 推荐使用 <script setup>，语法更简洁 -->
<script setup lang="ts">
  import { ref } from 'vue'

  // 定义 props
  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })

  // 定义组件可以向父组件抛出的事件
  const emit = defineEmits(['say-hello'])

  // 响应式状态
  const greeting = ref('Hello')
  const count = ref(0)

  // 方法
  function updateCount() {
    count.value++
  }

  function emitHello() {
    emit('say-hello', `Hello from ${props.name}`)
  }
</script>

<!-- 样式部分：scoped 确保样式只作用于当前组件 -->
<style scoped>
  .greeting-card {
    border: 1px solid #42b983;
    border-radius: 8px;
    padding: 16px;
    margin: 10px 0;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .greeting-card:hover {
    background-color: #f9f9f9;
  }

  h1 {
    color: #2c3e50;
  }

  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

</style>
