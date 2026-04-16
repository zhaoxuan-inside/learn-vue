<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

const sw = ref(true)

// 组件挂载
onMounted(() => {
    console.log('mount')
})

// 组件更新
onUpdated(() => {
    console.log('update')
})

// 组件卸载
onUnmounted(() => {
    console.log('unmount')
})
</script>

<template>
    <button @click="sw = !sw">{{ sw }}</button>
</template>

<style></style>
