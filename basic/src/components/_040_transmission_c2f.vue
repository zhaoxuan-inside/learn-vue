<template>
    <!-- Component-6. age 变化触发样式展示 -->
    <p>name: {{ name }}, age: {{ age }}</p>
    <!-- Component-1. 输出框更新后鼠标失去焦点出发 handleUpdate  -->
    <input v-model="content" @blur="handleUpdate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ name: string; age: number }>()
const emits = defineEmits<{
    change: []
    update: [value: number | string | undefined]
}>()

const content = ref<number | string>()
function handleUpdate() {
    // Component-2. 触发 emites 的 update 事件，将输入的内容发送给父节点
    emits('update', content.value)
}
</script>

<style></style>
